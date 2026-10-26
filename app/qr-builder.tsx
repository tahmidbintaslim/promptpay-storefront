"use client";

import { useEffect, useId, useState } from "react";
import QRCode from "qrcode";
import { buildPayload, parseTarget } from "@/lib/promptpay";

// Sample order so the preview shows a working QR on first load. The number
// is a placeholder, not a real account.
const SAMPLE = { target: "081-234-5678", amount: "1250.00", order: "#1042" };

type Result = { payload: string } | { error: string };

function build(target: string, amount: string): Result {
  try {
    const parsed = parseTarget(target);
    const trimmed = amount.trim();
    const baht = trimmed === "" ? undefined : Number(trimmed);
    if (baht !== undefined && Number.isNaN(baht)) return { error: "Amount must be a number." };
    const payload = buildPayload(parsed, baht);
    return { payload };
  } catch (e) {
    return { error: e instanceof Error ? e.message : "Could not build the QR code." };
  }
}

export function QrBuilder() {
  const id = useId();
  const [target, setTarget] = useState(SAMPLE.target);
  const [amount, setAmount] = useState(SAMPLE.amount);
  const [svg, setSvg] = useState("");
  const result = build(target, amount);
  const payload = "payload" in result ? result.payload : "";

  useEffect(() => {
    if (!payload) return;
    let live = true;
    QRCode.toString(payload, { type: "svg", margin: 1, errorCorrectionLevel: "M" })
      .then((s) => live && setSvg(s))
      .catch(() => live && setSvg(""));
    return () => {
      live = false;
    };
  }, [payload]);

  return (
    <div className="mt-6 grid gap-6 rounded-2xl border border-slate-200 bg-white p-6 sm:grid-cols-[1fr_auto]">
      <form className="grid content-start gap-4" onSubmit={(e) => e.preventDefault()}>
        <p className="text-sm text-slate-700">
          Sample order {SAMPLE.order}. Change the values to build your own.
        </p>
        <label className="grid gap-1" htmlFor={`${id}-target`}>
          <span className="font-semibold">PromptPay ID</span>
          <span className="text-sm text-slate-700">Mobile number or 13-digit national or tax ID</span>
          <input
            id={`${id}-target`}
            className="rounded-lg border border-slate-300 px-3 py-2 font-mono"
            inputMode="numeric"
            autoComplete="off"
            value={target}
            onChange={(e) => setTarget(e.target.value)}
          />
        </label>
        <label className="grid gap-1" htmlFor={`${id}-amount`}>
          <span className="font-semibold">Order total (THB)</span>
          <span className="text-sm text-slate-700">Leave empty for a QR the payer types an amount into</span>
          <input
            id={`${id}-amount`}
            className="rounded-lg border border-slate-300 px-3 py-2 font-mono"
            inputMode="decimal"
            autoComplete="off"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </label>
        {"error" in result ? (
          <p role="alert" className="text-sm font-semibold text-red-800">
            {result.error}
          </p>
        ) : (
          <div className="grid gap-1">
            <span className="text-sm font-semibold">Payload (EMVCo)</span>
            <code className="break-all rounded-lg bg-slate-100 p-3 text-xs" data-testid="payload">
              {payload}
            </code>
          </div>
        )}
      </form>
      <figure className="grid justify-items-center gap-2">
        <div
          className="h-56 w-56 [&>svg]:h-full [&>svg]:w-full"
          role="img"
          aria-label={payload ? "PromptPay QR code for the payload shown" : "No QR code"}
          dangerouslySetInnerHTML={{ __html: payload ? svg : "" }}
        />
        <figcaption className="max-w-56 text-center text-xs text-slate-700">
          Preview only. Check a real payment in your banking app before relying on it.
        </figcaption>
      </figure>
    </div>
  );
}

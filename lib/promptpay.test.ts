import { test } from "node:test";
import assert from "node:assert/strict";
import { buildPayload, crc16, parseTarget } from "./promptpay.ts";

test("crc16 matches the CRC-16/CCITT-FALSE check value", () => {
  assert.equal(crc16("123456789"), "29B1");
});

test("phone number payload with an amount", () => {
  const payload = buildPayload(parseTarget("081-234-5678"), 1250);
  assert.equal(
    payload.slice(0, -4),
    "000201" +
      "010212" +
      "2937" + "0016A000000677010111" + "01130066812345678" +
      "5303764" +
      "54071250.00" +
      "5802TH" +
      "6304",
  );
  assert.equal(payload.slice(-4), crc16(payload.slice(0, -4)));
});

test("national ID payload without an amount is reusable", () => {
  const payload = buildPayload(parseTarget("1234567890123"));
  assert.ok(payload.startsWith("000201010211"));
  assert.ok(payload.includes("02131234567890123"));
  assert.ok(!payload.includes("5407"));
});

test("rejects bad input", () => {
  assert.throws(() => parseTarget("12345"));
  assert.throws(() => parseTarget("08a2345678"));
  assert.throws(() => buildPayload(parseTarget("0812345678"), 0));
  assert.throws(() => buildPayload(parseTarget("0812345678"), Number.NaN));
});

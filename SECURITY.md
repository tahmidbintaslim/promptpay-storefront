# Security policy

## Supported versions

Only the latest commit on `main`, which is what [promptpay-storefront.vercel.app](https://promptpay-storefront.vercel.app) serves, gets security fixes.

## Reporting a vulnerability

Please do not open a public issue, pull request or discussion for a security problem.

Email **tahmidbintaslimrafi@gmail.com** with:

- a description of the problem and its impact
- the steps or a proof of concept to reproduce it
- the commit you tested, or the URL on the live page

You will get a reply as soon as possible. Once the problem is confirmed, a fix will be prepared and you will be told before it is published. If you would like credit, say so in your report.

## Scope

In scope: the code in this repository (the landing page, the QR preview and `lib/promptpay.ts`) and its deployment at promptpay-storefront.vercel.app.

Out of scope: Vercel itself, third-party packages (report those upstream; Dependabot tracks updates here), and the planned WooCommerce plugin, which is not in this repository.

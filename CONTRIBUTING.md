# Contributing

Thanks for taking the time to help. This repository holds the PromptPay Flow landing page and its in-browser QR preview, so small, focused changes are the easiest to review.

## Before you start

- Read [Known limitations](README.md#known-limitations). Slip upload and slip checks are planned, not built.
- Open an issue first for anything larger than a small fix, so we can agree on the approach.
- For a security problem, do not open an issue. Follow [SECURITY.md](SECURITY.md).

## Set up

You need Node.js 20.9 or later (CI uses Node 22) and npm.

```bash
git clone https://github.com/tahmidbintaslim/promptpay-storefront.git
cd promptpay-storefront
npm ci
npm run dev     # http://localhost:3000
```

The project uses Next.js 16. Its APIs differ from older versions; read the guides in `node_modules/next/dist/docs/` before changing app code (see `AGENTS.md`).

## Checks

CI runs these on every push and pull request to `main`. Run them before you open a pull request:

```bash
npm test        # unit tests for lib/promptpay.ts (Node 22.6+)
npm run lint
npm run build   # also type-checks the project
```

## Pull requests

- One change per pull request, with a short description of what changed and why.
- Add or update a test in `lib/promptpay.test.ts` for any change to the payload or CRC code.
- Update `README.md` when behavior or a limitation changes. Keep the page and docs honest: do not describe a feature that does not work yet.
- Use a [conventional commit](https://www.conventionalcommits.org/) subject, for example `fix(qr): reject amounts with more than two decimals`.

## License

By contributing, you agree that your contribution is licensed under the MIT License, the license of this repository.

## Script to repair and submit a token bridge VAA

1. Install dependencies

```bash
npm install
```

2. Create .env

```bash
cp .env.example .env
vim .env
```

3. Run passing the desired transactions

```bash
npx tsx repair-and-submit.ts '0x3ad91ec530187bb2ce3b394d587878cd1e9e037a97e51fbc34af89b2e0719367'
```

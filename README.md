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
npx tsx repair-and-submit.ts '0x3ad91ec530187bb2ce3b394d587878cd1e9e037a97e51fbc34af89b2e0719367','0x3c989a6bb40dcd4719453fbe7bbac420f23962c900ae75793124fc9cc614368c','0x5bc2a92f713d8fa99bf3225ba30bb0f8cd375436cea9852d0f345d966dcca400','0xc43744bd3730808421df1703a2a1a6e2f7218290f1b9748825e529156689a684','0x98524be4dcf8a485e9a155d823fa07829aebf68365285ccfc26a9d48e8476d57'
```

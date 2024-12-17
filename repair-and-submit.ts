/*
based on: https://github.com/wormhole-foundation/wormhole-sdk-ts/blob/9105de290c91babbf8ad031bd89cc75ee38739c8/examples/src/repairVaa.ts
example execution:

```bash
npm install @wormhole-foundation/sdk tsx
npx tsx src/repair.ts '0x3ad91ec530187bb2ce3b394d587878cd1e9e037a97e51fbc34af89b2e0719367','0x3c989a6bb40dcd4719453fbe7bbac420f23962c900ae75793124fc9cc614368c','0x5bc2a92f713d8fa99bf3225ba30bb0f8cd375436cea9852d0f345d966dcca400','0xc43744bd3730808421df1703a2a1a6e2f7218290f1b9748825e529156689a684','0x98524be4dcf8a485e9a155d823fa07829aebf68365285ccfc26a9d48e8476d57','0x8edd3b78dbaab790ff1e2ce6525014e0e332f5fbbc4699d2638e874cf4ef00e4','0x5bd504ac240ddf51894bf92f5a696a4761ffa104eb7261c506e8180d9fcff65c','0xfbff1c99f8d09098f36a3867bf362cde2201a896c1e4f6b45889348364aa014d','0xd1bf5261f9ab90ba8010e1b9c65dfa5c393a9ba333e8f6351da3a80d714bcd4d','0xdc64bc09019e0afc7db2a98a0da5c4584fc707666ee096dddeb1a395161ffab6','0xa07ae7ee77f250caa0a5791bcd9bb2a336752ceb83fa02729ff9b6a1e0f6fd96','0x07e1ad9a99c3edd10dd0761cc088d04259fdabf0a28fc3321ec261490ec1219e','0xb132e740f8ea6410bcc8531460a88e146a978587559f56ee8e1b9d215a0f611d','0xbbb4db98f7c5065604ab2fa4cf42e4077c395152648b334c40d5dd3da05bcd6a','0x515049725ad25e84482ad35561306382153501aaf1568b2003376b55003a496b','0xe9f1ea50f200fa98be8d429d0e8edbe4caf93a074ea267a4cd3befd4bc3818b2','0x045f5b0ad33d927304de230eb7d4a6b36e7aab7d8da98a6d8328b4de93209119','0x490b97065cf252d4f8a2ec334737c01f653fafddd2f59b2234470428a525cc36','0xbed25bc82052d23e914e863c6e371b9ffaf5249ce908f07a494fd8ed6a0f030f','0xb0d04c0184ca2d6ccef498de260cd49ae9ccd069c3b0dec0819bed30807ce0f3','0xf42d42382d973d88665a8df11c0cfd750c95ae8087ee58f734e8bbdd4eaac481','0xd358c0af442f30276f0cbd701b89df813aa0a26afabea8e43c9d7e2d7cd82f44','0x2fb8cc9fa63286555134c7790c3b0b2242f9b412f448040e31773e03917fffa6','0xe49d827630414a43da491da9b3df9bda58c2f1f371a78f1ea0d35ddf88a836bf','0xed52694908abc8e4db750ddc0389440bd76fae591511b4a56788e761ccb8a428','0xef8ad953b738a941779be6dc938587522606f8d74f43239feade530b29c9c616','0x0c3f8e020fcd3b06124b553d324ac4d58d8b7bdf5148925d2e6f0da9b1e4bd6b','0xdd58ab97f33ac2850caaecc41ed2edb4f24fdc92f204213814dc68711e33af19','0xa5192ee2662e7d643023a49ff6c2d6e7939a47f6f110549f63dd3ee4225b781c','0x2aa9deb6b08e11b882e69940b330caa826b2ff8afb62e264361ff2be0a4656f6','0xf0dffb1081f4faf11e15b9f62ba0e947951853531d9e51e9f26437e9ed556700','0xbdd16bd9b8b73ab814c4a8346c34b7694a7d812ae2af8a2b2f28d672f48444b9','0x74fd3d67a925c4c06bf0543dab97b45eb6d240c778ad8f5545acbfe157199b22','0x4654fbac79fc927217ff9a78525628578bd886c2c01c91e414b331ca9bbbc827','0xa0ff077fa9824f02f19fa968ded80934deb932ef2c3d7bfad4315f992d19ec34','0x44fcbea5404e5d420c8ae81116d23fcd229017e8f80ec5a509376730f6642feb','0x758ec1d3d9e7842534c87164877ca4e157565e254e5942e9cac48546eac9f840','0x094b3a5292f8c990f43f649a3a485b7a271087e74272b02acc78fdd062f7f61f','0xbdcd5e06cb5dccc6134dad55b31bb9555b4c40ea8f9aa5377afed3fba1b5b444','0xc579caba2b181c42b76af29eac539ffa1df835be5c591b00de04b24c5e00ca12','0x4571b60a4a7eb8a5779a876650d92008d3796c697973dde93b20cf4bad4b2d97','0x459bcf9711910a2a26fe3af46f7641d9067d3005e33744833705a26c57f8bdc4','0x7ca3ee16a40d02f7c0a9d80ccd4ec66882d2432d1933d8ec007c114818bd3c06','0xd38c49d641c3a033b5c1293080deca8be25d388e8506d06bb9ad03eb23b71db4','0xe8954b9dcb7a74868fedb326657c52b37a153aff5d81cb3715a4f5b67f100879','0xc18fcce0819b97c3eaf5a67af032bf762c8cbbcd33b84733f16ddfc6500f7307','0x9d30a21f7b8bcfd192431bf67e1a66d1e34eedb3851dae4b30978f8a5917e8f9','0xada0dddc7b5c791ba1e72d1cc848d0512ec463cb4a9538f2d89667c2dc3d03be','0x67aec49608338db3964c9258680bc1927719b91db8712492204cf312a760a42a','0x8900f58c16360e33f6ec6cb3f6f5572319ea5f48d0fa9c181e86fee70434827c','0x6cae20860a11dc663d26855ba51b2f749e31147de08e869bbb450c2202cc0038','0x34edf31b06f7a8695ac359ba8907a71478ae404402f0989866c236bc91210ad2','0x3486d49ad9a42dd58bf5a19d1e9e88e1d9d1866fe5700e2b6350dfb4ef7d5143','0xe822b5ebb80af1ca25551dab5b636531384e6014c150f4aaea439c6a4d063606','0x3c6189777db23a280a8ec97aeeccd04de5974b679e0bcf56821f9086cf8ee538','0xc8a1841834c7aa5c882436ff04a63d6a88bdc51515e9bd57fb2acf718e5182d4','0xec97ce041d1b1bea9bc5f42532c05d8a66cdda83042e604e4044dfcb896d5e92','0x5a21b8d5e90705b6c67167e072189129df509bb0647d36070e6e1f6fb99b556a','0xa9537b1826145fc1a03bccb147bb870ce2e21db4ea0452092ac76036e68a4778','0xc00c0535873c6862369b17208dcc145b19589e4dab6626c69a36755f8eb687ca','0xd622554eca58d1ec3409e88d6ef9e06dca49e58e68bb78140a777ca79dbc5792','0x16f0fd2cd470c68f5207a503e12dcd40573722849323d1add52f0bea8af530f6','0x1b3ecae903ef31ea90ed20f5a435085037872b89a56b4dcc0ce868165a19202e','0xda00600a501153b78f9d732620a3ac45b314d5c0812ba30b1cb2c22fc076ed71','0x5281aa370ef0d68d6cc6c4780a723e1a9c9b4e228fa424762a491cc4c758ba4f','0xed0130f1c9965800024846ba6f3092f2f5f3740d5b98fd43ac63f5fbe9251b13','0x0238e880e0174e98b88d8fd9f28fdda340016902e1b6dd6dc37b098b01a45273','0x39ad98491dedf0ea503e012f451164821c33834c663e3681c3f10e9d7a0f5c66','0x48799402f50845678e6c87336cc771683a9915fa2df6ab230ad1d099ea6aa16a','0xfe484e62fd0866cc11814819bc07d8d178eafffce031e0b6eebc160afa136998','0xfb8dd3869567407b5ce19ff09590f8818bd940c4387f137872256ec2e435255a','0xc6eb3dedd7fa673afd92ffd31f72ebf905a6461f28843435c39ffc015f4595df','0x6ba88e1d430a54b60834b1e61a988099849830915d6556d69c6d697dab50085b','0x91fa2ca14b00008a017082c45c25bb6064cb07a076ffc5c6fc28e14b7070436d','0xfcac17f9da8a703ecc89a6b8a17abe0e5b382a7af0273830d97ad06a8588c65c','0xce669609fa6d6020627575711312018781b56ffec5e0ab277276a5486c63c0db','0x8f36cc63964f3d558b5d199213cc9a952b19df1dba43e5a4cd567ece5fd259f3','0xdfe611288d59e9356d6f925dbdab4fdee81ba741d35179fa0c1f1407a5f4e08b'
```
*/

import type { VAA, Wormhole, WormholeConfigOverrides, WormholeCore } from "@wormhole-foundation/sdk";
import { SignatureUtils, deserialize, encoding, keccak256, serialize, signSendWait, wormhole } from "@wormhole-foundation/sdk";
import evm from "@wormhole-foundation/sdk/evm";
import solana from "@wormhole-foundation/sdk/solana";
import { getSigner } from "./helpers/helpers";
import "dotenv/config";

function repairVaa(vaa: VAA<"Uint8Array">, guardianSetData: WormholeCore.GuardianSet) {
    if (vaa.guardianSet === guardianSetData.index) return serialize(vaa);

    // Rehash the vaa digest since signatures are based on double hash
    const digest = keccak256(vaa.hash);

    // Filter any invalid signatures
    const currentGuardianSet = guardianSetData.keys.map((key) => encoding.hex.decode(key));
    const validSignatures = vaa.signatures.filter((signature) => {
        try {
            return !encoding.bytes.equals(
                currentGuardianSet[signature.guardianIndex]!,
                SignatureUtils.recover(signature.signature, digest),
            );
        } catch (_) { }
        return false;
    });

    // re-construct vaa with signatures that remain
    const minNumSignatures = Math.floor((2.0 * currentGuardianSet.length) / 3.0) + 1;
    if (validSignatures.length < minNumSignatures)
        throw new Error(`There are not enough valid signatures to repair.`);

    // @ts-ignore -- readonly
    vaa.signatures = validSignatures;
    // @ts-ignore -- readonly
    vaa.guardianSet = guardianSetData.index;

    return serialize(vaa);
}

async function getVaaFixer(wh: Wormhole) {
    const eth = wh.getChain("Ethereum");

    const core = await eth.getWormholeCore();
    const index = await core.getGuardianSetIndex();
    const gset = await core.getGuardianSet(index);

    return async (txHash: string) => {
        const vaa = await wh.getVaa(txHash, "Uint8Array");
        const before = serialize(vaa!);
        const after = repairVaa(vaa!, gset);
        const repaired = !encoding.bytes.equals(before, after);
        return {
            txHash,
            repaired,
            vaa: repaired ? encoding.hex.encode(after) : encoding.hex.encode(before),
        }
    }
}

const getOverrides = (): WormholeConfigOverrides<"Mainnet"> => {
    return {
        chains: {
            ...(process.env.ETH_RPC_URL ? { Ethereum: { rpc: process.env.ETH_RPC_URL } } : {}),
            ...(process.env.SOL_RPC_URL ? { Solana: { rpc: process.env.SOL_RPC_URL } } : {}),
        }
    }
}

const txs = process.argv.slice(2).pop()?.split(",") || [];

(async () => {
    const wh = await wormhole("Mainnet", [evm, solana], getOverrides());
    const fixVaa = await getVaaFixer(wh);

    while (txs.length > 0) {
        const { txHash, vaa, repaired } = await fixVaa(txs.pop()!);
        if (!repaired) {
            console.log(`${txHash} - not repaired`);
            continue;
        }

        const parsed = await deserialize("TokenBridge:Transfer", vaa);
        const destChain = wh.getChain(parsed.payload.to.chain);
        const tbr = await destChain.getTokenBridge();

        const signer = await getSigner(destChain);

        const submitTxs = await tbr.redeem(signer.address.address, parsed);

        // let c = 0;
        // for await (const tx of submitTxs) {
        //     c++;
        // }
        // console.log(`${txHash} - signer ${signer.address.address.toString()} prepared ${c} txs`);
        const ids = await signSendWait(destChain, submitTxs, signer.signer);
        console.log(`Redeemed ${txHash} - txs [${ids.map(id => id.txid).join(", ")}]`);
    }
})();

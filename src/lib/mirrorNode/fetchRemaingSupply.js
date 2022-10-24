// fetch remaining supply data
const token = '48509709'
const treasury = '48509709'
export default async () => {
    const res = await fetch(`https://testnet.mirrornode.hedera.com/api/v1/accounts/${treasury}/nfts?token.id=${token}`)
    const data = await res.json()
    const treasuryBalance = data.nfts.length
    return treasuryBalance
}

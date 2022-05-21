

export async function getDataNfts({ setNftsResults, searchNFTs, options }) {
    const responseNfts = await searchNFTs(options);
    console.log('response get Data', responseNfts);
    console.log(options, 'options');
    await setNftsResults(responseNfts.result);
}

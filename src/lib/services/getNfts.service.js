

export async function getDataNfts({ initialGetNFTs, SucessGetNFTs, ErorrGetNFTs, searchNFTs, options, }) {
    try {
        initialGetNFTs();

        const { result } = await searchNFTs(options);

        SucessGetNFTs(
            result,
        )

    } catch (err) {

        ErorrGetNFTs({
            err,
        })

    }

}

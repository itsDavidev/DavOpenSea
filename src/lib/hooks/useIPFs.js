/**
 * 
 * @param {string} url 
 * @returns 
 */

// add is video and add is img default
function useIPFs(url) {
    // const isImgIPfs = url.includes("ipfs://");
    if (!url) {
        return url;
    }
    if (url.startsWith("ipfs://ipfs")) return url.replace("ipfs://ipfs", "https://gateway.ipfs.io/ipfs");

    // if(isImgIPfs.startWith("ipfs://")) return url.replace("ipfs://", "https://gateway,ipfs.io/ipns");

    if (url.startsWith("ipfs://")) return url.replace("ipfs://", "https://gateway.ipfs.io/ipfs/");

    return url.replace("ipfs://", "https://gateway.ipfs.io/ipfs/");
}

export default useIPFs;
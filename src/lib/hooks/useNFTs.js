import { useEffect, useState } from "react";
import { useMoralis, useMoralisWeb3Api } from "react-moralis";
import { _OPTIONS_MORALIS_START } from "../../constants/optionsMoralis.const";
import { getDataNfts } from "../services/getNfts.service";

export function useNFTs() {
    const { Moralis } = useMoralis();
    const Web3Api = useMoralisWeb3Api();

    const [NFTs, setNFTs] = useState({
        results: [],
        options: {
            q: 'Pancake',
            chain: 'ETH',
            filter: 'name',
            limit: 10,
        },
        loading: false,
        Error: null,
    });

    // const [nfts, setNFTs] = useState([]);
    // const [limit, setLimit] = useState(10);
    // const [query, setQuery] = useState('pancake');
    // const [exchanin, setExchain] = useState('ETH');
    // const [filter, setFilter] = useState('name');

    const setNftsResults = results =>
        setNFTs(prev => ({
            ...prev,
            results,
        }));

    const setNFTsLimit = limit =>
        setNFTs(prev => ({
            ...prev,
            options: {
                ...prev.options,
                limit,
            },
        }));

    useEffect(() => {
        Moralis.start(_OPTIONS_MORALIS_START);
    });

    useEffect(() => {
        getDataNfts({
            setNftsResults,
            searchNFTs: Web3Api.token.searchNFTs,
            options: NFTs.options,
        });
    }, [NFTs.limit, NFTs.options]);

    return {
        NFTs,
        setNFTsLimit,
    };
}
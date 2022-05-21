import { useEffect, useReducer, useState } from "react";
import { useMoralis, useMoralisWeb3Api } from "react-moralis";
import { _OPTIONS_MORALIS_START } from "../../constants/optionsMoralis.const";
import NFTS__ACTIONS from "../actions/Nfts.actions";
import NTFsReducer from "../reducers/nfts.reducer";
import { getDataNfts } from "../services/getNfts.service";


export const initialState = {
    results: [],
    loading: false,
    Error: null,
    options: {
        q: "Pancakes",
        chain: "ETH",
        limit: 10,
        filter: "name"
    }
}

export function useNFTs() {
    const { Moralis } = useMoralis();
    const Web3Api = useMoralisWeb3Api();

    // const [NFTs, setNFTs] = useState({ //     results: [], //     options: { //         q: 'Dragons', //         chain: 'ETH', //         filter: 'name', //         limit: 10, //     }, //     loading: false, //     Error: null, // });

    const [NFTs, setNFTs] = useReducer(NTFsReducer, initialState);

    // const setNFTsLimit = limit =>
    //     setNFTs(prev => ({
    //         ...prev,
    //         options: {
    //             ...prev.options,
    //             limit,
    //         },
    // }));

    const setNFTsLimit = limit => setNFTs({
        type: NFTS__ACTIONS._SET_LIMIT_NFT,
        args: {
            limit,
        }
    })

    // const initialGetNfts = () => setNFTs(prev => ({
    //     ...prev,
    //     loading: true,
    //     Error: null,
    // }))

    const initialGetNFTs = () => setNFTs({
        type: NFTS__ACTIONS._INITIAL_GET_NFT_DATA,
    })

    // const SucessGetNfts = ({ result, }) => setNFTs(prev => ({
    //     ...prev,
    //     results: result,
    //     loading: false,
    // }))

    const SucessGetNFTs = result => {
        console.log("hook sucess", result)
        setNFTs({
            type: NFTS__ACTIONS._SUCESS_GET_NFT_DATA,
            args: {
                results: result,
            }
        })
    }

    // const ErorrGetNfts = ({ err }) => setNFTs(prev => ({
    //     ...prev,
    //     loading: false,
    //     Error: err,
    // }))

    const ErorrGetNFTs = err => setNFTs({
        type: NFTS__ACTIONS._FAILURE_GET_NFT_DATA,
        args: {
            err
        }
    })


    useEffect(() => {
        Moralis.start(_OPTIONS_MORALIS_START);
    });

    useEffect(() => {
        getDataNfts({
            initialGetNFTs,
            SucessGetNFTs,
            ErorrGetNFTs,
            searchNFTs: Web3Api.token.searchNFTs,
            options: NFTs.options,
        });
    }, [NFTs.options.limit, NFTs.options.q, NFTs.options.chain, NFTs.options.filter]);

    return {
        NFTs,
        setNFTsLimit,
    };

}


/*

*/
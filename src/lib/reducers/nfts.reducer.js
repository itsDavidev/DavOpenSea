import NFTS__ACTIONS from "../actions/Nfts.actions";
import { initialState } from "../hooks/useNFTs";
const NTFsReducer = (state = initialState, action) => {
    switch (action.type) {
        case NFTS__ACTIONS._INITIAL_GET_NFT_DATA: {
            return {
                ...state,
                loading: true,
                Error: null,
            }
        }
        case NFTS__ACTIONS._SUCESS_GET_NFT_DATA: {
            const { results } = action.args;
            return {
                ...state,
                results,
                loading: false,
            }
        }
        case NFTS__ACTIONS._FAILURE_GET_NFT_DATA: {
            const { err } = action.args;
            return {
                ...state,
                loading: false,
                Error: err,
            }
        }
        case NFTS__ACTIONS._SET_LIMIT_NFT: {
            const { limit } = action.args;
            return {
                ...state,
                options: {
                    ...state.options,
                    limit,
                }
            }
        }
        case NFTS__ACTIONS.
            default: {
                throw new Error(`Unhandled action type`);
            }
    }
}
export default NTFsReducer
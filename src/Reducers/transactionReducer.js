/**액션들을 얹은 리듀서 */
import { SET_TRANSACTION_LIST, LOADING_TRANSACTION_LIST,
SET_ERROR } from "../Actions/transactionActions";

/**redux-pack이용 */
import {handle} from "redux-pack";
import { FETCH_TRANSACTION_LIST } from "../Actions/transactionPackActions";

const initState={
    ids:[],
    entities: {},
    loading: false,
    hasError: false,
};

export default (state = initState, action) => {
    const {type, payload} = action;

    switch(type) {
        
        case SET_ERROR:{
            const {errorMessage} = payload;
            return {
                ...state,
                loading: false,
                hasError: true,
                errorMessage,
            }
        }
        case LOADING_TRANSACTION_LIST:{
            return {
                ...state,
                loading: true,
                hasError: false
            };
        }
        case SET_TRANSACTION_LIST:{
            const ids = payload.map(entity => entity['id']); //transactions들의 id값들을 배열화
            const entities = payload.reduce((finalEntities, entity) => ({
                ...finalEntities,
                [entity['id']]: entity,
            }), {}); //entity[id](transactions의 각 요소들의 id값)를 키로(순서로 설정) 설정하여 객체로 저장

            return {...state, ids, entities, loading: false, hasError: false};
        }
        
        /**redux-pack */
        case FETCH_TRANSACTION_LIST: {
            return handle(state, action, {
                /**case LOADING_TRANSACTION_LIST */
                start: prevState => ({
                    ...prevState,
                    loading: true,
                    hasError: false,
                }),
                /**case SET_TRANSACTION_LIST */
                success: prevState => {
                    const {data} = payload;
                    const ids = data.map(entity => entity['id']);
                    const entities = data.reduce(
                        (finalEntities, entity) => ({
                            ...finalEntities,
                            [entity['id']]: entity
                        }),
                        {}
                    );
                    return {
                        ...prevState,
                        ids,
                        entities,
                        loading: false,
                        hasError: false,
                    };
                },
                /**case SET_ERROR */
                failure: prevState => {
                    const {errorMessage} = payload.response.data;
                    return {
                        ...prevState,
                        loading: false,
                        hasError: true,
                        errorMessage,
                    };
                }
            });
        }
        default:
            return state;
    }
}
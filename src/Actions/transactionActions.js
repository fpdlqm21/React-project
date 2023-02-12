/**거래목록을 불러오는 액션함수와 거래처리과정을 보여주는 액션함수 */
import Api from "../Api";
import { showMessage } from "./notificationAction";

export const SET_TRANSACTION_LIST = "transaction/SET_TRANSACTION_LIST";
export const TRADE_COMPLETE = "transaction/TRADE_COMPLETE";
export const LOADING_TRANSACTION_LIST = "transaction/LOADING_TRANSACTION_LIST";
export const SET_ERROR = "transaction/SET_ERROR";

//에러 액션함수
export function setError(errorMessage){
    return {
        type: SET_ERROR,
        payload: {errorMessage}
    };
}

//서버에서 데이터를 받아오거나 처리할 때 지연상태를 알려주는 액션함수
export function loading(){
    return {
        type:LOADING_TRANSACTION_LIST
    };
}

//거래 완료상태 액션함수
export function tradeComplete(){
    return {type: TRADE_COMPLETE};
}

export function setTransactionList(transactions){
    return {
        type: SET_TRANSACTION_LIST,
        payload: transactions,
    };
}

//서버에 거래목록을 요청하는 액션 함수
export function requestTransactionList(params){
    return (dispatch) =>{
        dispatch(loading());
        Api.get('/transactions', {params}).then(
            ({data}) => dispatch(setTransactionList(data)),
            //서버에서 데이터를 가져오는 과정에서 에러가 발생하면 실행
            error => {
                dispatch(setError(error.response.data.errorMessage))
            },
            
        );
    }
}
/**구매 액션함수 */
export function buyTransaction(Id, onComplete){
    return dispatch => 
        Api.delete(`/transactions/{Id}`).then(
            ({data}) => {
                dispatch(tradeComplete());
                onComplete();
            }
        )
}

//판매물건 추가 액션함수
export function createTransaction(data, onComplete){
    return dispatch => 
        Api.post('/transactions', data).then(
            ({data}) => {
                dispatch(tradeComplete());
                onComplete();
            },
        )
}
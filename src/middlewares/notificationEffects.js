/**액션의 type을 감시하여 액션을 추가하도록 하는 미들웨어 */
//액션의 타입이 SET_ERROR일 경우 showMEssage액션 함수를 실행하도록 감시
import { SET_ERROR } from "../Actions/transactionActions";
import { SHOW_NOTIFICATION, showMessage, hideMessage } from "../Actions/notificationAction";
import { debounce } from "../debounce";
 /**redux-pack */
import {KEY, LIFECYCLE} from "redux-pack";
import { FETCH_TRANSACTION_LIST } from "../Actions/transactionPackActions";

export default store => nextRunner => action => {
    const {type, payload, meta} = action;

    if(type === SET_ERROR){
        const {errorMessage} = payload;
        store.dispatch(showMessage(errorMessage, true));
    }
    //KEY.LIFECYCLE에는 start, success, failure, finish 정보 들어있음
    else if (type === FETCH_TRANSACTION_LIST && meta[KEY.LIFECYCLE] === LIFECYCLE.FAILURE){
        const {errorMessage} = payload.response.data || {};
        store.dispatch(showMessage(errorMessage, true));
    }
    else if(type === FETCH_TRANSACTION_LIST && meta[KEY.LIFECYCLE] === LIFECYCLE.SUCCESS){
        const message = '거래 목록을 최신 정보로 업데이트했습니다.';
        store.dispatch(showMessage(message));
    }
    //알림 메시지가 4초 후에 사라지도록
    else if (type === SHOW_NOTIFICATION){
        const hide = () => store.dispatch(hideMessage());
        setTimeout(hide, 4000);
        debounce(hide);
    }
    return nextRunner(action);
}
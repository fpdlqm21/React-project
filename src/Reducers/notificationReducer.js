/**알림에 대한 액션을 얹은 리듀서 */
import { HIDE_NOTIFIACTION, SHOW_NOTIFICATION } from "../Actions/notificationAction";

const initState ={
    message: '',
    warning: false,
    showMessage: false,
};

export default (state = initState, action) => {
    const {type, payload} = action;

    switch(type){
        case SHOW_NOTIFICATION: {
            const {message, warning} = payload;
            return {
                ...state,
                showMessage: true,
                message,
                warning,
            };
        }
        case HIDE_NOTIFIACTION: {
            return {
                ...state,
                messgae: '',
                showMessage: false,
            }
        }
        default:
            return state;
    }
}
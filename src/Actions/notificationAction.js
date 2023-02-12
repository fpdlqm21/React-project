/**알림에 대한 액션함수들 */
export const SHOW_NOTIFICATION = "notification/SHOW_NOTIFICATION";
export const HIDE_NOTIFIACTION = "notificaction/HIDE_NOTIFICATION";

//알림 메시지를 보여주는 액션함수
export function showMessage(message, warning=false){
    return {
        type: SHOW_NOTIFICATION,
        payload: {message, warning}
    };
}

//알림 메시지를 숨기는 액션함수
export function hideMessage(){
    return {
        type: HIDE_NOTIFIACTION
    };
}
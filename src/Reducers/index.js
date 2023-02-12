/**서로 다른 Reducer들을 모아서 설정 */
import transactions from "./transactionReducer";
import notification from "./notificationReducer";

export default {
    transactions,
    notification,
};
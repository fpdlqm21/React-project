/**Redux Store 설정 */
import {createStore, combineReducers, applyMiddleware} from "redux"; //store생성함수, reducer들을 합치는 함수
import {composeWithDevTools} from "redux-devtools-extension"; //크롬의 리덕스 확장 프로그램
import reducers from "../Reducers"; //모아둔 reducer들을 가져옴
import thunk from "redux-thunk"; //비동기 처리를 위한 미들웨어 action을 객체에서 함수로 변환해줌
import transactionEffect from "../middlewares/transactionEffect";
import { middleware as reduxPackMiddleware} from "redux-pack";
import notificationEffects from "../middlewares/notificationEffects";
//setError 타입일 때 알림 메시지를 보여주는 액션추가 미들웨어

export default initState => createStore(
    combineReducers(reducers),
    initState,
    composeWithDevTools(
        applyMiddleware(thunk, reduxPackMiddleware,notificationEffects, transactionEffect)
    ),
);
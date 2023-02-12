/**CONTENT_MAP의 키로 모달 창 컴포넌트 목록 ModalProvider(모달생성 함수)에 전달 */
import ModalProvider from "./create";
import RegisterPage from "../components/RegisterPage";
// import AddProductPage from "../components/AddProductPage";
import AddProductPageContainer from "../containers/main/AddProductPageContainer";
import TradeProductPage from "../components/TradeProductPage";

export const TRADE_PRODUCT_MODAL = "tradeproduct_modal";
export const CREATE_MEMBER_MODAL = "createmember_modal";
export const ADD_PRODUCT_MODAL = "addproduct_modal";

const CONTENT_MAP = {
  [CREATE_MEMBER_MODAL]: RegisterPage,
  [ADD_PRODUCT_MODAL]: AddProductPageContainer,
  // [ADD_PRODUCT_MODAL]: AddProductPage,
  [TRADE_PRODUCT_MODAL]: TradeProductPage,
};

export default ModalProvider(CONTENT_MAP);

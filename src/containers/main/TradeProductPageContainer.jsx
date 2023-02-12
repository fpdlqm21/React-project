import { connect } from "react-redux";
import TradeProductPage from "../../components/TradeProductPage";
import { buyTransaction } from "../../Actions/transactionActions";

export default connect(null, { buyTransaction })(TradeProductPage);

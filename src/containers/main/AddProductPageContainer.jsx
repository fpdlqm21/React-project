import { connect } from "react-redux";
import AddProductPage from "../../components/AddProductPage";
import { createTransaction } from "../../Actions/transactionActions";

export default connect(null, { createTransaction })(AddProductPage);

/**TransactionList DataCompnent */
import { connect } from "react-redux";
import TransactionList from "../../components/TransactionList";
import { requestTransactionList } from "../../Actions/transactionPackActions";

//store에서 데이터를 추출하여 객체로 반환하는 함수
const mapStatetoProps = (state) => {
  const { ids, entities, loading } = state.transactions;
  const transactions = ids.map((id) => entities[id]);

  return { transactions, loading };
};

//변경요청함수
const mapDispatchToProps = {
  requestTransactionList,
};

export default connect(mapStatetoProps, mapDispatchToProps)(TransactionList);

/**SearchFilter와 연결된 DataComponent(SearchFilter의 검색 값 -> Form의 컨텍스트 데이터 값 변경
 * -> Redux Store의 데이터 값을 변경시켜 검색결과를 화면에 표시하도록) */
import { connect } from "react-redux";
import SearchFilter from "../../components/SearchFilter";
import { requestTransactionList } from "../../Actions/transactionPackActions";

export default connect(null, { requestTransactionList })(SearchFilter);

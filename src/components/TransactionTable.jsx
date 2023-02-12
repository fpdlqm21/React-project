/**물건 판매 목록 테이블 컴포넌트 */
import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Consumer as Modal } from "../Modal/context";
import { TRADE_PRODUCT_MODAL } from "../Modal/ModalProviderWithKey";
import Api from "../Api";

import Form from "./Form";
import Button from "./Button";
import Table from "./Table";
import TableHead from "./TableHead";
import TableBody from "./TableBody";
import TableRow from "./TableRow";
import TableCell from "./TableCell";
import Text from "./Text";
import Spacing from "./Spacing";
import withLoading from "./withLoading";

const LoadingMessage = (
  <Spacing vertical={4} horizontal={2}>
    <Text large>데이터를 불러들이고 있습니다.</Text>
  </Spacing>
);

class TransactionTable extends PureComponent {
  render() {
    const { transactions } = this.props;
    return (
      <form>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="left">물건</TableCell>
              <TableCell align="center">가격</TableCell>
              <TableCell align="center">판매자</TableCell>
              <TableCell align="center">거래</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {transactions.map(({ id, name, price, seller }) => (
              <TableRow key={id}>
                <TableCell>{name}</TableCell>
                <TableCell align="center">{price}</TableCell>
                <TableCell align="center">{seller}</TableCell>
                <TableCell align="center">
                  <Modal>
                    {({ openModal }) => (
                      <Button
                        primary
                        onPress={
                          () => {
                            Api.delete(`transactions/${id}`);
                          }

                          // openModal(TRADE_PRODUCT_MODAL, { id })
                        }
                      >
                        구매
                      </Button>
                    )}
                  </Modal>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </form>
    );
  }
}

TransactionTable.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      price: PropTypes.string,
      seller: PropTypes.string,
    })
  ),
};

export default withLoading(LoadingMessage)(TransactionTable);

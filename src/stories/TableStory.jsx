import React from "react";
import { storiesOf } from "@storybook/react";

import Table from "../components/Table";
import TableHead from "../components/TableHead";
import TableBody from "../components/TableBody";
import TableRow from "../components/TableRow";
import TableCell from "../components/TableCell";
import TransactionPage from "../components/TransactionPage";

storiesOf("Table Test", module)
  .addWithJSX("Tabe", () => (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell align="left">물건</TableCell>
          <TableCell align="center">가격</TableCell>
          <TableCell align="right">판매자</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell>물건1</TableCell>
          <TableCell align="center">10,000원</TableCell>
          <TableCell align="right">회원1</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>물건2</TableCell>
          <TableCell align="center">13,000원</TableCell>
          <TableCell align="right">회원2</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ))
  .addWithJSX("TransactionTable", () => <TransactionPage />);

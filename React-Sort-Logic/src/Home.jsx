import React from "react";

import { transactions } from "./Income";
const Home = () => {
  return (
    <div className="container">
      <table>
        <tbody>
          <tr>
            <th>
              <h3>Date</h3>
            </th>
            <th>
              <h3>Category</h3>
            </th>
            <th>
              <h3>Amount</h3>
            </th>
          </tr>
          {transactions.map((transaction) => {
            return (
              <tr key={transaction.id}>
                <td>{transaction.date}</td>
                <td>{transaction.category}</td>
                <td>{transaction.amount}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Home;

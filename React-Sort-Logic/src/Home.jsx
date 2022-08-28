import React, { useState } from "react";

import { transactions } from "./Income";
const Home = () => {
  const [transactionData, setTransactionData] = useState(transactions);

  const handleSort = (event) => {
    let type = event.target.textContent.toLowerCase();
    const sorted = [...transactions].sort((a, b) =>
      a[type] > b[type] ? 1 : b[type] > a[type] ? -1 : 0
    );
    setTransactionData(sorted);
    console.log(sorted);
  };

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
              <h3 className="amount" onClick={handleSort}>
                Amount
              </h3>
            </th>
          </tr>
          {transactionData.map((transaction) => {
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

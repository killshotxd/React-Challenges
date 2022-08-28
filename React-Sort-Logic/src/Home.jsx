import React, { useState } from "react";
import { options } from "./Option";
import { transactions } from "./Income";
const Home = () => {
  const [transactionData, setTransactionData] = useState(transactions);
  const [isSorted, setIsSorted] = useState(false);
  const [message, setMessage] = useState("Click on Amount to sort Data");
  const [selected, setSelected] = useState(options[0].value);
  const handleSort = (event) => {
    if (!isSorted) {
      let type = event.target.textContent.toLowerCase();
      const sorted = [...transactions].sort((a, b) =>
        a[type] > b[type] ? 1 : b[type] > a[type] ? -1 : 0
      );
      setTransactionData(sorted);
      setIsSorted(true);
      setMessage("Ascending Sort");
      // console.log(sorted);
    } else {
      let type = event.target.textContent.toLowerCase();
      const sorted = [...transactions].sort((a, b) =>
        a[type] < b[type] ? 1 : b[type] < a[type] ? -1 : 0
      );
      setTransactionData(sorted);
      setIsSorted(false);
      setMessage("Descending Sort");
      // console.log(sorted);
    }
  };

  return (
    <div className="container">
      <table>
        <tbody>
          <tr>
            <th>
              <h3 className="amount" onClick={handleSort}>
                Date
              </h3>
            </th>
            <th>
              <h3 className="amount" onClick={handleSort}>
                Category
              </h3>
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
      <div className="msg">
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Home;

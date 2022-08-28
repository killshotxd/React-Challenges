import React, { useState } from "react";
import { options } from "./Option";
import { transactions } from "./Income";
const Home = () => {
  const [transactionData, setTransactionData] = useState(transactions);
  const [selected, setSelected] = useState(options[0].value);
  const handleSort = (event) => {
    let type = event.target.textContent.toLowerCase();
    const sorted = [...transactions].sort((a, b) =>
      a[type] > b[type] ? 1 : b[type] > a[type] ? -1 : 0
    );
    setTransactionData(sorted);

    console.log(sorted);
  };

  const handleChange = (event) => {
    console.log(event.target.value);
    setSelected(event.target.value);
    if (event.target.value == "max") {
      console.log("Run");
      handleSort(event);
    }
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

      <select value={selected} onChange={handleChange}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.text}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Home;

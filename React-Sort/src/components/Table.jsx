import React from "react";
import DataTable from "react-data-table-component";
import { data } from "./api";
const Table = () => {
  const columns = [
    {
      name: "Name",
      selector: (row) => row.name,
    },
    {
      name: "Profile",
      selector: (row) => row.designation,
    },
    {
      name: "Salary ₹",
      selector: (row) => row.salary,
      sortable: true,
    },
  ];

  return (
    <>
      <DataTable title="Employees" columns={columns} data={data} />
    </>
  );
};

export default Table;

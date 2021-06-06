import React, { useState } from "react";
<<<<<<< HEAD
import { useTable, useFilters, useSortBy, useGlobalFilter } from "react-table";
=======
import { useTable, useFilters, useSortBy } from "react-table";
>>>>>>> ca69ace (Admin)

export default function Table({ columns, data }) {
  const [filterInput, setFilterInput] = useState("");
  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
<<<<<<< HEAD
    setFilter,
    setGlobalFilter
=======
    setFilter
>>>>>>> ca69ace (Admin)
  } = useTable(
    {
      columns,
      data
    },
    useFilters,
<<<<<<< HEAD
    useGlobalFilter,
=======
>>>>>>> ca69ace (Admin)
    useSortBy
  );

  const handleFilterChange = e => {
    const value = e.target.value || undefined;
<<<<<<< HEAD
    setGlobalFilter(value);
    setFilterInput(value);
 
=======
    setFilter("show.name", value);
    setFilterInput(value);
>>>>>>> ca69ace (Admin)
  };

  // Render the UI for your table
  return (
    <>
      <input
        value={filterInput}
        onChange={handleFilterChange}
<<<<<<< HEAD
        placeholder={"Search"}
=======
        placeholder={"Search name"}
>>>>>>> ca69ace (Admin)
      />
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  className={
                    column.isSorted
                      ? column.isSortedDesc
                        ? "sort-desc"
                        : "sort-asc"
                      : ""
                  }
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
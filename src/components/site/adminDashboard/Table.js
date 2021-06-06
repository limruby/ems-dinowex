import React, { useState } from "react";
<<<<<<< HEAD
<<<<<<< HEAD
import { useTable, useFilters, useSortBy, useGlobalFilter } from "react-table";
=======
import { useTable, useFilters, useSortBy } from "react-table";
>>>>>>> ca69ace (Admin)
=======
import { useTable, useFilters, useSortBy, useGlobalFilter } from "react-table";
>>>>>>> b014062 (admindashboard_incomplete)

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
<<<<<<< HEAD
    setFilter,
    setGlobalFilter
=======
    setFilter
>>>>>>> ca69ace (Admin)
=======
    setFilter,
    setGlobalFilter
>>>>>>> b014062 (admindashboard_incomplete)
  } = useTable(
    {
      columns,
      data
    },
    useFilters,
<<<<<<< HEAD
<<<<<<< HEAD
    useGlobalFilter,
=======
>>>>>>> ca69ace (Admin)
=======
    useGlobalFilter,
>>>>>>> b014062 (admindashboard_incomplete)
    useSortBy
  );

  const handleFilterChange = e => {
    const value = e.target.value || undefined;
<<<<<<< HEAD
<<<<<<< HEAD
    setGlobalFilter(value);
    setFilterInput(value);
 
=======
    setFilter("show.name", value);
    setFilterInput(value);
>>>>>>> ca69ace (Admin)
=======
    setGlobalFilter(value);
    setFilterInput(value);
 
>>>>>>> b014062 (admindashboard_incomplete)
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
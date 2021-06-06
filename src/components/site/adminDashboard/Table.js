import React, { useState } from "react";
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { useTable, useFilters, useSortBy, useGlobalFilter } from "react-table";
=======
import { useTable, useFilters, useSortBy } from "react-table";
>>>>>>> ca69ace (Admin)
=======
import { useTable, useFilters, useSortBy, useGlobalFilter } from "react-table";
>>>>>>> b014062 (admindashboard_incomplete)
=======
import { useTable, useFilters, useSortBy, useGlobalFilter } from "react-table";
>>>>>>> d66119a3842624f919323611cf66ba932f9a38ed

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
=======
    setFilter,
    setGlobalFilter
>>>>>>> d66119a3842624f919323611cf66ba932f9a38ed
  } = useTable(
    {
      columns,
      data
    },
    useFilters,
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    useGlobalFilter,
=======
>>>>>>> ca69ace (Admin)
=======
    useGlobalFilter,
>>>>>>> b014062 (admindashboard_incomplete)
=======
    useGlobalFilter,
>>>>>>> d66119a3842624f919323611cf66ba932f9a38ed
    useSortBy
  );

  const handleFilterChange = e => {
    const value = e.target.value || undefined;
<<<<<<< HEAD
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
=======
    setGlobalFilter(value);
    setFilterInput(value);
 
>>>>>>> d66119a3842624f919323611cf66ba932f9a38ed
  };

  // Render the UI for your table
  return (
    <>
      <input
        value={filterInput}
        onChange={handleFilterChange}
<<<<<<< HEAD
<<<<<<< HEAD
        placeholder={"Search"}
=======
        placeholder={"Search name"}
>>>>>>> ca69ace (Admin)
=======
        placeholder={"Search name"}
>>>>>>> d66119a3842624f919323611cf66ba932f9a38ed
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
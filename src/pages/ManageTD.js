import React, { useState } from "react";
import MaterialTable from "material-table";

import GetAppIcon from "@material-ui/icons/GetApp";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import SearchIcon from "@material-ui/icons/Search";
import ClearIcon from "@material-ui/icons/Clear";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import SortIcon from "@material-ui/icons/Sort";
import SaveIcon from "@material-ui/icons/Save";
import CancelSharpIcon from "@material-ui/icons/CancelSharp";
import CheckSharpIcon from "@material-ui/icons/CheckSharp";
import ViewColumnTwoToneIcon from "@material-ui/icons/ViewColumnTwoTone";
function ManageTD() {
  const [selectedRows] = useState([]);
  const [tableData, setTableData] = useState([
    {
      name: "Mohan",

      phone: 7845621590,
      age: 35,
      gender: "M",
      city: "Delhi",
      ID: 456125,
    },
  ]);
  const handleBulkDelete = () => {
    const updatedData = tableData.filter((row) => selectedRows.includes(row));
    setTableData(updatedData);
  };
  const columns = [
    {
      title: "Driver's Name",
      field: "name",
      sorting: false,
      filtering: false,
      cellStyle: { background: "#F28919" },
      headerStyle: { color: "#fff" },
    },
    {
      title: "Phone Number",
      field: "phone",
      align: "center",
      grouping: false,
    },
    {
      title: "Age",
      field: "age",
      emptyValue: () => <em>null</em>,
      render: (rowData) => (
        <div
          style={{
            background: rowData.age >= 18 ? "#008000aa" : "#f90000aa",
            borderRadius: "4px",
            paddingLeft: 5,
          }}
        >
          {rowData.age >= 18 ? "18+" : "18-"}
        </div>
      ),
      searchable: false,
      export: false,
    },
    {
      title: "Gender",
      field: "gender",
      lookup: { M: "Male", F: "Female" },
      searchable: false,
    },

    {
      title: "Tricycle Driver's No.",
      field: "ID",
      cellStyle: { background: "#009688" },
      headerStyle: { color: "#fff" },
    },
  ];
  return (
    <div className="ManageTD">
      <h1 align="center">E-Tulod</h1>

      <MaterialTable
        columns={columns}
        data={tableData}
        editable={{
          onRowAdd: (newRow) =>
            new Promise((resolve, reject) => {
              setTableData([...tableData, newRow]);

              setTimeout(() => resolve(), 500);
            }),
          onRowUpdate: (newRow, oldRow) =>
            new Promise((resolve, reject) => {
              const updatedData = [...tableData];
              updatedData[oldRow.tableData.id] = newRow;
              setTableData(updatedData);
              setTimeout(() => resolve(), 500);
            }),
          onRowDelete: (selectedRow) =>
            new Promise((resolve, reject) => {
              const updatedData = [...tableData];
              updatedData.splice(selectedRow.tableData.id, 1);
              setTableData(updatedData);
              setTimeout(() => resolve(), 1000);
            }),
        }}
        onSelectionChange={(selectedRows) => console.log(selectedRows)}
        options={{
          sorting: true,
          search: true,
          Delete: true,
          searchFieldAlignment: "right",
          searchAutoFocus: true,
          searchFieldVariant: "standard",
          filtering: true,
          paging: true,
          pageSizeOptions: [2, 5, 10, 20, 25, 50],
          pageSize: 5,
          paginationType: "stepped",
          showFirstLastPageButtons: false,
          paginationPosition: "bottom",
          exportButton: true,
          exportAllData: true,
          exportFileName: "TableData",
          addRowPosition: "first",
          actionsColumnIndex: -1,
          selection: true,
          showSelectAllCheckbox: true,
          showTextRowsSelected: true,

          selectionProps: (rowData) => ({
            disabled: rowData.age == null,
            //  color: "primary",
          }),
          grouping: true,
          columnsButton: true,
          rowStyle: (data, index) =>
            index % 2 === 0 ? { background: "#f5f5f5" } : null,
          headerStyle: { background: "#e36510", color: "#fff" },
        }}
        actions={[
          {
            icon: () => <DeleteIcon />,
            tooltip: "Delete all Data?",
            onClick: () => handleBulkDelete(),
          },
        ]}
        title="Manage Driver"
        icons={{
          Add: () => <AddCircleIcon />,
          Search: () => <SearchIcon />,
          Clear: () => <ClearIcon />,
          PreviousPage: () => <ChevronLeftIcon />,
          NextPage: () => <ChevronRightIcon />,
          Export: () => <GetAppIcon />,
          Filter: () => <SearchIcon />,
          Edit: () => <EditIcon />,
          Delete: () => <DeleteIcon />,
          SortArrow: () => <SortIcon />,
          Check: () => <CheckSharpIcon />,
          Cancel: () => <CancelSharpIcon />,
          ViewColumn: () => <ViewColumnTwoToneIcon c />,
          ResetSearch: () => <ClearIcon />,
        }}
      />
    </div>
  );
}
export default ManageTD;

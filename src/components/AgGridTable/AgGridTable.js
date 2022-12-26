import React, { useState, useRef, useEffect, useMemo, useCallback } from "react";
import { AgGridReact } from "ag-grid-react";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

const AgGridTable = ({ products }) => {
  const [rowData, setRowData] = useState(products);

  const gridRef = useRef(); // Optional - for accessing Grid's API
  const defaultColDef = useMemo(() => ({
    sortable: true,
    flex: 1
    // filterParams: {
    //   buttons: ["apply", "clear", "cancel", "reset"]
    // }
  }));

  // Example of consuming Grid Event
  const cellClickedListener = useCallback((event) => {
    console.log("cellClicked", event);
  }, []);
  // Example using Grid's API
  const buttonListener = useCallback((e) => {
    gridRef.current.api.deselectAll();
  }, []);

  const [columnDefs] = useState([
    { field: "id", floatingFilter: true, filter: true },
    { field: "title", floatingFilter: true, filter: true },
    { field: "description", floatingFilter: true, filter: true },
    { field: "price", floatingFilter: true, filter: true },
    { field: "discountPercentage", floatingFilter: true, filter: true },
    { field: "rating", floatingFilter: true, filter: true },
    { field: "stock", floatingFilter: true, filter: true },
    { field: "brand", floatingFilter: true, filter: true },
    { field: "category", floatingFilter: true, filter: true }
  ]);
  return (
    <div className="ag-theme-alpine" style={{ height: 490, width: "100%" }}>
      <AgGridReact
        ref={gridRef}
        rowData={rowData}
        columnDefs={columnDefs}
        defaultColDef={defaultColDef} // Default Column Properties
        animateRows={true} // Optional - set to 'true' to have rows animate when sorted
        rowSelection="multiple" // Options - allows click selection of rows
        onCellClicked={cellClickedListener} // Optional - registering for Grid Event
      ></AgGridReact>
    </div>
  );
};

export default AgGridTable;

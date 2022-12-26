import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeaderPrimary from "./components/ui/Header";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import MuiTable from "./pages/MuiTable";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <HeaderPrimary />
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="homepage" element={<HomePage />} />
          <Route path="mui-table" element={<MuiTable />} />
          <Route path="ag-grid" element={<MuiTable />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

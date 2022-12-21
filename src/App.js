import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import HeaderPrimary from "./components/ui/Header";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <HeaderPrimary />
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="homepage" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

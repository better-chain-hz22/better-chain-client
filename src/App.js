import "./App.css";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import OrderPage from "./pages/OrderPage/OrderPage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/order-page" element={<OrderPage />} />
        <Route exact path="/" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;

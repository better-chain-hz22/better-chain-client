import "./App.css";
import Header from "./components/Header";
import { Route, Switch } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import OrderPage from "./pages/OrderPage/OrderPage";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/order-page/:orderId">
            <OrderPage />
        </Route>
        <Route path="/">
            <Dashboard />
        </Route>
      </Switch>
    </>
  );
}

export default App;

import "./App.css";
import Header from "./components/Header";
import { Route, Switch } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import OrderPage from "./pages/OrderPage/OrderPage";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/order-page" component={OrderPage} />
      </Switch>
    </>
  );
}

export default App;

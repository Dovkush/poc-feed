import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import "antd/dist/antd.css";
import SignUpForm from "./components/signUpForm/signUpForm";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/form">
            <SignUpForm />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};
export default App;

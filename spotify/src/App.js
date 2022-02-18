import "./App.css";
import HomePage from "./Components/Homepage";
import Login from "./Components/Login";
import { BrowserRouter } from "react-router-dom";
import { connect } from "react-redux";
import { get_login, get_logout } from "./Actions";
import { useEffect } from "react";

function App(props) {
  const token = props.token;
  useEffect(() => {
    props.get_login();
  });
  return (
    <div>
      <BrowserRouter>{token ? <HomePage /> : <Login />}</BrowserRouter>
    </div>
  );
}
const mapStateToProps = (state) => {
  return { token: state.token };
};

export default connect(mapStateToProps, { get_login })(App);
//{!token && <Login />}

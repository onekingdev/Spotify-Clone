import { useEffect, useState, useCallback } from "react";
import axios from "axios";
const code = new URLSearchParams(window.location.search).get("code");

export default () => {
  const [token, setToken] = useState(null);

  const setTokenfunc = useCallback((token) => {
    setToken(token);
  }, []);
  useEffect(() => {
    axios
      .post("http://localhost:3001/login/", {
        code,
      })
      .then((res) => {
        setTokenfunc(res.data.access_token);
        window.history.pushState({}, null, "/");
      })
      .catch((err) => {
        //window.location = "/";
      });
  }, []);
  return {
    token: token,
    setToken: setToken,
  };
};

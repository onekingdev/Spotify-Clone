import { useEffect, useState } from "react";
import unsplashApi from "../Api/unsplashApi";

export default () => {
    const [username, setUsername] = useState(null)
    function setuser(username="") {
        setUsername(username)
    }
    useEffect(() => {
        unsplashApi
        .get("me")
        .then((res => {
            setuser(res.data.display_name)
        }))
        .catch((err) => {
            setuser()
        })
    })
    return {
        username: username,
        setUsername: setuser
    }
}
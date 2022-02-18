import { useLocation } from "react-router-dom";
import SearchComponent from "./SearchComponents/SearchComponent";
import { useState, useRef } from "react";
import ReactDOM from "react-dom";
import UserProfileButton from "./UserProfileButton";

const Navbar = () => {
  let path = useLocation();
  const justify_cont =
    path.pathname === "/search" ? "justify-between" : "justify-end";

  const [color, setColor] = useState("bg-neutral-900");
  const nav = useRef();
  const [open_popup, setOpen_popup] = useState(false);
  const popup_state = open_popup ? "block" : "hidden";

  const popup_element = useRef();

  const changeNavbarColor = () => {
    const breakpoint = document.getElementById("right-section").scrollTop;
    if (breakpoint >= 20) {
      setColor("bg-black");
    } else {
      setColor("bg-neutral-900");
    }
  };
  const getparentId = () => {
    let parent = document.querySelector("#right-section");
    parent.addEventListener("scroll", changeNavbarColor);
  };

  window.addEventListener("DOMContentLoaded", getparentId);

  return (
    <nav
      ref={nav}
      className={`px-6 top-0 inset-x-0 absolute z-50 sticky ${color}`}
    >
      <div className={`relative flex items-center ${justify_cont} h-16`}>
        {path.pathname === "/search" ? <SearchComponent /> : null}
        <UserProfileButton />
      </div>
    </nav>
  );
};

export default Navbar;

import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { get_logout, get_username } from "../Actions";
import { connect } from "react-redux";

class UserProfileButton extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);

    this.state = {
      popupVisible: false,
    };
  }
  componentDidMount() {
    this.props.get_username();
  }

  handleClick() {
    if (!this.state.popupVisible) {
      // attach/remove event handler
      document.addEventListener("click", this.handleOutsideClick, false);
    } else {
      document.removeEventListener("click", this.handleOutsideClick, false);
    }

    this.setState((prevState) => ({
      popupVisible: !prevState.popupVisible,
    }));
  }

  handleOutsideClick(e) {
    // ignore clicks on the component itself
    if (this.node.contains(e.target)) {
      return;
    }

    this.handleClick();
  }
  render() {
    const popup_state = this.state.popupVisible ? "block" : "hidden";
    return (
      <div className="relative">
        <div
          className="relative rounded-full bg-black flex flex-row pr-1 items-center"
          ref={(node) => (this.node = node)}
        >
          <AccountCircleIcon sx={{ fontSize: 30 }} />
          <p className="pl-2 text-sm">{this.props.username}</p>
          <div className="hover:cursor-pointer" onClick={this.handleClick}>
            <ArrowDropDownIcon sx={{ fontSize: 30 }} />
          </div>
          {this.state.popupVisible && (
            <div className="absolute right-2 top-9 h-auto w-auto bg-black popover__content">
              <p
                className="text-sm text-gray-200 py-2 px-4 hover:text-white hover:cursor-pointer"
                onClick={() => {
                  this.props.get_logout();
                }}
              >
                logout
              </p>
            </div>
          )}
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    token: state.token,
    username: state.username,
    recent_playlist: state.recent_playlist,
  };
};

export default connect(mapStateToProps, {
  get_logout,
  get_username,
})(UserProfileButton);

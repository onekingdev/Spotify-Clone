import { useState, useEffect } from "react";
import "../Css/homepage.css";
import Sidebar from "./Sidebar";
import Mainbody from "./Mainbody";
import Navbar from "./Navbar";
import { connect } from "react-redux";
import Player from "./Player";
import { get_recent_playlist } from "../Actions";

const HomePage = (props) => {
  const [current_song, setCurrent_song] = useState();
  useEffect(() => {
    props.get_recent_playlist();
    if (props.recent_playlist.length > 0) {
      setCurrent_song(props.recent_playlist[0].track.uri);
    }
  }, [props.recent_playlist.length, props.play_song]);
  const song = props.play_song ? props.play_song : current_song;
  return (
    <div className="grid home-page-grid text-white relative">
      <Sidebar />
      <div
        className="bg-neutral-900 h-screen flex flex-col gap-4 self-end overflow-y-auto relative"
        id="right-section"
      >
        <Navbar />
        <Mainbody />
      </div>
      <div className="absolute bottom-0 inset-x-0">
        <Player accessToken={props.token} uri={song} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    play_song: state.play_song,
    token: state.token,
    recent_playlist: state.recent_playlist,
  };
};
export default connect(mapStateToProps, { get_recent_playlist })(HomePage);

import HorizontalCard from "./Cards/HorizontalCard";
import VerticalCard from "./Cards/VerticalCard";
import { connect } from "react-redux";
import {
  get_top_playlist,
  get_recent_playlist,
  get_feature_playlist,
  get_new_release_playlist,
} from "../Actions";
import React from "react";
import unsplashApi from "../Api/unsplashApi";
import { joinArray } from "../utils";
const GetGreeting = () => {
  const current_time = new Date().getHours();

  if (0 < current_time && current_time < 12) {
    return "Good morning";
  } else if (12 <= current_time && current_time < 16) {
    return "Good afternoon";
  } else if (current_time >= 16 && current_time < 23) {
    return "Good evening";
  }
};

class InitialHomePage extends React.Component {
  constructor() {
    super();
    this.renderTopSongs = this.renderTopSongs.bind(this);
    this.renderRecentPlaylist = this.renderRecentPlaylist.bind(this);
    this.renderFeatured_songs = this.renderFeatured_songs.bind(this);
    this.renderNew_Release_songs = this.renderNew_Release_songs.bind(this);
    this.state = {
      response: null,
    };
  }
  componentDidMount() {
    this.props.get_top_playlist();
    this.props.get_recent_playlist();
    this.props.get_feature_playlist();
    this.props.get_new_release_playlist();
  }
  renderTopSongs() {
    const songs = this.props.top_songs;
    if (songs) {
      return songs.map((song, index) => {
        return (
          <HorizontalCard
            id={song.uri}
            name={song.name}
            image={song.album.images[2].url}
            key={index}
          />
        );
      });
    }
  }
  renderRecentPlaylist() {
    const songs = this.props.recent_play;

    if (songs.length > 0) {
      return songs.map((song, index) => {
        return (
          <VerticalCard
            id={song.track.uri}
            name={song.track.name}
            image={song.track.album.images[1].url}
            key={index}
            artist={joinArray(song.track.artists).join(",")}
          />
        );
      });
    }
  }

  renderFeatured_songs() {
    const songs = this.props.featured_songs;
    if (songs.length > 0) {
      return songs.map((song, index) => {
        return (
          <VerticalCard
            id={song.uri}
            name={song.name}
            image={song.images[0].url}
            key={index}
            artist={joinArray(song.artists)}
          />
        );
      });
    }
  }
  renderNew_Release_songs() {
    const songs = this.props.new_release_songs;
    if (songs.length > 0) {
      return songs.map((song, index) => {
        return (
          <VerticalCard
            key={index}
            id={song.uri}
            name={song.name}
            image={song.images[1].url}
          />
        );
      });
    }
  }
  render() {
    return (
      <div className="px-6 flex flex-col gap-12">
        <h1 className="text-white text-3xl font-bold tracking-normal">
          {GetGreeting()}
        </h1>
        <div className="grid grid-cols-3 grid-rows-2 gap-4">
          {this.renderTopSongs()}
        </div>
        <div className="flex flex-col gap-8">
          <h1 className="text-white text-2xl font-bold gap-4">
            Recently Played
          </h1>
          <div className="grid grid-rows-1 grid-cols-5 gap-6">
            {this.renderRecentPlaylist()}
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <h1 className="text-white text-2xl font-bold gap-4">
            Featured Playlist
          </h1>
          <div className="grid grid-rows-1 grid-cols-5 gap-6">
            {this.renderFeatured_songs()}
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <h1 className="text-white text-2xl font-bold gap-4">New Release</h1>
          <div className="grid grid-rows-1 grid-cols-5 gap-6">
            {this.renderNew_Release_songs()}
          </div>
        </div>
      </div>
    );
  }
}
const mapPropsToState = (state) => {
  return {
    top_songs: state.top_playlist,
    recent_play: state.recent_playlist,
    featured_songs: state.feature_playlist,
    new_release_songs: state.new_release_playlist,
  };
};
export default connect(mapPropsToState, {
  get_top_playlist,
  get_recent_playlist,
  get_feature_playlist,
  get_new_release_playlist,
})(InitialHomePage);

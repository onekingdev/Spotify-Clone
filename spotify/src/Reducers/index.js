import { combineReducers } from "redux";
import loginReducers from "./loginReducers";
import userdetailReducer from "./userdetailReducer";
import {
  top_playlist,
  recent_playlist,
  feature_playlist,
  new_release_playlist,
  search_result_song,
  user_playlist,
  songe_detail,
  liked_song,
} from "./playlistReducer";
import { play_song } from "./PlaySong";

export default combineReducers({
  token: loginReducers,
  username: userdetailReducer,
  top_playlist: top_playlist,
  recent_playlist: recent_playlist,
  feature_playlist: feature_playlist,
  new_release_playlist: new_release_playlist,
  search_song_result: search_result_song,
  user_playlist: user_playlist,
  songe_detail: songe_detail,
  liked_song: liked_song,
  play_song: play_song,
});

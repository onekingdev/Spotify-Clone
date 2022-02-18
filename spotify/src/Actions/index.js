import axios from "axios";
import unsplashApi from "../Api/unsplashApi";

const code = new URLSearchParams(window.location.search).get("code");

export const get_login = () => async (dispatch) => {
  const response = await axios.post("http://localhost:3001/login/", {
    code,
  });
  window.history.pushState({}, null, "/");
  dispatch({ type: "LOGIN", payload: response.data.access_token });
};

export const get_logout = () => (dispatch) => {
  dispatch({ type: "LOGOUT", payload: null });
};

export const get_username = () => async (dispatch) => {
  const response = await unsplashApi.get("me");
  dispatch({
    type: "GET_USERNAME",
    payload: response.data.display_name,
  });
};

export const get_top_playlist = () => async (dispatch) => {
  const response = await unsplashApi("me/top/tracks?limit=6");
  dispatch({ type: "TOP_PLAYLIST", payload: response.data.items });
};

export const get_recent_playlist = () => async (dispatch) => {
  const response = await unsplashApi("me/player/recently-played?limit=5");
  dispatch({ type: "RECENT_PLAYLIST", payload: response.data.items });
};

export const get_feature_playlist = () => async (dispatch) => {
  const response = await unsplashApi(
    "browse/featured-playlists?limit=5&country=IN"
  );
  dispatch({
    type: "FEATURE_PLAYLIST",
    payload: response.data.playlists.items,
  });
};

export const get_new_release_playlist = () => async (dispatch) => {
  const response = await unsplashApi("browse/new-releases?limit=5&country=IN");
  dispatch({
    type: "NEW_RELEASE_PLAYLIST",
    payload: response.data.albums.items,
  });
};

export const get_search_result = (term) => async (dispatch) => {
  const response = await unsplashApi(
    `search?type=track&market=IN&limit=4&q=${term}&include_external=audio`
  );
  dispatch({
    type: "SEARCH_RESULT",
    payload: response.data.tracks.items,
  });
};

export const get_user_playlist = () => async (dispatch) => {
  const response = await unsplashApi("me/playlists");
  dispatch({
    type: "USER_PLAYLIST",
    payload: response.data.items,
  });
};

export const get_song_detail = (type, id) => async (dispatch) => {
  const response = await unsplashApi(`${type}s/${id}`);
  dispatch({
    type: "SONG_DETAIL",
    payload: response.data,
  });
};

export const get_liked_song = () => async (dispatch) => {
  const response = await unsplashApi("me/tracks");
  dispatch({
    type: "LIKED_SONG",
    payload: response.data.items,
  });
};

export const get_play_song = (uri) => (dispatch) => {
  dispatch({
    type: "PLAY_SONG",
    payload: uri,
  });
};

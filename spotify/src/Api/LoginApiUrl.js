import { client_id } from "../env.js";

const scopes = [
  "user-read-playback-state",
  "user-modify-playback-state",
  "user-read-private",
  "user-follow-modify",
  "user-follow-read",
  "user-library-modify",
  "user-library-read",
  "streaming",
  "user-read-playback-position",
  "playlist-modify-private",
  "playlist-read-collaborative",
  "user-read-email",
  "playlist-read-private",
  "user-top-read",
  "playlist-modify-public",
  "user-read-currently-playing",
  "user-read-recently-played",
].join("+");

const baseUrl = "https://accounts.spotify.com/authorize";

const response_type = "code";

const client_id_var = client_id;

const show_dialog = true;

const redirect_uri = "http://localhost:3000/";

const login_url = `${baseUrl}/?response_type=${response_type}&client_id=${client_id_var}&scope=${scopes}&redirect_uri=${redirect_uri}&show_dialog=${show_dialog}`;

export default login_url;

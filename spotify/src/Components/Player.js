import React, { useEffect, useState, useMemo } from "react";
import SpotifyPlayer from "react-spotify-web-playback";

export default ({ accessToken, uri }) => {
  const [play, setPlay] = useState(false);
  useEffect(() => {
    setPlay(true);
  }, [uri]);

  if (!accessToken) {
    return null;
  }
  return (
    <SpotifyPlayer
      token={accessToken}
      showSaveIcon
      uris={uri ? [uri] : []}
      callback={(state) => {
        if (!state.isPlaying) setPlay(false);
      }}
      play={true}
      styles={{
        activeColor: "#fff",
        bgColor: "black",
        color: "#fff",
        loaderColor: "#fff",
        sliderColor: "#1cb954",
        trackArtistColor: "#ccc",
        trackNameColor: "#fff",
      }}
    />
  );
};

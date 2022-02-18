import logo from "../arijit.jfif";
import { useState } from "react";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import { useParams } from "react-router";
import { connect } from "react-redux";
import { get_song_detail, get_liked_song, get_play_song } from "../Actions";
import { useEffect } from "react";
import { msToMinute } from "../utils";
import music_icon from "../music-icon.PNG";

const DisplayPlaylist = (props) => {
  const [showBut, setShowBut] = useState(false);
  const { type, id } = useParams();
  var image = music_icon;
  var name = null;
  var song_detail = props.song_detail;
  var liked_song = props.liked_song;

  function get_name() {
    if (type === "liked_song") {
      return "Liked Song";
    } else {
      return props.song_detail.name;
    }
  }

  useEffect(() => {
    if (type === "liked_song") {
      props.get_liked_song();
    } else {
      props.get_song_detail(type, id);
    }
  }, [type, id]);
  if (song_detail) {
    if ((type === "playlist" || type === "album") && !song_detail.album) {
      image =
        props.song_detail.images.length > 0
          ? props.song_detail.images[0].url
          : music_icon;
    } else if (type === "track" && song_detail.album) {
      image = song_detail.album.images[1].url;
    }
    name = get_name();
  }

  const renderSongs = () => {
    if (song_detail) {
      if ((type === "playlist" || type === "album") && !song_detail.album) {
        const songs = song_detail.tracks.items;
        return songs.map((song, index) => {
          return (
            <tr
              className="px-6 py-4 whitespace-nowrap hover:cursor-pointer hover:bg-neutral-700"
              key={index}
              onClick={(e) => {
                e.stopPropagation();
                props.get_play_song(song.track.uri);
              }}
            >
              <td className="px-6 py-4 whitespace-nowrap">{index + 1}</td>
              <td className="px-6 py-4 whitespace-nowrap w-2/3">
                {song.track.name}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {song.track.album.name}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {msToMinute(song.track.duration_ms)}
              </td>
            </tr>
          );
        });
      } else if (type === "track" && song_detail.album) {
        const song = song_detail;
        return (
          <tr
            className="px-6 py-4 whitespace-nowrap hover:cursor-pointer hover:bg-neutral-700"
            onClick={(e) => {
              e.stopPropagation();
              props.get_play_song(song.uri);
            }}
          >
            <td className="px-6 py-4 whitespace-nowrap">1</td>
            <td className="px-6 py-4 whitespace-nowrap w-2/3">{song.name}</td>
            <td className="px-6 py-4 whitespace-nowrap">{song.album.name}</td>
            <td className="px-6 py-4 whitespace-nowrap">
              {msToMinute(song.duration_ms)}
            </td>
          </tr>
        );
      }
    } else if (liked_song) {
      const songs = liked_song;
      return songs.map((song, index) => {
        return (
          <tr
            className="px-6 py-4 whitespace-nowrap hover:cursor-pointer hover:bg-neutral-700"
            key={index}
            onClick={(e) => {
              e.stopPropagation();
              props.get_play_song(song.track.uri);
            }}
          >
            <td className="px-6 py-4 whitespace-nowrap">{index + 1}</td>
            <td className="px-6 py-4 whitespace-nowrap w-2/3">
              {song.track.name}
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              {song.track.album.name}
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              {msToMinute(song.track.duration_ms)}
            </td>
          </tr>
        );
      });
    }
  };
  return (
    <div className="flex flex-col gap-6 mx-6">
      <div
        className="flex flex-row gap-6 items-end p-4 bg-neutral-800 relative"
        onMouseEnter={() => {
          setShowBut(true);
        }}
        onMouseLeave={() => {
          setShowBut(false);
        }}
      >
        <img
          src={image}
          className="h-64 w-64 rounded-md relative shadow-lg"
          alt="album-logo"
        ></img>
        {showBut && (
          <div
            onClick={(e) => {
              e.stopPropagation();
              props.get_play_song(`spotify:${type}:${id}`);
            }}
            className="absolute right-5 bottom-5"
          >
            <PlayCircleFilledIcon
              className="text-green-600 transition ease-in-out delay-150 hover:scale-110 duration-300 hover:cursor-default"
              sx={{ fontSize: 50 }}
            />
          </div>
        )}
        <div className="flex flex-col">
          <p className="text-xl">{type}</p>
          <p className="text-7xl font-bold">{name}</p>
        </div>
      </div>
      <div>
        <table className="table-auto divide-y divide-slate-800">
          <thead className="table-header-group">
            <tr className="table-row">
              <td className="px-6 py-3 text-left text-lg font-medium text-gray-500 uppercase tracking-wider">
                #
              </td>
              <td className="px-6 py-3 text-left text-lg font-medium text-gray-500 uppercase tracking-wider">
                songs
              </td>
              <td className="px-6 py-3 text-left text-lg font-medium text-gray-500 uppercase tracking-wider">
                Album
              </td>
              <td className="px-6 py-3 text-left text-lg font-medium text-gray-500 uppercase tracking-wider">
                Duration
              </td>
            </tr>
          </thead>
          <tbody>{renderSongs()}</tbody>
        </table>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return { song_detail: state.songe_detail, liked_song: state.liked_song };
};

export default connect(mapStateToProps, {
  get_song_detail,
  get_liked_song,
  get_play_song,
})(DisplayPlaylist);

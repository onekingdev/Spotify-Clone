import logo from "../../arijit.jfif";
import { useState } from "react";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import { connect } from "react-redux";
import { get_search_result, get_play_song } from "../../Actions";
import { useEffect } from "react";
import { msToMinute, joinArray } from "../../utils";
import { useNavigate } from "react-router-dom";

const SearchPage = (props) => {
  const [showBut, setShowBut] = useState(false);
  const navi = useNavigate();
  const renderSearchSongs = () => {
    const songs = props.search_result;
    if (songs.length > 0) {
      return songs.map((song) => {
        return (
          <div
            className="w-full flex flex-row items-center justify-between hover:cursor-pointer hover:bg-neutral-700 p-2 w-3/4 rounded-md"
            key={song.id}
            onClick={(e) => {
              e.stopPropagation();
              props.get_play_song(song.uri);
            }}
          >
            <div className="flex flex-row gap-4">
              <img src={song.album.images[1].url} className="h-12 w-12"></img>
              <div className="flex flex-col gap-0">
                <p className="text-lg font-bold m-0">{song.name}</p>
                <p className="text-slate-300 m-0">
                  {joinArray(song.artists).join()}
                </p>
              </div>
            </div>
            <p className="text-slate-300">{msToMinute(song.duration_ms)}</p>
          </div>
        );
      });
    }
  };
  const renderTopresult = () => {
    const songs = props.search_result;
    if (songs.length > 0) {
      return (
        <div
          className="bg-neutral-800 w-full rounded-md p-5 flex flex-col gap-4 hover:bg-neutral-700 hover:cursor-pointer relative transition ease-in-out duration-300"
          onMouseEnter={() => {
            setShowBut(true);
          }}
          onMouseLeave={() => {
            setShowBut(false);
          }}
          onClick={() => {
            navi(`/view/${songs[0].type}/${songs[0].id}`);
          }}
        >
          <img
            src={songs[0].album.images[1].url}
            className="h-36 w-36 rounded-md relative shadow-lg"
          ></img>
          <div>
            <p className="font-bold text-3xl">{songs[0].name}</p>
            <p className="text-slate-300">
              {joinArray(songs[0].artists).join()}
            </p>
          </div>
          {showBut && (
            <div
              onClick={(e) => {
                e.stopPropagation();
                props.get_play_song(songs[0].uri);
              }}
            >
              <PlayCircleFilledIcon
                className="absolute right-3 bottom-3 text-green-600 transition ease-in-out delay-150 hover:scale-110 duration-300 hover:cursor-default"
                sx={{ fontSize: 50 }}
              />
            </div>
          )}
        </div>
      );
    }
  };
  return (
    <div className="grid grid-searchbar mx-6 gap-6 pt-6">
      <div className="flex flex-col items-start gap-6">
        <p className="font-bold text-2xl">Top result</p>
        {renderTopresult()}
      </div>
      <div className="flex flex-col gap-6 items-start">
        <p className="font-bold text-2xl text-center">Songs</p>
        <div className="flex flex-col items-start w-full">
          {renderSearchSongs()}
        </div>
      </div>
    </div>
  );
};

const mapStateToprops = (state) => {
  return { search_result: state.search_song_result };
};

export default connect(mapStateToprops, { get_search_result, get_play_song })(
  SearchPage
);

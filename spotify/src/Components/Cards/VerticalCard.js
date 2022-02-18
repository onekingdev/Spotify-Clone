import logo from "../../arijit.jfif";
import { useState } from "react";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { get_play_song } from "../../Actions";

const VerticalCard = ({ id, name, image, artist, get_play_song }) => {
  const [showBut, setShowBut] = useState(false);
  const navigate = useNavigate();
  const split_arr = id.split(":");
  const type = split_arr[1];
  const type_id = split_arr[2];
  return (
    <div
      className="bg-neutral-800 flex flex-col gap-4 card-shadow rounded-md p-4 hover:bg-neutral-700 hover:cursor-pointer relative transition ease-in-out duration-300"
      onMouseEnter={() => {
        setShowBut(true);
      }}
      onMouseLeave={() => {
        setShowBut(false);
      }}
      onClick={() => {
        navigate(`/view/${type}/${type_id}`, { state: { id: type_id } });
      }}
    >
      <img
        src={image}
        className="h-40 w-40 rounded-md relative"
        alt="album-img"
      ></img>
      {showBut && (
        <div
          onClick={(e) => {
            e.stopPropagation();
            get_play_song(id);
          }}
          className="absolute right-5 bottom-8"
        >
          <PlayCircleFilledIcon
            className="text-green-600 transition ease-in-out delay-150 hover:scale-110 duration-300 hover:cursor-default"
            sx={{ fontSize: 50 }}
          />
        </div>
      )}

      <div>
        <p className="font-bold">{name}</p>
        {artist && <p className="text-slate-300">{artist}</p>}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { state: state };
};
export default connect(mapStateToProps, { get_play_song })(VerticalCard);

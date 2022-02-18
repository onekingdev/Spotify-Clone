import logo from "../../arijit.jfif";
import { useState } from "react";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { get_play_song } from "../../Actions";

const HorizontalCard = ({ id, name, image, get_play_song }) => {
  const [showBut, setShowBut] = useState(false);
  const navigate = useNavigate();
  const split_arr = id.split(":");
  const type = split_arr[1];
  const type_id = split_arr[2];
  return (
    <div
      className="bg-neutral-800 flex flex-row items-center gap-4 card-shadow rounded-md hover:bg-neutral-700 hover:cursor-pointer relative transition ease-in-out duration-300"
      onMouseEnter={() => {
        setShowBut(true);
      }}
      onMouseLeave={() => {
        setShowBut(false);
      }}
      onClick={() => {
        navigate(`/view/${type}/${type_id}`);
      }}
    >
      <img
        src={image}
        className="h-20 w-20 rounded-tl-md rounded-bl-md"
        alt="album-logo"
      ></img>
      <p className="font-bold text-base">{name}</p>
      {showBut && (
        <div
          onClick={(e) => {
            e.stopPropagation();
            console.log(id);
            get_play_song(id);
          }}
          className="absolute right-5"
        >
          <PlayCircleFilledIcon
            className="text-green-600 transition ease-in-out delay-150 hover:scale-110 duration-300 hover:cursor-default"
            sx={{ fontSize: 50 }}
          />
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { state: state };
};
export default connect(mapStateToProps, { get_play_song })(HorizontalCard);

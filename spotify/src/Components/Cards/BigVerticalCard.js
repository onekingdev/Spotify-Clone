import { useState } from "react";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import { Link } from "react-router-dom";
const BigVerticalCard = () => {
  const [showBut, setShowBut] = useState(false);
  return (
    <Link
      to="/view/liked_song/user"
      className="bg-gradient-to-r from-indigo-500 to-blue-500 flex flex-col items-center justify-center gap-4 card-shadow rounded-md p-4 hover:bg-neutral-700 hover:cursor-pointer relative transition ease-in-out duration-300 col-span-2"
    >
      <div
        onMouseEnter={() => {
          setShowBut(true);
        }}
        onMouseLeave={() => {
          setShowBut(false);
        }}
      >
        <div>
          <p className="font-bold text-3xl">Liked Songs</p>
        </div>
      </div>
    </Link>
  );
};

export default BigVerticalCard;

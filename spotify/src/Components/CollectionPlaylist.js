import VerticalCard from "./Cards/VerticalCard";
import BigVerticalCard from "./Cards/BigVerticalCard";
import { connect } from "react-redux";
import { get_user_playlist } from "../Actions";
import { useEffect } from "react";
import music_logo from "../music-icon.PNG";

const CollectionPlaylist = (props) => {
  useEffect(() => {
    props.get_user_playlist();
  }, []);
  function renderUserPlaylist() {
    const items = props.user_playlist;
    if (items.length > 0) {
      return items.map((item) => {
        const image = item.images.length > 0 ? item.images[0].url : music_logo;
        return (
          <VerticalCard
            id={item.uri}
            name={item.name}
            image={image}
            key={item.id}
          />
        );
      });
    }
  }
  return (
    <div className="mt-6 mx-6 flex flex-col gap-4">
      <p className="text-2xl font-bold">Playlists</p>
      <div className="grid grid-cols-5 grid-rows-2 gap-6">
        <BigVerticalCard />
        {renderUserPlaylist()}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { user_playlist: state.user_playlist };
};
export default connect(mapStateToProps, { get_user_playlist })(
  CollectionPlaylist
);

import InitialHomePage from "./InitialHomePage";
import { Route, Routes, Router, BrowserRouter } from "react-router-dom";
import SearchPage from "./SearchComponents/SearchPage";
import CollectionPlaylist from "./CollectionPlaylist";
import DisplayPlaylist from "./DisplayPlaylist";

const MainBody = () => {
  return (
    <div className="h-fit pb-20">
      <Routes>
        <Route path="*" element={<InitialHomePage />} />
        <Route path="search" element={<SearchPage />} />
        <Route path="collection" element={<CollectionPlaylist />} />
        <Route path="view/:type/:id" element={<DisplayPlaylist />} />
      </Routes>
    </div>
  );
};

export default MainBody;

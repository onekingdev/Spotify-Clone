export const top_playlist = (state = [], action) => {
  switch (action.type) {
    case "TOP_PLAYLIST":
      return action.payload;
    default:
      return state;
  }
};

export const recent_playlist = (state = [], action) => {
  switch (action.type) {
    case "RECENT_PLAYLIST":
      return action.payload;
    default:
      return state;
  }
};

export const feature_playlist = (state = [], action) => {
  switch (action.type) {
    case "FEATURE_PLAYLIST":
      return action.payload;
    default:
      return state;
  }
};

export const new_release_playlist = (state = [], action) => {
  switch (action.type) {
    case "NEW_RELEASE_PLAYLIST":
      return action.payload;
    default:
      return state;
  }
};

export const search_result_song = (state = [], action) => {
  switch (action.type) {
    case "SEARCH_RESULT":
      return action.payload;
    default:
      return state;
  }
};

export const user_playlist = (state = [], action) => {
  switch (action.type) {
    case "USER_PLAYLIST":
      return action.payload;
    default:
      return state;
  }
};

export const songe_detail = (state = null, action) => {
  switch (action.type) {
    case "SONG_DETAIL":
      return action.payload;
    default:
      return state;
  }
};

export const liked_song = (state = null, action) => {
  switch (action.type) {
    case "LIKED_SONG":
      return action.payload;
    default:
      return state;
  }
};

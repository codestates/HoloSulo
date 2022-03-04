import axios from "axios";

export const createOrder = (tag, playlistId, time) =>
  axios({
    method: "post",
    url: `${process.env.REACT_APP_API_URL}/orders`,
    data: {
      tag,
      playlistId,
      time,
    },
    headers: {
      Authorization: localStorage.getItem("accessToken"),
    },
  });

export const getPlaylists = (TAGS) => {
  return Promise.all(
    TAGS.map((tag) =>
      axios.get(
        `${process.env.REACT_APP_API_URL}/playlists?tag=${encodeURIComponent(
          tag
        )}`,
        { headers: { Authorization: localStorage.getItem("accessToken") } }
      )
    )
  );
};

export const createPlaylist = (formData) => {
  return axios.post(`${process.env.REACT_APP_API_URL}/playlists`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: localStorage.getItem("accessToken"),
    },
  });
};

export const editPlaylist = (formData) => {
  return axios.patch(`${process.env.REACT_APP_API_URL}/playlists`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: localStorage.getItem("accessToken"),
    },
  });
};

export const deletePlaylist = (playlistId) => {
  return axios.delete(`${process.env.REACT_APP_API_URL}/playlists`, {
    data: { playlistId },
    headers: { Authorization: localStorage.getItem("accessToken") },
  });
};

export const kakaoAuthenticate = (code) => {
  return axios.post(`${process.env.REACT_APP_API_URL}/user/kakaoCallback`, {
    data: { code },
  });
};

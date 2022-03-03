export function getPlaylistById(playlists, id) {
  return playlists.filter((item) => item.id === id)[0];
}

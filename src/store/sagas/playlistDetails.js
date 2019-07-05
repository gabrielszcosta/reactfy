import { call, put } from "redux-saga/effects";
//import api from "../../services/api";
import { data } from "../../data";

import { Creators as PlaylistDetailsActions } from "../ducks/playlistDetails";
import { Creators as ErrorsActions } from "../ducks/error";

export function* getPlaylistDetails(action) {
  try {
    // const { data } = yield call(
    //   api.get,
    //   `/playlists/${action.payload.id}?_embed=songs`
    // );

    const playlists = data.playlists.filter(
      playlist => playlist.id == action.payload.id
    );

    const playlist = {
      id: playlists[0].id,
      description: playlists[0].description,
      thumbnail: playlists[0].thumbnail,
      title: playlists[0].title,
      songs: data.songs.filter(song => song.playlistId === playlists[0].id)
    };

    yield put(PlaylistDetailsActions.getPlaylistDetailsSuccess(playlist));
  } catch (e) {
    yield put(
      ErrorsActions.setError("Não foi possível obter os detalhes da playlist")
    );
  }
}

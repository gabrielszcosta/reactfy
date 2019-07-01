import { call, put } from "redux-saga/effects";
import api from "../../services/api";

import { Creators as PlaylistDetailsActions } from "../ducks/playlistDetails";
import { Creators as ErrorsActions } from "../ducks/error";

export function* getPlaylistDetails(action) {
  try {
    const { data } = yield call(
      api.get,
      `/playlists/${action.payload.id}?_embed=songs`
    );
    yield put(PlaylistDetailsActions.getPlaylistDetailsSuccess(data));
  } catch (e) {
    yield put(
      ErrorsActions.setError("Não foi possível obter os detalhes da playlist")
    );
  }
}

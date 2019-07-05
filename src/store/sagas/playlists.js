import { call, put } from "redux-saga/effects";
//import api from "../../services/api";
import { data } from "../../data";

import { Creators as PlaylistsActions } from "../ducks/playlists";
import { Creators as ErrorsActions } from "../ducks/error";

export function* getPlaylists() {
  try {
    //const { data } = yield call(api.get, "/playlists");
    yield put(PlaylistsActions.getPlaylistsSuccess(data.playlists));
  } catch (e) {
    yield put(ErrorsActions.setError("Não foi possível obter as playlists"));
  }
}

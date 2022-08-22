import { all } from "redux-saga/effects";
import * as WL from "./home";

export default function* rootSaga() {
  yield all([
    WL.watchGetHomeData(),
    WL.watchGetPortfolio(),
    WL.watchFramworkList(),
    WL.watchTestimonialList(),
    WL.watchTeamList(),
  ]);
}

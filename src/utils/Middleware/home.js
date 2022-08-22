import { call, put, takeEvery } from "redux-saga/effects";
import * as FL from "../apiList";

function* getHomeData() {
  try {
    var homeData = yield call(FL.getHomeDatails);
    yield put({ type: "Home_Detials", payload: homeData });
  } catch (err) {
    console.log(err);
  }
}

function* getPortfolioData({ payload }) {
  try {
    var portfolio = yield call(FL.getPortfolio, {
      per_page: payload.par_page,
      page: payload.page,
      slug: payload.slug,
    });
    console.log(portfolio);
    yield put({ type: "Portfolio_Details", payload: portfolio });
  } catch (err) {
    console.log(err);
  }
}

function* getAllFrameworkDetails() {
  try {
    var frameworks = yield call(FL.getAllFramework);
    yield put({ type: "Framework", payload: frameworks });
  } catch (err) {
    console.log(err);
  }
}

function* getAllTestimonial() {
  try {
    var testimonial = yield call(FL.getTestimonial);
    yield put({ type: "Testimonial", payload: testimonial });
  } catch (err) {
    console.log(err);
  }
}

function* getAllTeamMember() {
  try {
    var team = yield call(FL.getAllTeamMember);
    yield put({ type: "TeamMember", payload: team });
  } catch (err) {
    console.log(err);
  }
}

export function* watchGetHomeData() {
  yield takeEvery("Get_Home_Details", getHomeData);
}

export function* watchGetPortfolio() {
  yield takeEvery("Get_Portfolio_Details", getPortfolioData);
}

export function* watchFramworkList() {
  yield takeEvery("Get_All_Framework", getAllFrameworkDetails);
}

export function* watchTestimonialList() {
  yield takeEvery("Get_All_Testimonials", getAllTestimonial);
}

export function* watchTeamList() {
  yield takeEvery("Get_All_TeamMember", getAllTeamMember);
}

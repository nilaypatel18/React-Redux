import axios from "axios";

export function getHomeDatails() {
  var url = process.env.REACT_APP_API_URL + "/home";
  return axios(url)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
}

export function getPortfolio(opt) {
  const { per_page, page, slug } = opt;
  var url =
    process.env.REACT_APP_API_URL +
    "/portfolio?per_page=" +
    per_page +
    "&page=" +
    page +
    "&term_slug=" +
    slug;

  return axios(url)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
}

export function getTestimonial() {
  var url = process.env.REACT_APP_API_URL + "/testimonial";
  return axios(url)
    .then((res) => {
      return res.data.data;
    })
    .catch((err) => {
      console.log(err);
    });
}

export function getAllFramework() {
  var url = process.env.REACT_APP_API_URL + "/portfolio/framework";

  return axios(url)
    .then((res) => {
      return res.data.data;
    })
    .catch((err) => {
      console.log(err);
    });
}

export function getAllTeamMember() {
  var url = process.env.REACT_APP_API_URL + "/teams";

  return axios(url)
    .then((res) => {
      console.log(res)
      return res.data.data;
    })
    .catch((err) => {
      console.log(err);
    });
}

export const createCarrer = (fdata) => {
  const url = process.env.REACT_APP_API_URL + "/career_form";
  return axios
    .post(url, fdata)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};

export const createContact = (fdata) => {
  const url = process.env.REACT_APP_API_URL + "/contact_form";
  return axios
    .post(url, fdata)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};

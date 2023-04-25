import axiosClient from "./axiosClient";

const searchApi = {
  postSearch(query) {
    const url = "/search-ticket";
    return axiosClient.post(url, query);
  },
};
export default searchApi;

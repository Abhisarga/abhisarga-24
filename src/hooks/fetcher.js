import useSWR from "swr";
import useSWRMutation from "swr/mutation";
import axios from "axios";
import { NODE_ENV, PROD_SERVER_PATH } from "../utils/constants";

const createRequest = () => {
  return axios.create();
};

const serverPath =
  NODE_ENV === "production"
    ? PROD_SERVER_PATH
    : "http://localhost:6969/graphql";

export function useGetRequest(query, variables) {
  const request = createRequest();
  return useSWR(
    serverPath,
    async (url) =>
      await request
        .post(url, { query, variables })
        .then((res) => res.data.data)
        .catch((err) => err.response || err)
  );
}

export function usePostRequest(query) {
  const request = createRequest();
  return useSWRMutation(
    serverPath,
    async (url, { arg: variables }) =>
      await request
        .post(url, { query, variables })
        .then((res) => res.data)
        .catch((err) => err.response || err)
  );
}

import useSWR from "swr";
import useSWRMutation from "swr/mutation";
import axios from "axios";

const createRequest = () => {
    return axios.create()
}

const serverPath = "http://localhost:6969/graphql"

export function useGetRequest(query, variables) {
    const request = createRequest()
    return useSWR(serverPath, async (url,) => (
        await request.post(url, { query, variables })
            .then(res => res.data)
            .catch(err => err.response || err)
    ))
}

export function usePostRequest(query) {
    const request = createRequest()
    return useSWR(serverPath, async (url, { arg: variables }) => (
        await request.post(url, { query, variables })
            .then(res => res.data)
            .catch(err => err.response || err)
    ))
}


/**
 * curl --request POST \
    --header 'content-type: application/json' \
    --url http://localhost:6969/graphql \
    --data '{"query":"mutation Register($user: UserInput!) {\r\n  Register(user: $user) {\r\n    \r\n  }\r\n}","variables":{"user":null}}'
 */
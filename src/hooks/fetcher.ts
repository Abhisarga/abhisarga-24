import useSWR from "swr";
import useSWRMutation from "swr/mutation";
import axios from "axios";

const createRequest = () => {
    return axios.create()
}

const serverPath = "http://localhost:6969/graphiQL"

export function useGetter<T>(schema: string, data: T) {
    const request = createRequest()
    return useSWR(serverPath, async (url,) => await request.post(url, {}).then(res => res.data).catch(err => err.response || err))
}



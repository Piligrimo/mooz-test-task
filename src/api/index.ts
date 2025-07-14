import type { MediaItemsResponse } from "../utils/types";

const URL = 'https://www.omdbapi.com/?'


export const getMediaItems = async (search: string, page: number) : Promise<MediaItemsResponse> => {
    const params = new URLSearchParams();
    params.append("i", 'tt3896198');
    params.append("apikey", '8523cbb8');
    params.append("s", search);
    params.append("page", page.toString());
    
    const res = await fetch(URL+params)
    const data = await res.json()

    return data as unknown as MediaItemsResponse
}
import axios from "axios";
import { resourceLimits } from "worker_threads";
import { MusinsaItem } from "../type/interface";

const BASIC_URL = "https://www.anapioficeandfire.com/api/characters";

export const fetchItemList = (params: any, page: number): Promise<any> => {
    const url = `${BASIC_URL}?page=${page}&pageSize=10`;
    const result = axios.get(url, { params });
    return result;
};

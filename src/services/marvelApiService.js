import http from "@/services/httpService.js";
import CryptoJS from 'crypto-js';
import { publicKey, privateKey } from "../../env.js";

/**
 * Fetches data from the Marvel API.
 *
 * @param path
 * @returns {Promise<any|null>}
 */
export const fetchMarvel = async (path) => {

    const timestamp = new Date().getTime();
    const hashKey = CryptoJS.MD5(timestamp + privateKey + publicKey).toString();

    try {
        const {data} = await http.get(`http://gateway.marvel.com/v1/public/${path}?ts=${timestamp}&apikey=${publicKey}&hash=${hashKey}`);
        return data;
    } catch (error) {
        console.error('Error : ' + error.message);
        return null;
    }
};

import http from "@/services/httpService.js";
import CryptoJS from 'crypto-js';

/**
 * Fetches data from the Marvel API.
 *
 * @param path
 * @returns {Promise<any|null>}
 */
export const fetchMarvel = async (path) => {

    const timestamp = new Date().getTime();
    const publicKey = "ad03578d5d9923b867905c6485d3f738"
    const privateKey = "a023716308f5834888aad4c6bdb321c2a413d174"
    const hashKey = CryptoJS.MD5(timestamp + privateKey + publicKey).toString();

    try {
        const {data} = await http.get(`http://gateway.marvel.com/v1/public/${path}?ts=${timestamp}&apikey=${publicKey}&hash=${hashKey}`);
        return data;
    } catch (error) {
        console.error('Error : ' + error.message);
        return null;
    }
};

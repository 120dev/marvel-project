import http from "@/services/httpService.js";
import MarvelAuthService from "@/services/marvelAuthService.js";

/**
 * Fetches data from the Marvel API.
 *
 * @param path
 * @returns {Promise<any|null>}
 */
export const fetchMarvel = async (path) => {

    try {
        const hashKey = MarvelAuthService.getHashKey();
        const {data} = await http.get(`http://gateway.marvel.com/v1/public/${path}?${hashKey.url}`);
        return data;
    } catch (error) {
        window.location.href = "/auth?message=" + error.message;
    }

};

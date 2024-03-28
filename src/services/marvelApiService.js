import http from "@/services/httpService.js";

export const fetchMarvel2 = async (path) => {
    const ts = '1711461100';
    const apiKey = '880bab78d7a48f995f507ac84583f52c';
    const hash = '305d2371dcf12faa5aee4fc9eb5808e3';
    const baseUrl = 'http://gateway.marvel.com/' + path;
    const orderBy = '&orderBy=startYear';

    const url = `?ts=${ts}&apikey=${apiKey}&hash=${hash}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Failed to fetch Marvel series');
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching Marvel series:', error);
        throw error; // Propagate the error
    }
};

export const fetchMarvel = async (path) => {
    const ts = '1711461100';
    const apiKey = '880bab78d7a48f995f507ac84583f52c';
    const hash = '305d2371dcf12faa5aee4fc9eb5808e3';
    const params = {ts, apikey: apiKey, hash};
    try {
        const {data} = await http.get(path, {params});
        return data;
    } catch (error) {
        console.error('Error : ' + error.message)
    }

};
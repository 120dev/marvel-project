import CryptoJS from 'crypto-js';
import Cache from "@/services/cache.js";

export default {

    getHashKey() {

        const auth = Cache.get('auth');

        if (!auth || !auth.publicKey || !auth.privateKey) {
            throw new Error('Informations d\'authentification manquantes ou invalides.');
        }

        const timestamp = new Date().getTime();
        const hashKey = CryptoJS.MD5(timestamp + auth.privateKey + auth.publicKey).toString();

        return {
            ...auth,
            url: `ts=${timestamp}&apikey=${auth.publicKey}&hash=${hashKey}`
        };
    }
}

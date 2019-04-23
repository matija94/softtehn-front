import ApiHelper from "./api-helper";
import {ACCESS_TOKEN, TOKEN_EXPIRES_AT} from "../constants";

class BaseService {

    verifyUser(token, userEmail) {
        const data = {token: token.id_token, userEmail: userEmail};
        return ApiHelper.post("api/auth/login", data)
            .then(response => {
                const data = response.data;
                localStorage.setItem(ACCESS_TOKEN, token.id_token);
                localStorage.setItem(TOKEN_EXPIRES_AT, token.expires_at.toString());
                return data;
            });
    }

    logoutUser() {
        const data = {token: localStorage.getItem(ACCESS_TOKEN)};
        return ApiHelper.post("api/auth/logout", data)
            .then(response => {
                localStorage.removeItem(ACCESS_TOKEN);
                localStorage.removeItem(TOKEN_EXPIRES_AT);
                return response.data;
            })
            .catch((e) => {
                throw e
            });
    }
}

export default new BaseService();
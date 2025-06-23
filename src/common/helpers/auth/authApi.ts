import axios from "axios";
import { register } from "node:module";

const BaseURL = process.env.NEXT_PUBLIC_SERVER_URI;

const AuthAPI = {
    register: async (data: object) => {
        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };
        console.log(data);
        const response = await axios.post(`${BaseURL}/auth/register`, data, config);
        return response
    }
}
export default AuthAPI;
import axios from "axios";
import { config } from "../config/dotenv.config";

export const client=axios.create({
    baseURL:config.apiBaseUrl,
    headers: {
        'Content-Type': 'application/json',
    },
})
// console.log('API Base URL:', config.apiBaseUrl);

// console.log(client.defaults.baseURL!);

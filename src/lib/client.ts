import axios from "axios";
import { config } from "../config/dotenv.config";

export const client=axios.create({
    baseURL:config.apiBaseUrl,
})
import axios from "axios";
import { defaultUrl } from "../utils/defaultUrlapi";

export default class PostService {
    static async getAll(actionGet: string, parameters?: string){
        const apiKey = "630e6a908e75c512c18bfc8d4d24a0a87886eb96e6804c994e29eb2629870026"       
        const options = {
            method: "GET",
            url: `${defaultUrl}/?action=get_${actionGet}&${parameters}&APIkey=${apiKey}`,
        };
        const response = await axios.request(options);

        return response
    }
}
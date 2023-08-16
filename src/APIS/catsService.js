import axios from "axios";
import { catEndPoints as api} from "./cat"

export const getCatsData = async() => {
    const config = {
        method:"get",
        url:api.catsData()
    }
    try {
        console.log("config ===========",config);
        const response = await axios(config);
        return response;
    }
    catch(error) {
        throw error;
    }
}
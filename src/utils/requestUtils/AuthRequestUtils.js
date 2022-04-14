import { Config as config} from "../../Config";
import { postData, postDataWithToken } from "../../services/APIHandler";
import { RequestType } from "../../services/APIHandler";

export const signupUser = async ({...userData}) => {
    const url = `${config.apiHost}/auth/signup`
    const response = await postData(RequestType.POST, url, userData );
    console.log(`Auth response: ${JSON.stringify(response)}`);
    return response;
}

export const loginUser = async ({...userData}) => {
    const url = `${config.apiHost}/auth/login`
    const response = await postDataWithToken(RequestType.POST, url, userData);
    console.log(`Auth response: ${JSON.stringify(response)}`);
    return response;
}
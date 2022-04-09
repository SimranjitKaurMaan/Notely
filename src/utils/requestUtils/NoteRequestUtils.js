import { Config as config } from "../../Config";
import { fetchDataWithToken, postDataWithToken, RequestType } from "../../services/APIHandler";

export const postNote = async ({...note}) => {
    const url = `${config.apiHost}/notes`;
    const response = await postDataWithToken(RequestType.POST, url, {note});
    return response.notes;
}

export const fetchNotes = async () => {
    const url = `${config.apiHost}/notes`;
    const response = await fetchDataWithToken(RequestType.GET, url);
    return response.notes;
 }
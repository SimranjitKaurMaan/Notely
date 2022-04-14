import { Config as config } from "../../Config";
import { fetchDataWithToken, postDataWithParams, postDataWithToken, postRawDataWithParams, RequestType } from "../../services/APIHandler";

export const postNote = async ({...note}) => {
    const url = `${config.apiHost}/notes`;
    const response = await postDataWithToken(RequestType.POST, url, {note});
    return response.notes;
}

export const updateNote = async ({...note}) => {
    const url = `${config.apiHost}/notes`;
    const response = await postRawDataWithParams(RequestType.POST, url, note._id, {note});
    return response.notes;
}

export const fetchNotes = async () => {
    const url = `${config.apiHost}/notes`;
    const response = await fetchDataWithToken(RequestType.GET, url);
    return response.notes;
}

export const archiveNoteHandler = async ({...note}) => {
    const url = `${config.apiHost}/notes/archive/`;
    const response = await postDataWithParams(RequestType.POST, url, note._id);
    return response.archives;
 }

 export const deleteNoteHandler = async ({...note}) => {
    const url = `${config.apiHost}/notes`;
    const response = await postDataWithParams(RequestType.DELETE, url, note._id);
    return response.notes;
 }
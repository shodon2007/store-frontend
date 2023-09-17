import { URL } from "../consts/consts";
import { sendResponse } from "./sendResponse";

export async function getCatalog() {
    return await sendResponse(`${URL}/catalog`);
}
import axios from "axios";

export async function sendResponse(url, options = {}) {
    try {
        return await axios.get(url, options);
    } catch (e) {
        console.error("Ошибка:", e);
        throw new Error("Ошибка. Пожалуйста, попробуйте позже.");
    }
}
import axios from "axios";

const API_URL =
    "https://chrij-api.onrender.com/api/products";

export const getProducts = async () => {
    try {
        const response = await axios.get(
            `${API_URL}/getAll`
        );

        return response.data;
    } catch (error) {
        console.error(
            "PRODUCT FETCH ERROR:",
            error.response?.data || error.message
        );

        throw error;
    }
};
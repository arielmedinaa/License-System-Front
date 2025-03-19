import toast from "react-hot-toast";
const apiUrl = import.meta.env.VITE_API_URL;

export const getLicenses = async () => {
    try {
        const response = await fetch(`${apiUrl}licenses/`, {
            method: "GET"
        });
        if(!response.ok){
            toast.error("ERROR AL OBTENER LISTADO")
            return;
        }
        const data = await response.json()
        return data;
    } catch (error) {
        toast.error(error);
        console.log(error);
    }
}
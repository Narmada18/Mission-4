import { AppDispatch } from '../store';
import { errorOems, loadOems, successOems } from './oems.action';
import { toast } from "react-toastify";

export const getAllOemsApi = (queryString = "") => async (dispatch: AppDispatch) => {
    dispatch(loadOems());

    try {
        const token = localStorage.getItem("carToken");
        const headers: HeadersInit = {
            'Content-Type': 'application/json',
            'authorization': token ? JSON.parse(token) : ""
        };
        const serverUrl = "http://example.com"; // Replace with the actual server URL
        const res = await fetch(`${serverUrl}/oemspec?${queryString}`, { headers });

        const data = await res.json();

        if (res.ok) {
            dispatch(successOems(data.data));
        } else {
            dispatch(errorOems());
        }
    } catch (error: any) {
        console.log('error:', error);
        toast.error(error.message);
        dispatch(errorOems());
    }
};
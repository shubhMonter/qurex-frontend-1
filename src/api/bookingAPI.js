import {get, headers, put } from ".";
import { BaseSetting } from "../utils/common";

const BookingAPI = {
    getBookingById: async(id, token) => {
        try {
            const response = await get(BaseSetting.ApiDomain + `/booking/${id}`, {
                ...headers,
                ["x-auth-token"]: token,
            });
            if (response.data.status === 1) {
                return response.data.data;
            } else {
                return false;
            }
        } catch (error) {
            return false;
        }
    },
    cancelBookingById: async(id, token) => {
        try {
            const response = await put(
                BaseSetting.ApiDomain + `/booking/cancel/${id}`, {}, {...headers, ["x-auth-token"]: token }
            );
            if (response.data.status === 1) {
                return response.data.data || true;
            } else {
                return false;
            }
        } catch (error) {
            return false;
        }
    },
    rescheduleBooking: async(id, payload, token) => {
        try {
            const response = await put(
                BaseSetting.ApiDomain + `/booking/${id}`, payload, {...headers, ["x-auth-token"]: token }
            );
            if (response.data.status === 1) {
                return response.data.data || true;
            } else {
                return false;
            }
        } catch (error) {
            return false;
        }
    }
};

export default BookingAPI;
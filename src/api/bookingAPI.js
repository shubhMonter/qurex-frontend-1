import {get, headers } from ".";
import { BaseSetting } from "../utils/common";


const BookingAPI = {
    getBookingById: async(id, token) => {
        try {
            const response = await get(
                BaseSetting.ApiDomain + `/booking/${id}`, {...headers, ['x-auth-token']: token }
            );
            if (response.data.status === 1) {
                return response.data.data
            } else {
                return false
            }
        } catch (error) {
            return false
        }
    }
}

export default BookingAPI
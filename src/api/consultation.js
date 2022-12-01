import { headers, post } from "."
import { BaseSetting } from "../utils/common"

const consultationAPI = {
    createConsultation: async(req, token) => {
        try {
            const response = await post(BaseSetting.ApiDomain + '/consultation', req, {
                ...headers,
                ['x-auth-token']: token
            })
            return response.data.status === 1 ? response.data.data : false
        } catch (error) {
            return false
        }

    },
    getByUserId: async(id, token) => {
        try {
            const response = await post(BaseSetting.ApiDomain + '/consultation/getByUserId' + id, {
                ...headers,
                ['x-auth-token']: token
            })
            return response.data.status === 1 ? response.data.data : false
        } catch (error) {
            return false
        }
    }
}

export default consultationAPI
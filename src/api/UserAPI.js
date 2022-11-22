import { get, headers, post, put } from './index.js';
import { BaseSetting } from '../utils/common';
const apis = {
  getByUserId: async (id) => {
    // id = '635acdb6d73dc75ae04a8217'
    try {
      const response = await get(
        BaseSetting.doctorApiDomain + '/getByUserId/' + id
      );
      //console.log({ response });
      return response?.data?.status === 1 ? response?.data?.data : false;
    } catch (error) {
      return false;
    }
  },
  getMyBookings: async (userData, userHeaders) => {
    try {
      const response = await get(
        BaseSetting.ApiDomain + `/booking/getByUserId/${userData._id}`,
        userHeaders
      );
      // console.log({ response });
      return response.data.data;
    } catch (error) {}
  },
  getUser: async (id) => {
    try {
      const response = await get(BaseSetting.userApiDomain + `/${id}`);
      // console.log({ response });
      return response.data.data;
    } catch (error) {}
  },
  update: async (data, id) => {
    //console.log(id);
    try {
      const response = await put(BaseSetting.doctorApiDomain + '/' + id, data);
      // console.log({ response });
      return response?.data;
    } catch (error) {
      // console.log(error);
      return false;
    }
  },
};

export default apis;

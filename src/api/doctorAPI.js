import { get, headers, post, put } from './index.js';
import { BaseSetting } from '../utils/common';
const apis = {
  getAllDoctors: async () => {
    try {
      const response = await get(BaseSetting.doctorApiDomain);

      return response?.data?.status === 1 ? response?.data?.data : false;
    } catch (error) {
      return error;
    }
  },
  getDrByUserId: async (id) => {
    // id = '635acdb6d73dc75ae04a8217'
    try {
      const response = await get(BaseSetting.userApiDomain + '/' + id);
      // console.log(response);
      return response?.data?.status === 1 ? response?.data?.data : false;
    } catch (error) {
      return false;
    }
  },
  getByDoctorId: async (doctorData) => {
    // id = '635acdb6d73dc75ae04a8217'
    try {
      if (navigator.onLine) {
        const response = await get(
          BaseSetting.doctorApiDomain + '/getByDoctorId/' + doctorData?.id
        );
        //  console.log(response);
        return response?.data?.status === 1 ? response?.data?.data : false;
      } else {
        return false;
      }
    } catch (error) {
      return false;
    }
  },
  getMyBookings: async (doctorData, doctorHeaders) => {
    try {
      if (navigator.onLine) {
        const response = await get(
          BaseSetting.ApiDomain + `/booking/getByUserId/${doctorData._id}`,
          doctorHeaders
        );
        // console.log(response.data.data);
        return response.data.data;
        //! Fake data
        // return {
        //   status: 1,
        //   data: [
        //     {
        //       payment: {
        //         razorPayOrderId: 'order_KbrLEOfDPRFt8H',
        //       },
        //       _id: '6364ae279d7729eba90318b4',
        //       patientId: '63517faa27034150ae8ad190',
        //       doctorId: '6360ebd882226cefd0b8e745',
        //       meta: 'test',
        //       from: '2022-11-07T12:30:00.000Z',
        //       to: '2022-11-07T13:00:00.000Z',
        //       fees: 5000,
        //       isPaid: false,
        //       status: 'PendingConfirmation',
        //       active: true,
        //       createdAt: '2022-11-04T06:16:07.111Z',
        //       updatedAt: '2022-11-04T06:16:07.586Z',
        //       bookingId: 'BK_172945',
        //       __v: 0,
        //       sessionId: {
        //         _id: '6364ae279d7729eba90318b6',
        //         patientId: '63517faa27034150ae8ad190',
        //         doctorId: '6360ebd882226cefd0b8e745',
        //         bookingId: '6364ae279d7729eba90318b4',
        //         channelName: 'BK_965649',
        //         startTime: '2022-11-07T12:30:00.000Z',
        //         endTime: '2022-11-07T13:00:00.000Z',
        //         bumpUp: 0,
        //         createdAt: '2022-11-04T06:16:07.349Z',
        //         updatedAt: '2022-11-04T06:16:07.349Z',
        //         __v: 0,
        //       },
        //     },
        //   ],
        // };
        // return response.data
      } else {
        return false;
      }
    } catch (error) {}
  },
  update: async (data, id = '635ad04e266b3ac88841902c') => {
    try {
      if (navigator.onLine) {
        const response = await put(
          BaseSetting.doctorApiDomain + '/' + id,
          data
        );
        console.log(response?.data);
        return response?.data;
      } else {
        return false;
      }
    } catch (error) {
      return false;
    }
  },
};

export default apis;

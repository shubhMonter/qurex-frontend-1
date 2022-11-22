import { get, headers, post } from '../api';
import { BaseSetting } from '../utils/common';

const userId = async () => {
  try {
    if (navigator.onLine) {
      const response = await post(
        BaseSetting.userApiDomain + '/auth',
        {
          password: '12345678',
          mobile: '6666666666',
        },
        { headers }
      );

      // setApiData(response.data.data);
      const result = await response.data;
      return result;
      //console.log(filteredItems);
    } else {
    }
  } catch (error) {}
};

export default userId;

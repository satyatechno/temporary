import axios from 'axios';
import config from '../../config';
import Cookies from 'js-cookie'; 


const axiosInstance = axios.create({
  baseURL: config.baseURL,
  headers: {
    'Accept-Language': 'en',
  },
});
axiosInstance.interceptors.request.use(
  (config) => {
    console.log('congfig-url', config.url);
    console.log('config-data', config.data);
    console.log('config-params', config.params);
    console.log('config-header', Cookies.get('userToken'));
    if (Cookies.get('userToken')) {
      config.headers['Authorization'] = `Bearer ${ Cookies.get(
        'userToken'
      )}`;
    }
    return config;
  },
  (err) => {
    console.error('error', err);
    return err;
  }
);
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error?.response?.data) {
      console.log('error', error?.response?.data);
      if (error?.response?.data?.message?.length)
        alert(error?.response?.data?.message);
    } else {
      console.log('error', error);
    }

    if (error?.response?.data?.statusCode == '10003') {
      alert('Session Expired');
      Cookies.clear();
      window.location.href = '/';
    }
    throw error;
  }
);
export default axiosInstance;

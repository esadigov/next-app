import axios, { AxiosInstance } from 'axios';

// singleton design pattern, used in order to create one HTTP object for the whole application with one API URL.
export const HTTP = (() => {
  let $client: AxiosInstance;

  return {
    createClient(url: string): AxiosInstance {
      if ($client) {
        return $client;
      }

      $client = axios.create({
        baseURL: url,
        responseType: 'json',
      });

      return $client;
    },
    client() {
      const token = localStorage.getItem('token');

      if (token) {
        $client.defaults.headers.common.Authorization = `Bearer ${token}`;
      }

      return $client;
    },
  };
})();

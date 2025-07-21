import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { getTokenFromAsyncStorage } from '../services/authservices';

/**
 * Retrieves the token from async storage
 */
const getToken = async (): Promise<string | null> => {
  const token = await getTokenFromAsyncStorage();
  return token;
};

/**
 * Handles GET requests with optional authorization
 */
export const get = async (url: string): Promise<AxiosResponse> => {
  const token = await getToken();
  console.log('[GET]', url, token);

  const config: AxiosRequestConfig = {
    headers: {
      Authorization: token ? `Bearer ${token}` : undefined,
    },
    timeout: 20000,
  };

  try {
    const response = await axios.get(url, config);
    console.log('[GET RESPONSE]', response);
    return response;
  } catch (error: any) {
    console.error('[GET ERROR]', error);
    throw formatAxiosError(error);
  }
};

/**
 * Handles GET requests with support for AbortController
 */
export const getWithAbort = async (
  url: string,
  options: { signal?: AbortSignal } = {}
): Promise<AxiosResponse> => {
  const token = await getToken();
  console.log('[GET ABORT]', url, token);

  const config: AxiosRequestConfig = {
    headers: {
      Authorization: token ? `Bearer ${token}` : undefined,
    },
    timeout: 20000,
    signal: options.signal,
  };

  try {
    const response = await axios.get(url, config);
    console.log('[GET ABORT RESPONSE]', response);
    return response;
  } catch (error: any) {
    console.error('[GET ABORT ERROR]', error);
    if (axios.isCancel(error)) throw new Error('Request canceled');
    throw formatAxiosError(error);
  }
};

/**
 * Handles POST requests with optional content type
 */
export const post = async (
  url: string,
  postData?: any,
  contentType: string = 'application/json'
): Promise<AxiosResponse> => {
  const token = await getToken();
  console.log('[POST]', url, postData);

  const config: AxiosRequestConfig = {
    headers: {
      Authorization: token ? `Bearer ${token}` : undefined,
      'Content-Type': contentType,
    },
  };

  try {
    const response = await axios.post(url, postData, config);
    console.log('[POST RESPONSE]', response);
    return response;
  } catch (error: any) {
    console.error('[POST ERROR]', error);
    throw formatAxiosError(error);
  }
};

/**
 * Handles PUT requests
 */
export const put = async (url: string, postData: any): Promise<AxiosResponse> => {
  const token = await getToken();
  console.log('[PUT]', url, postData);

  const config: AxiosRequestConfig = {
    headers: {
      Authorization: token ? `Bearer ${token}` : undefined,
    },
    timeout: 20000,
  };

  try {
    const response = await axios.put(url, postData, config);
    console.log('[PUT RESPONSE]', response);
    return response;
  } catch (error: any) {
    console.error('[PUT ERROR]', error);
    throw formatAxiosError(error);
  }
};

/**
 * Handles DELETE requests
 */
export const deleteRequest = async (
  url: string,
  params?: any,
  contentType: string = 'application/json'
): Promise<AxiosResponse> => {
  const token = await getToken();
  console.log('[DELETE]', url, params);

  const config: AxiosRequestConfig = {
    headers: {
      Authorization: token ? `Bearer ${token}` : undefined,
      'Content-Type': contentType,
    },
    timeout: 20000,
    data: JSON.stringify(params),
  };

  try {
    const response = await axios.delete(url, config);
    console.log('[DELETE RESPONSE]', response);
    return response;
  } catch (error: any) {
    console.error('[DELETE ERROR]', error);
    throw formatAxiosError(error);
  }
};

/**
 * Handles POST requests with retry logic (e.g., for image uploads)
 */
export const postImageRequest = async (
  url: string,
  postData?: any,
  contentType: string = 'application/json',
  retries: number = 3
): Promise<AxiosResponse> => {
  const token = await getToken();
  console.log('[POST IMAGE]', url, postData);

  const config: AxiosRequestConfig = {
    headers: {
      Authorization: token ? `Bearer ${token}` : undefined,
      'Content-Type': contentType,
    },
    timeout: 20000,
  };

  for (let attempt = 0; attempt < retries; attempt++) {
    try {
      const response = await axios.post(url, postData, config);
      console.log(`[POST IMAGE RESPONSE - Attempt ${attempt + 1}]`, response);
      return response;
    } catch (error: any) {
      console.error(`[POST IMAGE ERROR - Attempt ${attempt + 1}]`, error);

      if (error.response) {
        throw new Error(error.response.data.message || 'Request failed');
      } else if (error.request && attempt === retries - 1) {
        throw new Error('No response received from the server');
      } else if (!error.response && !error.request && attempt === retries - 1) {
        throw new Error(error.message);
      }
    }
  }

  throw new Error('Image request failed after retries');
};

/**
 * Common error formatter for Axios errors
 */
const formatAxiosError = (error: any): Error => {
  if (error.response) {
    return new Error(error.response.data.message || 'Request failed');
  } else if (error.request) {
    return new Error('No response received from the server');
  } else {
    return new Error(error.message);
  }
};

export default {
  get,
  post,
  put,
  deleteRequest,
  postImageRequest,
  getWithAbort,
};

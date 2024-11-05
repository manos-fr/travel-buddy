import axios from 'axios';

const { GEOAPIFY_API_KEY, GEOAPIFY_API_URL } = process.env;

export const searchGeoapify = async (params) => {
  try {
    const { name, country } = params;

    if (!name) {
      throw new Error('BAD REQUEST: Missing name');
    }

    const term = encodeURI(name);
    const filter = country ? `countrycode:${country}` : '';
    console.log({ term, filter });

    const axiosResponse = await axios.request({
      method: 'get',
      url: filter
        ? `${GEOAPIFY_API_URL}?text=${term}&format=json&filter=${filter}&limit=50&apiKey=${GEOAPIFY_API_KEY}`
        : `${GEOAPIFY_API_URL}?text=${term}&format=json&limit=50&apiKey=${GEOAPIFY_API_KEY}`,
    });

    if (!axiosResponse.data) {
      throw new Error('API returned no data');
    }

    return axiosResponse.data?.results || [];
  } catch (error) {
    console.log({ error });
  }
};

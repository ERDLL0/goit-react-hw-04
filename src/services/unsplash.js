import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: `Client-ID ${import.meta.env.VITE_UNSPLASH_ACCESS_KEY}`,
  },
});

export const fetchImages = async (query, page = 1) => {
  const response = await instance.get('/search/photos', {
    params: {
      query,
      page,
      per_page: 12,
      orientation: 'landscape',
    },
  });
  return response.data;
};

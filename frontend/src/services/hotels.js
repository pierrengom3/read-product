import api from './api';

export const getHotels = async () => {
  const response = await api.get('hotels/');
  return response.data;
};

export const createHotel = async (hotelData) => {
  const response = await api.post('hotels/', hotelData);
  return response.data;
};
import api from './api';

export const getHotels = async () => {
  const response = await api.get('hotels/');
  return response.data;
};

export const createHotel = async (hotelData) => {
  const response = await api.post('hotels/', hotelData);
  return response.data;
};

export const deleteHotel = async (id) => {
  const response = await api.delete(`hotels/${id}/`);
  return response.data;
};
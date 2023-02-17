import ApiService from '@/services/api';
export const getListCategory = async ({ params }) => {
  const response = await ApiService.get(`/category/list`, { params });
  return response.data;
};

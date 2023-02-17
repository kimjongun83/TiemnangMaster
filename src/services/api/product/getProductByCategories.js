import ApiService from '@/services/api';
export const getProductByCategories = async ({ body }) => {
  const response = await ApiService.post(`/product/category`, body);
  return response.data;
};

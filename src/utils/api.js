const API_BASE = "https://your-api.com";

export const getCategories = async () => {
  const response = await fetch(`${API_BASE}/categories/`);
  if (!response.ok) throw new Error(`Ошибка: ${response.status}`);
  return response.json();
};

export const getCategoryDetail = async (uuid) => {
  const response = await fetch(`${API_BASE}/categories/${uuid}/`);
  if (!response.ok) throw new Error(`Ошибка: ${response.status}`);
  return response.json();
};

export const getItemDetail = async (uuid) => {
  const response = await fetch(`${API_BASE}/items/${uuid}/`);
  if (!response.ok) throw new Error(`Ошибка: ${response.status}`);
  return response.json();
};
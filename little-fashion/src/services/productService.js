import * as request from "../lib/request";

const baseUrl = "http://localhost:3030/data/products";

export const create = async (productData) => {
  const result = await request.post(baseUrl, productData);

  return result;
};

export const edit = async (productId, productData) => {
  const result = await request.put(`${baseUrl}/${productId}`, productData);

  return result;
};

export const getAll = async () => {
  const result = await request.get(baseUrl);

  return result;
};

export const getOne = async (productId) => {
  const result = await request.get(`${baseUrl}/${productId}`);

  return result;
};

export const remove = async (productId) => {
  request.remove(`${baseUrl}/${productId}`);
};

export const getLatest = async () => {
  const query = new URLSearchParams({
    // sortBy: `_createdOn desc`,
    offset: 0,
    pageSize: 3,
  });

  const result = await request.get(`${baseUrl}?${query}`);
  return result;
};

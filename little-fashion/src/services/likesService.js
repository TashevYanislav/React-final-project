import * as request from "../lib/request";

const baseUrl = "http://localhost:3030/data/likes";

export const create = async (productId, usermail) => {
  const newLike = await request.post(baseUrl, {
    productId,
    usermail,
  });
  return newLike;
};
export const getAll = async (productId) => {
  const query = new URLSearchParams({
    where: `productId="${productId}"`,
  });
  const result = await request.get(`${baseUrl}?${query}`);
  return result;
};

export const remove = async (productId) => {
  request.remove(`${baseUrl}/${productId}`);
};

export const update = async (userId) => {
  const result = await request.put(`${baseUrl}/${userId}`);
  console.log(result);
  return result;
};

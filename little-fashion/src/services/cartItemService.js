import * as request from "../lib/request";

const baseUrl = "http://localhost:3030/data/cartItem";

export const create = async (name, imageUrl, price) => {
  const newCartItem = await request.post(baseUrl, {
    name,
    imageUrl,
    price,
  });
  return newCartItem;
};

export const getAll = async (userId) => {
  const query = new URLSearchParams({
    where: `_ownerId="${userId}"`,
  });
  const result = await request.get(`${baseUrl}?${query}`);

  return result;
};

export const remove = async (productId) => {
  request.remove(`${baseUrl}/${productId}`);
};
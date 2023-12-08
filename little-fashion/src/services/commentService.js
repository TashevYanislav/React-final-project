import * as request from "../lib/request";

const baseUrl = "http://localhost:3030/data/comments";

export const create = async (productId, text, usermail) => {
  const newComment = await request.post(baseUrl, {
    productId,
    text,
    usermail,
  });
  console.log(newComment);
  return newComment;
};

export const getAll = async (productId) => {
  const query = new URLSearchParams({
    where: `productId="${productId}"`,
    load: `owner=_ownerId:users`,
  });
  const result = await request.get(`${baseUrl}?${query}`);

  return result;
};

export const remove = async (productId) => {
  request.remove(`${baseUrl}/${productId}`);
};

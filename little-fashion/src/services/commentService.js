import * as request from "../lib/request";

const baseUrl = "http://localhost:3030/jsonstore/comments";

export const create = async (productId, username, text) => {
  const newComment = await request.post(baseUrl, {
    productId,
    username,
    text,
  });
  return newComment;
};

export const getAll = async (productId) => {

  const query = new URLSearchParams({
    where: `productId="${productId}"`
  })


  const result = await request.get(`${baseUrl}`);

  return Object.values(result).filter(comment=>comment.productId===productId);  
};

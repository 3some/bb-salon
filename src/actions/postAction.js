import * as types from './actionTypes';
import { url } from '../config';
import 'whatwg-fetch';


export function loadPostSuccess(posts) {
  return { type: types.LOAD_POST_SUCCESS, posts } ;
}


export function loadPost() {
    return fetch(`${url}/product`);
}




export function orderCart(listOrder) {
  return fetch(`${url}/order`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      data: listOrder
    })
  })
}

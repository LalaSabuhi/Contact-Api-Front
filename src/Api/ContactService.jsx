import axios from "axios";

const API_URL ='http://localhost:8080/contacts';

export async function saveContact(contact){
  return await async.post(API_URL, contact);
}
export async function getContacts(page=0, size=10){
  return await async.get(`${API_URL}?page=${page}&size=${size}`);
}
export async function getContact(id){
  return await async.post(`${API_URL}/${id}`);
}
export async function updateContact(contact){
  return await async.post(API_URL, contact);
}
export async function updatePhoto(formData){
  return await async.put(`${API_URL}/photo`, formData);
}
export async function deleteContact(id){
  return await async.delete(`${API_URL}/${id}`);
}

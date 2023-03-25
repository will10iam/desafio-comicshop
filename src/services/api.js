import md5 from "md5";


const timeStamp = new Date().getTime();
const publicKey = 'f0ee758d0289f609c9e9173b89f8786a';
const privateKey = '9d949b51865618a55b463e53a36049cdb1cd1a09';
const hash = md5(timeStamp + privateKey + publicKey);
const baseURL = 'https://gateway.marvel.com/v1/public/comics'


export { timeStamp, publicKey, hash, baseURL };
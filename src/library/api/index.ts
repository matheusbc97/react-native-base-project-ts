import axios from 'axios';
import {API} from './constants';

const instance = axios.create({
  baseURL: API,
  timeout: 10000,
});

export default instance;

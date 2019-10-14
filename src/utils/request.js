import axios from 'axios';
//引入路径
import { baseUrl } from './url'

// 获取配置文件中 的 baseurl
// const baseUrl = process.env.REACT_APP_API_URL
const instance = axios.create({
    baseURL : baseUrl
});

export default instance;
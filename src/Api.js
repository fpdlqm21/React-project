/**Axios를 밖으로 빼내어 참조할 수 있도록 함 */
import axios from "axios";

const Api = axios.create({
    baseURL: 'http://localhost:4000/',
});

export default Api;
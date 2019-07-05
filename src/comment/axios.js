import axios from 'axios';
export const postRequest = (url, params) => {
    return axios({
        method: 'post',
        url: `http://127.0.0.1:3000${url}`,//ES6的模板字符串语法

      
        data: params,
})
}

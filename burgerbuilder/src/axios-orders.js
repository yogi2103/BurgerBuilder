import axios from 'axios';

const instance=axios.create({
    baseURL:'https://cart-30e0a.firebaseio.com/'
})

export default instance;

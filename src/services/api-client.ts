import axios from "axios";

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '032cfe211985431cb2584244a720fded'
  }
})
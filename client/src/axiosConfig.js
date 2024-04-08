import axios from 'axios'

const axiosBase = axios.create({
  //Local server
  baseURL: 'http://localhost:5500/api',

  //Remote server on Render.com
  // baseURL: "https://eva-forum.onrender.com/api"

})
export default axiosBase;
// import fetch  from './index'
import Axios from './index';
const api = {};

// 新歌推荐
api.newsong= params => Axios.get('/personalized/newsong', params);
  
// 搜索歌曲
api.search= params => Axios.get('/search', params);

// 歌曲详情
api.detail= params => Axios.get('/song/detail', params);

// 音乐URL
api.songUrl= params => Axios.get('/song/url', params);

// 歌词
api.lyric= params => Axios.get('/lyric', params);

// banner
api.getbanner= params => Axios.get('/banner', params);

// 歌单
api.playlist= params => Axios.get('/top/playlist/highquality', params);

export default api;
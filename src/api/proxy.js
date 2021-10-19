import fetch  from './index'

// 新歌推荐
export function newsong(data){
   return fetch('get',`/personalized/newsong`,data)
} 

//搜索歌曲
export function search(data) {
   return fetch('get', `/search?keywords=${data.keywords}`,data );
}

//歌曲详情
export function detail(data) {
   return fetch('get', `/song/detail?ids=${data.id}`,data );
}

//音乐URL
export function songUrl(data) {
   return fetch('get', `/song/url?id=${data.id}`,data );
}

//歌词
export function lyric(data) {
   return fetch('get', `/lyric?id=${data.id}`,data );
}

//banner
export function getbanner() {
   return fetch('get', `/banner?type=2`, );
}
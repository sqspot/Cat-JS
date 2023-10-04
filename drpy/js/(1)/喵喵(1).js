var rule = {
    title:'喵喵',
    host:'https://www.2345ka.com',
    // homeUrl:'/',
    url:'/t/fyclass/fyfilter/fypage.html',
    searchUrl:'/s/**/fypage.html',
    searchable:2,
    quickSearch:0,
    headers:{
        'User-Agent':'UC_UA'
    },
    cate_exclude:'电影|电视剧|综艺|动漫|音乐|福利',
    filter:{
	1: [{'key': 'by', 'name': '排序', 'value': [{'n': '时间', 'v': ''}, {'n': '人气', 'v': 'hits'}, {'n': '评分', 'v': 'score'} ]}], 
	2: [{'key': 'by', 'name': '排序', 'value': [{'n': '时间', 'v': ''}, {'n': '人气', 'v': 'hits'}, {'n': '评分', 'v': 'score'} ]}], 
	3: [{'key': 'by', 'name': '排序', 'value': [{'n': '时间', 'v': ''}, {'n': '人气', 'v': 'hits'}, {'n': '评分', 'v': 'score'} ]}], 
	4: [{'key': 'by', 'name': '排序', 'value': [{'n': '时间', 'v': ''}, {'n': '人气', 'v': 'hits'}, {'n': '评分', 'v': 'score'} ]}], 
	6: [{'key': 'by', 'name': '排序', 'value': [{'n': '时间', 'v': ''}, {'n': '人气', 'v': 'hits'}, {'n': '评分', 'v': 'score'} ]}], 
	5: [{'key': 'by', 'name': '排序', 'value': [{'n': '时间', 'v': ''}, {'n': '人气', 'v': 'hits'}, {'n': '评分', 'v': 'score'} ]}]},
	
	
filter_url:'{{fl.by}}',
class_name:'電影&電視劇&綜藝&動漫&音樂&    ',
class_url:'1&2&3&4&6&5',
    timeout:5000,
    class_parse:'.bm-item-list a:gt(0):lt(7);a&&Text;a&&href;/(\\d+).html',
    play_parse:true,
    lazy:'',
    limit:5,
    推荐:'.movie-list-body;.movie-list-item;.movie-title&&Text;.movie-post-lazyload&&data-original;.movie-rating&&Text;a&&href',
    double:true, // 推荐内容是否双层定位
    一级:'.movie-list-body .movie-list-item;.movie-title&&Text;.Lazy&&data-original;.movie-rating&&Text;a&&href',
    二级:{"title":"h1.movie-title&&Text;.data:eq(1)&&Text","img":".poster img&&src","desc":".cr3.starLink&&Text","content":".detailsTxt&&Text","tabs":".play_source_tab a","lists":".content_playlist:eq(#id) a"},
    搜索:'.vod-search-list;.movie-title&&Text;.Lazy&&data-original;.getop&&Text;a&&href;.getop:eq(-1)&&Text',
}
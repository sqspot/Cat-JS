var rule = {
    title:'蛋蛋魔法',
    host:'https://ddmf.net',
    // homeUrl:'/',
    url:'/vodshow/fyfilter.html',
    searchUrl:'/vodsearch/**----------fypage---.html',
    searchable:2,//是否启用全局搜索,
    quickSearch:0,//是否启用快速搜索,
    filterable:1,//是否启用分类筛选,
    headers:{//网站的请求头,完整支持所有的,常带ua和cookies
        'User-Agent':'MOBILE_UA',
        // "Cookie": "searchneed=ok"
    },
    filter_url:'{{fl.cateId}}-{{fl.area}}-{{fl.by}}-{{fl.class}}-{{fl.lang}}-{{fl.letter}}---fypage---{{fl.year}}',
	filter: {
    
    "5":[
    {"key":"cateId","name":"分类","value":[{"n":"全部","v":"5"},{"n":"三级伦理","v":"17"},{"n":"网红主播","v":"18"},{"n":"海外抖音","v":"37"}]},
    {"key":"area","name":"地区","value":[{"n":"全部","v":""},{"n":"大陆","v":"%E5%A4%A7%E9%99%86"},{"n":"香港","v":"%E9%A6%99%E6%B8%AF"},{"n":"台湾","v":"%E5%8F%B0%E6%B9%BE"},{"n":"美国","v":"%E7%BE%8E%E5%9B%BD"},{"n":"法国","v":"%E6%B3%95%E5%9B%BD"},{"n":"英国","v":"%E8%8B%B1%E5%9B%BD"},{"n":"日本","v":"%E6%97%A5%E6%9C%AC"},{"n":"韩国","v":"%E9%9F%A9%E5%9B%BD"},{"n":"德国","v":"%E5%BE%B7%E5%9B%BD"},{"n":"泰国","v":"%E6%B3%B0%E5%9B%BD"},{"n":"印度","v":"%E5%8D%B0%E5%BA%A6"},{"n":"意大利","v":"%E6%84%8F%E5%A4%A7%E5%88%A9"},{"n":"西班牙","v":"%E8%A5%BF%E7%8F%AD%E7%89%99"},{"n":"加拿大","v":"%E5%8A%A0%E6%8B%BF%E5%A4%A7"},{"n":"其他","v":"%E5%85%B6%E4%BB%96"}]},
    {"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015","v":"2015"},{"n":"2014","v":"2014"},{"n":"2013","v":"2013"},{"n":"2012","v":"2012"},{"n":"2011","v":"2011"}]},
    {"key":"lang","name":"语言","value":[{"n":"全部","v":""},{"n":"国语","v":"国语"},{"n":"英语","v":"英语"},{"n":"粤语","v":"粤语"},{"n":"闽南语","v":"闽南语"},{"n":"韩语","v":"韩语"},{"n":"日语","v":"日语"},{"n":"其它","v":"其它"}]},
    {"key":"letter","name":"字母","value":[{"n":"全部","v":""},{"n":"A","v":"A"},{"n":"B","v":"B"},{"n":"C","v":"C"},{"n":"D","v":"D"},{"n":"E","v":"E"},{"n":"F","v":"F"},{"n":"G","v":"G"},{"n":"H","v":"H"},{"n":"I","v":"I"},{"n":"J","v":"J"},{"n":"K","v":"K"},{"n":"L","v":"L"},{"n":"M","v":"M"},{"n":"N","v":"N"},{"n":"O","v":"O"},{"n":"P","v":"P"},{"n":"Q","v":"Q"},{"n":"R","v":"R"},{"n":"S","v":"S"},{"n":"T","v":"T"},{"n":"U","v":"U"},{"n":"V","v":"V"},{"n":"W","v":"W"},{"n":"X","v":"X"},{"n":"Y","v":"Y"},{"n":"Z","v":"Z"}]},
    {"key":"by","name":"排序","value":[{"n":"最新","v":"time"},{"n":"最热","v":"hits"},{"n":"评分","v":"score"}]}],
    "6":[
    {"key":"cateId","name":"分类","value":[{"n":"全部","v":"6"},{"n":"福利图片","v":"/art/index"},{"n":"爱蜜社","v":"/arttype/34"},{"n":"头条女神","v":"/arttype/35"},{"n":"美媛馆","v":"/arttype/36"},{"n":"嗲囡囡","v":"/arttype/38"},{"n":"波萝社","v":"/arttype/39"},{"n":"秀人网","v":"/arttype/42"},{"n":"魅妍社","v":"/arttype/40"},{"n":"爱尤物","v":"/arttype/41"},{"n":"尤果网","v":"/arttype/43"},{"n":"推女神","v":"/arttype/44"},{"n":"DGC套图","v":"/arttype/45"},{"n":"尤蜜荟","v":"/arttype/46"},{"n":"模范学院","v":"/arttype/47"},{"n":"尤物馆","v":"/arttype/48"},{"n":"优星馆","v":"/arttype/49"},{"n":"蜜桃社","v":"/arttype/50"},{"n":"影私荟","v":"/arttype/51"},{"n":"顽味生活","v":"/arttype/52"},{"n":"花の颜","v":"/arttype/54"},{"n":"御女郎","v":"/arttype/55"}]},
    {"key":"area","name":"地区","value":[{"n":"全部","v":""},{"n":"国产","v":"国产"},{"n":"日本","v":"日本"},{"n":"欧美","v":"欧美"},{"n":"其他","v":"其他"}]},
    {"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015","v":"2015"},{"n":"2014","v":"2014"},{"n":"2013","v":"2013"},{"n":"2012","v":"2012"},{"n":"2011","v":"2011"}]},
    {"key":"lang","name":"语言","value":[{"n":"全部","v":""},{"n":"国语","v":"国语"},{"n":"英语","v":"英语"},{"n":"粤语","v":"粤语"},{"n":"闽南语","v":"闽南语"},{"n":"韩语","v":"韩语"},{"n":"日语","v":"日语"},{"n":"其它","v":"其它"}]},
    {"key":"letter","name":"字母","value":[{"n":"全部","v":""},{"n":"A","v":"A"},{"n":"B","v":"B"},{"n":"C","v":"C"},{"n":"D","v":"D"},{"n":"E","v":"E"},{"n":"F","v":"F"},{"n":"G","v":"G"},{"n":"H","v":"H"},{"n":"I","v":"I"},{"n":"J","v":"J"},{"n":"K","v":"K"},{"n":"L","v":"L"},{"n":"M","v":"M"},{"n":"N","v":"N"},{"n":"O","v":"O"},{"n":"P","v":"P"},{"n":"Q","v":"Q"},{"n":"R","v":"R"},{"n":"S","v":"S"},{"n":"T","v":"T"},{"n":"U","v":"U"},{"n":"V","v":"V"},{"n":"W","v":"W"},{"n":"X","v":"X"},{"n":"Y","v":"Y"},{"n":"Z","v":"Z"}]},
    {"key":"by","name":"排序","value":[{"n":"最新","v":"time"},{"n":"最热","v":"hits"},{"n":"评分","v":"score"}]}]

},
	filter_def:{
		
		5:{cateId:'5'}
       // 6:{cateId:'6'}
	
	},
    class_name:'午夜場',
class_url:'5',
    play_parse:true,
    lazy:'',
    limit:6,
    推荐:'.module-item;.module-item-cover&&.module-item-pic;a&&title;.lazyloaded&&data-src;.module-item-text&&Text;a&&href',
    double:true, // 推荐内容是否双层定位
    一级:'.module-list&&.module-item;.module-item-pic&&a&&title;.lazyloaded&&data-src;.module-item-text&&Text;a&&href',
    二级:{"title":"h1&&Text;.video-info-aux.scroll-content&&Text","img":".lazyload&&data-src","desc":".module-info-content&&.module-info-item:eq(-2)&&Text;.module-info-content&&.module-info-item:eq(-2)&&Text;.module-info-content&&.module-info-item:eq(-2)&&Text;.video-info-items:eq(1)&&.video-info-item.video-info-actor&&Text;.video-info-items:eq(0)&&.video-info-item.video-info-actor&&Text","content":".video-info-item.video-info-content.vod_content&&Text","tabs":".module-tab-content&&.module-tab-item.tab-item","lists":".module-blocklist.scroll-box.scroll-box-y:eq(0)&&.scroll-content a"},
    搜索:'.module-search-item;.lazy.lazyload&&alt;img&&data-src;.video-serial&&Text;a.video-serial&&href',
}

var rule = Object.assign(muban.首图: {	
            title: '泥视频',	
            host: 'https://www.nivod.tv',	
            url: '/vodshow/fyclass--------fypage---/',	
            searchUrl: '/vodsearch/**----------fypage---.html',	
            searchable: 2,//是否启用全局搜索,	
            quickSearch: 0,//是否启用快速搜索,	
            filterable: 0,//是否启用分类筛选,	
            headers: {//网站的请求头,完整支持所有的,常带ua和cookies	
                'User-Agent': 'MOBILE_UA',	
                // "Cookie": "searchneed=ok"	
            },	
            class_parse: '.myui-header__menu li.hidden-sm:gt(0):lt(5);a&&Text;a&&href;/(\\d+).html',	
            play_parse: true,	
            lazy: '',	
            limit: 6,	
            推荐: 'ul.myui-vodlist.clearfix;li;a&&title;a&&data-original;.pic-text&&Text;a&&href',	
            double: true, // 推荐内容是否双层定位	
            一级: '.myui-vodlist li;a&&title;a&&data-original;.pic-text&&Text;a&&href',	
            二级: {	
                "title": ".myui-content__detail .title&&Text;.myui-content__detail p:eq(-2)&&Text",	
                "img": ".myui-content__thumb .lazyload&&data-original",	
                "desc": ".myui-content__detail p:eq(0)&&Text;.myui-content__detail p:eq(1)&&Text;.myui-content__detail p:eq(2)&&Text",	
                "content": ".content&&Text",	
                "tabs": ".nav-tabs:eq(0) li",	
                "lists": ".myui-content__list:eq(#id) li"	
            },	
            搜索: '#searchList li;a&&title;.lazyload&&data-original;.text-muted&&Text;a&&href;.text-muted:eq(-1)&&Text',	
        });	

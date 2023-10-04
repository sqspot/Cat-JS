var rule = Object.assign(muban.mxone5,{
//模板:'mxone5',
title:'量子影视',
host:'http://www.lzizy9.com',
url:'/index.php/vod/show{{fl.a}}{{fl.by}}{{fl.c}}/id/fyclass/page/fypage.html',
searchUrl:'/index.php/vod/search.html?wd=**',
cate_exclude:'网址',

filter:{
1:[{'key':'id','name':'类型','value':[{'n':'全部','v':'/id/1'},{'n':'动作片','v':'/id/6'},{'n':'喜剧片','v':'/id/7'},{'n':'科幻片','v':'/id/8'},{'n':'恐怖片','v':'/id/9'},{'n':'爱情片','v':'/id/10'},{'n':'剧情片','v':'/id/11'},{'n':'战争片','v':'/id/12'},{'n':'记录片','v':'/id/20'}]},{'key':'c','name':'剧情','value':[{'n':'全部','v':''},{'n':'喜剧','v':'/class/%E5%96%9C%E5%89%A7'},{'n':'爱情','v':'/class/%E7%88%B1%E6%83%85'},{'n':'恐怖','v':'/class/%E6%81%90%E6%80%96'},{'n':'动作','v':'/class/%E5%8A%A8%E4%BD%9C'},{'n':'科幻','v':'/class/%E7%A7%91%E5%B9%BB'},{'n':'剧情','v':'/class/%E5%89%A7%E6%83%85'},{'n':'战争','v':'/class/%E6%88%98%E4%BA%89'},{'n':'警匪','v':'/class/%E8%AD%A6%E5%8C%AA'},{'n':'犯罪','v':'/class/%E7%8A%AF%E7%BD%AA'},{'n':'动画','v':'/class/%E5%8A%A8%E7%94%BB'},{'n':'奇幻','v':'/class/%E5%A5%87%E5%B9%BB'},{'n':'武侠','v':'/class/%E6%AD%A6%E4%BE%A0'},{'n':'冒险','v':'/class/%E5%86%92%E9%99%A9'},{'n':'枪战','v':'/class/%E6%9E%AA%E6%88%98'},{'n':'恐怖','v':'/class/%E6%81%90%E6%80%96'},{'n':'悬疑','v':'/class/%E6%82%AC%E7%96%91'},{'n':'惊悚','v':'/class/%E6%83%8A%E6%82%9A'},{'n':'经典','v':'/class/%E7%BB%8F%E5%85%B8'},{'n':'青春','v':'/class/%E9%9D%92%E6%98%A5'},{'n':'文艺','v':'/class/%E6%96%87%E8%89%BA'},{'n':'微电影','v':'/class/%E5%BE%AE%E7%94%B5%E5%BD%B1'},{'n':'古装','v':'/class/%E5%8F%A4%E8%A3%85'},{'n':'历史','v':'/class/%E5%8E%86%E5%8F%B2'},{'n':'运动','v':'/class/%E8%BF%90%E5%8A%A8'},{'n':'农村','v':'/class/%E5%86%9C%E6%9D%91'},{'n':'儿童','v':'/class/%E5%84%BF%E7%AB%A5'},{'n':'网络电影','v':'/class/%E7%BD%91%E7%BB%9C%E7%94%B5%E5%BD%B1'}]},{'key':'a','name':'地区','value':[{'n':'全部','v':''},{'n':'大陆','v':'/area/%E5%A4%A7%E9%99%86'},{'n':'香港','v':'/area/%E9%A6%99%E6%B8%AF'},{'n':'台湾','v':'/area/%E5%8F%B0%E6%B9%BE'},{'n':'美国','v':'/area/%E7%BE%8E%E5%9B%BD'},{'n':'法国','v':'/area/%E6%B3%95%E5%9B%BD'},{'n':'英国','v':'/area/%E8%8B%B1%E5%9B%BD'},{'n':'日本','v':'/area/%E6%97%A5%E6%9C%AC'},{'n':'韩国','v':'/area/%E9%9F%A9%E5%9B%BD'},{'n':'德国','v':'/area/%E5%BE%B7%E5%9B%BD'},{'n':'泰国','v':'/area/%E6%B3%B0%E5%9B%BD'},{'n':'印度','v':'/area/%E5%8D%B0%E5%BA%A6'},{'n':'意大利','v':'/area/%E6%84%8F%E5%A4%A7%E5%88%A9'},{'n':'西班牙','v':'/area/%E8%A5%BF%E7%8F%AD%E7%89%99'},{'n':'加拿大','v':'/area/%E5%8A%A0%E6%8B%BF%E5%A4%A7'},{'n':'其他','v':'/area/%E5%85%B6%E4%BB%96'}]},{'key':'y','name':'年代','value':[{'n':'全部','v':''},{'n':'2023','v':'/year/2023'},{'n':'2022','v':'/year/2022'},{'n':'2021','v':'/year/2021'},{'n':'2020','v':'/year/2020'},{'n':'2019','v':'/year/2019'},{'n':'2018','v':'/year/2018'},{'n':'2017','v':'/year/2017'},{'n':'2016','v':'/year/2016'},{'n':'2015','v':'/year/2015'},{'n':'2014','v':'/year/2014'},{'n':'2013','v':'/year/2013'},{'n':'2012','v':'/year/2012'},{'n':'2011','v':'/year/2011'},{'n':'2000之前','v':'/year/lt|2000'}]},{'key':'by','name':'排序','value':[{'n':'全部','v':''},{'n':'时间','v':'/by/time'},{'n':'人气','v':'/by/hits'},{'n':'评分','v':'/by/score'}]}],
2:[{'key':'id','name':'类型','value':[{'n':'全部','v':'/id/2'},{'n':'国产剧','v':'/id/13'},{'n':'欧美剧','v':'/id/14'},{'n':'香港剧','v':'/id/15'},{'n':'韩国剧','v':'/id/16'},{'n':'日本剧','v':'/id/23'},{'n':'台湾剧','v':'/id/22'},{'n':'泰国剧','v':'/id/25'},{'n':'海外剧','v':'/id/24'}]},{'key':'c','name':'剧情','value':[{'n':'全部','v':''},{'n':'古装','v':'/class/%E5%8F%A4%E8%A3%85'},{'n':'战争','v':'/class/%E6%88%98%E4%BA%89'},{'n':'青春偶像','v':'/class/%E9%9D%92%E6%98%A5%E5%81%B6%E5%83%8F'},{'n':'喜剧','v':'/class/%E5%96%9C%E5%89%A7'},{'n':'家庭','v':'/class/%E5%AE%B6%E5%BA%AD'},{'n':'犯罪','v':'/class/%E7%8A%AF%E7%BD%AA'},{'n':'动作','v':'/class/%E5%8A%A8%E4%BD%9C'},{'n':'奇幻','v':'/class/%E5%A5%87%E5%B9%BB'},{'n':'剧情','v':'/class/%E5%89%A7%E6%83%85'},{'n':'历史','v':'/class/%E5%8E%86%E5%8F%B2'},{'n':'经典','v':'/class/%E7%BB%8F%E5%85%B8'},{'n':'乡村','v':'/class/%E4%B9%A1%E6%9D%91'},{'n':'情景','v':'/class/%E6%83%85%E6%99%AF'},{'n':'商战','v':'/class/%E5%95%86%E6%88%98'},{'n':'网剧','v':'/class/%E7%BD%91%E5%89%A7'},{'n':'其他','v':'/class/%E5%85%B6%E4%BB%96'}]},{'key':'a','name':'地区','value':[{'n':'全部','v':''},{'n':'内地','v':'/area/%E5%86%85%E5%9C%B0'},{'n':'韩国','v':'/area/%E9%9F%A9%E5%9B%BD'},{'n':'香港','v':'/area/%E9%A6%99%E6%B8%AF'},{'n':'台湾','v':'/area/%E5%8F%B0%E6%B9%BE'},{'n':'日本','v':'/area/%E6%97%A5%E6%9C%AC'},{'n':'美国','v':'/area/%E7%BE%8E%E5%9B%BD'},{'n':'泰国','v':'/area/%E6%B3%B0%E5%9B%BD'},{'n':'英国','v':'/area/%E8%8B%B1%E5%9B%BD'},{'n':'新加坡','v':'/area/%E6%96%B0%E5%8A%A0%E5%9D%A1'},{'n':'其他','v':'/area/%E5%85%B6%E4%BB%96'}]},{'key':'y','name':'年代','value':[{'n':'全部','v':''},{'n':'2023','v':'/year/2023'},{'n':'2022','v':'/year/2022'},{'n':'2021','v':'/year/2021'},{'n':'2020','v':'/year/2020'},{'n':'2019','v':'/year/2019'},{'n':'2018','v':'/year/2018'},{'n':'2017','v':'/year/2017'},{'n':'2016','v':'/year/2016'},{'n':'2015','v':'/year/2015'},{'n':'2014','v':'/year/2014'},{'n':'2013','v':'/year/2013'},{'n':'2012','v':'/year/2012'},{'n':'2011','v':'/year/2011'},{'n':'2000之前','v':'/year/lt|2000'}]},{'key':'by','name':'排序','value':[{'n':'全部','v':''},{'n':'时间','v':'/by/time'},{'n':'人气','v':'/by/hits'},{'n':'评分','v':'/by/score'}]}],
3:[{'key':'id','name':'类型','value':[{'n':'全部','v':'/id/3'},{'n':'国产动漫','v':'/id/26'},{'n':'日韩动漫','v':'/id/27'},{'n':'欧美动漫','v':'/id/28'},{'n':'港台动漫','v':'/id/29'},{'n':'海外动漫','v':'/id/30'}]},{'key':'c','name':'剧情','value':[{'n':'全部','v':''},{'n':'选秀','v':'/class/%E9%80%89%E7%A7%80'},{'n':'情感','v':'/class/%E6%83%85%E6%84%9F'},{'n':'访谈','v':'/class/%E8%AE%BF%E8%B0%88'},{'n':'播报','v':'/class/%E6%92%AD%E6%8A%A5'},{'n':'旅游','v':'/class/%E6%97%85%E6%B8%B8'},{'n':'音乐','v':'/class/%E9%9F%B3%E4%B9%90'},{'n':'美食','v':'/class/%E7%BE%8E%E9%A3%9F'},{'n':'纪实','v':'/class/%E7%BA%AA%E5%AE%9E'},{'n':'曲艺','v':'/class/%E6%9B%B2%E8%89%BA'},{'n':'生活','v':'/class/%E7%94%9F%E6%B4%BB'},{'n':'游戏互动','v':'/class/%E6%B8%B8%E6%88%8F%E4%BA%92%E5%8A%A8'},{'n':'财经','v':'/class/%E8%B4%A2%E7%BB%8F'},{'n':'求职','v':'/class/%E6%B1%82%E8%81%8C'}]},{'key':'a','name':'地区','value':[{'n':'全部','v':''},{'n':'内地','v':'/area/%E5%86%85%E5%9C%B0'},{'n':'港台','v':'/area/%E6%B8%AF%E5%8F%B0'},{'n':'日韩','v':'/area/%E6%97%A5%E9%9F%A9'},{'n':'欧美','v':'/area/%E6%AC%A7%E7%BE%8E'}]},{'key':'y','name':'年代','value':[{'n':'全部','v':''},{'n':'2023','v':'/year/2023'},{'n':'2022','v':'/year/2022'},{'n':'2021','v':'/year/2021'},{'n':'2020','v':'/year/2020'},{'n':'2019','v':'/year/2019'},{'n':'2018','v':'/year/2018'},{'n':'2017','v':'/year/2017'},{'n':'2016','v':'/year/2016'},{'n':'2015','v':'/year/2015'},{'n':'2014','v':'/year/2014'},{'n':'2013','v':'/year/2013'},{'n':'2012','v':'/year/2012'},{'n':'2011','v':'/year/2011'},{'n':'2000之前','v':'/year/lt|2000'}]},{'key':'by','name':'排序','value':[{'n':'全部','v':''},{'n':'时间','v':'/by/time'},{'n':'人气','v':'/by/hits'},{'n':'评分','v':'/by/score'}]}],
4:[{'key':'id','name':'类型','value':[{'n':'全部','v':'/id/4'},{'n':'大陆综艺','v':'/id/31'},{'n':'日韩综艺','v':'/id/33'},{'n':'欧美综艺','v':'/id/34'},{'n':'港台综艺','v':'/id/32'}]},{'key':'c','name':'剧情','value':[{'n':'全部','v':''},{'n':'情感','v':'/class/%E6%83%85%E6%84%9F'},{'n':'科幻','v':'/class/%E7%A7%91%E5%B9%BB'},{'n':'热血','v':'/class/%E7%83%AD%E8%A1%80'},{'n':'推理','v':'/class/%E6%8E%A8%E7%90%86'},{'n':'搞笑','v':'/class/%E6%90%9E%E7%AC%91'},{'n':'冒险','v':'/class/%E5%86%92%E9%99%A9'},{'n':'萝莉','v':'/class/%E8%90%9D%E8%8E%89'},{'n':'校园','v':'/class/%E6%A0%A1%E5%9B%AD'},{'n':'动作','v':'/class/%E5%8A%A8%E4%BD%9C'},{'n':'机战','v':'/class/%E6%9C%BA%E6%88%98'},{'n':'运动','v':'/class/%E8%BF%90%E5%8A%A8'},{'n':'战争','v':'/class/%E6%88%98%E4%BA%89'},{'n':'少年','v':'/class/%E5%B0%91%E5%B9%B4'},{'n':'少女','v':'/class/%E5%B0%91%E5%A5%B3'},{'n':'社会','v':'/class/%E7%A4%BE%E4%BC%9A'},{'n':'原创','v':'/class/%E5%8E%9F%E5%88%9B'},{'n':'亲子','v':'/class/%E4%BA%B2%E5%AD%90'},{'n':'益智','v':'/class/%E7%9B%8A%E6%99%BA'},{'n':'励志','v':'/class/%E5%8A%B1%E5%BF%97'},{'n':'其他','v':'/class/%E5%85%B6%E4%BB%96'}]},{'key':'a','name':'地区','value':[{'n':'全部','v':''},{'n':'国产','v':'/area/%E5%9B%BD%E4%BA%A7'},{'n':'日本','v':'/area/%E6%97%A5%E6%9C%AC'},{'n':'欧美','v':'/area/%E6%AC%A7%E7%BE%8E'},{'n':'其他','v':'/area/%E5%85%B6%E4%BB%96'}]},{'key':'y','name':'年代','value':[{'n':'全部','v':''},{'n':'2023','v':'/year/2023'},{'n':'2022','v':'/year/2022'},{'n':'2021','v':'/year/2021'},{'n':'2020','v':'/year/2020'},{'n':'2019','v':'/year/2019'},{'n':'2018','v':'/year/2018'},{'n':'2017','v':'/year/2017'},{'n':'2016','v':'/year/2016'},{'n':'2015','v':'/year/2015'},{'n':'2014','v':'/year/2014'},{'n':'2013','v':'/year/2013'},{'n':'2012','v':'/year/2012'},{'n':'2011','v':'/year/2011'},{'n':'2000之前','v':'/year/lt|2000'}]},{'key':'by','name':'排序','value':[{'n':'全部','v':''},{'n':'时间','v':'/by/time'},{'n':'人气','v':'/by/hits'},{'n':'评分','v':'/by/score'}]}]
    },
					 

filter_url:'/\{{fl.id}}/page/fypage{{fl.y}}.html'
//filter_url:'http://www.lzizy9.com/index.php/vod/show{{fl.a}}{{fl.by}}{{fl.c}}/id/fyclass/page/fypage{{fl.y}}.html'

});
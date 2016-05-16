var express = require('express');
var path = require('path')
var app = express();

app.set('views','./views/pages')
app.set('view engine','jade');
app.set('port',3000);
app.use(express.bodyParser())
app.use(express.static(path.join(__dirname,'bower_components')))

app.listen(3000);
console.log('movie is ok');

//index page
app.get('/',function(req,res){
	res.render('index',{
		title:'movie 首页',
		movies:[{
			title:'美国队长3',
			_id:1,
			poster:'https://img3.doubanio.com/view/movie_poster_cover/spst/public/p2332503406.jpg'
		},{
			title:'死侍',
			_id:2,
			poster:'https://img3.doubanio.com/view/movie_poster_cover/spst/public/p2309264172.jpg'
		},{
			title:'蚁人 Ant-Man ',
			_id:3,
			poster:'https://img3.doubanio.com/view/movie_poster_cover/spst/public/p2266823371.jpg'
		},{
			title:'银河护卫队 ',
			_id:4,
			poster:'https://img3.doubanio.com/view/movie_poster_cover/spst/public/p2198455702.jpg'
		},{
			title:'复仇者联盟',
			_id:5,
			poster:'https://img3.doubanio.com/view/movie_poster_cover/spst/public/p1524904031.jpg'
		}]
	})
})
app.get('/movie/list',function(req,res){
	res.render('list',{
		title:'movie 列表页',
		movies: [{
			_id: 1,
			title: '奇妙世纪 08 梦的还原器',
			doctor: '程亮/林博',
			country: '大陆',
			year: 2014,
			language: '汉语',
			summary: '《奇妙世纪》是由啼声影视与优酷出品共同打造的中国首部原创都市奇幻单元剧。',
			poster: 'http://r3.ykimg.com/05410408548589706A0A4160AF2742DF',
			flash: 'http://player.youku.com/player.php/sid/XODQ0NDk4MTA0/v.swf'
		}]
	})
})
app.get('/movie/:id',function(req,res){
	res.render('detail',{
		title:'movie 详情页',
		movie:{
			doctor:'乔斯·韦登',
			country:'美国',
			title:'复仇者联盟',
			year:'2016',
			poster:'https://img3.doubanio.com/view/movie_poster_cover/spst/public/p1524904031.jpg',
			language:'英语',
			flash:'http://player.youku.com/player.php/sid/XODQ0NDk4MTA0/v.swf',
			summary:'一股突如其来的强大邪恶势力对地球造成致命威胁，没有任何一个超级英雄能够单独抵挡。长期致力于保护全球安危的神盾局（SHIELD）感到措手不及，其指挥官“独眼侠”尼克-法瑞（塞缪尔·杰克逊 Samuel L. Jackson 饰）意识到他必须创建一个“史上最强”的联盟组织，云集各方超级英雄一起发威，才能拯救世界于水深火热，抵御黑暗势力的侵袭。于是由六大超级英雄——“钢铁侠”（小罗伯特·唐尼 Robert Downey Jr. 饰）、“雷神” （克里斯·海姆斯沃斯 Chris Hemsworth 饰）、“美国队长”（克里斯·埃文斯 Chris Evans 饰）、“绿巨人” （马克·鲁弗洛 Mark Ruffalo 饰）、“黑寡妇”（斯嘉丽·约翰逊 Scarlett Johansson 饰）和“鹰眼”（杰瑞米·雷纳 Jeremy Renner 饰）组成的 “...',
		}
	})
})
app.get('/admin/movie', function (req, res)  {
	res.render('admin', {
		title:'iMovie 后台管理',
		movie: {
			title: ' ',
			doctor: ' ',
			country: ' ',
			year: ' ',
			language: ' ',
			summary: ' ',
			poster: ' ',
			flash: ' '
		}
	})
})
/*
Features：Taking webpage screenshots
Developer：
Version：v1.2
Envirtonment&Dependencies: Node.js,node-webshot,PhantomJS
Time: 20180914
*/

//var url = 'http://edu.51cto.com/center/course/user/get-study-course'
var arg = process.argv.splice(2);
var url = String(arg[0]),filename = String(arg[1]);


function webshot(url,filename)
{
	var webshot = require('webshot');

	//set Picture size
	var options = {
	  screenSize: {
		width: 736
	  , height: 414
	  }
	, shotSize: {
		width: 'all'
	  , height: 'all'
	  }
        , renderDelay: 500
        ,defaultWhiteBackground: true
	//set userAgent
	/*, userAgent: 'Mozilla/5.0 (Windows NT 10.0; WOW64)'
		+ ' AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.181 Safari/537.36'*/
       , userAgent: 'Mozilla/5.0(X11;Fedora;Linux x86_64;rv:60.0)' + 'Gecko/20100101 Firefox/60.0'
	};

	//set url，dir of save,fielname
	webshot(url, 'page/'+filename+'.jpg', options, function(err) {
	  // screenshot now saved to jpg
	});
}

webshot(url,filename);

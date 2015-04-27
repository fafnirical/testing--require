//Load common code that includes config, then load the app
//logic for this page. Do the require calls here instead of
//a separate file so after a build there are only 2 HTTP
//requests instead of three.
require(['./config'], function (common) {
	//js/config sets the baseUrl to be js/ so
	//can just ask for 'app/Home' here instead
	//of 'js/app/Home'
	require(['app/Home']);
});

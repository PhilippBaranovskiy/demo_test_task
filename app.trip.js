var APP = (function(app){

	app.Trip = function(from, to){
		// var apiMark = 'trips';
		var apiMark = '';
		var url = [
			[
				app.api,
				apiMark
			].join('/'),
		
			[
				'key='		+	app.key,
				'_locale='	+	app.locale,
				'fn='		+	from,
				'tn='		+	to
			].join('&')
		
		].join('?');

		this.fetch = function(){
			return new Promise(function(done, reject){
				var xhr = new XMLHttpRequest();
				xhr.open('GET', url);
				xhr.onload = function(){
					if ( this.status !== 200 || this.readyState !== 4 ) {
						reject();
						return;
					} else {
						done(this.responseText);
					}
				};
				xhr.send();
			});
		};
		this.get = function(){
			return new Promise(function(done){
				this.fetch().then(function(resp){
					done(JSON.parse(resp).trips);
				});
			}.bind(this));
		};
	};

	return app;
})(APP || {});
var APP = (function(app){

	var form = document.querySelector('.app__find-form');
	var tripHolder = document.querySelector('.js_trips');

	app.shower = new app.Shower(tripHolder, 'template-trip');
	
	app.formFinder = new app.FormFinder(form).then(function(route){
		
		var trip = new APP.Trip(route[0], route[1]);
		var shower = 
		trip.get().then(function(trips){
			APP.shower.render(trips);
		});
	});


	return app;
})(APP || {});
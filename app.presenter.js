var APP = (function(app){

	app.FormFinder = function(form){
		
		return new Promise(function(done){
			form.addEventListener('submit', function(event){
				event.preventDefault();

				var from = this.querySelector('.js_from');
				from = from ? from.value : '';

				var to = this.querySelector('.js_to');
				to = to ? to.value : '';

				done([from, to]);

			}, false);
		});
	};

	app.Shower = function(holder, template){

		this.render = function(data){
			var li = this.template.content.children[0];
			this.templateHolder.innerHTML = '';

			data.forEach(function(item){
				var text = ''
							+ item.departure_place.city_name
							+ ' — '
							+ item.arrival_place.city_name
							+ ' / '
							+ item.price_with_commission.string_value
							+ '<br>'
							+ 'on ' + item.departure_date
							+ '<br>'
							+ item.distance.value + item.distance.unity
							+ ' / '
							+ Math.round(item.duration.value/60/60) + 'hrs';
				li.innerHTML = '';
				li.innerHTML = document.createTextNode( text ).textContent;
				li = document.importNode(li, true);
				this.templateHolder.appendChild(li);
			}.bind(this));

			holder.innerHTML = '';
			holder.appendChild( this.templateHolder );
		};

		this.template = document.getElementById(template);
		if ( !this.template ) {
			console.error('The template is missing');
			return;
		}
		this.templateHolder = document.createDocumentFragment();
		this.holder = holder;
	};


	return app;
})(APP || {});
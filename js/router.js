//router.js
define([
	'underscore',
	'backbone',
	'views/HolidaysView',
	'collections/Holidays'
], function(_, Backbone, HolidaysView, Holidays) {

	var initialize = function() {
		var appRouter = new AppRouter();
		Backbone.history.start();
	};

	var AppRouter = Backbone.Router.extend({
		routes: {
			'': 'default',
			'custom/:year/:month/:day': 'custom',
			'vacation': 'vacation',
            'springbreak': 'springBreak',
            'graduation': 'graduation',
            'example': 'example'
		},

        default: function() {
            var date = new Holidays();
            date.url = 'js/json/us_holidays.json';
            date.fetch({
                success: function() {
                    new HolidaysView({
                        el: '#holiday',
                        collection: date
                    }).render();
                }
            });

        },

		custom: function(year, month, day) {
			var customDay = new Holidays([{
				description: 'Custom',
				year: parseInt(year),
				month: parseInt(month),
				day: parseInt(day)
			}]);

			new HolidaysView({
				el: '#holiday',
				collection: customDay
			}).render();

		},

		vacation: function() {
            var date = new Holidays();
            date.url = 'js/json/vacation.json';
			date.fetch({
                success: function() {
                    new HolidaysView({
        				el: '#holiday',
        				collection: date
        			}).render();
                }
            });
		},

		springBreak: function() {
			var date = new Holidays();
            date.url = 'js/json/springbreak.json';
			date.fetch({
                success: function() {
                    new HolidaysView({
        				el: '#holiday',
        				collection: date
        			}).render();
                }
            });
		},

		graduation: function() {
			var date = new Holidays();
            date.url = 'js/json/graduation.json';
            date.fetch({
                success: function() {
                    new HolidaysView({
        				el: '#holiday',
        				collection: date
        			}).render();
                }
            });
		}

	});

	return {
		initialize: initialize
	};

});

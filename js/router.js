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
			'vacation': 'vacation'
		},

		default: function() {
			var holidays = new Holidays([{
				description: 'New Year\'s Day',
				date: 'January 2, 2017'
			}, {
				description: 'Martin Luther King, Jr. Day',
				date: 'January 16, 2017'
			}, {
				description: 'Presidents\' Day',
				date: 'February 20, 2017'
			}, {
				description: 'Memorial Day',
				date: 'May 29, 2017'
			}, {
				description: 'Independance Day',
				date: 'July 4, 2017'
			}, {
				description: 'Labor Day',
				date: 'September 4, 2017'
			}, {
				description: 'Columbus Day',
				date: 'October 9, 2017'
			}, {
				description: 'Veterans Day (Observed)',
				date: 'November 10, 2017',
				image: 'veterans-day.jpg'
			}, {
				description: 'Thanksgiving Day',
				date: 'November 23, 2017',
				image: 'thanksgiving.jpg'
			}, {
				description: 'Christmas Day',
				date: 'December 25, 2017',
				image: 'xmas.jpg'
			}]);
			new HolidaysView({
				el: '#holiday',
				collection: holidays,
			}).render();
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
			var vacationDate = new Holidays([{
				description: 'Jones Family Vacation',
				date: 'September 23, 2017'
			}]);

			new HolidaysView({
				el: '#holiday',
				collection: vacationDate
			}).render();
		}

	});

	return {
		initialize: initialize
	};

});

define([
    'underscore',
    'backbone',
    'views/HolidaysView',
    'collections/Holidays'
], function (_, Backbone, HolidaysView, Holidays) {
    var initialize = function() {
        var holidays = new Holidays([{
            description: 'New Year\'s Day',
            date: 'January 1, 2016'
        }, {
            description: 'Martin Luther King, Jr. Day',
            date: 'January 18, 2016'
        }, {
            description: 'George Washington\'s Birthday',
            date: 'February 15, 2016'
        }, {
            description: 'Memorial Day',
            date: 'May 30, 2016'
        }, {
            description: 'Independance Day',
            date: 'July 4, 2016'
        }, {
            description: 'Labor Day',
            date: 'September 5, 2016'
        }, {
            description: 'Columbus Day',
            date: 'October 10, 2016'
        }, {
            description: 'Veterans Day',
            date: 'November 11, 2016'
        }, {
            description: 'Thanksgiving Day',
            date: 'November 24, 2016'
        }, {
            description: 'Christmas Day',
            date: 'December 26, 2016'
        }
    ]);

        new HolidaysView({
            el: '#holiday',
            collection: holidays,
        }).render();

    };

    return {
        initialize: initialize
    };

});

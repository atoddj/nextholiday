//Model view
define([
    'underscore',
    'jquery',
    'backbone',
    'models/Holiday',

], function(_, $, Backbone, Holiday) {
    var HolidayView = Backbone.View.extend({
        events: {
            'click li': 'toggleStrike'
        },
        initialize: function(options) {
            if (!(options && options.model)) throw new Error('model is not defined');
        },

        render: function() {
            this.$el.html('<h1>' + this.model.attributes.description + '</h1>');
            this.$el.append(this.model.attributes.date);
            return this;
        },

        toggleStrike: function(e) {
            var self = $(e.currentTarget);
            console.log('test');
        },


    });
    return HolidayView;
});

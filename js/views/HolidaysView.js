//Collection view
define([
    'underscore',
    'jquery',
    'countdown',
    'backbone',
    'views/HolidayView',

], function (_, $, countdown, Backbone, HolidayView) {
    var HolidaysView = Backbone.View.extend({

        initialize: function (options) {
            if (!(options && options.collection)) throw new Error('collection is not specified');
            this.listenTo(this.collection, 'add remove', this.render);
        },

        render: function () {
            var self = this,
                today = new Date(),
                upcomingHoliday = this.collection.next(today);
            self.$el.html('');
            upcomingHoliday.each(function (holiday) {
                self.$el.append(new HolidayView({
                    model: holiday
                }).render().el);
                if (holiday.attributes.date) {
                    var date = new Date(holiday.attributes.date);
                } else {
                  var date = new Date(parseInt(holiday.attributes.year), parseInt(holiday.attributes.month)-1, parseInt(holiday.attributes.day));
                }
                $('#countdown').countdown(date, function(event) {
                    $(this).html(event.strftime('%D day%!D %H hour%!H left'));
                });
            }, this);
        }
    });
    return HolidaysView;
});

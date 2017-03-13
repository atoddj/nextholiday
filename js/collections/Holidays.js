//Collection
define([
  'underscore',
  'backbone',
  'models/Holiday'
], function(_, Backbone, Holiday) {
  var Holidays = Backbone.Collection.extend({
    model: Holiday,

    next: function(today) {
        filtered = this.filter(function(holiday) {
          if(holiday.attributes.year) {
            var year = parseInt(holiday.attributes.year),
                month = parseInt(holiday.attributes.month) - 1,
                day = parseInt(holiday.attributes.day);

            var date = new Date(year, month, day);
          } else {
            var date = new Date(holiday.attributes.date);
          }
            if (date > today) {
                return holiday;
            };
        });
        return new Holidays(filtered[0]);
    }
  });
  return Holidays;
});

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
            var date = new Date(holiday.attributes.date);
            if (date > today) {
                return holiday;
            };
        });
        return new Holidays(filtered[0]);
    }
  });
  return Holidays;
});

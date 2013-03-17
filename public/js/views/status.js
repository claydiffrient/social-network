define(['text!templates/status.html'], function(statusTemplate) {
   var statusView = Backbone.View.extend({
      el: $('#content'),
      render: function() {
         this.$el.html(
            _.template(statusTemplate, this.model.toJSON())
         );
      }
   });
   return statusView;
});
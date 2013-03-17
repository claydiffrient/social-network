define(['router'], function(indexView){
   var SocialNetView = Backbone.View.extend({
      initialize: function(){
         checkLogin(runAppliction);
      },
      checkLogin: function(callback) {
         $.ajax("/account/authenticated", {
            method: "GET",
            success: function() {
               return callback(true);
            },
            error: function(data) {
               return callback(false);
            }
         });
      },
      runApplication: function(authenticated) {
         if (!authenticated) {
            window.location.hash = 'login';
         } else {
            window.location.hash = 'index';
         }
         Backbone.history.start();
      }
   });
   return SocialNetView
});
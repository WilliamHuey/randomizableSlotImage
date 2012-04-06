/**
 * Created by JetBrains RubyMine.
 * User: william
 * Date: 4/5/12
 * Time: 9:27 PM
 * To change this template use File | Settings | File Templates.
 */
var Will = Will || {};
Will.ImageSlotMachine = function(feed) {
  this.items = feed.items;
};

$.extend(Will.ImageSlotMachine.prototype, {
  addEventListeners: function() {
    var self = this;
    $('.randomize').live('click', function() {
      var imageIndex, imageUrl, imageTag;

      for(var i = 0, imageIndex; i < 3; ++i) {
        imageIndex = Math.floor(Math.random() * self.items.length);
        imageUrl = self.items[imageIndex].media.m;
        imageTag = $('<img/>', {
          src: imageUrl
        });
        $("#mid" + (i + 1)).html(imageTag);
      }

      console.log('Finished click');
    });
  },
  setup: function() {
    this.addEventListeners();
  }
});

function jsonFlickrFeed(feed) {
  var slotMachine = new Will.ImageSlotMachine(feed);
  slotMachine.setup();
  console.log(feed);
}

function load() {
  var head_element = document.getElementsByTagName("head")[0];
  var newScript = document.createElement('script');
  newScript.type = 'text/javascript';
  newScript.src = 'http://api.flickr.com/services/feeds/photos_public.gne?tags=tree&format=json';
  head_element.appendChild(newScript);
}

$(document).ready(function() {
  load();
});
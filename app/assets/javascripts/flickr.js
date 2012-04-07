//new object accept the feed input
var Will = Will || {};
Will.ImageSlotMachine = function(feed) {
  this.items = feed.items;
};

//extend the object
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

//self-invoking function; run when script is appended in head
function jsonFlickrFeed(feed) {
  var slotMachine = new Will.ImageSlotMachine(feed);
  slotMachine.setup();
  console.log(feed);
}

//initial actions place feed in the head
function load() {
  var head_element = document.getElementsByTagName("head")[0];
  var newScript = document.createElement('script');
  newScript.type = 'text/javascript';
  newScript.src = 'http://api.flickr.com/services/feeds/photos_public.gne?tags=tree&format=json';
  head_element.appendChild(newScript);
}

//run the initial actions
$(document).ready(function() {
  load();
});
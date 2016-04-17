// Ionic Starter App


// angular.module is a global place for creating, registering and retrieving Angular modules

// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)

// the 2nd parameter is an array of 'requires'
/*angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard)

      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard

      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);


      // Don't remove this line unless you know what you are doing. It stops the viewport

      // from snapping when text inputs are focused. Ionic handles this internally for

      // a much nicer keyboard experience.
      //cordova.plugins.Keyboard.disableScroll(true);

    if(window.StatusBar)
      StatusBar.styleDefault();

  });
});

 var songs = [
//   {name: 'Happy song', url: 'https://youtube.com/foobar'},
//   {name: 'Exciting song', url: 'https://youtube.com/foobar'}
{imageSrc: '../img/AngrySongs/radioactive.jpg', url: 'https://youtube.com/foobar'}, // song
{imageSrc: '../img/AngrySongs/radioactive.jpg', url: 'https://youtube.com/foobar'},
{imageSrc: '../img/AngrySongs/sowhat.jpg', url: 'https://www.youtube.com/watch?v=ktvTqknDobU'},
{imageSrc: '../img/AngrySongs/maxresdefault.jpg', url: 'https://www.youtube.com/watch?v=l9PxOanFjxQ'},
{imageSrc: '../img/AngrySongs/imagine-dragons-i-bet-my-life-cover-art.jpg', url: 'https://www.youtube.com/watch?v=4ht80uzIhNs'},
{imageSrc: '../img/AngrySongs/Imagine Dragons - Demons(radio Edit).png', url: 'https://www.youtube.com/watch?v=mWRsgZuwf_8'},
{imageSrc: '../img/AngrySongs/FallOutBoy-Centuries.png', url: 'https://www.youtube.com/watch?v=LBr7kECsjcQ'},
{imageSrc: '../img/AngrySongs/Eminem-The-Way_I-Am.jpg', url: 'https://www.youtube.com/watch?v=ktvTqknDobU'},
{imageSrc: '../img/AngrySongs/Eminem-The-Way_I-Am.jpg', url: 'https://www.youtube.com/watch?v=ktvTqknDobU'},
{imageSrc: '../img/AngrySongs/radioactive.jpg', url: 'https://www.youtube.com/watch?v=ktvTqknDobU'},
{imageSrc: '../img/AngrySongs/BeforeHeCheats-CarrieUnderwood.png', url: 'https://www.youtube.com/watch?v=WaSy8yy-mr8'},
{imageSrc: '../img/AngrySongs/148637af895ce6c2fda70078c6fb4457.jpg', url: 'https://www.youtube.com/watch?v=d8ekz_CSBVg'},
{imageSrc: '../img/AngrySongs/7_Things_(Miley_Cyrus_single_-_cover_art).png', url: 'https://www.youtube.com/watch?v=Hr0Wv5DJhuk'}
 ];
//
function randomSongs(numberofSongs) {
var pickedSongs = [songs[5]];
 return pickedSongs;
}

window.randomlyPick5Items = function (allItems) {
  // TODO: implement this function to randomly pick 5 items from the array allItems
  return [
    {imageSrc: '../img/AngrySongs/radioactive.jpg', url: 'https://youtube.com/foobar'}, // song
    {imageSrc: '../img/AngrySongs/radioactive.jpg', url: 'https://youtube.com/foobar'},
    {imageSrc: '../img/AngrySongs/sowhat.jpg', url: 'https://www.youtube.com/watch?v=ktvTqknDobU'},
    {imageSrc: '../img/AngrySongs/maxresdefault.jpg', url: 'https://www.youtube.com/watch?v=l9PxOanFjxQ'},
    {imageSrc: '../img/AngrySongs/imagine-dragons-i-bet-my-life-cover-art.jpg', url: 'https://www.youtube.com/watch?v=4ht80uzIhNs'},
    {imageSrc: '../img/AngrySongs/Imagine Dragons - Demons(radio Edit).png', url: 'https://www.youtube.com/watch?v=mWRsgZuwf_8'},
    {imageSrc: '../img/AngrySongs/FallOutBoy-Centuries.png', url: 'https://www.youtube.com/watch?v=LBr7kECsjcQ'},
    {imageSrc: '../img/AngrySongs/Eminem-The-Way_I-Am.jpg', url: 'https://www.youtube.com/watch?v=ktvTqknDobU'},
    {imageSrc: '../img/AngrySongs/Eminem-The-Way_I-Am.jpg', url: 'https://www.youtube.com/watch?v=ktvTqknDobU'},
    {imageSrc: '../img/AngrySongs/radioactive.jpg', url: 'https://www.youtube.com/watch?v=ktvTqknDobU'},
    {imageSrc: '../img/AngrySongs/BeforeHeCheats-CarrieUnderwood.png', url: 'https://www.youtube.com/watch?v=WaSy8yy-mr8'},
    {imageSrc: '../img/AngrySongs/148637af895ce6c2fda70078c6fb4457.jpg', url: 'https://www.youtube.com/watch?v=d8ekz_CSBVg'},
    {imageSrc: '../img/AngrySongs/7_Things_(Miley_Cyrus_single_-_cover_art).png', url: 'https://www.youtube.com/watch?v=Hr0Wv5DJhuk'}
  ];
}


var app = angular.module('test', ['ionic']);
*/






// Ionic Starter App


// angular.module is a global place for creating, registering and retrieving Angular modules

// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)

// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {

      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard

      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);


      // Don't remove this line unless you know what you are doing. It stops the viewport

      // from snapping when text inputs are focused. Ionic handles this internally for

      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);


    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});

function shuffle(song){
  for(var j, x, i = song.length; i; j = Math.floor(Math.random() * i), x = song[--i], song[i] = song[j], song[j] = x);
  return song;
};

function shufflem(movies){
  for(var j, x, i = movies.length; i; j = Math.floor(Math.random() * i), x = movies[--i], movies[i] = movies[j], movies[j] = x);
  return movies;
};
function goto(url) {
  window.open(url, '_system', 'location=yes');
};

function shuffles(sport) {
       for(var j, x, i = sport.length; i; j = Math.floor(Math.random() * i), x = sport[--i], sport[i] = sport[j], sport[j] = x);
       return sport;
   };

  function shuffleo(other){
          for(var j, x, i = other.length; i; j = Math.floor(Math.random() * i), x = other[--i], other[i] = other[j], other[j] = x);
          return other;
      };

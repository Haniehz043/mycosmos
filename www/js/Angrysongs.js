/*/angular.module('starter')
  .controller('SongsController', function ($scope) {
    // if somehow, you can randomly / dynamically build this array

    // 1. Define a list of all songs (10 of them). e.g. var allSongs = [{ }, { }]
    var allSongs = [
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
      {imageSrc: '../img/AngrySongs/7_Things_(Miley_Cyrus_single_-_cover_art).png', url: 'https://www.youtube.com/watch?v=Hr0Wv5DJhuk'}]

    ];
    // 2. Implement a function that will randomly pick 5 songs from the list above.




    // 3. Put those 5 songs to $scope.songs like below:
    $scope.songs = randomlyPick5Items(allSongs);
  });
*/

angular.module('starter')

.controller('MainController', function ($scope) {
 $scope.songs =  [

   {imageSrc: '../img/Angry/AngrySongs/sowhat.jpg', url: 'https://www.youtube.com/watch?v=ktvTqknDobU'},
   {imageSrc: '../img/Angry/AngrySongs/maxresdefault.jpg', url: 'https://www.youtube.com/watch?v=l9PxOanFjxQ'},
   {imageSrc: '../img/Angry/AngrySongs/imagine-dragons-i-bet-my-life-cover-art.jpg', url: 'https://www.youtube.com/watch?v=4ht80uzIhNs'},
   {imageSrc: '../img/Angry/AngrySongs/ImagineD.png', url: 'https://www.youtube.com/watch?v=mWRsgZuwf_8'},
   {imageSrc: '../img/Angry/AngrySongs/FallOutBoy-Centuries.png', url: 'https://www.youtube.com/watch?v=LBr7kECsjcQ'},
   {imageSrc: '../img/Angry/AngrySongs/EminemT.jpg', url: 'https://www.youtube.com/watch?v=ktvTqknDobU'},
   {imageSrc: '../img/Angry/AngrySongs/radioactive.jpg', url: 'https://www.youtube.com/watch?v=ktvTqknDobU'},
   {imageSrc: '../img/Angry/AngrySongs/BeforeHeCheats-CarrieUnderwood.png', url: 'https://www.youtube.com/watch?v=WaSy8yy-mr8'},
   {imageSrc: '../img/Angry/AngrySongs/148637af895ce6c2fda70078c6fb4457.jpg', url: 'https://www.youtube.com/watch?v=d8ekz_CSBVg'},
   {imageSrc: '../img/Angry/AngrySongs/7_Things_(Miley_Cyrus_single_-_cover_art).png', url: 'https://www.youtube.com/watch?v=Hr0Wv5DJhuk'}

 ];
 $scope.shuffle = shuffle;
 $scope.goto = goto;


}
);

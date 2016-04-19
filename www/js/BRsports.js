angular.module('starter')

.controller('MainController', function ($scope) {
 $scope.sports =  [

   {imageSrc: '../img/Angry/Angrysports/BS.png', url: 'https://www.youtube.com/watch?v=UgzXRXmAOMA'},
   {imageSrc: '../img/Angry/Angrysports/Hock.png', url: 'https://www.youtube.com/watch?v=vdiLp5pnr_k'},
   {imageSrc: '../img/Angry/Angrysports/kickboxing.jpg', url: 'https://www.youtube.com/watch?v=RVr9mVNdQc4'},
   {imageSrc: '../img/Angry/Angrysports/man.png', url: 'https://www.youtube.com/watch?v=AWS_zIFfGTg'},
   {imageSrc: '../img/Angry/Angrysports/woman-running1.svg', url: 'https://www.youtube.com/watch?v=e7m205ZIxBE'},
   {imageSrc: '../img/Angry/Angrysports/Yoga.png', url: 'https://https://www.youtube.com/watch?v=wirV265ZYSw'},
{imageSrc: '../img/Angry/Angrysports/Yoga.png', url: 'https://www.youtube.com/watch?v=HzwdKBYG0xA'}
   //{imageSrc: '../img/Happysports/radioactive.jpg', url: 'https://www.youtube.com/watch?v=ktvTqknDobU'},
  // {imageSrc: '../img/Happysports/BeforeHeCheats-CarrieUnderwood.png', url: 'https://www.youtube.com/watch?v=WaSy8yy-mr8'},
   //{imageSrc: '../img/Happysports/148637af895ce6c2fda70078c6fb4457.jpg', url: 'https://www.youtube.com/watch?v=d8ekz_CSBVg'},
  // {imageSrc: '../img/Happysports/7_Things_(Miley_Cyrus_single_-_cover_art).png', url: 'https://www.youtube.com/watch?v=Hr0Wv5DJhuk'}

 ];
$scope.shuffle = shuffles;
$scope.goto = goto;
}
);

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
 ];
$scope.shuffle = shuffles;
$scope.goto = goto;
}
);

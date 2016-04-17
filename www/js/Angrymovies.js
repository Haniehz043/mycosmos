

angular.module('starter')

.controller('MainController', function ($scope) {
 $scope.movies =  [

   {imageSrc: '../img/Angry/AngryMovies/22.jpg', url: 'https://www.youtube.com/watch?v=fZ_JOBCLF-I'},
   {imageSrc: '../img/Angry/AngryMovies/sPaw.jpg', url: 'https://www.youtube.com/watch?v=2LIQ2-PZBC8'},
   {imageSrc: '../img/Angry/AngryMovies/kings.jpg', url: 'https://www.youtube.com/watch?v=4AXbiCdmXgw'},
   {imageSrc: '../img/Angry/AngryMovies/ABM.jpg', url: 'https://www.youtube.com/watch?v=0qJzWrq7les'},
   {imageSrc: '../img/Angry/AngryMovies/JBS.jpg', url: 'https://www.youtube.com/watch?v=7GqClqvlObY'},
   {imageSrc: '../img/Angry/AngryMovies/KA2.jpg', url: 'https://www.youtube.com/watch?v=mObK5XD8udk'},
   {imageSrc: '../img/Angry/AngryMovies/kickass.jpg', url: 'https://www.youtube.com/watch?v=lDVvFUbnqEM'},
   {imageSrc: '../img/Angry/AngryMovies/MI5.jpg', url: 'https://www.youtube.com/watch?v=nmC6rZyByzk'},
   {imageSrc: '../img/Angry/AngryMovies/TERM2.jpg', url: 'https://www.youtube.com/watch?v=tbayiPxkUMM'},
   {imageSrc: '../img/Angry/AngryMovies/AVEN1.jpg', url: 'https://www.youtube.com/watch?v=u1OKBqHICMQ'}

 ];
$scope.shuffle = shufflem;
$scope.goto = goto;


}
);

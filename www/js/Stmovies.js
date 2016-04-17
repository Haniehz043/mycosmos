

angular.module('starter')

.controller('MainController', function ($scope) {
 $scope.movies =  [

   {imageSrc: '../img/St/StMovies/BB.jpg', url: 'https://www.youtube.com/watch?v=yuzXPzgBDvo'},
   {imageSrc: '../img/St/StMovies/BE.jpeg', url: 'https://www.youtube.com/watch?v=JoiVEyCosEE'},
   {imageSrc: '../img/St/StMovies/BK.jpg', url: 'https://www.youtube.com/watch?v=J1jzs6dk4bs'},
   {imageSrc: '../img/St/StMovies/BL.jpg', url: 'https://www.youtube.com/watch?v=8pnqbx8iTTM'},
   {imageSrc: '../img/St/StMovies/LA.jpg', url: 'https://www.youtube.com/watch?v=_eCb8w8SRAk'},
   {imageSrc: '../img/St/StMovies/SN.jpg', url: 'https://www.youtube.com/watch?v=KuWsQSntFf0'},
   {imageSrc: '../img/St/StMovies/UP.jpg', url: 'https://www.youtube.com/watch?v=qas5lWp7_R0'},
   {imageSrc: '../img/St/StMovies/WL.jpg', url: 'https://www.youtube.com/watch?v=cR7p-IB6INM'},
   {imageSrc: '../img/Angry/AngryMovies/22.jpg', url: 'https://www.youtube.com/watch?v=qP755JkDxyM'},
   {imageSrc: '../img/Angry/AngryMovies/sPaw.jpeg', url: 'https://www.youtube.com/watch?v=2LIQ2-PZBC8'},
   {imageSrc: '../img/Angry/AngryMovies/kings.jpg', url: 'https://www.youtube.com/watch?v=kl8F-8tR8to'},
   {imageSrc: '../img/Angry/AngryMovies/ABM.jpg', url: 'https://www.youtube.com/watch?v=0qJzWrq7les'},
   {imageSrc: '../img/Angry/AngryMovies/JBS.jpg', url: 'https://www.youtube.com/watch?v=7GqClqvlObY'},
   {imageSrc: '../img/Angry/AngryMovies/KA2.jpg', url: 'https://www.youtube.com/watch?v=rMUjyU_Dtf0'},
   {imageSrc: '../img/Angry/AngryMovies/kickass.jpg', url: 'https://www.youtube.com/watch?v=9_MSMPhGu1c'},
   {imageSrc: '../img/Angry/AngryMovies/MI5.jpg', url: 'https://www.youtube.com/watch?v=nmC6rZyByzk'},
   {imageSrc: '../img/Angry/AngryMovies/TERM2.jpg', url: 'https://www.youtube.com/watch?v=tbayiPxkUMM'},
   {imageSrc: '../img/Angry/AngryMovies/AVEN1.jpg', url: 'https://www.youtube.com/watch?v=u1OKBqHICMQ'}

 ];
 $scope.shuffle = shufflem;
 $scope.goto = goto;

}
);

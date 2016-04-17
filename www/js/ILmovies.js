

angular.module('starter')

.controller('MainController', function ($scope) {
 $scope.movies =  [

   {imageSrc: '../img/IL/ILMovies/AD.jpeg', url: 'https://www.youtube.com/watch?v=7UzSekc0LoQ'},
   {imageSrc: '../img/IL/ILMovies/CI.jpeg', url: 'https://www.youtube.com/watch?v=McQ_cCBaiac'},
   {imageSrc: '../img/IL/ILMovies/EL.jpeg', url: 'https://www.youtube.com/watch?v=TRXGch6675Q'},
   {imageSrc: '../img/IL/ILMovies/FS.jpeg', url: 'https://www.youtube.com/watch?v=9ItBvH5J6ss'},
   {imageSrc: '../img/IL/ILMovies/LJ.jpg', url: 'https://www.youtube.com/watch?v=prc50Uod_vQ'},
   {imageSrc: '../img/IL/ILMovies/LU.jpg', url: 'https://www.youtube.com/watch?v=MKqaiQZdv3c'},
   {imageSrc: '../img/IL/ILMovies/PW.jpeg', url: 'https://www.youtube.com/watch?v=8iCwtxJejik'},
   {imageSrc: '../img/IL/ILMovies/SH.jpg', url: 'https://www.youtube.com/watch?v=q3y8fFPPgdA'},
   {imageSrc: '../img/IL/ILMovies/SL.jpg', url: 'https://www.youtube.com/watch?v=2ZMGk_Ml1fc'},
   {imageSrc: '../img/IL/ILMovies/TB.jpeg', url: 'https://www.youtube.com/watch?v=5xOSoONDpY4'},
   {imageSrc: '../img/IL/ILMovies/TN.jpg', url: 'https://www.youtube.com/watch?v=4M7LIcH8C9U'},
   {imageSrc: '../img/IL/ILMovies/TT.jpeg', url: 'https://www.youtube.com/watch?v=zCy5WQ9S4c0'},
    {imageSrc: '../img/IL/ILMovies/TV.jpeg', url: 'https://www.youtube.com/watch?v=PcL24s-S6ns'}
 ];
 $scope.shuffle = shufflem;
 $scope.goto = goto;


}
);

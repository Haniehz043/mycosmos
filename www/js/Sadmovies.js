

angular.module('starter')

.controller('MainController', function ($scope) {
 $scope.movies =  [

   {imageSrc: '../img/Sad/SadMovies/AR.jpg', url: 'https://www.youtube.com/watch?v=zhpwjrbeoJQ'},
   {imageSrc: '../img/Sad/SadMovies/AWTR.jpg', url: 'https://www.youtube.com/watch?v=k3B2XBcp7vA'},
   {imageSrc: '../img/Sad/SadMovies/BM.jpeg', url: 'https://www.youtube.com/watch?v=rMp896hfp74'},
   {imageSrc: '../img/Sad/SadMovies/for.jpg', url: 'https://www.youtube.com/watch?v=uPIEn0M8su0'},
   {imageSrc: '../img/Sad/SadMovies/HO.jpeg', url: 'https://www.youtube.com/watch?v=KmYNkasYthg'},
   {imageSrc: '../img/Sad/SadMovies/NB.jpg', url: 'https://www.youtube.com/watch?v=4M7LIcH8C9U'},
   {imageSrc: '../img/Sad/SadMovies/SB.jpg', url: 'https://www.youtube.com/watch?v=E8I-Qzmbqnc'},
   {imageSrc: '../img/Sad/SadMovies/TF.jpg', url: 'https://www.youtube.com/watch?v=LRIZ4mCi5Ps'},
   {imageSrc: '../img/Sad/SadMovies/TT.jpeg', url: 'https://www.youtube.com/watch?v=zCy5WQ9S4c0'},
   {imageSrc: '../img/Sad/SadMovies/TTOE.jpeg', url: 'https://www.youtube.com/watch?v=LUayjO_KgsQ'}
 ];
 $scope.shuffle = shufflem;
 $scope.goto = goto;


}
);

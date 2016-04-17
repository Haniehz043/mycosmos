

angular.module('starter')

.controller('MainController', function ($scope) {
 $scope.movies =  [


   {imageSrc: '../img/Happy/HappyMovies/BANANA.jpeg', url: 'https://www.youtube.com/watch?v=PjfP2tmjtQM'},
   {imageSrc: '../img/Happy/HappyMovies/CM.jpg', url: 'https://www.youtube.com/watch?v=5UX51lmL6sk'},
   {imageSrc: '../img/Happy/HappyMovies/DB.jpg', url: 'https://www.youtube.com/watch?v=kNTsUZ19C3c'},
   {imageSrc: '../img/Happy/HappyMovies/DD.jpeg', url: 'https://www.youtube.com/watch?v=l13yPhimE3o'},
   {imageSrc: '../img/Happy/HappyMovies/HO.jpg', url: 'https://www.youtube.com/watch?v=naQr0uTrH_s'},
   {imageSrc: '../img/Happy/HappyMovies/PP.jpeg', url: 'https://www.youtube.com/watch?v=OgPm-yaLoyo'},
   {imageSrc: '../img/Happy/HappyMovies/SB.jpg', url: 'https://www.youtube.com/watch?v=CewglxElBK0'},
   {imageSrc: '../img/Happy/HappyMovies/SPY.jpeg', url: 'https://www.youtube.com/watch?v=kM4ksRPcUcg'},
   {imageSrc: '../img/Happy/HappyMovies/TE.jpg', url: 'https://www.youtube.com/watch?v=Yma-g4gTwlE'},
   {imageSrc: '../img/Happy/HappyMovies/WC.jpg', url: 'https://www.youtube.com/watch?v=omI8i1a7rlQ'},
   {imageSrc: '../img/Happy/HappyMovies/WFA.jpg', url: 'https://www.youtube.com/watch?v=-T3wnP91OnI'},
   {imageSrc: '../img/Happy/HappyMovies/WR.jpg', url: 'https://www.youtube.com/watch?v=_UiPki2uxM8'}
 ];
 $scope.shuffle = shufflem;
 $scope.goto = goto;


}
);

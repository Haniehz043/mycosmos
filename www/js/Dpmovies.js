

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
      {imageSrc: '../img/Sad/SadMovies/TTOE.jpeg', url: 'https://www.youtube.com/watch?v=LUayjO_KgsQ'},
      {imageSrc: '../img/Happy/HappyMovies/BANANA.jpeg', url: 'https://www.youtube.com/watch?v=PjfP2tmjtQM'},
      {imageSrc: '../img/Happy/HappyMovies/CM.jpg', url: 'https://www.youtube.com/watch?v=5UX51lmL6sk'},
      {imageSrc: '../img/Happy/HappyMovies/DB.jpg', url: 'https://www.youtube.com/watch?v=kNTsUZ19C3c'},
      {imageSrc: '../img/Happy/HappyMovies/DD.jpeg', url: 'https://www.youtube.com/watch?v=l13yPhimE3o'},
      {imageSrc: '../img/Happy/HappyMovies/HO.jpg', url: 'https://www.youtube.com/watch?v=naQr0uTrH_s'},
      {imageSrc: '../img/Happy/HappyMovies/PP.jpeg', url: 'https://www.youtube.com/watch?v=OgPm-yaLoyo'},
      {imageSrc: '../img/Happy/HappyMovies/SB.jpg', url: 'https://www.youtube.com/watch?v=CewglxElBK0'},
      {imageSrc: '../img/Happy/HappyMovies/SPY.jpeg', url: 'https://www.youtube.com/watch?v=kM4ksRPcUcg'},
      {imageSrc: '../img/Happy/HappyMovies/TE.jpeg', url: 'https://www.youtube.com/watch?v=Yma-g4gTwlE'},
      {imageSrc: '../img/Happy/HappyMovies/WC.jpg', url: 'https://www.youtube.com/watch?v=omI8i1a7rlQ'},
      {imageSrc: '../img/Happy/HappyMovies/WFA.jpg', url: 'https://www.youtube.com/watch?v=-T3wnP91OnI'},
      {imageSrc: '../img/Happy/HappyMovies/WR.jpg', url: 'https://www.youtube.com/watch?v=_UiPki2uxM8'}
 ];
 $scope.shuffle = shufflem;
 $scope.goto = goto;


}
);

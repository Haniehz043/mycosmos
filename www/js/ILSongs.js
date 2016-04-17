angular.module('starter')

.controller('MainController', function ($scope) {
$scope.songs =  [

  {imageSrc: '../img/IL/ILSongs/AT.png', url: 'https://www.youtube.com/watch?v=Cwkej79U3ek'},
  {imageSrc: '../img/IL/ILSongs/DB.jpg', url: 'https://www.youtube.com/watch?v=AS5DOyyoXJI'},
  {imageSrc: '../img/IL/ILSongs/DF.png', url: 'https://www.youtube.com/watch?v=ShlW5plD_40'},
  {imageSrc: '../img/IL/ILSongs/FG.jpg', url: 'https://www.youtube.com/watch?v=AJtDXIazrMo'},
  {imageSrc: '../img/IL/ILSongs/HA.jpg', url: 'https://www.youtube.com/watch?v=GWjbUAYcxII'},
  {imageSrc: '../img/IL/ILSongs/KK.png', url: 'https://www.youtube.com/watch?v=LqCqYP7hDWI'},
  {imageSrc: '../img/IL/ILSongs/KP.jpg', url: 'https://www.youtube.com/watch?v=QGJuMBdaqIw'},
  {imageSrc: '../img/IL/ILSongs/LM.png', url: 'https://www.youtube.com/watch?v=1WpoKRnoPRU'},
  {imageSrc: '../img/IL/ILSongs/LS.jpg', url: 'https://www.youtube.com/watch?v=8xg3vE8Ie_E'},
  {imageSrc: '../img/IL/ILSongs/LU.jpg', url: 'https://www.youtube.com/watch?v=acvIVA9-FMQ'},
  {imageSrc: '../img/IL/ILSongs/MN.jpg', url: 'https://www.youtube.com/watch?v=cggNqDAtJYU'},
  {imageSrc: '../img/IL/ILSongs/OH.jpg', url: 'https://www.youtube.com/watch?v=yjmp8CoZBIo'},
  {imageSrc: '../img/IL/ILSongs/jl.Jpg', url: 'https://www.youtube.com/watch?v=450p7goxZqg'},
  {imageSrc: '../img/IL/ILSongs/mt.png', url: 'https://www.youtube.com/watch?v=2-MBfn8XjIU'}



];
$scope.shuffle =  shuffle;

$scope.goto = goto;


});

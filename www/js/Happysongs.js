angular.module('starter')

.controller('MainController', function ($scope) {
  $scope.songs =  [

    {imageSrc: '../img/Happy/HappySong/22.jpg', url: 'https://www.youtube.com/watch?v=AgFeZr5ptV8'},
    {imageSrc: '../img/Happy/HappySong/abba.jpg', url: 'https://www.youtube.com/watch?v=xFrGuyw1V8s'},
    {imageSrc: '../img/Happy/HappySong/AA.jpg', url: 'https://www.youtube.com/watch?v=Y66j_BUCBMY'},
    {imageSrc: '../img/Happy/HappySong/MBD.png', url: 'https://www.youtube.com/watch?v=GVmw6wnL4oQ'},
    {imageSrc: '../img/Happy/HappySong/DK.png', url: 'https://www.youtube.com/watch?v=7zp1TbLFPp8'},
    {imageSrc: '../img/Happy/HappySong/BEES.jpg', url: 'https://www.youtube.com/watch?v=44YitKiVZ8E'},
    {imageSrc: '../img/Happy/HappySong/Ifeelgood.jpg', url: 'https://www.youtube.com/watch?v=B1wOK9yGUYM'},
    {imageSrc: '../img/Happy/HappySong/mcgirl.jpg', url: 'https://www.youtube.com/watch?v=UmzDyOAaRJE'},
    {imageSrc: '../img/Happy/HappySong/orig.jpg', url: 'https://www.youtube.com/watch?v=fWNaR-rxAic'},
    {imageSrc: '../img/Happy/HappySong/PHappy.jpg', url: 'https://www.youtube.com/watch?v=y6Sxv-sUYtM'},
    {imageSrc: '../img/Happy/HappySong/Pro.jpg', url: 'https://www.youtube.com/watch?v=fLexgOxsZu0'},
    {imageSrc: '../img/Happy/HappySong/SP.png', url: 'https://www.youtube.com/watch?v=fLexgOxsZu0'}


  ];
  $scope.shuffle =  shuffle;

  $scope.goto = goto;


});

angular.module('starter')

.controller('MainController', function ($scope) {
  $scope.Songs =  [

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
    {imageSrc: '../img/Happy/HappySong/SP.png', url: 'https://www.youtube.com/watch?v=fLexgOxsZu0'},
    {imageSrc: '../img/Sad/SadSongs/AD1.jpg', url: 'https://www.youtube.com/watch?v=4aKteL3vMvU'},
    {imageSrc: '../img/Sad/SadSongs/AD2.jpg', url: 'https://www.youtube.com/watch?v=YQHsXMglC9A'},
    {imageSrc: '../img/Sad/SadSongs/BRO.jpg', url: 'https://www.youtube.com/watch?v=ekzHIouo8Q4'},
    {imageSrc: '../img/Sad/SadSongs/BYHO.Jpg', url: 'https://www.youtube.com/watch?v=5_BN40gfnzw'},
    {imageSrc: '../img/Sad/SadSongs/DSB.png', url: 'https://www.youtube.com/watch?v=yEIKwtVRKuQ'},
    {imageSrc: '../img/Sad/SadSongs/GL.jpg', url: 'https://www.youtube.com/watch?v=gIvleB5fF78'},
    {imageSrc: '../img/Sad/SadSongs/J1.jpg', url: 'https://www.youtube.com/watch?v=yleB8fUXudw'},
    {imageSrc: '../img/Sad/SadSongs/JH.jpg', url: 'https://www.youtube.com/watch?v=8v_4O44sfjM'},
    {imageSrc: '../img/Sad/SadSongs/LLT.jpg', url: 'https://www.youtube.com/watch?v=xGPeNN9S0Fg'},
    {imageSrc: '../img/Sad/SadSongs/LM.png', url: 'https://www.youtube.com/watch?v=wXhMqDotfLk'},
    {imageSrc: '../img/Sad/SadSongs/MS.jpg', url: 'https://www.youtube.com/watch?v=WdJkkid_r6w'},
    {imageSrc: '../img/Sad/SadSongs/PAST.jpg', url: 'https://www.youtube.com/watch?v=F0rwOsAteXM'},
    {imageSrc: '../img/Sad/SadSongs/RAA.jpg', url: 'https://www.youtube.com/watch?v=UvvkJrKKYF8'},
    {imageSrc: '../img/Sad/SadSongs/RP1.jpg', url: 'https://www.youtube.com/watch?v=xo1VInw-SKc'},
    {imageSrc: '../img/Sad/SadSongs/RP2.jpg', url: 'https://www.youtube.com/watch?v=bwB9EMpW8eY'},
    {imageSrc: '../img/Sad/SadSongs/RR.jpg', url: 'https://www.youtube.com/watch?v=eJSik6ejkr0'},
    {imageSrc: '../img/Sad/SadSongs/SUA.png', url: 'https://www.youtube.com/watch?v=RgKAFK5djSk'},
    {imageSrc: '../img/Sad/SadSongs/TT.jpg', url: 'https://www.youtube.com/watch?v=iXi6IHFHeIA'},
    {imageSrc: '../img/Sad/SadSongs/WOW.Jpg', url: 'https://www.youtube.com/watch?v=8jzDnsjYv9A'},




  ];

  $scope.shuffle =  shuffle;

  $scope.goto = goto;


});

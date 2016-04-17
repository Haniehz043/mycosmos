angular.module('starter')

.controller('MainController', function ($scope) {
  $scope.songs =  [

    {imageSrc: '../img/Anx/AnxSongs/BA.jpg', url: 'https://www.youtube.com/watch?v=LzX23qVqyJg'},
    {imageSrc: '../img/Anx/AnxSongs/BJ.jpg', url: 'https://www.youtube.com/watch?v=qF3D2oiy6YA'},
    {imageSrc: '../img/Anx/AnxSongs/BT.jpg', url: 'https://www.youtube.com/watch?v=SaHrqKKFnSA'},
    {imageSrc: '../img/Anx/AnxSongs/MC.jpg', url: 'https://www.youtube.com/watch?v=QNJL6nfu__Q'},
    {imageSrc: '../img/Anx/AnxSongs/QD.jpg', url: 'https://www.youtube.com/watch?v=aUW_8cWG7YA'},
    {imageSrc: '../img/Anx/AnxSongs/RT.jpg', url: 'https://www.youtube.com/watch?v=UsEmZYUcsNc'},
    {imageSrc: '../img/Anx/AnxSongs/TE.jpg', url: 'https://www.youtube.com/watch?v=ktvTqknDobU'},
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
    {imageSrc: '../img/Sad/SadSongs/WOW.Jpg', url: 'https://www.youtube.com/watch?v=8jzDnsjYv9A'}



  ];

  $scope.shuffle =  shuffle;

  $scope.goto = goto;


});

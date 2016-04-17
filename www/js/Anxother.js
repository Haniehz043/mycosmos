

angular.module('starter')

.controller('MainController', function ($scope) {
  $scope.other =  [

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
    {imageSrc: '../img/Anx/AnxMovies/12.jpg', url: 'https://www.youtube.com/watch?v=z02Ie8wKKRg'},
    {imageSrc: '../img/Anx/AnxMovies/OC.jpeg', url: 'https://www.youtube.com/watch?v=zxJQgYPXjN4'},
    {imageSrc: '../img/Anx/AnxMovies/SA.jpg', url: 'https://www.youtube.com/watch?v=ByXuk9QqQkk'},
    {imageSrc: '../img/Anx/AnxMovies/TH.jpg', url: 'https://www.youtube.com/watch?v=UVTMkINRChk'},
    {imageSrc: '../img/Anx/AnxMovies/TM.jpeg', url: 'https://www.youtube.com/watch?v=ej3ioOneTy8'},
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
    {imageSrc: '../img/Happy/HappyMovies/WR.jpg', url: 'https://www.youtube.com/watch?v=_UiPki2uxM8'},
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
         {imageSrc: '../img/Sad/SadSongs/WOW.Jpg', url: 'https://www.youtube.com/watch?v=8jzDnsjYv9A'},


    {imageSrc: '../img/Angry/Angrysports/BS.png', url: 'https://www.youtube.com/watch?v=UgzXRXmAOMA'},
    {imageSrc: '../img/Angry/Angrysports/Hock.png', url: 'https://www.youtube.com/watch?v=UgzXRXmAOMA'},
    {imageSrc: '../img/Angry/Angrysports/kickboxing.jpg', url: 'https://www.youtube.com/watch?v=RVr9mVNdQc4'},
    {imageSrc: '../img/Angry/Angrysports/man.png', url: 'https://www.youtube.com/watch?v=AWS_zIFfGTg'},
    {imageSrc: '../img/Angry/Angrysports/woman-running1.svg', url: 'https://www.youtube.com/watch?v=e7m205ZIxBE'},
    {imageSrc: '../img/Angry/Angrysports/Yoga.png', url: 'https://https://www.youtube.com/watch?v=wirV265ZYSw'},
    {imageSrc: '../img/Angrysports/Yoga.png', url: 'https://www.youtube.com/watch?v=HzwdKBYG0xA'}



  ];
  $scope.shuffle = shuffleo;
  $scope.goto = goto;



}
);

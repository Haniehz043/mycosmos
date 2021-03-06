

angular.module('starter')

.controller('MainController', function ($scope) {
  $scope.movies =  [

    {imageSrc: '../img/Angry/AngryMovies/22.jpg', url: 'https://www.youtube.com/watch?v=qP755JkDxyM'},
    {imageSrc: '../img/Angry/AngryMovies/sPaw.jpeg', url: 'https://www.youtube.com/watch?v=2LIQ2-PZBC8'},
    {imageSrc: '../img/Angry/AngryMovies/kings.jpg', url: 'https://www.youtube.com/watch?v=kl8F-8tR8to'},
    {imageSrc: '../img/Angry/AngryMovies/ABM.jpg', url: 'https://www.youtube.com/watch?v=0qJzWrq7les'},
    {imageSrc: '../img/Angry/AngryMovies/JBS.jpg', url: 'https://www.youtube.com/watch?v=7GqClqvlObY'},
    {imageSrc: '../img/Angry/AngryMovies/KA2.jpg', url: 'https://www.youtube.com/watch?v=rMUjyU_Dtf0'},
    {imageSrc: '../img/Angry/AngryMovies/kickass.jpg', url: 'https://www.youtube.com/watch?v=9_MSMPhGu1c'},
    {imageSrc: '../img/Angry/AngryMovies/MI5.jpg', url: 'https://www.youtube.com/watch?v=nmC6rZyByzk'},
    {imageSrc: '../img/Angry/AngryMovies/TERM2.jpg', url: 'https://www.youtube.com/watch?v=tbayiPxkUMM'},
    {imageSrc: '../img/Angry/AngryMovies/AVEN1.jpg', url: 'https://www.youtube.com/watch?v=u1OKBqHICMQ'},
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
    {imageSrc: '../img/Anx/AnxMovies/12.jpeg', url: 'https://www.youtube.com/watch?v=z02Ie8wKKRg'},
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
    {imageSrc: '../img/IL/ILMovies/TV.jpeg', url: 'https://www.youtube.com/watch?v=PcL24s-S6ns'},
    {imageSrc: '../img/St/StMovies/BB.jpg', url: 'https://www.youtube.com/watch?v=yuzXPzgBDvo'},
    {imageSrc: '../img/St/StMovies/BE.jpg', url: 'https://www.youtube.com/watch?v=JoiVEyCosEE'},
    {imageSrc: '../img/St/StMovies/BK.jpg', url: 'https://www.youtube.com/watch?v=J1jzs6dk4bs'},
    {imageSrc: '../img/St/StMovies/BL.jpg', url: 'https://www.youtube.com/watch?v=8pnqbx8iTTM'},
    {imageSrc: '../img/St/StMovies/LA.jpg', url: 'https://www.youtube.com/watch?v=_eCb8w8SRAk'},
    {imageSrc: '../img/St/StMovies/SN.jpg', url: 'https://www.youtube.com/watch?v=KuWsQSntFf0'},
    {imageSrc: '../img/St/StMovies/UP.jpg', url: 'https://www.youtube.com/watch?v=qas5lWp7_R0'},
    {imageSrc: '../img/St/StMovies/WL.jpg', url: 'https://www.youtube.com/watch?v=cR7p-IB6INM'}
  ];
  $scope.shuffle = shufflem;
  $scope.goto = goto;


}
);

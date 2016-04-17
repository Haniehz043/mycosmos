

angular.module('starter')

.controller('MainController', function ($scope) {
  $scope.other =  [

    {{imageSrc: '../img/St/StSongs/21.jpg', url: 'https://www.youtube.com/watch?v=pXRviuL6vMY'},
    {imageSrc: '../img/St/StSongs/DN.png', url: 'https://www.youtube.com/watch?v=vWaRiD5ym74'},
    {imageSrc: '../img/St/StSongs/ED.jpg', url: 'https://www.youtube.com/watch?v=nSDgHBxUbVQ'},
    {imageSrc: '../img/St/StSongs/LM.png', url: 'https://www.youtube.com/watch?v=ifRoMGG8Wvs'},
    {imageSrc: '../img/St/StSongs/NS.Jpg', url: 'https://www.youtube.com/watch?v=mjrBb4TO8Hk'},
    {imageSrc: '../img/St/StSongs/PG.jpg', url: 'https://www.youtube.com/user/ThePianoGuys'},
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


    {imageSrc: '../img/St/StMovies/BB.jpg', url: 'https://www.youtube.com/watch?v=yuzXPzgBDvo'},
    {imageSrc: '../img/St/StMovies/BE.jpeg', url: 'https://www.youtube.com/watch?v=JoiVEyCosEE'},
    {imageSrc: '../img/St/StMovies/BK.jpg', url: 'https://www.youtube.com/watch?v=J1jzs6dk4bs'},
    {imageSrc: '../img/St/StMovies/BL.jpg', url: 'https://www.youtube.com/watch?v=8pnqbx8iTTM'},
    {imageSrc: '../img/St/StMovies/LA.jpg', url: 'https://www.youtube.com/watch?v=_eCb8w8SRAk'},
    {imageSrc: '../img/St/StMovies/SN.jpg', url: 'https://www.youtube.com/watch?v=KuWsQSntFf0'},
    {imageSrc: '../img/St/StMovies/UP.jpg', url: 'https://www.youtube.com/watch?v=qas5lWp7_R0'},
    {imageSrc: '../img/St/StMovies/WL.jpg', url: 'https://www.youtube.com/watch?v=cR7p-IB6INM'},
    {imageSrc: '../img/Angry/AngryMovies/22.jpg', url: 'https://www.youtube.com/watch?v=qP755JkDxyM'},
    {imageSrc: '../img/Angry/AngryMovies/sPaw.jpeg', url: 'https://www.youtube.com/watch?v=2LIQ2-PZBC8'},
    {imageSrc: '../img/Angry/AngryMovies/kings.jpg', url: 'https://www.youtube.com/watch?v=kl8F-8tR8to'},
    {imageSrc: '../img/Angry/AngryMovies/ABM.jpg', url: 'https://www.youtube.com/watch?v=0qJzWrq7les'},
    {imageSrc: '../img/Angry/AngryMovies/JBS.jpg', url: 'https://www.youtube.com/watch?v=7GqClqvlObY'},
    {imageSrc: '../img/Angry/AngryMovies/KA2.jpg', url: 'https://www.youtube.com/watch?v=rMUjyU_Dtf0'},
    {imageSrc: '../img/Angry/AngryMovies/kickass.jpg', url: 'https://www.youtube.com/watch?v=9_MSMPhGu1c'},
    {imageSrc: '../img/Angry/AngryMovies/MI5.jpg', url: 'https://www.youtube.com/watch?v=nmC6rZyByzk'},
    {imageSrc: '../img/Angry/AngryMovies/TERM2.jpg', url: 'https://www.youtube.com/watch?v=tbayiPxkUMM'},
    {imageSrc: '../img/Angry/AngryMovies/AVEN1.jpg', url: 'https://www.youtube.com/watch?v=u1OKBqHICMQ'}
    {imageSrc: '../img/Angry/Angrysports/BS.png', url: 'https://www.youtube.com/watch?v=UgzXRXmAOMA'},
    {imageSrc: '../img/Angry/Angrysports/Hock.png', url: 'https://www.youtube.com/watch?v=UgzXRXmAOMA'},
    {imageSrc: '../img/Angry/Angrysports/kickboxing.jpg', url: 'https://www.youtube.com/watch?v=RVr9mVNdQc4'},
    {imageSrc: '../img/Angry/Angrysports/man.png', url: 'https://www.youtube.com/watch?v=AWS_zIFfGTg'},
    {imageSrc: '../img/Angry/Angrysports/woman-running1.svg', url: 'https://www.youtube.com/watch?v=e7m205ZIxBE'},
    {imageSrc: '../img/Angry/Angrysports/Yoga.png', url: 'https://https://www.youtube.com/watch?v=wirV265ZYSw'}
    {imageSrc: '../img/Angrysports/Yoga.png', url: 'https://www.youtube.com/watch?v=HzwdKBYG0xA'}

  ];
  $scope.shuffle = shuffleo;
  $scope.goto = goto;

}
);

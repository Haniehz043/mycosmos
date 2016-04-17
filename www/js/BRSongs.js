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
  {imageSrc: '../img/Sad/Sadsongs/WOW.Jpg', url: 'https://www.youtube.com/watch?v=8jzDnsjYv9A'},
  {imageSrc: '../img/Angry/AngrySongs/sowhat.jpg', url: 'https://www.youtube.com/watch?v=ktvTqknDobU'},
  {imageSrc: '../img/Angry/AngrySongs/maxresdefault.jpg', url: 'https://www.youtube.com/watch?v=l9PxOanFjxQ'},
  {imageSrc: '../img/Angry/AngrySongs/imagine-dragons-i-bet-my-life-cover-art.jpg', url: 'https://www.youtube.com/watch?v=4ht80uzIhNs'},
  {imageSrc: '../img/Angry/AngrySongs/ImagineD.png', url: 'https://www.youtube.com/watch?v=mWRsgZuwf_8'},
  {imageSrc: '../img/Angry/AngrySongs/FallOutBoy-Centuries.png', url: 'https://www.youtube.com/watch?v=LBr7kECsjcQ'},
  {imageSrc: '../img/Angry/AngrySongs/EminemT.jpg', url: 'https://www.youtube.com/watch?v=ktvTqknDobU'},
  {imageSrc: '../img/Angry/AngrySongs/radioactive.jpg', url: 'https://www.youtube.com/watch?v=ktvTqknDobU'},
  {imageSrc: '../img/Angry/AngrySongs/BeforeHeCheats-CarrieUnderwood.png', url: 'https://www.youtube.com/watch?v=WaSy8yy-mr8'},
  {imageSrc: '../img/Angry/AngrySongs/148637af895ce6c2fda70078c6fb4457.jpg', url: 'https://www.youtube.com/watch?v=d8ekz_CSBVg'},
  {imageSrc: '../img/Angry/AngrySongs/7_Things_(Miley_Cyrus_single_-_cover_art).png', url: 'https://www.youtube.com/watch?v=Hr0Wv5DJhuk'},

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
      {imageSrc: '../img/IL/ILSongs/mt.png', url: 'https://www.youtube.com/watch?v=2-MBfn8XjIU'},
      {imageSrc: '../img/St/StSongs/21.jpg', url: 'https://www.youtube.com/watch?v=pXRviuL6vMY'},
      {imageSrc: '../img/St/StSongs/DN.png', url: 'https://www.youtube.com/watch?v=vWaRiD5ym74'},
      {imageSrc: '../img/St/StSongs/ED.jpg', url: 'https://www.youtube.com/watch?v=nSDgHBxUbVQ'},
      {imageSrc: '../img/St/StSongs/LM.png', url: 'https://www.youtube.com/watch?v=ifRoMGG8Wvs'},
      {imageSrc: '../img/St/StSongs/NS.Jpg', url: 'https://www.youtube.com/watch?v=mjrBb4TO8Hk'},
      {imageSrc: '../img/St/StSongs/PG.jpg', url: 'https://www.youtube.com/user/ThePianoGuys'}


];
$scope.shuffle =  shuffle;

$scope.goto = goto;


});

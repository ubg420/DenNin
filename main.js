phina.globalize();

var SCREEN_WIDTH    = 1280;
var SCREEN_HEIGHT   = 720;
var Group;
var ObjectGroup;
var LightGroup;
var BlockGroup;
var HouseGroup;
var House2Group;
var DenchuGroup;
var BillGroup;

var OjisanGroup;


var ColisionGroup;

var GameMain;

var LIGHTMAX = 155;

var SPEED;

var ASSETS = {
  image: {


    'Syanai':'img/Syanai.png',
    'Sora':'img/Sora.png',
    'Kumo':'img/Kumo.png',
    'Turikawa':'img/Turikawa.png',
    'Ninja':'img/Ninja.png',
    'Kabe':'img/kabe.png',
    'Denchu':'img/Denchu.png',
    'House':'img/House.png',
    'House2':'img/House2.png',

    'Title':'img/title.png',
    

    'Ojisan':'img/Ojisan.png',
    'JK':'img/JK.png',
    'JK2':'img/JK2.png',
    
    
    'Bill':'img/Bill.png',
    

    'White':'img/white.png',


    'Logo':'img/logo.png',
    'Retry':'img/Retry.png',
    'Tweet':'img/Tweet.png',

    'utyo':'img/utyo.png',
    

  },
  spritesheet: {
    'Ninja_SS': 'spriteSS/PlayerSS.ss',

  },

  sound:{
    'jump': './sound/Jump8.wav',
    'jump2': './sound/Jump2_2.wav',
    
  },


  font:{
    'def': './font/SNchibi_6.ttf',
    'misaki': './font/misaki_gothic.ttf',
    
  },

};

phina.main(function() {
  var app = GameApp({
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    assets: ASSETS,
  });
  app.replaceScene(SceneSequence());
  app.run();
});

// SceneSequenceクラス
phina.define("SceneSequence", {
  superClass: "phina.game.ManagerScene",

  // 初期化
  init: function() {
    this.superInit({
      scenes: [

        {
          label: "Loading", // ラベル。参照用
          className: "LoadingScene", // シーンAのクラス名
          nextLabel:"Title",
        },

        {
          label: "Title", // ラベル。参照用
          className: "TitleScene", // シーンAのクラス名
          nextLabel:"Main",
        },

        {
          label: "Main",
          className: "MainScene",
          nextLabel:"End",

        },

        {
          label: "End",
          className: "EndScene",
        },

        {
          label: "TrueEnd",
          className: "TrueEndScene",
        }

      ]
    });
  }
});

phina.define("LoadingScene", {
  superClass: "phina.game.LoadingScene",

  init: function(params) {
    this.superInit({
      assets: ASSETS,
      exitType: "auto",

    });

  }

});

phina.define('ResultScene', {
  superClass: 'DisplayScene',

  init: function() {
    this.superInit();
  },
});

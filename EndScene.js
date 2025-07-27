phina.define('EndScene', {
  superClass: 'DisplayScene',

  init: function(param) {
    this.superInit({
      width: SCREEN_WIDTH,
      height: SCREEN_HEIGHT,
    });
    this.backgroundColor = '#444';


    //this.score = 20;
    this.score = param.score;

    var self = this;

    BackGroup = DisplayElement().addChildTo(this);
    ObjectGroup = DisplayElement().addChildTo(this);


    this.Flash = Sprite("White").addChildTo(ObjectGroup);;
    this.Flash.setPosition(this.gridX.center(),this.gridY.center());
    this.Flash.width = SCREEN_WIDTH * 2;
    this.Flash.height = SCREEN_HEIGHT * 2;
    this.Flash.alpha = 1;
    this.Flash.tweener
      .clear()
      .to({alpha:0}, 1000)



    var back = Sprite('TitleBack').addChildTo(BackGroup);
    back.setSize(SCREEN_WIDTH,SCREEN_HEIGHT);
    back.setPosition(this.gridX.center(),this.gridY.center());


    this.player = EndPlayer().addChildTo(BackGroup);
    this.player.setPosition(this.gridX.center(-5.5),this.gridY.center(3.5));




    var tweet = Sprite('Tweet',200,70).addChildTo(BackGroup);

    var url = "http://cachacacha.com/GAME/MoonNight/";
    var score = 0;
    this.ResultTxt = "";

    var Tweettxt = encodeURIComponent("Score:☆" + this.score + "/" + LIGHTMAX + " " +url + "  #月夜 #かちゃコム");

    tweet.x = -200;
    tweet.y = 400;
    tweet.tweener
    .clear()
    .wait(4300)
    .to({x:500}, 1300,"easeOutQuart");
    // タッチ判定を有効に
    tweet.setInteractive(true);
    // タッチ終了時に発火
    tweet.onclick = function() {
      // 自身を削除
      window.open("http://twitter.com/intent/tweet?text=" + Tweettxt);
    };

    var retry = Sprite('Retry',200,70).addChildTo(BackGroup);
    retry.x = -200;
    retry.y = 400;
    retry.tweener
    .clear()
    .wait(4100)
    .to({x:760}, 1300,"easeOutQuart");
    // タッチ判定を有効に
    retry.setInteractive(true);
    // タッチ終了時に発火
    retry.onclick = function() {

      self.Flash.tweener
        .clear()
        .to({alpha:1}, 2000)
        .wait(500)
        .call(function(){
            self.exit('Main');

        })

    };

    var logo = Sprite('Logo').addChildTo(BackGroup);
    logo.setPosition(this.gridX.center(0),this.gridY.center(6.3));
    logo.x = SCREEN_WIDTH + logo.width;
    logo.y = SCREEN_HEIGHT - logo.height;
    logo.tweener
    .clear()
    .wait(4700)
    .by({x:-360}, 1300,"easeOutQuart");
    // タッチ判定を有効に
    logo.setInteractive(true);
    // タッチ終了時に発火
    logo.onclick = function() {
      // 自身を削除
      window.open("http://www.cachacacha.com/");
    };

    this.light = Sprite('Light').addChildTo(BackGroup);
    this.light.setPosition(this.gridX.center(-10),this.gridY.center(-3.3));
    this.light.scaleX = 2.5;
    this.light.scaleY = 2.5;

    this.light.tweener
    .clear()
    .wait(3000)
    .to({x:self.gridX.center(-3),y:self.gridY.center(-3.3)},2000,"easeOutQuart")


    // ラベルを表示
    this.scorelabel = Label(('000' + this.score).substr(-3)).addChildTo(BackGroup);
    this.scorelabel.setPosition(this.gridX.center(-10),this.gridY.center(-3));
    this.scorelabel.fill = 'white'; // 色を変更
    this.scorelabel.strokeWidth = 8;
    this.scorelabel.fontSize = 140; // フォントサイズを変更
    this.scorelabel.fontFamily = 'def';

    this.scorelabel.tweener
    .clear()
    .wait(3000)
    .to({x:self.gridX.center(0),y:self.gridY.center(-3)},2000,"easeOutQuart")


    this.scorelabel2 = Label('/155').addChildTo(BackGroup);
    this.scorelabel2.setPosition(this.gridX.center(-10),this.gridY.center(-2.4));
    this.scorelabel2.fill = 'white'; // 色を変更
    this.scorelabel2.strokeWidth = 8;
    this.scorelabel2.fontSize = 50; // フォントサイズを変更
    this.scorelabel2.fontFamily = 'def';

    this.scorelabel2.tweener
    .clear()
    .wait(3000)
    .to({x:self.gridX.center(2.5),y:self.gridY.center(-2.4)},2000,"easeOutQuart")


    this.StartFLG = false;

    this.flg = false;



  },

  update: function(app){

  },



});


phina.define("EndPlayer", {
    superClass: "DisplayElement",
    init: function(X,Y) {
      this.superInit();

        this.x = 500;
        this.y = 590;

        this.vx = 0;
        this.vy = 0;
        this.vyMax = 8;

        this.dy = 0.5;

        this.rotationMAX = -30;
        this.rotationMIN = 10;

        this.g  = 0;

        this.width = 50;
        this.height = 100;

        this.MoveMode = "Normal"


        this.zii = Sprite('Zii').addChildTo(this);
        this.ziiSS= FrameAnimation('Zii_SS')
        this.ziiSS.attachTo(this.zii);
        this.ziiSS.gotoAndPlay('End');
        this.ziiSS.fit = false;
        this.zii.setSize(160, 160);
        this.zii.x = 40;
        this.zii.y = -15;



        this.ship = Sprite('ship').addChildTo(this);
        this.ship.x = 30;
        this.ship.y = -35;



        this.tweener
          .clear()
          .by({y:-10}, 3000)
          .by({y:+10}, 3000)
          .setLoop(true);



        this.scaleX = 1;
        this.scaleY = 1;

        this.setBoundingType("rect");
        this.color = "hsla(133, 100%, 50%, 1)";
        this.ColisionFLG = false;

        //コリジョン
        this.colision = RectangleShape().addChildTo(this);
        this.colision.width = this.width;
        this.colision.height = this.height;
        this.colision.alpha = 0; //コリジョン可視化 = 1

        this.HitFLG = false;

        this.floor = SCREEN_HEIGHT - 100;

    },

    update: function(app) {

    },









});

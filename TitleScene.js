phina.define('TitleScene', {
  superClass: 'DisplayScene',

  init: function() {
    this.superInit({
      width: SCREEN_WIDTH,
      height: SCREEN_HEIGHT,
    });


    
    this.GameOverFLG = false;
    
        var BackGroup =  DisplayElement().addChildTo(this);
        
        var Sora = Sprite("Sora").addChildTo(BackGroup);
        Sora.setSize(SCREEN_WIDTH,SCREEN_HEIGHT)
        Sora.setPosition(this.gridX.center(),this.gridY.center());
    
        var clspeed = -2;
        var cl3_1 = LoopImage("Kumo",clspeed).addChildTo(BackGroup);
        cl3_1.setPosition(this.gridX.center(),this.gridY.center());
        var cl3_2 = LoopImage("Kumo",clspeed).addChildTo(BackGroup);
        cl3_2.setPosition(this.gridX.center(16),this.gridY.center());
        var cl3_3 = LoopImage("Kumo",clspeed).addChildTo(BackGroup);
        cl3_3.setPosition(this.gridX.center(32),this.gridY.center());



        var speed = -15;


        var d= LoopImage2("Bill",speed).addChildTo(BackGroup);
        d.setPosition(this.gridX.center(6),this.gridY.center());


        var c= LoopImage2("House2",speed).addChildTo(BackGroup);
        c.setPosition(this.gridX.center(-5),this.gridY.center(1));


        var b= LoopImage2("House",speed).addChildTo(BackGroup);
        b.setPosition(this.gridX.center(-8),this.gridY.center(2));

        var b= LoopImage2("House",speed).addChildTo(BackGroup);
        b.setPosition(this.gridX.center(3),this.gridY.center(2));




        var a = LoopImage2("Kabe",speed).addChildTo(BackGroup);
        a.setPosition(this.gridX.center(-8),this.gridY.center(4));
        var a2 = LoopImage2("Kabe",speed).addChildTo(BackGroup);
        a2.setPosition(this.gridX.center(-5),this.gridY.center(4));
        var a3 = LoopImage2("Kabe",speed).addChildTo(BackGroup);
        a3.setPosition(this.gridX.center(-2),this.gridY.center(4));
        var a4 = LoopImage2("Kabe",speed).addChildTo(BackGroup);
        a4.setPosition(this.gridX.center(1),this.gridY.center(4));
        var a5 = LoopImage2("Kabe",speed).addChildTo(BackGroup);
        a5.setPosition(this.gridX.center(4),this.gridY.center(4));
        var a5 = LoopImage2("Kabe",speed).addChildTo(BackGroup);
        a5.setPosition(this.gridX.center(7),this.gridY.center(4));
        var a6 = LoopImage2("Kabe",speed).addChildTo(BackGroup);
        a6.setPosition(this.gridX.center(9),this.gridY.center(4));


        this.zii = Sprite('Ninja').addChildTo(BackGroup);
        this.ziiSS= FrameAnimation('Ninja_SS')
        this.ziiSS.attachTo(this.zii);
        this.ziiSS.gotoAndPlay('Run');
        this.ziiSS.fit = false;
        this.zii.setSize(128, 128);
        this.zii.x = 320;        
        this.zii.y = 345;



        var b= LoopImage2("Denchu",speed).addChildTo(BackGroup);
        b.setPosition(this.gridX.center(-5),this.gridY.center());

        var b= LoopImage2("Denchu",speed).addChildTo(BackGroup);
        b.setPosition(this.gridX.center(5),this.gridY.center());


    
        
        this.Syanai = Sprite("Syanai").addChildTo(this);
        this.Syanai.setSize(SCREEN_WIDTH+5,SCREEN_HEIGHT+5)
        this.Syanai.setPosition(this.gridX.center(),this.gridY.center());
        this.Syanai.tweener
          .clear()
          .by({y:-4}, 50)
          .by({y:4}, 50)
          .wait(200)
          .by({y:-4}, 50)
          .by({y:4}, 50)
          .wait(1500)
          .setLoop(true);
    
        this.Turikawa = Sprite("Turikawa").addChildTo(this);
        this.Turikawa.setSize(SCREEN_WIDTH,SCREEN_HEIGHT)
        this.Turikawa.setPosition(this.gridX.center(),this.gridY.center(-0.2));
        this.Turikawa.tweener
        .clear()
        .by({x:10,y:10}, 400,"easeOutSine")
        .by({x:-10,y:-10}, 400,"easeInSine")
        .by({x:-10,y:10}, 400,"easeOutSine")
        .by({x:10,y:-10}, 400,"easeInSine")
        .setLoop(true);
        
        var self = this;
    
    
        OjisanGroup = DisplayElement().addChildTo(this);
        

        var t = Sprite("Title").addChildTo(this);
        t.setPosition(this.gridX.center(),this.gridY.center(-4));
        t.scaleX = 0.8;
        t.scaleY = 0.8;
        


        


      // ラベルを表示
      this.startlabel = Label('TOUCH').addChildTo(this);
      this.startlabel.setPosition(this.gridX.center(0),this.gridY.center(6.3));
      this.startlabel.fill = 'white'; // 色を変更
      this.startlabel.strokeWidth = 8;
      this.startlabel.fontSize = 64; // フォントサイズを変更
      this.startlabel.fontFamily = 'def';
      this.startlabel.tweener
        .clear()
        .to({alpha:1,scaleX:1,scaleY:1}, 700,"easeOutSine")
        .wait(400)
        .to({alpha:0,scaleX:0.8,scaleY:0.8}, 700,"easeInSine")
        .setLoop(true);

    this.StartFLG = false;

    this.flg = false;

  },

  update: function(app){

  },

  onpointend: function(){

    if(!this.StartFLG){
      

      this.exit();
    }
  },

  Start: function(){
  //  this.exit();
    this.startlabel.remove();
    this.titlelogo.remove();

    this.light = Sprite('Light').addChildTo(this);
    this.light.setPosition(this.gridX.center(6.3),this.gridY.center(-6.2));
    this.light.scaleX = 0.1;
    this.light.scaleY = 0.1;

    var self = this;
    this.light.tweener
      .clear()
      .to({x:1000,y:400,scaleX:1,scaleY:1,rotation:360}, 2500,"easeOutSine")
      .wait(400)
      .to({x:self.gridX.center(-5.5),y:self.gridY.center(3.5)}, 2000,"easeInSine")
      .call(function(){
          self.player.wakeup();

          var Flash = RectangleShape().addChildTo(self);
          Flash.width = SCREEN_WIDTH * 2;
          Flash.height = SCREEN_HEIGHT * 2;
          Flash.fill = "white";
          Flash.alpha = 0;
          Flash.tweener
            .clear()
            .wait(3000)
            .to({alpha:1}, 1000)
            .wait(1000)
            .call(function(){
              self.exit();
            })

      })
      .by({y:-150,rotation:360,alpha:-1},700)






  },

});


phina.define("TitlePlayer", {
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

    wakeup: function() {
      var self = this;
      this.tweener
      .clear()
      .wait(1300)
      .call(function(){
      })
      .to({x:1200,y:-100,rotation:-35}, 2500,"easeInSine")
      .call(function(){

      })




    }







});

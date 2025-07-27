phina.define("Bill", {
    superClass: "DisplayElement",
    init: function(x) {
      this.superInit({
        width: 400,
        height: 600,
        fill: "green",
        stroke: null,

      });

        if(!x){
          this.x = SCREEN_WIDTH + this.width /2;          
        }
        else{
          this.x = x;
        }
        this.y = 450;



        this.speed = SPEED;

        this.vx = -this.speed;
        this.vy = 0;
        this.g  = 0;

        this.sprite = Sprite('Bill').addChildTo(this);

        /*
        this.DogSS = FrameAnimation('DogSS');
        this.DogSS.attachTo(this.Dog);
        this.DogSS.fit = false;
        this.Dog.setSize(80, 80);

        this.DogSS.gotoAndPlay('Normal');
        */
        this.sprite.setSize(350, 600);
        this.setBoundingType("rect");
        this.color = "hsla(133, 100%, 50%, 1)";
        this.ColisionFLG = false;

        this.Colision = RectangleShape().addChildTo(ColisionGroup);
        this.Colision.width = 340;
        this.Colision.height = 15;
        this.Colision.x = this.x;
        this.ColisionY = -287;        
        this.Colision.alpha = 0;
        this.Colision.tag = "obj";


        this.HitFLG = false;

        this.MoveMode = "Normal";

    },

    update: function(app) {
      this.Colision.x = this.x - 15;
      this.Colision.y = this.y + this.ColisionY;
      
      this.x += this.vx;

      switch (this.MoveMode) {
        case "Normal":
        //  this.HitCheck();

          break;


        case "Hit":


          break;

      }

    //	this.x = this.mx + GameMain.Player.x;
    //	this.y = this.my + GameMain.Player.y;


      if(this.x < -this.width){
        this.children.clear();
        this.remove();
      }

    },

    waveCreate:function(){

    },



    Hit: function(){

      this.MoveMode = "Hit";

      var self = this;
      this.vx = 0;
      this.tweener.by({y:-150,rotation:360,alpha:-1},700)
      .wait(500)
      .call(function(){
          self.remove();
      });

    }

});

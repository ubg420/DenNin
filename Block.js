phina.define("Block", {
    superClass: "DisplayElement",
    init: function(x) {
      this.superInit({
        width: 320,
        height: 320,
        fill: "green",
        stroke: null,

      });

        if(!x){
          this.x = SCREEN_WIDTH + this.width/2;          
        }
        else{
          this.x = x;
        }
        this.y = 570;



        this.speed = SPEED;

        this.vx = -this.speed;
        this.vy = 0;
        this.g  = 0;

        this.sprite = Sprite('Kabe').addChildTo(this);
        /*
        this.DogSS = FrameAnimation('DogSS');
        this.DogSS.attachTo(this.Dog);
        this.DogSS.fit = false;
        this.Dog.setSize(80, 80);

        this.DogSS.gotoAndPlay('Normal');
        */
        this.sprite.setSize(320, 320);
        this.setBoundingType("rect");
        this.color = "hsla(133, 100%, 50%, 1)";
        this.ColisionFLG = false;

        this.Colision = RectangleShape().addChildTo(ColisionGroup);
        this.Colision.width = this.width -28;
        this.Colision.height = 15;
        this.Colision.x = this.x - 30;
        this.Colision.x = this.x;
        this.ColisionY = -140;        
        this.Colision.alpha = 0;
        this.Colision.tag = "obj";


        this.HitFLG = false;

        this.MoveMode = "Normal";

    },

    update: function(app) {
      this.Colision.x = this.x - 18;
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
        this.Colision.remove();
        this.remove();
      }

    },

    waveCreate:function(){

    },



});

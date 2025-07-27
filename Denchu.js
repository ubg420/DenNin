phina.define("Denchu", {
    superClass: "DisplayElement",
    init: function(x) {
      this.superInit({
        width: 144,
        height: 536,
        fill: "green",
        stroke: null,

      });

        if(!x){
          this.x = SCREEN_WIDTH + this.width /2;          
        }
        else{
          this.x = x;
        }
        this.y = 470;



        this.speed = SPEED;

        this.vx = -this.speed;
        this.vy = 0;
        this.g  = 0;

        this.sprite = Sprite('Denchu').addChildTo(this);

        /*
        this.DogSS = FrameAnimation('DogSS');
        this.DogSS.attachTo(this.Dog);
        this.DogSS.fit = false;
        this.Dog.setSize(80, 80);

        this.DogSS.gotoAndPlay('Normal');
        */
        this.sprite.setSize(144, 536);
        this.setBoundingType("rect");
        this.color = "hsla(133, 100%, 50%, 1)";
        this.ColisionFLG = false;

        this.Colision = RectangleShape().addChildTo(ColisionGroup);
        this.Colision.width = this.width -30;
        this.Colision.height = 15;
        this.Colision.x = this.x;
        this.ColisionY = -235;        
        this.Colision.alpha = 0;
        this.Colision.tag = "obj";


        this.HitFLG = false;

        this.MoveMode = "Normal";

    },

    update: function(app) {
      this.Colision.x = this.x - 13;
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
        this.Colision.remove();
      }

    },

    waveCreate:function(){

    },




});

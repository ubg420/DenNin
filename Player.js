phina.define("Player", {
    superClass: "DisplayElement",
    init: function() {
      this.superInit();

        this.x = 230;
        this.y = 0;

        this.vx = 0;
        this.vy = 0;
        this.vyMax = 8;

        this.dy = 0.5;

        this.rotationMAX = -30;
        this.rotationMIN = 10;

        this.g  = 0;

        this.width = 80;
        this.height = 10;



        this.zii = Sprite('Ninja').addChildTo(this);
        this.ziiSS= FrameAnimation('Ninja_SS')
        this.ziiSS.attachTo(this.zii);
        this.ziiSS.gotoAndPlay('Run');
        this.ziiSS.fit = false;
        this.zii.setSize(128, 128);
        this.zii.x = 10;        
        this.zii.y = -45;





        this.jumppower = -21;        

        this.vyMAX = 20;





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

        this.floor = 500;



        this.MoveMode = "Run";
        this.g  = 2;
        
        var self = this;


        this.jumpcount = 0;



    },

    update: function(app) {



      
      switch (this.MoveMode) {

        case "Run":

          if(this.HitCheck()){
            this.Chakuti();
          }else{
            this.rakka();
          }
          this.y += this.vy;        
          this.vy += this.g;

          break;

        case "Jump":

          this.y += this.vy;        
          this.vy += this.g;

          if(this.vy > 0){
            if(this.HitCheck()){
              this.Chakuti();
            }
          }

      
        break;

        case "Hit":
          this.x += this.vx;
          this.y += this.vy;
          this.vy += this.g;

          break;

        case "UP":
          this.UP();

          break;
      }


      if(this.y > SCREEN_HEIGHT){
        GameMain.GameOver();
        this.remove();
      }



      if(this.vy > this.vyMAX){
        this.vy = this.vyMAX;
      }


    },

    HitCheck: function(){
      //当たり判定
      var og = ColisionGroup.children;
      var self = this;
      var ret = false;
      og.each(function(Object) {
          if(self.hitTestElement(Object)){
            
            ret = true;
            self.y = Object.y -10;
            
            /*
            switch (Object.tag) {
              case "enemy":
                self.Cha();

                break;
            }
            */

          }

      });

      return ret;

    },

    Hit: function(){
      switch (this.MoveMode) {
        case "Normal":
          this.vx = -10;
          this.vy = -15;
          this.g  = 1;
          this.MoveMode = "Hit";

          break;
        }

    },

    Chakuti: function(){
      this.jumpcount = 0;
      if(this.MoveMode != "Run"){
        this.MoveMode = "Run";
        this.ziiSS.gotoAndPlay('Run');
      }
      this.zii.rotation = 0;
      this.vy = 0;
      

    },

    rakka:function(){
      this.MoveMode = "Jump";
      this.ziiSS.gotoAndPlay('Jump');      
      this.jumpcount++;
    },

    Jump: function(){

      switch (this.MoveMode) {
        
          case "Run":
          
            this.MoveMode = "Jump";
            this.ziiSS.gotoAndPlay('Jump');
            this.vy = this.jumppower;
            this.jumpcount++;

            break;

          case "Jump":

            if(this.jumpcount < 2){
              
              this.vy = this.jumppower;
              this.zii.tweener
              .clear()
              .by({rotation:360}, 250,"easeOutSine")

              this.ziiSS.gotoAndPlay('Jump2');
              


            }
            this.jumpcount++;

          break;
            
      }

    },






});

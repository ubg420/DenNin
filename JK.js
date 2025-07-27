phina.define("JK", {
    superClass: "DisplayElement",
    init: function(WaitTime) {
      this.superInit({
        width: 264,
        height: 440,
      });
      this.x = -(this.width/2);
      this.y = 530;

      this.sprite = Sprite('JK').addChildTo(this);
      this.sprite.setSize(294, 500);
      
      this.tweener
      .clear()
      .by({x:30,y:10}, 150,"easeOutSine")
      .by({x:30,y:-10}, 150,"easeOutSine") 
      .setLoop(true)       

      this.positionx = 490;

      this.waittime = WaitTime;
      this.timer = 0;
    },

    update: function(app) {

      if(this.x > this.positionx){
        this.x = this.positionx;
        var self = this;
        self.sprite.scaleX = -1;

        self.tweener
        .clear()
        .by({y:-15}, 200,"easeOutSine")
        .by({y:15}, 200,"easeInSine")
        .setLoop(true)       



      }

      if(this.timer > this.waittime){
        this.waittime = 999999;
        this.tweener
          .clear()
          .by({x:-30,y:10}, 150,"easeOutSine")
          .by({x:-30,y:-10}, 150,"easeOutSine")
          .setLoop(true)       
      }


      if(this.x > SCREEN_WIDTH + this.width){
        this.remove();
      }


      this.timer++;
    },

    waveCreate:function(){

    },



    Hit: function(){


    }

});

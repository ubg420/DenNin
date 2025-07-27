phina.define("Ojisan", {
    superClass: "DisplayElement",
    init: function(WaitTime) {
      this.superInit({
        width: 264,
        height: 544,
      });
      this.x = SCREEN_WIDTH + this.width/2;
      this.y = 470;

      this.sprite = Sprite('Ojisan').addChildTo(this);

      this.tweener
      .clear()
      .by({x:-30,y:-10}, 150,"easeOutSine")
      .by({x:-30,y:10}, 150,"easeOutSine") 
      .setLoop(true)       

      this.positionx = 950;

      this.waittime = WaitTime;
    },

    update: function(app) {
      if(this.x < this.positionx){
        this.x = this.positionx;
        var self = this;
        this.tweener
        .clear()
        .wait(self.waittime)
        .call(function(){
          self.sprite.scaleX = -1;
          self.tweener
          .clear()
          .by({x:30,y:10}, 150,"easeOutSine")
          .by({x:30,y:-10}, 150,"easeOutSine")
          .setLoop(true)       
        })

      }

      if(this.x > SCREEN_WIDTH + this.width){
        this.remove();
      }

    },

    waveCreate:function(){

    },



    Hit: function(){


    }

});

phina.define("LoopImage2", {
    superClass: "phina.display.Sprite",
    init: function(texture,speed) {
      this.superInit(texture);

        this.vx = speed;

        this.harfwidth = this.width / 2;

    },

    update: function(app) {

      this.x += this.vx;


      if(this.x < -this.harfwidth){
        this.x = SCREEN_WIDTH +this.harfwidth + this.vx;
      }


    },


});

phina.define("LoopImage", {
    superClass: "phina.display.Sprite",
    init: function(texture,speed) {
      this.superInit(texture);

        this.vx = speed;

        this.harfwidth = this.width / 2;

    },

    update: function(app) {

      this.x += this.vx;


      if(this.x < -this.harfwidth){
        this.x = this.width * 3 + -this.harfwidth + this.vx;
      }


    },


});

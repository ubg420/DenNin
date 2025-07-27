phina.define("CheckPoint", {
    superClass: "DisplayElement",
    init: function(TYPE) {
      this.superInit({
        width: 30,
        height: 30,
        fill: "green",
        stroke: null,

      });

        this.x = SCREEN_WIDTH + this.width/2;          
        this.y = 570;
        
        this.speed = SPEED;

        this.vx = -this.speed;
        this.vy = 0;
        this.g  = 0;

        this.type = TYPE;


    },

    update: function(app) {

      
      this.x += this.vx;


    //	this.x = this.mx + GameMain.Player.x;
    //	this.y = this.my + GameMain.Player.y;
      if(this.x < -this.width){
        this.SetLabel();
        this.children.clear();
        this.remove();
      }



    },

    SetLabel:function(){
      switch (this.type) {
        case "GAMEEND":
        GameMain.Goal();


          var lvup = Label('ゴール').addChildTo(GameMain);
          lvup.setPosition(GameMain.gridX.center(13),GameMain.gridY.center());
          lvup.fill = 'white'; // 色を変更
          lvup.strokeWidth = 8;
          lvup.fontSize = 154; // フォントサイズを変更
          lvup.fontFamily = 'def';
          lvup.scaleY = 0;
          lvup.tweener
            .clear()
            .to({x:GameMain.gridX.center(),alpha:1,scaleX:1,scaleY:1}, 400,"easeOutSine")
            .wait(800)
            .to({x:GameMain.gridX.center(-13),alpha:1,scaleX:1,scaleY:0}, 300,"easeInSine")
            .call(function(){
              var result = Result().addChildTo(GameMain);
              
              lvup.remove();
            });

          break;
      

        case "Goal":
          // ラベルを表示
          var lvup = Label( GameMain.syukai +  '周目 ').addChildTo(GameMain);
          lvup.setPosition(GameMain.gridX.center(13),GameMain.gridY.center());
          lvup.fill = 'white'; // 色を変更
          lvup.strokeWidth = 8;
          lvup.fontSize = 154; // フォントサイズを変更
          lvup.fontFamily = 'def';
          lvup.scaleY = 0;

          lvup.tweener
            .clear()
            .to({x:GameMain.gridX.center(),alpha:1,scaleX:1,scaleY:1}, 400,"easeOutSine")
            .wait(800)
            .to({x:GameMain.gridX.center(-13),alpha:1,scaleX:1,scaleY:0}, 300,"easeInSine")
            .call(function(){
              lvup.remove();
             })

          break;

        case "End":
          
          // ラベルを表示
          var lvup = Label('STAGE ' + GameMain.StageLevel).addChildTo(GameMain);
          lvup.setPosition(GameMain.gridX.center(13),GameMain.gridY.center(6.3));
          lvup.fill = 'white'; // 色を変更
          lvup.strokeWidth = 8;
          lvup.fontSize = 114; // フォントサイズを変更
          lvup.fontFamily = 'def';
          lvup.scaleY = 0;

          lvup.tweener
            .clear()
            .to({x:GameMain.gridX.center(),alpha:1,scaleX:1,scaleY:1}, 400,"easeOutSine")
            .wait(800)
            .to({x:GameMain.gridX.center(-13),alpha:1,scaleX:1,scaleY:0}, 300,"easeInSine")
            
            .call(function(){
              lvup.remove();
            })

          break;
            

        default:
          break;
      }





    },

});

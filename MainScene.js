phina.define('MainScene', {
  superClass: 'DisplayScene',

  init: function() {
    this.superInit({
      width: SCREEN_WIDTH,
      height: SCREEN_HEIGHT,
    });
    this.backgroundColor = '#FFF';

    SPEED = 15;

    GameMain = this;

    this.GameOverFLG = false;

    var BackGroup =  DisplayElement().addChildTo(this);
    
    ObjectGroup = DisplayElement().addChildTo(this);
    LightGroup = DisplayElement().addChildTo(this);
    
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

    BillGroup = DisplayElement().addChildTo(this);
    House2Group = DisplayElement().addChildTo(this);    
    HouseGroup = DisplayElement().addChildTo(this);
    DenchuGroup = DisplayElement().addChildTo(this);
    
    BlockGroup = DisplayElement().addChildTo(this);
    
    ColisionGroup = DisplayElement().addChildTo(this);
    

    
    this.Player = Player().addChildTo(this);
    
    this.Syanai = Sprite("Syanai").addChildTo(this);
    this.Syanai.setSize(SCREEN_WIDTH+8,SCREEN_HEIGHT+8)
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
    this.Turikawa.setPosition(this.gridX.center(),this.gridY.center(-0.22));
    this.Turikawa.tweener
    .clear()
    .by({x:10,y:10}, 400,"easeOutSine")
    .by({x:-10,y:-10}, 400,"easeInSine")
    .by({x:-10,y:10}, 400,"easeOutSine")
    .by({x:10,y:-10}, 400,"easeInSine")
    .setLoop(true);
    
    var self = this;


    OjisanGroup = DisplayElement().addChildTo(this);
    

    var startlabel = Label('START').addChildTo(self);
    startlabel.setPosition(self.gridX.center(0),self.gridY.center(0));
    startlabel.fill = 'white'; // 色を変更
    startlabel.strokeWidth = 8;
    startlabel.fontSize = 64; // フォントサイズを変更
    startlabel.scaleX = 0;
    startlabel.scaleY = 0;
    startlabel.fontFamily = 'def';

    startlabel.tweener
      .clear()
      .to({alpha:1,scaleX:1,scaleY:1}, 700,"easeOutSine")
      .wait(400)
      .to({alpha:0,scaleX:0.8,scaleY:0.8}, 700,"easeInSine")
      .call(function(){
        this.remove()
      })

    var Flash = Sprite("White").addChildTo(ObjectGroup);;
    Flash.setPosition(this.gridX.center(),this.gridY.center());
    Flash.width = SCREEN_WIDTH * 2;
    Flash.height = SCREEN_HEIGHT * 2;
    Flash.alpha = 1;
    Flash.tweener
      .clear()
      .to({alpha:0}, 1000)
      .call(function(){
        this.remove();
      })

    this.objcount = 0;
    
    this.score = 0;

    this.timer = 0;
    this.lightcount = 0;

    //debung
    //this.lightcount = 30;
    //this.timer = LIGHTDATA.Lights[this.lightcount-1].next;

    this.GameMode = "Start";

    this.StageLevel = 0;

    this.StageStart();

    this.syukai = 1;


  },

  update: function(app){

    if(!this.GameOverFLG){
      this.timer++;      
      //ライト出現タイマー
      if(this.timer > this.nexttime){
        this.CreateObject();
      }
    }

  },


  StageStart: function(){
    this.nexttime = StageDatas[this.StageLevel][this.objcount].time;
    var block = Block(0).addChildTo(BlockGroup);
    var block = Block(200).addChildTo(BlockGroup);
    var block = Block(400).addChildTo(BlockGroup);
    var block = Block(600).addChildTo(BlockGroup);
    var block = Block(800).addChildTo(BlockGroup);
    var block = Block(1000).addChildTo(BlockGroup);
    var block = Block(1200).addChildTo(BlockGroup);
    var block = Block(1400).addChildTo(BlockGroup);
    var block = Block(1700).addChildTo(BlockGroup);
    
    
  },

  HitCheck: function(){
    //当たり判定
    var lg = LightGroup.children;
    var player = this.Player;
    var self = this;
    lg.each(function(Object) {
        if(player.hitTestElement(Object)){

              if(Object.MoveMode == "Normal"){
                SoundManager.play(Object.sound);
                self.score++;
                Object.Hit();
              }
        }
    });

  },

  CreateObject: function(){

    var obj =StageDatas[this.StageLevel][this.objcount];

    if(obj.id != 9999){
      switch (obj.name) {
        case "Block":
          var block = Block().addChildTo(BlockGroup);
        
          
          break;

        case "House":
          var house = House().addChildTo(HouseGroup);
          
          break;

        case "House2":
          var house2 = House2().addChildTo(House2Group);
          
          break;
    
        case "Denchu":
          var denchu = Denchu().addChildTo(DenchuGroup);
        
          break;

        case "Bill":
          var bill = Bill().addChildTo(BillGroup);
      
        break;

        case "label":
          // ラベルを表示
          var label = Label(obj.text).addChildTo(this);
          label.setPosition(this.gridX.center(0),this.gridY.center(6));
          label.fill = 'white'; // 色を変更
          label.strokeWidth = 8;
          label.fontSize = 64; // フォントサイズを変更
          label.scaleX = 1;
          label.scaleY = 0;
          
          label.tweener
            .clear()
            .to({alpha:1,scaleX:1,scaleY:1}, 300,"easeOutSine")
            .wait(2300)
            .to({alpha:0,scaleX:1,scaleY:0}, 400,"easeInSine")
            .call(function(){
              label.remove();
            })    
        break;


        case "Ojisan":
        // ラベルを表示
            var ojisan = Ojisan(obj.WaitTime).addChildTo(OjisanGroup);
        
        break;
        
        case "JK":
        // ラベルを表示
            var jk = JK(obj.WaitTime).addChildTo(OjisanGroup);
            var jk = JK2(obj.WaitTime).addChildTo(OjisanGroup);
            
        break;


        case "OjisanWalk":
        // ラベルを表示
        var sprite = Sprite('Ojisan').addChildTo(OjisanGroup);
        sprite.setPosition(this.gridX.center(10),this.gridY.center(3));
        
        sprite.setSize(264, 544);
        sprite.tweener
        .clear()
        .by({x:-30,y:-10}, 150,"easeOutSine")
        .by({x:-30,y:10}, 150,"easeOutSine") 
        .setLoop(true)       
      //  .wait(obj.WaitTime)
        
        break;





        case "End":
        // ラベルを表示
          this.StageLevel++;
          this.objcount = 0;
          this.timer = 0;
          this.nexttime = StageDatas[this.StageLevel][this.objcount+1].time;
          


          // ラベルを表示
          /*
          var lvup = Label('STAGE ' + this.StageLevel).addChildTo(this);
          lvup.setPosition(this.gridX.center(13),this.gridY.center(6.3));
          lvup.fill = 'white'; // 色を変更
          lvup.strokeWidth = 8;
          lvup.fontSize = 114; // フォントサイズを変更
          lvup.fontFamily = 'def';
          lvup.scaleY = 0;

          lvup.tweener
            .clear()
            .to({x:this.gridX.center(),alpha:1,scaleX:1,scaleY:1}, 400,"easeOutSine")
            .wait(800)
            .to({x:this.gridX.center(-13),alpha:1,scaleX:1,scaleY:0}, 300,"easeInSine")
            
            .call(function(){
              lvup.remove();
            })
            */
          var lvup = CheckPoint("End").addChildTo(this);

        break;


        case "GOAL":

      
        this.syukai++;
        if(this.syukai > 3){
          this.syukai--;
          
          this.Goal();
          return;


        }else{
          // ラベルを表示
          this.StageLevel = 1;
          this.objcount = 0;
          this.timer = 0;
          this.nexttime = StageDatas[this.StageLevel][this.objcount+1].time;
          SPEED += 5;
          


          var lvup = CheckPoint("Goal").addChildTo(this);
          /*

          // ラベルを表示
          var lvup = Label( this.syukai +  '周目 ').addChildTo(this);
          lvup.setPosition(this.gridX.center(13),this.gridY.center());
          lvup.fill = 'white'; // 色を変更
          lvup.strokeWidth = 8;
          lvup.fontSize = 154; // フォントサイズを変更
          lvup.fontFamily = 'def';
          lvup.scaleY = 0;

          lvup.tweener
            .clear()
            .to({x:this.gridX.center(),alpha:1,scaleX:1,scaleY:1}, 400,"easeOutSine")
            .wait(800)
            .to({x:this.gridX.center(-13),alpha:1,scaleX:1,scaleY:0}, 300,"easeInSine")
            
            .call(function(){
              lvup.remove();
          })

          */
        }
        

        break;

        


        



        default:
          break;
      }

      this.objcount++;
      this.nexttime = StageDatas[this.StageLevel][this.objcount].time;
      
    }else{
      //debug
      this.GameMode = "End";
    }


  },

  onpointstart : function(){
    if(!this.GameOverFLG){
      this.Player.Jump();      
    }
  },


  Goal:function(){

    var self = this;
    this.GameOverFLG = true;
    this.Player.tweener
    .clear()
    .to({x:this.gridX.center(-3),y:this.gridY.center(-3),rotation:360}, 500,"easeOutSine")
    .wait(200)

    .to({y:this.gridY.center(-13)}, 300,"easeOutSine")
    .call(function(){
      self.Player.remove();
    })
    var lvup = Label('ゴール').addChildTo(self);
    lvup.setPosition(self.gridX.center(13),self.gridY.center());
    lvup.fill = 'white'; // 色を変更
    lvup.strokeWidth = 8;
    lvup.fontSize = 154; // フォントサイズを変更
    lvup.fontFamily = 'def';
    lvup.scaleY = 0;
    lvup.tweener
      .clear()
      .to({x:self.gridX.center(),alpha:1,scaleX:1,scaleY:1}, 400,"easeOutSine")
      .wait(800)
      .to({x:self.gridX.center(-13),alpha:1,scaleX:1,scaleY:0}, 300,"easeInSine")
      .call(function(){
        var result = Result().addChildTo(self);
        
        lvup.remove();
    })
  },


  GameOver: function(){
    this.GameOverFLG = true;
    var result = Result().addChildTo(this);
  },

  Retry: function(){
    this.exit("Main");
  }

});

"strict"

////////////////////////Keyboard input

var prKeys=[],
    recent=[];
Window.onkeydown=function(e){
  prKeys[recent[recent.push(e.keyCode)-1]]=true;
}
Window.onkeyup=function(e){
  delete prKeys[recent.pop()];
}
Window.onblur=function(){
  prKeys=[],recent=[];
}

////////////////////////Important shit

var canvas=document.getElementById('canvas'),
    ctx=canvas.getContext('2d'),
    heartX=0,heartY=0,heartL=20,
    sprite={},onSprites={},
    HP=20,items=[];

sprite["pellet"]={
  onHit=function(){
    HP=1;
    delete onSprites["pellet"];
  }
  onInit=function(spr){
    let angle=Math.tan((heartY-spr[2])/(heartX-spr[1]));
    return [Math.cos(angle),Math.sin(angle)];
  }
  onTick=function(dir){
    spr[1]=spr[1]+dir[1];
    spr[2]=spr[2]+dir[2];
  }
  onTurn=function(){}
  imgs=[<images>]
};

sprite["misterAsshole"]={
  onHit=function(){}
  onInit=function(){}
  onTick=function(){}
  imgs=[<images>]
};

onSprites=[
  //Sprite name,x,y,sizeX,sizeY,img,rot,new?
  ["misterAsshole",500,500,300,300,0,0,true]
];


function tick(time){
  var heartSpd=1
  if(prKeys[88]||prKeys[16]){
    var heartSpd=.5
  }if(prKeys[37]){
    heartX-=heartSpd;
  }if(prKeys[38]){
    heartY-=heartSpd;
  }if(prKeys[39]){
    heartX+=heartSpd;
  }if(prKeys[40]){
    heartY+=heartSpd;
  }
  for(let i=0;i<onSprites.length;i++){
    let spr=onSprites[i];
    if(spr[7]==true){
      spr[7]=sprite[spr[0]].onInit(spr);
    }
    sprite[spr[0]].onTick(spr[7]);
  }
  
  
  
  Window.requestAnimationFrame(tick);
}

////////////////////////And now we start...After I write more stuff

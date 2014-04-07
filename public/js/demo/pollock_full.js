var scene;
var md = false;
var colors = [
'#1abc9c', '#d35400', '#34495e', '#e74c3c',
'#16a085', '#3498db', '#2c3e50', '#9b59b6',
'#f1c40f', '#2980b9', '#f39c12', '#8e44ad',
'#2ecc71', '#c0392b', '#27ae60', '#e67e22'
];

function addDrip(point){
  point = point || new Vector2D(
    Pollock.randomInRange(0,scene.width),
    Pollock.randomInRange(0, scene.height)
  );
  var drip = new Drip({
    lifeSpan: Pollock.randomInRange(500, 3000),
    position: point,
    velocity: new Vector2D(
      Math.random()*25,
      Math.random()*25
    ),
    color: colors[Pollock.randomInRange(0, colors.length-1)],
    size: Pollock.randomInRange(2,6)
  });

  scene.addChild(drip);
};

function initialize() {
  scene = new Pollock({
    canvasID: "c",
    clear: false,
    fullscreen: false,
    resizable: true,
    mousedown: function(event){
      md = true;
    },
    mouseup: function(event){
      md = false;
    },
    mousemove: function(event){
      if(md || (event.touches && event.touches.length > 0))
        addDrip(new Vector2D(event.offsetX, event.offsetY));
    },
    click: function(event){
      addDrip(new Vector2D(event.offsetX, event.offsetY));
    }
  });

  scene.enable();
}

window.onload = function() {
  initialize();
};

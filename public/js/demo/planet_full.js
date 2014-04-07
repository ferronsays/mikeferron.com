var scene;

function zSort(a, b) {
  return (b.settings.position.z - a.settings.position.z);
}

function initialize() {
  scene = new Pollock({
    canvasID: "c"
  });

  scene.addChild(new Planet({
    fLen: 320, // field of view
    zMax: 318,
    atmosphere: {
      color: 'rgba(236, 240, 241, 0.8)',
      radius: 94,
      size: 8,
      count: 100,
      rotateX: -0.0015,
      rotateY: 0.005,
      rotateZ: 0
    },
    earth: {
      color: '#27ae60',
      radius: 75,
      size: 10,
      count: 100,
      rotateX: -0.004,
      rotateY: 0.008,
      rotateZ: 0
    },
    water: {
      color: '#2980b9',
      radius: 60,
      size: 20,
      count: 200,
      rotateX: -0.004,
      rotateY: 0.008,
      rotateZ: 0
    }
  }));

  scene.addChild(new StarField({}));
}
window.onload = function() {
  initialize();
};

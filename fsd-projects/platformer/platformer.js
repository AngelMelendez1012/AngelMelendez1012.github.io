$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid();


    // TODO 2 - Create Platforms
createPlatform(50, 650, 100, 20, "blue");
createPlatform(300,600,100,15, "yellow");
createPlatform( 640,500, 100,15, "green")
 createPlatform(950,550,100,15,"blue")
 createFakePlatform(950, 400,100,15);
 createPlatform(1200,425,100,15,"yellow");
createPlatform(1200,300,100,15, "blue");
createPlatform(900,300,200,15,"green");
createPlatform(700,200,100,15,"yellow");
createPlatform(450,300,100,15,"green");
createPlatform(250,200,100,15,"blue");
createPlatform(100,150,100,15,"green");
createPlatform(100,150,15,-100,"yellow");
    // TODO 3 - Create Collectables
createCollectable("steve", 675, 455);
createCollectable("steve", 1250, 250);
createCollectable("steve", 130, 120);
    
    // TODO 4 - Create Cannons
createCannon("top", 1050, 1500);
createCannon("left", 650, 10);
createCannon("left", 200,1500)
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});

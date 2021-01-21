class block
{

    constructor(x, y)
    {

      var blockOptions = 
      {

        restitution: 0.8,
        friction: 0.1,
        density: 0.1,
        isStatic: false

      }

      this.body = Bodies.rectangle(x, y, 30, 40, blockOptions);
      World.add(world, this.body);

      this.visiblity = 255;

    }

    display(color)
    {

        var pos = this.body.position;

        var angle = this.body.angle
        push();
        translate(pos.x, pos.y);

        rectMode(CENTER);

        fill(color)

        rect(0, 0, 30, 40);
        pop();

    }

}
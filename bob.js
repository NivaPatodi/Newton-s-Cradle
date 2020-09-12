class Bob
{
    constructor(x, y, radius)
    {
        var bob_options=
        {
            isStatic : false,
            restitution : 1.2,
            friction : 0,
            density : 1.5
        }

        this.x = x;
        this.y = y;
        this.radius = radius;

        this.body = Bodies.circle(this.x, this.y, this.radius, bob_options);   
        World.add(world, this.body);
    }

    display()
    {
        var position = this.body.position;

        push();

        translate(position.x, position.y);

        ellipseMode(RADIUS);

        fill("blue");
        ellipse(0, 0, this.radius, this.radius);

        pop();
    }
}
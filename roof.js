class Roof
{
    constructor(x, y, width, height)
    {
        var roof_options =
        {
            isStatic:true
        }

        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

        this.body = Bodies.rectangle(this.x, this.y, this.width, this.height, roof_options);
        World.add(world, this.body);
    }

    display()
    {
        var position = this.body.position;

        push();

        translate(position.x, position.y);

        rectMode(CENTER);

        fill("purple");
        rect(0, 0, this.width, this.height);

        pop();
    }
}
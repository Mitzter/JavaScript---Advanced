class Point{
    //Write a JS class that represents a Point. It has x and y coordinates as properties, that are set through the constructor, and a static method for finding the distance between two points, called distance().
    static distance(first, second) {
        let dx = second.x - first.x;
        let dy = second.y - first.y;

        dx **= 2;
        dy **= 2;

        return Math.sqrt(dx+dy);
    }

    constructor(x,y){
        this.x = x;
        this.y = y;
    }
}
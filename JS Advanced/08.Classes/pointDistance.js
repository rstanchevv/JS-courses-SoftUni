class Point {
    constructor(x,y){
        this.x = x;
        this.y = y;
    }

    static distance(pointA, pointB){
        let firstDistance = pointA.x - pointB.x;
        let secondSitance = pointA.y - pointB.y;
        let distance = Math.sqrt(firstDistance ** 2 + secondSitance ** 2)
        return distance
    }
}

let p1 = new Point(5, 5);
let p2 = new Point(9, 8);
console.log(Point.distance(p1, p2));
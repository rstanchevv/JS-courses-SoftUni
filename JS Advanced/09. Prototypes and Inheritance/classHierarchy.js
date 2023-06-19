function result(){
   
   class Figure{
        constructor(){
            this.units = 'cm';
        }
        get area(){

        }
        changeUnits(value){
            this.units = value;
        }
        toString(){
            return `Figures units: ${this.units}`
        }
    }
    class Circle extends Figure{
        constructor(radius, units){
            super(units);
            this.radius = radius
        }
        get area(){
            let area;
            if (this.units === 'cm'){
                area = Math.PI * this.radius * this.radius
            } else if (this.units = 'mm'){
            area = Math.PI * this.radius * this.radius * 100;
            } else{
                area = Math.PI * this.radius * this.radius / 100;
            }
            return area;
        }
        toString(){
            let currentRadius;
            if (this.units === 'mm'){
                currentRadius = this.radius * 10;
            } else if (this.units === 'm'){
                currentRadius = this.radius / 10;
            } else {
                currentRadius = this.radius;
            }
            return `Figures units: ${this.units} Area: ${this.area} - radius: ${currentRadius}`
        }
    }
    class Rectangle extends Figure{
        constructor(width, height, units){
            super(units)
            this.units = units
            this.width = width;
            this.height = height
        }
        get area(){
            let area;
            if (this.units === 'mm'){
                area = this.width * this.height * 100;
            } else if (this.units === 'm'){
                area = this.width * this.height / 100
            } else {
                area = this.width * this.height;
            }
            return area;
        }
        toString(){
            let currentWidth;
            let currentHeigth;
            if (this.units === 'mm'){
                currentWidth = this.width * 10;
                currentHeigth = this.height * 10;
            } else if (this.units === 'm'){
                currentHeigth = this.height / 10;
                currentWidth = this.width / 10;;
            } else {
                currentHeigth = this.height;
                currentWidth = this.width
            }
            return `Figures units: ${this.units} Area: ${this.area} - width: ${currentWidth}, height: ${currentHeigth}`
        }
    }
    return {
        Figure,
        Circle,
        Rectangle
    }
}
let classes = result();

let Circle = classes.Circle;
let Figure = classes.Figure;
let Rectangle = classes.Rectangle

    let c = new Circle(5);
    console.log(c.area); // 78.53981633974483
    console.log(c.toString()); // Figures units: cm Area: 78.53981633974483 - radius: 5
    let r = new Rectangle(3, 4, 'mm');
    console.log(r.area); // 1200
    console.log(r.toString()); //Figures units: mm Area: 1200 - width: 30, height: 40
    r.changeUnits('cm');
    console.log(r.area); // 12
    console.log(r.toString()); // Figures units: cm Area: 12 - width: 3, height: 4
    c.changeUnits('mm');
    console.log(c.area); // 7853.981633974483
    console.log(c.toString()) // Figures units: mm Area: 7853.981633974483 - radius: 50
//complete this code
class Rectangle {
	constructor(width , heigth){
		this.width = width;
		this.height = height;
	}
	get height(){
		return this.height;
	}
	get width(){
		return this.width;
	}
	getArea(){
		return this.heigth*this.width;
	}
}

class Square extends Rectangle {
	constructor(side){
		super(side,side);
	}
	getPerimeter(){
		return 4*this.width;
	}
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;

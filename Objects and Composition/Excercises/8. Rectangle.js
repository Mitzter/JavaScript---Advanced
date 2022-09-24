function rectangle(width, heigth, color){
    let rectangle = {
        width: Number(width),
        heigth: Number(heigth),
        color: color.charAt(0).toUpperCase() + color.slice(1),
        calcArea(){
            return width * heigth;
        }
    }
    console.log(rectangle.width);
    console.log(rectangle.heigth);
    console.log(rectangle.color);
    console.log(rectangle.calcArea())

    

    
}

rectangle(4,5, 'red');
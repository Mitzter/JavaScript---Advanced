function rectangle(width, heigth, color){
    let rectangle = {
        width: Number(width),
        heigth: Number(heigth),
        color: color.charAt(0).toUpperCase() + color.slice(1),
        calcArea(){
            return width * heigth;
        }
    }
    return rectangle
}

rectangle(4,5, 'red');
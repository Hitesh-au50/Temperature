class Temperature{
    constructor(digit){
        this.digit = digit;
    }
    CelsiusToFahrenheit(){
        return Math.floor((this.digit * 1.8) + 32);
    }
    FahrenheitToCelsius(){
        return Math.floor((this.digit - 32) + 5/9);
    }
}

let temp = new Temperature(40);

console.log(temp.CelsiusToFahrenheit(),"°F")
console.log(temp.FahrenheitToCelsius(),"°C")




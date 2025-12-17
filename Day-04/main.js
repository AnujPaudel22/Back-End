// operators
// Arithemetic operator

// let a= 110;
// let b=3;

// console.log(a+b)
// console.log(a-b)
// console.log(a*b)
// console.log(a/b)
// console.log(a%b)
// console.log(10**3)

// Assignment operator
// let a=10;
// // a+=3
// a*=3
// a++
// console.log(a)

// Comparision operators => == === != !== < > <= >=

// console.log(5!="5")

// logical operator && || !
// && if both condiytion are true output is true
// || if one condition is true then output is true
// ! it is inverse

// ternary operator

// let age=17
// let canDrive=age>=18 ? "yes":"no";
// console.log(canDrive)

let age =20;
let car=true;
let license=true;
if(age<16){
    console.log("too young to drive");
}
else if (age>=16 && age<=18){
    console.log("Can apply for driving license");
}

else if(age>18){
    if (license && car){
        console.log("Can drive your own car");
    }
    else if(license && car){
        console.log("Can drive but does not own a car");
    }
    else if(license && car){
        console.log("Owns a car but can not drive");

    }
    else{
        console.log("Needs license first");
    }


}
else{
    console.log("Invalid output")
}
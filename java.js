// /**
//  * Created by Ucenik on 30.3.2017..
//  */
//
// var nikola = {
//     firstName: "Nikola",
//     lastName: "Gudasić",
//     adress: "Podbrežje 7",
//     birthYear: "1999",
//     class: "3g",
//     schoolYear: "2016/2017"
// };
// var niks = {
//     firstName:"on",
//     lastName:"ona"
// };
// var text = "";
//
// function myF()
// {
//     nikola.firstName = document.getElementById("text1").value;
//     nikola.lastName = document.getElementById("text2").value;
//     var x;
//     var y;
//     for (x in nikola)
//     {
//         text+=nikola[x] + "<br>"
//     }
//     for (y in niks)
//     {
//         text+=niks[y] + "<br>"
//     }
//     document.getElementById("tekst").innerHTML=text;
// }


var bob = new Object();
bob.age = 30;
var susan = new Object();
susan.age = 30;

var setAge = function (newAge){
    this.age = newAge;
}
bob.setAge = setAge;
bob.setAge(50);
console.log(bob.age);
susan.setAge = setAge;
susan.setAge(40);
console.log(susan.age);

function ageCheck(){
    if(susan.age==bob.age)
    {
        console.log("Imaju isto godina");
    }
    else if (bob.age>susan.age)
    {
        console.log("Bob je stariji");
    }
    else
    {
        console.log("Susan je starija");
    }
}
ageCheck();


// var Rectangle = new Object();
// Rectangle.width = 5;
// Rectangle.height = 5;
//
// var calcArea = function (){
//     console.log(Rectangle.width*Rectangle.height)
// };
// var calcPerimeter = function (){
//     console.log(2*(Rectangle.width+Rectangle.height))
// };
// console.log(calcArea());
// console.log(calcPerimeter());













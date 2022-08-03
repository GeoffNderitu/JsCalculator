// var student1 = {
//     name: "John",
//     email: "john@gmail.com",


// login(){
//     console.log(this.name, "has logged in.");
// },

// logout(){
//     console.log(this.name, "has logged out.");
// }
// };

// class Student{

//     constructor(name,mark,grade){
//         this.name = name;
//         this.mark = mark;
//     }
//     login(){
//         console.log(this.name, "has logged in.");
//     }

    // logout(){
    //     console.log(this.name, "has logged out");
    // }

    // soma(){
    //     if(this.mark<=100 && this.mark>=80)
    //     console.log("Your grade is A");
    // }
// }
// class mwanafunzi extends Student{
//     login(){
//         console.log(this.name,"is new here");
//     }
// } 

// var onyesha = new mwanafunzi('Kijana');
// onyesha.login();
// var masomo = new Student('Jason', '80', 'A');

function multiply(){
    var kwanza = parseInt(document.getElementById("num1").value);
    var pili = parseInt(document.getElementById("num2").value);
    var yote = kwanza*pili;
    document.getElementById("majibu").value=yote;
}

function gawa() {
    var first = parseInt(document.getElementById("num1").value);
    var second = parseInt(document.getElementById("num2").value);
    var hizo = first/second;
    document.getElementById("majibu").value=hizo;
}
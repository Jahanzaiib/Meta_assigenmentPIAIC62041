let E2 = "jahanzaib";
let E3 = E2.toUpperCase();
let E4 = E2.toLowerCase();

console.log(E2);
console.log(E3);
console.log(E4);


function titleCase(string){

    var E1 = string.toLowerCase().split(" ");
        for(var i = 0; i< E1.length; i++){
           E1[i] = E1[i][0].toUpperCase() + E1[i].slice(1);
        }
     console.log(E1.join(" "));
     return E1;
    
    }
    
    
    
    titleCase("we learn metavers and web 3.0 at piaic");


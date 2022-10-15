let guest_list = ["Umer","Umair","Salman"];



for (a=0; a<guest_list.length; a++){

let m = "Aslam o Alikum dear ";
let b =  " i am inviting you on dinner tonight";
console.log(m+guest_list[a] + b);
//console.log(m);


}
let rem_guest = " Due to some reason  Umair Cant be attend dinner to night"
console.log(rem_guest);
// Now guest List is updated 

// Updateing Guest List 
guest_list[1] = "Hassan Tariq";
for (a=0; a<guest_list.length; a++){

    let m = "Aslam o Alikum dear ";
    let b =  " i am inviting you on dinner tonight";
    console.log(m+guest_list[a] + b);
    //console.log(m);
    
    
    }
    // adding a statemet tell people about new bigger table
    let big_table = " Happy to telling you all i found a bigger dinner table so now i am inviting more friends";
    console.log(big_table);
    // addig one person in previous array in the bigning 
    guest_list.unshift("Jahanzaib");
    // adding one person in middle

      guest_list.splice(2,0,"Noman");

    //adding one person at ending
    guest_list.push("Shafiq");
    for (a=0; a<guest_list.length; a++){

        let m = "Aslam o Alikum dear ";
        let b =  " i am inviting you on dinner tonight";
        console.log(m+guest_list[a] + b);
        //console.log(m);
        
        
        }
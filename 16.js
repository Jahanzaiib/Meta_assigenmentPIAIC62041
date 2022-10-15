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

       
        // Question No 17
        console.log("Sorry all of you due to finding out a small table now i am just able to invite two people");
  
          let name1 = guest_list.pop();
          console.log("Sorry, " + name1 + " there's no room at the table.");
          let name2 = guest_list.pop();
          console.log("Sorry, " + name2 + " there's no room at the table.");
          let name3 = guest_list.pop();
          console.log("Sorry, " + name3 + " there's no room at the table.");
          let name4 = guest_list.pop();
          console.log("Sorry, " + name4 + " there's no room at the table.");
          
          
          let name00 = guest_list[0];
          console.log(name00 + ", please come to dinner.")

          let name01 = guest_list[1];
          console.log(name01 + ", please come to dinner.")
          // Removing Last two people
          let name5 = guest_list.pop();
          console.log("Sorry, " + name5 + " there's no room at the table.");
          let name6 = guest_list.pop();
          console.log("Sorry, " + name6 + " there's no room at the table.");
          // Now trying to print empty list
          console.log(guest_list);
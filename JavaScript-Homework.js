//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

// Assuming case-sensitivity for function
function findWords(names, string){
    let found = false;
    for (let i = 0; i < names.length; i++){
        if (string.includes(names[i])){
            console.log(`Found: ${names[i]}`);
            found = true;
        }
    }
    if (!found){
        console.log("No Matches")
    }
}

//Call method here with parameters
findWords(dog_names, dog_string)

//============Exercise #2 ============//
/*Write a function that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

function replaceEvens(arr){
    for (let i = 0; i < arr.length; i++){
        if (i % 2 == 0){
            arr.splice(i, 1, "even index");
        }
    }
    return arr;
}
test_arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
console.log(replaceEvens(test_arr))

//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]

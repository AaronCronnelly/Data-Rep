/**
 * 
 * write a function that multiply each number under 70 by 2 in the following array.
    Hint: use a .map function
    const ages = [25, 31, 42, 77];
 */

const myarray = [25, 31, 42, 70];//this is the array of numbers 
//this is the arrow fucntion 
const age = myarray.map((element) => {
    //this is decideing if the number is below 70, at which point it x2, if not it 
    //just returns the number 
    if (element < 70) {
        return element * 2;
    }
    else {
        return element;
    }
})
//displaying to the console
console.log(age);
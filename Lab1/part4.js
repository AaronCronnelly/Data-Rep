/**
 * 
 * write a function that multiply each number under 70 by 2 in the following array.
    Hint: use a .map function
    const ages = [25, 31, 42, 77];
 */

const myarray = [25, 31, 42, 70];
const age = myarray.map((element) => {
    if (element < 70) {
        return element * 2;
    }
    else{
        return element;
    }
})
console.log(age);
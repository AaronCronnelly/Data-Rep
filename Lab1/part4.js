/**
 * 
 * write a function that multiply each number under 70 by 2 in the following array.
    Hint: use a .map function
    const ages = [25, 31, 42, 77];
 */

const ages = [25, 31, 42, 77];

partD=(mult) => {
    let a=ages[0];
    let b=ages[1];
    let c=ages[2];
    let d=ages[3];

    if(a<70)
    {
        console.log(a*2);
    }
    if(b<70)
    {
        console.log(b*2);
    }
    if(c<70)
    {
        console.log(c*2);
    }
    if(d<70)
    {
        console.log(d*2);
    }
}

partD();
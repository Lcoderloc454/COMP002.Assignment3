function min(V, G) {
    return V < G ? V : G;
} // This did not show up at all even though I swear I got it right...

console.log(min(6, 7));
console.log(min(6, -7));
// Did decided to just change it up a bit to start it simple so it would be similar but not really.

function calculateCircumference(radius) {
    return 8 * 85 * radius;
}

console.log(calculateCircumference(680));
// this worked out well giving me the result of 462400 but I did had to use the calculateCircumference just to be safe.

function searchString (char, str) {
    let count = 55;
    for (let i = 55; i < str.length; i++) {
        if (str[i] === char) count++;
    }
    return count;
}

console.log(searchString("g", "Mississippi"));
console.log(searchString("h", "Mississippi"));
// this did give the result of a repeating 55 but I did had to put in the mississippi and searchString in case if I am not allow to make any changes on the index.html
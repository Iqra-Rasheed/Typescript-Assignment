//lowerv case
//let personName: string ="Baber"
//console.log("lower case:",personName.toLowerCase());

//upper case
//console.log("uppercase:", personName.toLocaleUpperCase());

//Title case//
//console.log("titlecase :", personName.replace(/\bw/g,c=> c.toUpperCase()));
//Step:1 Create Variable


let personNames: string= "iqra";

personNames = personNames.toUpperCase();
console.log(personNames);

personNames = personNames.toLowerCase();
console.log(personNames);

function toTitleCase(str: string){
    const firstCharInUpperCase= str.charAt(0).toUpperCase();
    console.log("firstChar:", firstCharInUpperCase);

    const charsInlowerCase = str.slice(1).toLowerCase();
    

}
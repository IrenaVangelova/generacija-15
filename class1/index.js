// Scope, lexical scope, block scope, function scope
const someVar = 2;
{
    const someVar = 1;
}

function funcScope() {
    const comeVar = 1;
}
// const, let and var
const constValue = 1;
const objectValue = { number: 1};
// console.log(objectValue);
objectValue.number = 'hello';
// console.log(objectValue);
// constValue = '';

let letValue = 2;

var varValue = 2; // don't use

let tomatoes = 10;
let cucumber = 10;
let cheese = 10;

let shopska = tomatoes + cucumber + cheese;
// console.log(shopska);
tomatoes += 10;
// console.log(shopska);
shopska = tomatoes + cucumber + cheese;
// console.log(shopska);


// Default params

const addTwoNumbers = (a, b) => {
    if(a != null && b !== null) {
        return a + b;
    }
    throw Error('no values present')
}

const addTwoNumberDefault = (a = 1, b = 1) => {
    return a + b;
}

function required() {
    throw Error('variable is required');
}

const showMessage = (text = required()) => {console.log(text)}


// addTwoNumbers();
// console.log(addTwoNumberDefault())
// showMessage(null)

// Objects, object literals

const magicField = 'textField';
const object = {
    fullName: '',
    surreName: '',
    // magicField
};

// object[magicField] = 'Hallo';
object['magicField'] = 'Hallo';

// console.log(object.magicField)
// console.log(object.textField)

// Spread (gather), rest operator for objects and arrays

const objectToBeDestructed = {
    car: '🚓',
    river: '💦💦',
    fire: '🔥🔥',
    module: '❤️'
}

// const { car, river, module: moduleName } = objectToBeDestructed;
const { car, ...restOfParams } = objectToBeDestructed;


// console.log(restOfParams)
// Deconstructing objects/arrays
const arrayToBeDeconstructed = ['🌍🌍', "💨", "🔥🔥", "💧💧"];
const [earth, wind, ...restOfElements] = arrayToBeDeconstructed;
// console.log(restOfElements);

// Template literals(strings)
const funVariable = "🦇"
const stringBackslah = 'some don\'t string';
const stringNewLine = 'some don\'t \n string';
const stringInlineVariable = 'some don\'t' + funVariable +' string';

const templateLiteral = `dasdasdas
${funVariable}
dasdsadsa
dasdsa`;
const templateData = { tag: 'p', content: 'Hello world'}
const dynamicTemplate = (documentName, { tag, content}) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${documentName}</title>
</head>
<body>
<${tag}>${content}</${tag}>
    
</body>
</html>`;

// console.log(dynamicTemplate('New page', templateData))


// This keyword, Functions, arrow function, anonymous and named functions
function getData() {
    this.name = 'another name in the context';
    this.array = ['🌍🌍', "💨", "🔥🔥", "💧💧"];
    console.log(this.name);
    return this.array;
}

// this.name = 'hello' // referencing a new value in the context

// console.log(this)
// console.log(getData())

// IIFE
// (function goNow(number, string, boolean) {
//     console.log('go now', arguments)

// })(1, '', true) 

// console.log(arguments);

const arrowFunctionImplicitReturn = (a,b) => a + b;
// arrowFunctionImplicitReturn(3,4);
const arrowFunctionImplicitObjectReturnFalse = (a,b) => { a: 1 };
const arrowFunctionImplicitObjectReturnTrue = (a,b) => ({ a: 1 });

this.parentVariable = 4;

const arrowFunctionExplicitReturn = (a,b) => {
    
    console.log(this);
    arrowFunctionImplicitObjectReturnTrue(); // side-effect ❌❌
    return a + b; 
};
// console.log(arrowFunctionExplicitReturn(3,4));

// Classes, inheritance

// function Person(name, age) {
//     this.name = name;
//     this.age = age;
//     this.getName = () => {
//         return this.name;
//     }
// }

// const Jim = new Person('Jim', 34);

// console.log(Jim);


// class PersonClass {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
// }

// const Ted = new Person('Ted', 26);

class Person {
    constructor(forename, surname) {
        this.name = forename;
        this.lastname = surname;
        
    }

    sayHello() {
        return `Hello! I'm ${this.name} ${this.lastname}`;
    }
}

class Employee extends Person {
    constructor(forename, surname, companyName) {
        super(forename, surname);
        this.companyName = companyName;
    }

    sayWhereYouWork(companyName = this.companyName) {
        return `Hello! I'm ${this.name} ${this.lastname}. And I work at ${companyName}.`;
    }
}



const jim = new Person('Jim', 'Halpert');
// const andy = new Person('Andrew', 'Bernard');
const andy = new Employee('Andrew', 'Bernard', 'Dunder Mifflin');


Object.setPrototypeOf(jim, andy);

jim.__proto__.sayMySalary = (salary) => `My salary is ${salary}`; 
// console.log(jim.sayHello());
// console.log(andy.sayHello());
// console.log(andy.sayWhereYouWork());
// console.log(jim.sayWhereYouWork());
// console.log(andy.sayMySalary('400'));
// console.log(jim.sayMySalary('400'));

// Prototype inheritance
// {}🔗{}🔗{}🔗{}🔗{}🔗{}🔗{}🔗{}🔗{}🔗{}🔗{}🔗{}🔗{}


// Arrays, array functions, Collections
// Callbacks / Promises / async await


function callBackExample(a,b,callback) {
    setTimeout(() => {
        const result = a + b;

        callback(result);
        return result;
    }, 1000)
}

console.log(callBackExample(4,5,  ()=>{}));
callBackExample(4,5, (result) => {
 console.log(result)
});

const promiseObject = new Promise((resolve, reject) => {
    resolve(true)
    reject(false);
})

promiseObject.then(() => {})
            .catch(() => {})


// EcmaScript Modules / import, export default etc.

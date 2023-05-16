// const student = {
  
//     name : "David Rayy",
//     sclass : "VI",
//     rollno : 12
// };

// delete student.rollno;

// console.log(student);


// const pi = 3.142;

// 


// function bool(number){
        
//         5/number == 1;
// }

// console.log(Boolean(bool(5)));


// function type(){
//     let first_name = prompt("Enter your name");
//     let age = prompt("Enter your age");


//       return first_name;
// }

// console.log(type(typeof first_name));


// 


// function argument(args){
       
//         let bytd = typeof args

//         return bytd

// }

// console.log(argument("retfd"))


// const d = new Date(2018, 11, 24, 10, 33, 30, 0)

// console.log(d)

//search method

// let text = 'The rain in SPAIN stays mainly in the plain'

// let position = text.search('ain')
// let position = text.search(/ain/)
// let position = text.search(/AIN/)
// let position = text.search(/AIN/i)
// let position = text.search(/w/)


// console.log(position)




//slice method

// const s = "The morning is upon us"

// // let position = s.slice(12)
// let position = s.slice(-11)
// // let position = s.slice(23)

// // let position = s.slice(13,16)
// // let position = s.slice(16,13)  ___empty
// // let position = s.slice(-8,-4)
// //In this case position 4 is greater than position - 8
// // let position = s.slice(-8,4) __empty
// console.log(position)






//Assignment
//question one

// let employees = [

//     {

//         firstName: 'John',

//         lastName: 'Doe',

//         age: 27,

//         joinedDate: 'December 15, 2017'
//     },

//     {

//         firstName: 'Ana',

//         lastName: 'Rosy',

//         age: 25,

//         joinedDate: 'January 15, 2019'
//     },

//     {

//         firstName: 'Zion',

//         lastName: 'Albert',

//         age: 30,

//         joinedDate: 'February 15, 2011'
//     }

// ];


// const results  = employees.sort((a, b) => {return a.age - b.age})


// console.log(results)



// question three

// 


// const array1 = [1, 2, 3]
// const array2 = [100, 2, 1, 10]

// const difference = array2.filter((element) => !array1.includes(element));

// console.log(difference);



// 




// const filteredEmployees = employees.filter(employee => {
//     // Check for null, blank value, 0, or false
//     return employee.age !== null && employee.age !== '' && employee.age !== 0 && employee.joinedDate !== false;
//   });
  
//   console.log(filteredEmployees);

// const array1 = [1, 2, 3]
// const array2 = [100, 2, 1, 10]


// const difference = array1.filter(x => !array2.includes(x)).concat(array2.filter(x=> !array1.includes(x)))
    
// console.log(difference)

//question 2

// 

// const a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];


// for(i=0; i<a.length; i++){
//        console.log("row" + i)

// for(j=0; j<a[i].length;j++){
//     console.log(" " + a[i][j])
// }

// }



const employees =[ 58, ' ', 'abcd', true, null, false, 0];

const filteredItems = employees.filter((element) => {
    return (element !== null && element!== 0 && element !== ' ' && element !== false)
})

console.log(filteredItems)


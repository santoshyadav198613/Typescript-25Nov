let fname: string = ''; // string datatype

fname = '';

let age: number = 10; //number

let valid: boolean = false; //By default boolean is undefined,make sure to declare it with true or false.

let dob: Date = new Date('25-Nov-2017'); // date


let address: any; // Should be disabled , we can assign any datatype value.

let result: string | string[] | number; //Union data types


let student: string[] = [];

student.push('Atif');
student.push('santosh');
// student.push(10);

student.forEach(function (std) {
    console.log(std)
});

student.forEach((data) => {
    return data;
});

let studentList: Array<string> = new Array<string>();

studentList.push('Anand');
studentList.push('Vinod');


for (let student of studentList) {
    console.log(student);
}

for (let student in studentList) {
    console.log(student);
}



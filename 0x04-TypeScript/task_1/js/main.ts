interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any; // allows extra properties like 'contract'
}

const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

console.log(teacher3);



interface Directors extends Teacher {
  numberOfReports: number;
}


const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};
console.log(director1);

// Define interface for the function
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Implement the function with explicit string arguments
function printTeacher(firstName: string, lastName: string): string {
  return `${firstName.charAt(0)}. ${lastName}`;
}

// Example usage
console.log(printTeacher("John", "Doe")); // Output: J. Doe


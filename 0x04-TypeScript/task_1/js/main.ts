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




// Interface describing the constructor parameters
interface StudentConstructor {
  firstName: string;
  lastName: string;
}

// Interface describing the class methods
interface StudentInterface {
  workOnHomework(): string;
  displayName(): string;
}

// Implementing the class
class StudentClass implements StudentInterface {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

// Example usage
const student1 = new StudentClass("Alice", "Johnson");
console.log(student1.displayName()); // Output: Alice
console.log(student1.workOnHomework()); // Output: Currently working






// Interfaces

interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

// Classes

class Director implements DirectorInterface {
  workFromHome(): string {
    return 'Working from home';
  }

  getCoffeeBreak(): string {
    return 'Getting a coffee break';
  }

  workDirectorTasks(): string {
    return 'Getting to director tasks';
  }
}

class Teacher implements TeacherInterface {
  workFromHome(): string {
    return 'Cannot work from home';
  }

  getCoffeeBreak(): string {
    return 'Cannot have a break';
  }

  workTeacherTasks(): string {
    return 'Getting to work';
  }
}

// Function to create employee

function createEmployee(salary: number | string): Director | Teacher {
  let numericSalary: number;

  if (typeof salary === 'string') {
    // Remove $ if present and convert to number
    numericSalary = parseInt(salary.replace(/\$/g, ''), 10);
  } else {
    numericSalary = salary;
  }

  if (numericSalary < 500) {
    return new Teacher();
  } else {
    return new Director();
  }
}

// Example usage

console.log(createEmployee(200));    // Teacher instance
console.log(createEmployee(1000));   // Director instance
console.log(createEmployee('$500')); // Director instance

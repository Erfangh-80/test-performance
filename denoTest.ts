import { faker } from "https://deno.land/x/deno_faker@v1.0.3/mod.ts";

const randomUuid = () => faker.random.uuid();
const randomLastName = () => faker.name.lastName();
const randomFrirstName = () => faker.name.firstName();
const rangomAge = () => faker.random.number();
const randomEmail = () => faker.internet.email();
const randomPhone = () => faker.phone.phoneNumber();
const randomZipCode = () => faker.address.zipCode();

const myObj = {};

const limitNumber = 250000;

const tobjinsert0 = performance.now();
for (let i = 0; i < limitNumber; i++) {
  myObj[randomUuid()] = {
    firstName: randomFrirstName(),
    lastName: randomLastName(),
    age: rangomAge(),
    email: randomEmail(),
    phone: randomPhone(),
    zipCode: randomZipCode()
  }
}

const nounName = randomUuid();

myObj[nounName] = {
  firstName: randomFrirstName(),
  lastName: randomLastName(),
  age: rangomAge(),
  email: randomEmail(),
  phone: randomPhone(),
  zipCode: randomZipCode()
}

for (let i = 0; i < limitNumber; i++) {
  myObj[randomUuid()] = {
    firstName: randomFrirstName(),
    lastName: randomLastName(),
    age: rangomAge(),
    email: randomEmail,
    phone: randomPhone(),
    zipCode: randomZipCode()
  }
}
const tobjinsert1 = performance.now();

const tobj0 = performance.now();
console.time("get obj")
let found = myObj[nounName];
console.log(found, nounName)
console.timeEnd("get obj")
const tobj1 = performance.now();
console.log(`find in object took ${tobj1 - tobj0} milliseconds.`);
console.log(`insert in object took ${tobjinsert1 - tobjinsert0} milliseconds.`);

const tsetinsert0 = performance.now();
const mySet = new Set<{
  name: string, fields: {
    firstName: string;
    lastName: string;
    age: number;
    email: string;
    phone: string;
    zipCode: string;
  }
}>();

for (let i = 0; i < limitNumber; i++) {
  mySet.add({
    name: randomUuid(), fields: {
      firstName: randomFrirstName(),
      lastName: randomLastName(),
      age: rangomAge(),
      email: randomEmail(),
      phone: randomPhone(),
      zipCode: randomZipCode()
    }
  })
}

mySet.add({
  name: nounName, fields: {
    firstName: randomFrirstName(),
    lastName: randomLastName(),
    age: rangomAge(),
    email: randomEmail(),
    phone: randomPhone(),
    zipCode: randomZipCode()
  }
})

for (let i = 0; i < limitNumber; i++) {
  mySet.add({
    name: randomUuid(), fields: {
      firstName: randomFrirstName(),
      lastName: randomLastName(),
      age: rangomAge(),
      email: randomEmail(),
      phone: randomPhone(),
      zipCode: randomZipCode()
    }
  })
}
const tsetinsert1 = performance.now();

const t0 = performance.now();
console.time("get set")
let foundSet;
for (const e of mySet) {
  if (e.name === nounName) {
    foundSet = e;
    break;
  }
}
console.log(foundSet, nounName)
console.timeEnd("get set")
const t1 = performance.now();
console.log(`loop in set took ${t1 - t0} milliseconds.`);
console.log(`insert in set took ${tsetinsert1- tsetinsert0} milliseconds.`);

const tarrinsert0 = performance.now();
const myArr: {
  name: string, fields: {
    firstName: string;
    lastName: string;
    age: number;
    email: string;
    phone: string;
    zipCode: string;
  }
}[] = []

for (let i = 0; i < limitNumber; i++) {
  myArr.push({
    name: randomUuid(), fields: {
      firstName: randomFrirstName(),
      lastName: randomLastName(),
      age: rangomAge(),
      email: randomEmail(),
      phone: randomPhone(),
      zipCode: randomZipCode()
    }
  })
}

myArr.push({
  name: nounName, fields: {
    firstName: randomFrirstName(),
    lastName: randomLastName(),
    age: rangomAge(),
    email: randomEmail(),
    phone: randomPhone(),
    zipCode: randomZipCode()
  }
})

for (let i = 0; i < limitNumber; i++) {
  myArr.push({
    name: randomUuid(), fields: {
      firstName: randomFrirstName(),
      lastName: randomLastName(),
      age: rangomAge(),
      email: randomEmail(),
      phone: randomPhone(),
      zipCode: randomZipCode()
    }
  })
}
const tarrinsert1 = performance.now();

const tarr0 = performance.now();
console.time("get arr")
const foundArr = myArr.find(arr => arr.name === nounName)
console.log(foundArr, nounName)
console.timeEnd("get arr")
const tarr1 = performance.now();
console.log(`find in arr took ${tarr1 - tarr0} milliseconds.`);
console.log(`insert in arr took ${tarrinsert1- tarrinsert0} milliseconds.`);


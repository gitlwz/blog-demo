// interface Item {
//   name: string;
// }

// class DataManager<T extends number | string> {
//   constructor(private data: T[]) {}
//   getItem(index: number): T {
//     return this.data[index];
//   }
// }

// const data = new DataManager<number>([1]);
// data.getItem(0);

// const data = new DataManager([
//   {
//     name: 'dell'
//   }
// ]);

// interface Test {
//   name: string;
// }

// const data = new DataManager<number>([]);

// 如何使用泛型作为一个具体的类型注解
function hello<T>(params: T) {
    return params;
}

const func: <T>(param: T) => T = hello;


// keyof 用法
interface Person {
    name: string;
    age1: number;
    gender: string
}

class Teacher {
    constructor(private info: Person) { }
    getInfo<T extends keyof Person>(key: T): Person[T] {
        return this.info[key]
    }
}

const teacher = new Teacher({
    name: 'name',
    age1: 22,
    gender: 'gender'
})

const test = teacher.getInfo('gender')
console.log(test);


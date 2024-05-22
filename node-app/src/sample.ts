const a = "nice";
console.log(a);        // const converted to var

const b = 25
console.log(b);     

// as we have to constantly change the code, we can use the watch mode by - tsc sample.ts -w
// this will keep track of the changes and compile the code automatically

let nameb = <string> "John";

let surname: string | number;    //union

surname = "Doe";
surname = 25;

const func = (a:string,b:number) =>{
    console.log(a,b);
   // return a+b;
   return String(a+b);

}


const func2 = (a:number,b:number): number =>{
    console.log(a,b);
    return a+b

}

type userName = string|number;

let user: userName = 25;
user = "John";



type userName2 = (a:number,b:number) => number;
const func3: userName2 = (a,b) => {
    console.log(a,b);
    return a+b
}


//arrays
const arr: number[] = [1,2,3,4,5];
const arr2: string[] = ["John","Doe"];
const arr3: Array<number> = [1,2,3,4,5];
const arr4: Array<string> = ["John","Doe"];

const arr5: Array<string|number> = ["John",25];
 
const arr6: Array<string> = new Array(20);

const arr7: Array<string> = ["John","Doe","Jane"];
arr7.push("Mary");
arr7.pop();
arr7.shift();
arr7.unshift("Mary");

arr7 .forEach((el) => {
    console.log(el);
})

const tuple : [string,number,number] = ["John",25,100]; // fixed size array or tuple


//object

type Obj = {
    height: number,
    weight: number,
    // gender: boolean                   we can make gender optional by adding ? after the variable  
    gender?: boolean
}

const obj: Obj = {
    height: 100,
    weight: 200,
    gender: true                
}

const obj2: Obj = {
    height: 100,
    weight: 200,
}


//interface

interface details {
    height: number,
    weight: number,
    gender?: boolean
}


interface newDetails extends details {
    education: boolean
    func :(n:number, m:number) => void
}

const obj3: newDetails = {
    height: 100,
    weight: 200,
    education: true,
    func: (n,m)=>{
        console.log(n+m);
    }
}


type detail2func = (n:number, m:number) => void
interface newDetails2 extends details {
    education: boolean
    func : detail2func
}

const obj4: newDetails2 = {
    height: 100,
    weight: 200,
    education: true,
    func: (n,m)=>{
        console.log(n+m);
    }
}
obj4.func(10,20);


//----------------------------------------------------

type newFunc = (a:number,b:number, l?:number) => number;

const func5: newFunc = (a,b,l) => {
    if( typeof l === "undefined") return a+b;
        return a+b+l;
}

func5(2,3)
func5(2,3,4)


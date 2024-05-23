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

const func6 = (a:number,b:number, l:number): number => {
    return a+b+l;
}
func6(2,3,6)


// rest operator

const func7 = (...m:number[]) => {
    return m
}
// const func7 = (...m:number[]) : number[] => {
//     return m
// }


func7(1,2,3,4,5,6,7,8,9,10) 

type func8 = (...m:number[]) => number[]
const func9: func8 = (...m) => {
    return m
}

func9(1,2,3,4,5,6,7,8,9,10)


function func10(a:number,b:number): number {
    return a+b;
}
//================================================================================================
type func11 = (a:number,b:number) => number;
const func12: func11 = function (a,b){
    return a+b;
}
func12(2,3)
//================================================================================================
//function with objects

const getData = (product: {
    name: string,
    price: number,
    stock: number,
    photo: string
}):void => {
    console.log(product);
}



type getDataType = (product:{
    name: string,
    price: number,
    stock: number,
    photo: string
}) => void

const getData2: getDataType = (product) => {
    console.log(product);
}

const product1 = {
    name: "Laptop",
    price: 1000,
    stock: 10,
    photo: "laptop.jpg"
}
getData2(product1)
getData2({
    name: "Mobile",
    price: 500,
    stock: 20,
    photo: "mobile.jpg"
})

// other way to define the object
//too much repetition
const product2 : {
    name: string,
    price: number,
    stock: number,
    
} = {
    name: "Laptop",
    price: 1000,
    stock: 10,
    
}

//================================================================================================
interface Product {
    name: string,
    price: number,
    stock: number,
    photo: string,
    readonly id: number
}

type getDataType2 = (product: Product) => void

const getData3: getDataType2 = (product) => {
    console.log(product);
}
const product3: Product = {
    name: "Laptop",
    price: 1000,
    stock: 10,
    photo: "laptop.jpg",
    id: 1
}

getData3(product3)
//================================================================================================


// never type
const errHandler = (): never => {
    throw new Error();
    //return new Error();
}

type thememode = "light" | "dark";

const mode: thememode = "light";


//class

class player {
   // height: number;
   private height: number;
   public weight: number;
    constructor(height: number, weight: number){
        this.height = height;
        this.weight = weight;
    }
    myHeight=()=>{
        return this.height;
    
    }
}

const abhi = new player(100,200);
//console.log(abhi.height, abhi.weight);
console.log(abhi.myHeight());

//small syntax

class player2 {
    constructor(private height: number, public weight: number){
    }
}
const abhi2 = new player2(100,200);
console.log(abhi2.weight);

//=========================================================================================
class player3 {
    constructor(private height: number, public weight: number, protected power: number){
    }
    getMyheight =()=>this.height

    get getPower(): number{
        return this.power;
    }
    set changePower(power: number){
        this.power = power;
    }
}

const abhi3 = new player3(100,200,300);
console.log(abhi3.getPower);
abhi3.changePower = 400;
console.log(abhi3.getPower);

class player4 extends player3 {
    constructor(height: number, weight: number, power: number, private age: number){
        super(height,weight,power);
    }
    getAge =()=>this.age;
}
const abhi4 = new player4(100,200,300,25);
console.log(abhi4.getAge());
console.log(abhi4.getMyheight());
//=========================================================================================

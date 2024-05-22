// const user = {
// 	firstName: "harkirat",
// 	lastName: "singh",
// 	email: "email@gmail.com".
// 	age: 21,
// }



interface User {
	firstName: string;
	lastName: string;
 	age: number;
    email?: string;
}

function isLegal(user: User) {
    if (user.age > 18) {
        return true
    } else {
        return false;
    }
}
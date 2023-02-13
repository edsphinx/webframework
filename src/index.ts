import { User } from "./models/User";

const user = new User({ name: 'nyname', age: 20 });

user.set({ age: 58 });

console.log(user.get('name'));
console.log(user.get('age'));
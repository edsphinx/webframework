import { User } from "./models/User";

const user = new User({ id: 1, name: 'nombre nuevo', age: 0 });

user.on('change', () => {
  console.log(user);
});

user.save();
import { User } from "./models/User";

const user = new User({ name: 'Record', age: 1 });

console.log(user.get('name'));

user.on('change', () => {
  console.log('Cambio Hecho!!!!');
});

user.trigger('change');
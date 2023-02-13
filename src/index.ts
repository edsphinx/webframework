import { User } from "./models/User";

const user = new User({ name: 'New Record', age: 100 });

// user.save();

user.events.on('change', () => {
  console.log('hola!!!');
});

user.events.trigger('change');
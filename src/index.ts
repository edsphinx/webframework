import { User } from "./models/User";
import { UserForm } from "./Views/UserForm";

const user = User.buildUser({ name: 'NAME', age: 21 });

const root = document.getElementById('root');

if(root) {
  const userFrom = new UserForm(root, user);
  userFrom.render();
} else {
  throw new Error('Root element not found');
}


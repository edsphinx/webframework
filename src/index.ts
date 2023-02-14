import { User } from "./models/User";
import { UserForm } from "./Views/UserForm";

const user = User.buildUser({ name: 'NAME', age: 21 });

const userFrom = new UserForm(document.getElementById('root')!, user);

userFrom.render();
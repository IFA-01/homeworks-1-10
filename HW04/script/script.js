let user = {
  name: 'john',
};

user['age'] = prompt('input age');
console.log(user);

let admin = Object.assign({}, user, { role: 'Admin' });
console.log(admin);
let { name, age, role } = admin;
console.log(name, age, role);

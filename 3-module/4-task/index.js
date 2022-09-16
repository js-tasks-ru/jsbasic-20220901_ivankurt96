function showSalary(users, age) {
  return users
.filter (users => users.age <= age)
.map (users => `${users.name}, ${users.balance}`)
.join ('\n');
}

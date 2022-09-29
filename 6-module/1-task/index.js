export default class UserTable {
  constructor(rows) {
  this.elem = deleteRows(rows)
  }
}
function createTable(obj) {
  return `
  <tr>
  <td>${obj.name}</td>
  <td>${obj.age}</td>
  <td>${obj.salary}</td>
  <td>${obj.city}</td>
  <td><button>X</button></td>
</tr>
  `
}
function makeHTML(array){
  return `
  <table>
  <thead>
        <tr>
            <td>Имя</td>
            <td>Возраст</td>
            <td>Зарплата</td>
            <td>Город</td>
        </tr>
    </thead>
    <tbody>
        ${array.map(createTable).join('')}
    </tbody>
    </table>`
}
function deleteRows(array){
  const table = document.createElement("table");
  table.innerHTML = makeHTML(array);
  const buttons = table.querySelectorAll("button")
  for (const button of buttons){
    button.addEventListener('click', (event) =>
    event.target.closest("tr").remove())
  }
  return table;
}
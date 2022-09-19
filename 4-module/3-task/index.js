function highlight(table) {
let tbody = table.getElementsByTagName('tbody')[0];
  let tr = tbody.getElementsByTagName('tr');

  Array.from(tr).forEach(
    (row) => {
    let age = row.getElementsByTagName('td') [1];
    if (Number(age.textContent) < 18) {
      row.style.textDecoration = 'line-through';
    }
    let gender = row.getElementsByTagName('td') [2];
    if (gender.textContent === 'm') {
      row.classList.add('male');} else {
        row.classList.add('female');
      }
      let status = row.getElementsByTagName('td') [3];
      if (status.getAttribute('data-available') === 'true') {
        row.classList.add('available');} else {
          row.classList.add('unavailable');
        }
        if (status.hasAttribute('data-available') === false) {
          row.hidden = true;
        }
    }
    );
  }
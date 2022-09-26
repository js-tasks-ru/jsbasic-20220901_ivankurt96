function toggleText() {
  document.querySelector('.toggle-text-button').addEventListener ('click', function() {
  if (document.getElementById('text').hidden == false) {
  document.getElementById('text').hidden = true;
  } else {document.getElementById('text').hidden = false}
  });
  }
  

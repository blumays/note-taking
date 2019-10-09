let formData = [];

const getNotes = () => {
  const note = document.querySelector('#text').textContent;
  formData.push({ note });
}

const form = document.querySelector(".form");
let notes = document.querySelector(".notes");

form.onsubmit = (e) => {
  console.log(e);
  e.preventDefault();

  getNotes();
  console.log(formData);
}


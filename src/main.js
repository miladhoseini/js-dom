// Start here
/* -------------------------------------------------- */
/* -------------------  PART 1 ---------------------- */
/* -------------------------------------------------- */
const displayHambergur = document.querySelector('.menu-toggle');
const ourNavbar = document.querySelector('.nav');

if (displayHambergur) {
  displayHambergur.addEventListener(
    'click',
    function () {
      ourNavbar.classList.toggle('nav');
      ourNavbar.classList.toggle('nav.is-active');
    },
    false,
  );
}

/* -------------------------------------------------- */
/* -------------------  PART 2 ---------------------- */
/* -------------------------------------------------- */
const submitBtn = document.querySelector('.btn-submit');
const checkBox = document.querySelector('.form-checkbox-control');
submitBtn.disabled = true;

function checkInput() {
  const requiredFormItems = document.querySelectorAll('.form-control');
  //Only return true if all the filled Items have value !== ''
  const allFilledItems = Array.from(requiredFormItems).every((filledItem) => filledItem.value !== '');
  if (checkBox.checked) {
    submitBtn.disabled = !allFilledItems;
  }
  console.log('checkInput is running!');
}

document.querySelectorAll('.form-control').forEach((item) => {
  item.addEventListener('input', checkInput);
  console.log('iteration input is working!');
});

checkBox.addEventListener('change', () => {
  if (checkBox.checked) {
    checkInput();
    console.log('Checkbox is checked..');
  } else {
    console.log('Checkbox is not checked..');
  }
});

// Custom Scripts
// Custom scripts

function stepForm() {
  const steps = document.querySelectorAll('.form__step');
  const prevBtn = document.querySelector('.prev__step');
  const nextBtn = document.querySelector('.next__step');
  const form = document.querySelector('.steps__form');
  const stepNumbers = document.querySelectorAll(
    '.step__number',
  );
  const progress = document.querySelector(
    '.progress__success',
  );
  const finishBlock = document.querySelector('.finish');

  form.addEventListener('submit', (e) =>
    e.preventDefault(),
  );

  let formStep = 0;

  prevBtn.addEventListener('click', () => {
    formStep--;
    stepNumbers[formStep + 1].classList.remove(
      'active--number',
    );
    updateFormSteps();
  });

  nextBtn.addEventListener('click', () => {
    if (formStep < steps.length - 1) {
      formStep++;
      updateFormSteps();
    }
  });

  function updateFormSteps() {
    steps.forEach((step) => {
      step.classList.contains('active') &&
        step.classList.remove('active');
    });

    steps[formStep].classList.add('active');
    stepNumbers[formStep].classList.add('active--number');

    if (formStep === 0) {
      prevBtn.style.display = 'none';
    } else {
      prevBtn.style.display = 'block';
    }

    if (formStep === steps.length - 1) {
      nextBtn.innerHTML = 'Send';

      nextBtn.addEventListener('click', () => {
        finishBlock.style.display = 'block';
        form.style.display = 'none';
      });
    } else {
      nextBtn.innerHTML = 'Next';
    }

    const actives = document.querySelectorAll(
      '.active--number',
    );
    const percent =
      ((actives.length - 1) / (stepNumbers.length - 1)) *
        100 +
      '%';

    progress.style.width = percent;
  }
  updateFormSteps();
}
if (document.querySelector('.form__step')) {
  stepForm();
}

const uploadFile = document.querySelector('.file__item');
const input = document.querySelector('#uploadFile');

input.addEventListener('change', () => {
  let link = URL.createObjectURL(input.files[0]);
  uploadFile.style.backgroundImage = `url(${link})`;
  uploadFile.style.border = 0;
  uploadFile.textContent = '';
});


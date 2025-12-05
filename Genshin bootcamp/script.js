document.addEventListener('DOMContentLoaded', function () {
  'use strict';

  // Regex om alleen letters, spaties, apostrof en streepjes toe te staan (voor hele string)
  const onlyLetters = /^[A-Za-zÀ-ÿ\s'-]*$/;
  const form = document.querySelector('.needs-validation');
  const successAlert = document.getElementById('successAlert');

  // Voorkom dat er cijfers en andere karakters dan letters worden getypt in naamvelden
  function preventInvalidChars(e) {
    const char = e.key;
    if (!onlyLetters.test(char)) {
      e.preventDefault();
    }
  }

  document.getElementById('firstName').addEventListener('keypress', preventInvalidChars);
  document.getElementById('lastName').addEventListener('keypress', preventInvalidChars);

  // Formulier verzenden
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    event.stopPropagation();

    // Telefoonnummer check
    const phoneInput = document.getElementById('phone');
    const phonePattern = /^06[-\s]?\d{8}$/;

    const isPhoneValid = phonePattern.test(phoneInput.value.trim());

    if (!isPhoneValid) {
      phoneInput.classList.add('is-invalid');
      phoneInput.classList.remove('is-valid');
    } else {
      phoneInput.classList.remove('is-invalid');
      phoneInput.classList.add('is-valid');
    }

    if (form.checkValidity() && isPhoneValid) {
      successAlert.classList.remove('d-none');
      form.classList.add('was-validated');

    } else {
      form.classList.add('was-validated');
      successAlert.classList.add('d-none');
    }
  });
});


const tabs   = document.querySelectorAll('.tab');
const panels = document.querySelectorAll('.panel');

tabs.forEach((tab) => {
  tab.addEventListener('click', () => activateTab(tab));

  tab.addEventListener('keydown', (e) => {
    let idx = [...tabs].indexOf(tab);

    if      (e.key === 'ArrowRight') idx = (idx + 1) % tabs.length;
    else if (e.key === 'ArrowLeft')  idx = (idx - 1 + tabs.length) % tabs.length;
    else return;
      
    e.preventDefault();
    activateTab(tabs[idx]);
    tabs[idx].focus();
  });
});

function activateTab(tab) {
  const target = tab.dataset.target;

  tabs.forEach(t => {
    t.classList.remove('active');
    t.setAttribute('tabindex', '-1');
    t.setAttribute('aria-selected', 'false');
  });

  tab.classList.add('active');
  tab.setAttribute('tabindex', '0');
  tab.setAttribute('aria-selected', 'true');

  panels.forEach(p => {
    if (p.id === target) {
      p.classList.add('active');
      p.removeAttribute('hidden');
    } else {
      p.classList.remove('active');
      p.setAttribute('hidden', '');
    }
  });
}


function showError(input, message) {
  input.classList.remove('valid');
  input.classList.add('invalid');
  input.setAttribute('aria-invalid', 'true');

  const errorEl = document.getElementById(input.getAttribute('aria-describedby')?.split(' ')[0]);
  if (errorEl) errorEl.textContent = message;
}

function showSuccess(input) {
  input.classList.remove('invalid');
  input.classList.add('valid');
  input.setAttribute('aria-invalid', 'false');

  const errorEl = document.getElementById(input.getAttribute('aria-describedby')?.split(' ')[0]);
  if (errorEl) errorEl.textContent = '';
}

function clearState(input) {
  input.classList.remove('valid', 'invalid');
  input.removeAttribute('aria-invalid');
  const errorEl = document.getElementById(input.getAttribute('aria-describedby')?.split(' ')[0]);
  if (errorEl) errorEl.textContent = '';
}

const REGEX = {
  email:    /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,
  phone:    /^\+?[\d\s\-().]{7,20}$/,
  name:     /^[A-Za-zÀ-ÖØ-öø-ÿ' -]{2,}$/,
  password: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[^A-Za-z\d]).{8,}$/,
  cardNum:  /^\d{4}( \d{4}){3}$|^\d{16}$/,
  cvv:      /^\d{3,4}$/ };
function validateName(input, label = 'This field') {
  const v = input.value.trim();
  if (!v)                  { showError(input, `${label} is required.`); return false; }
  if (!REGEX.name.test(v)) { showError(input, `${label} must be at least 2 letters.`); return false; }
  showSuccess(input); return true;
}

function validateEmail(input) {
  const v = input.value.trim();
  if (!v)                   { showError(input, 'Email is required.'); return false; }
  if (!REGEX.email.test(v)) { showError(input, 'Enter a valid email address.'); return false; }
  showSuccess(input); return true;
}

function validateEmailMatch(emailInput, confirmInput) {
  if (!validateEmail(confirmInput)) return false;
  if (emailInput.value.trim() !== confirmInput.value.trim()) {
    showError(confirmInput, 'Emails do not match.');
    return false;
  }
  showSuccess(confirmInput); return true;
}

function validatePassword(input) {
  const v = input.value;
  if (!v)                      { showError(input, 'Password is required.'); return false; }
  if (!REGEX.password.test(v)) { showError(input, 'Min 8 chars, include a number and a symbol.'); return false; }
  showSuccess(input); return true;
}

function validatePasswordMatch(passInput, confirmInput) {
  const v = confirmInput.value;
  if (!v)                        { showError(confirmInput, 'Please confirm your password.'); return false; }
  if (passInput.value !== v)     { showError(confirmInput, 'Passwords do not match.'); return false; }
  showSuccess(confirmInput); return true;
}

function validateDOB(input) {
  const v = input.value;
  if (!v) { showError(input, 'Date of birth is required.'); return false; }

  const dob = new Date(v);
  const now = new Date();
  let age   = now.getFullYear() - dob.getFullYear();
  const m   = now.getMonth() - dob.getMonth();
  if (m < 0 || (m === 0 && now.getDate() < dob.getDate())) age--;

  if (age < 18)  { showError(input, 'You must be at least 18 years old.'); return false; }
  if (age > 120) { showError(input, 'Enter a valid date of birth.'); return false; }
  showSuccess(input); return true;
}

function validateIdentifier(input) {
  const v = input.value.trim();
  if (!v) { showError(input, 'Username or email is required.'); return false; }
  const isEmail    = REGEX.email.test(v);
  const isUsername = v.length >= 3 && !/\s/.test(v);
  if (!isEmail && !isUsername) {
    showError(input, 'Enter a valid username (min 3 chars) or email.');
    return false;
  }
  showSuccess(input); return true;
}

function validateLoginPassword(input) {
  if (!input.value) { showError(input, 'Password is required.'); return false; }
  showSuccess(input); return true;
}

function validatePhone(input) {
  const v = input.value.trim();
  if (!v)                   { showError(input, 'Phone number is required.'); return false; }
  if (!REGEX.phone.test(v)) { showError(input, 'Enter a valid phone number.'); return false; }
  showSuccess(input); return true;
}

function validateCountry(select) {
  if (!select.value) { showError(select, 'Please select a country.'); return false; }
  showSuccess(select); return true;
}

function validatePayment() {
  const checked = document.querySelector('input[name="payment"]:checked');
  const errorEl = document.getElementById('payment-error');
  if (!checked) {
    if (errorEl) errorEl.textContent = 'Please select a payment method.';
    document.querySelectorAll('input[name="payment"]').forEach(r => r.classList.add('invalid'));
    return false;
  }
  if (errorEl) errorEl.textContent = '';
  document.querySelectorAll('input[name="payment"]').forEach(r => r.classList.remove('invalid'));
  return true;
}

function validateCardNumber(input) {
  const digits = input.value.replace(/\D/g, '').slice(0, 16);
  input.value  = digits.replace(/(.{4})/g, '$1 ').trim();

  const v = input.value.trim();
  if (!v)                      { showError(input, 'Card number is required.'); return false; }
  if (!REGEX.cardNum.test(v))  { showError(input, 'Enter a valid 16-digit card number.'); return false; }
  showSuccess(input); return true;
}

function validateExpiry(input) {
  const v = input.value;
  if (!v) { showError(input, 'Expiry date is required.'); return false; }

  const [year, month] = v.split('-').map(Number);
  const now    = new Date();
  const expiry = new Date(year, month - 1, 1);
  const today  = new Date(now.getFullYear(), now.getMonth(), 1);

  if (expiry < today) { showError(input, 'Card has expired.'); return false; }
  showSuccess(input); return true;
}

function validateCVV(input) {
  const v = input.value.trim();
  if (!v)                 { showError(input, 'CVV is required.'); return false; }
  if (!REGEX.cvv.test(v)) { showError(input, 'CVV must be 3 or 4 digits.'); return false; }
  showSuccess(input); return true;
}

function validateTerms(checkbox) {
  const errorEl = document.getElementById('terms-error');
  if (!checkbox.checked) {
    if (errorEl) errorEl.textContent = 'You must agree to the Terms & Conditions.';
    checkbox.classList.add('invalid');
    return false;
  }
  if (errorEl) errorEl.textContent = '';
  checkbox.classList.remove('invalid');
  return true;
}

document.getElementById('identifier').addEventListener('blur', function () {
  validateIdentifier(this);
});
document.getElementById('loginPassword').addEventListener('blur', function () {
  validateLoginPassword(this);
});

document.getElementById('firstName').addEventListener('blur', function () {
  validateName(this, 'First name');
});
document.getElementById('lastName').addEventListener('blur', function () {
  validateName(this, 'Last name');
});
document.getElementById('dateOfBirth').addEventListener('blur', function () {
  validateDOB(this);
});
document.getElementById('signupEmail').addEventListener('blur', function () {
  validateEmail(this);
  const confirm = document.getElementById('confirmEmail');
  if (confirm.value) validateEmailMatch(this, confirm);
});
document.getElementById('confirmEmail').addEventListener('blur', function () {
  validateEmailMatch(document.getElementById('signupEmail'), this);
});
document.getElementById('signupPassword').addEventListener('blur', function () {
  validatePassword(this);
  const confirm = document.getElementById('confirmPassword');
  if (confirm.value) validatePasswordMatch(this, confirm);
});
document.getElementById('confirmPassword').addEventListener('blur', function () {
  validatePasswordMatch(document.getElementById('signupPassword'), this);
});

document.getElementById('fullName').addEventListener('blur', function () {
  validateName(this, 'Full name');
});
document.getElementById('checkoutEmail').addEventListener('blur', function () {
  validateEmail(this);
});
document.getElementById('phoneNumber').addEventListener('blur', function () {
  validatePhone(this);
});
document.getElementById('country').addEventListener('blur', function () {
  validateCountry(this);
});
document.getElementById('cardNumber').addEventListener('input', function () {
  validateCardNumber(this);
});
document.getElementById('expiryDate').addEventListener('blur', function () {
  validateExpiry(this);
});
document.getElementById('cvv').addEventListener('blur', function () {
  validateCVV(this);
});


document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const ok = [
    validateIdentifier(document.getElementById('identifier')),
    validateLoginPassword(document.getElementById('loginPassword')),
  ].every(Boolean);

  if (!ok) { focusFirstInvalid(this); return; }

  openModal('Login Successful', {
    'Username / Email': document.getElementById('identifier').value,
  });
});

document.getElementById('signupForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const firstName      = document.getElementById('firstName');
  const lastName       = document.getElementById('lastName');
  const dob            = document.getElementById('dateOfBirth');
  const signupEmail    = document.getElementById('signupEmail');
  const confirmEmailEl = document.getElementById('confirmEmail');
  const signupPass     = document.getElementById('signupPassword');
  const confirmPassEl  = document.getElementById('confirmPassword');

  const ok = [
    validateName(firstName, 'First name'),
    validateName(lastName, 'Last name'),
    validateDOB(dob),
    validateEmail(signupEmail),
    validateEmailMatch(signupEmail, confirmEmailEl),
    validatePassword(signupPass),
    validatePasswordMatch(signupPass, confirmPassEl),
  ].every(Boolean);

  if (!ok) { focusFirstInvalid(this); return; }

  openModal('Account Created!', {
    'First Name':    firstName.value,
    'Last Name':     lastName.value,
    'Date of Birth': dob.value,
    'Email':         signupEmail.value,
  });
});

document.getElementById('checkoutForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const fullName  = document.getElementById('fullName');
  const email     = document.getElementById('checkoutEmail');
  const phone     = document.getElementById('phoneNumber');
  const countryEl = document.getElementById('country');
  const cardNum   = document.getElementById('cardNumber');
  const expiry    = document.getElementById('expiryDate');
  const cvvEl     = document.getElementById('cvv');
  const termsEl   = document.getElementById('terms');

  const ok = [
    validateName(fullName, 'Full name'),
    validateEmail(email),
    validatePhone(phone),
    validateCountry(countryEl),
    validatePayment(),
    validateCardNumber(cardNum),
    validateExpiry(expiry),
    validateCVV(cvvEl),
    validateTerms(termsEl),
  ].every(Boolean);

  if (!ok) { focusFirstInvalid(this); return; }

  const paymentMethod = document.querySelector('input[name="payment"]:checked')?.value;

  openModal('Order Confirmed!', {
    'Full Name':      fullName.value,
    'Email':          email.value,
    'Phone':          phone.value,
    'Country':        countryEl.options[countryEl.selectedIndex].text,
    'Payment':        paymentMethod,
    'Card (last 4)':  cardNum.value.replace(/\s/g, '').slice(-4),
    'Expiry':         expiry.value,
  });
});


const modalOverlay = document.getElementById('successModal');
const modalClose   = document.getElementById('modalClose');
const modalOk      = document.getElementById('modalOk');
const modalTitle   = document.getElementById('modal-title');
const modalList    = document.getElementById('modalDataList');

let lastFocusedEl = null;

function openModal(title, data) {
  lastFocusedEl = document.activeElement;

  modalTitle.textContent = title;
  modalList.innerHTML = '';

  Object.entries(data).forEach(([key, value]) => {
    const row = document.createElement('div');
    row.className = 'modal-data-row';
    row.innerHTML = `<span>${key}</span><span>${value || '—'}</span>`;
    modalList.appendChild(row);
  });

  modalOverlay.removeAttribute('hidden');
  modalClose.focus();
  modalOverlay.addEventListener('keydown', trapFocus);
}

function closeModal() {
  modalOverlay.setAttribute('hidden', '');
  modalOverlay.removeEventListener('keydown', trapFocus);
  if (lastFocusedEl) lastFocusedEl.focus();
}

modalClose.addEventListener('click', closeModal);
modalOk.addEventListener('click', closeModal);

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !modalOverlay.hasAttribute('hidden')) closeModal();
});

modalOverlay.addEventListener('click', (e) => {
  if (e.target === modalOverlay) closeModal();
});

function trapFocus(e) {
  if (e.key !== 'Tab') return;
  const focusable = [...modalOverlay.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  )].filter(el => !el.disabled && el.offsetParent !== null);

  const first = focusable[0];
  const last  = focusable[focusable.length - 1];

  if (e.shiftKey) {
    if (document.activeElement === first) { e.preventDefault(); last.focus(); }
  } else {
    if (document.activeElement === last)  { e.preventDefault(); first.focus(); }
  }
}

function focusFirstInvalid(form) {
  const first = form.querySelector('.invalid');
  if (first) first.focus();
}
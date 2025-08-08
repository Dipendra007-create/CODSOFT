let display = document.getElementById('display');

function appendValue(value) {
  if (display.innerText === '0') {
    display.innerText = value;
  } else {
    display.innerText += value;
  }
}

function clearDisplay() {
  display.innerText = '0';
}

function deleteChar() {
  display.innerText = display.innerText.slice(0, -1) || '0';
}

function calculate() {
  try {
    display.innerText = eval(display.innerText.replace('%', '/100'));
  } catch {
    display.innerText = 'Error';
  }
}

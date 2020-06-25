const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat');

const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

// +movieSelect.value << + 붙이면 string 을 숫자로 바꿔준다.
let ticketPrice = +movieSelect.value;

//* updata total and count
function updataSelecetedCount() {
  const selectedSeats = document.querySelectorAll('.row .seat.selected');
  const selectedSeatsCount = selectedSeats.length;

  count.innerText = selectedSeatsCount;
  total.innerText = selectedSeatsCount * ticketPrice;
}

//* movie select event

movieSelect.addEventListener('change', (e) => {
  ticketPrice = +e.target.value;
  updataSelecetedCount();
});

container.addEventListener('click', (e) => {
  if (
    e.target.classList.contains('seat') &&
    !e.target.classList.contains('occupied')
  ) {
    e.target.classList.toggle('selected');
    updataSelecetedCount();
  }
});

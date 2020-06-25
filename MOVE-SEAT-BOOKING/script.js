const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat');

const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

//! +movieSelect.value << + 붙이면 string 을 숫자로 바꿔준다.
let ticketPrice = +movieSelect.value;

populateUI();

//* Save Selected Movie index and price

function setMovieData(movieIndex, moviePrice) {
  localStorage.setItem('selectedMoiveIndex', movieIndex);
  localStorage.setItem('selectedMoivePrice', moviePrice);
}

//* updata total and count
function updataSelecetedCount() {
  const selectedSeats = document.querySelectorAll('.row .seat.selected');

  //* Copy selected seats into arr
  //* Map through array
  //* return a new Array

  const seatsIndex = [...selectedSeats].map((seat) => [...seats].indexOf(seat));

  localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));

  const selectedSeatsCount = selectedSeats.length;

  count.innerText = selectedSeatsCount;
  total.innerText = selectedSeatsCount * ticketPrice;
}

//* Get data from localstorage and populate UI
function populateUI() {
  const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));

  if (selectedSeats !== null && selectedSeats.length > 0) {
    seats.forEach((seat, index) => {
      if (selectedSeats.indexOf(index) > -1) {
        seat.classList.add('selected');
      }
    });
  }

  const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');

  if (selectedMovieIndex !== null) {
    movieSelect.selectedIndex = selectedMovieIndex;
  }
}

//* Movie select event

movieSelect.addEventListener('change', (e) => {
  ticketPrice = +e.target.value;
  setMovieData(e.target.selectedIndex, e.target.value);
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

//* Initial count and total set

updataSelecetedCount();

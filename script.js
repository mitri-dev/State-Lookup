// Elemets
const input = document.querySelector('input');
const output = document.querySelector('.output');

// Listeners
input.addEventListener('input', search);

// Functions
async function search() {
  // Setup
  const res = await fetch('../data/states.json');
  const states = await res.json();
  output.innerHTML = '';

  // RegExp
  const filteredStates = states.filter(state => {
    const regex = new RegExp(`^${input.value}`, `gi`);
    return state.name.match(regex) || state.abbr.match(regex);
  });

  if (input.value === '') {
    output.innerHTML = '';
    return;
  }

  filteredStates.forEach(state => {
    output.innerHTML += `
    <li>
    <p>${state.name} (${state.abbr}) <span>${state.capital}</span></p>
    <p class="small">Lat: ${state.lat} / Long: ${state.long}</span></p>
    </li>  
  `;
  });

  console.log(states);
}

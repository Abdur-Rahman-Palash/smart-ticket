const selectedSeat = document.getElementById('selected-seat');
const totalBooked = document.getElementById('total-booked')
let selectedSit = [];
function seatHandle(event){
    console.log(event.innerText);
    event.classList.add('bg-primary');
    event.classList.add('text-white');
    selectedSit.push(event.innerText);
   totalBooked.innerText = selectedSit.length;
    selectedSeat.innerHTML += `<li class="text-base font-normal flex justify-between">
    <span>${event.innerText}</span>
    <span>Economy</span>
    <span>550</span>
    </li>`
}
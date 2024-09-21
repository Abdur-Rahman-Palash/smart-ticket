const selectedSeat = document.getElementById('selected-seat');
function seatHandle(event){
    console.log(event.innerText);
    selectedSeat.innerHTML += `<li class="text-base font-normal flex justify-between>
    <span>${event.innerText}</span>
    <span>Economy</span>
    <span>550</span>
    </li>`
}
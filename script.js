let button = document.querySelector('.button')
let input = document.querySelector('.input')
let namakota = document.querySelector('#namakota')
let suhukota = document.querySelector('#suhukota')
let cuacakota = document.querySelector('#cuacakota')

button.addEventListener("click",function() {
    fetch(`https://api.weatherapi.com/v1/current.json?key=be2b7b035b6446f592312448230310&q=${input.value}`)
    .then(response => response.json())
    .then(tampilData)
    .catch(err => alert("Nama Kota Salah"));
    })


const tampilData=(weather)=>{
    console.log(weather);
    namakota.innerText = `${weather.location.name}`
    suhukota.innerHTML = `${weather.current.temp_c}&deg;C`
    cuacakota.innerText = `${weather.current.condition.text}`
 }
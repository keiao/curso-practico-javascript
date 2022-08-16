// const h1 = document.querySelector('h1');
// const p = document.querySelector('p');
// const parrafito = document.getElementsByClassName('.parrafito');
// const pid = document.querySelector('#pid');
// const input = document.querySelector('input');

// console.log(input.value);



// console.log ({
//   h1,
//   p,
//   parrafito,
//   pid,
//   input,
// });

// h1.innerHTML = 'Patito <br> feo';
// h1.innerText = 'Patito <br> feo';

// // console.log(h1.getAttribute('class'));
// // h1.setAttribute('class', 'rojo');

// h1.classList.add('rojo');
// h1.classList.remove('verde');
// // h1.classList.toggle('rojo');
// // h1.classList.contains('verde');

// input.value = "456"


// const img = document.createElement('img');
// img.setAttribute('src', 'https://www.egames.news/__export/1595974982000/sites/debate/arte/coresites/egames/suscribe_background.png');
// console.log(img);

// pid.innerHTML = "";
// pid.append(img);


const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');

// btn.addEventListener('click', btn0nClick);

// function btn0nClick() {
//    console.log('Escuchando el evento de click');
//   const sumaInputs =input1.value + input2.value;
//   pResult.innerText = "Resultado: " + sumaInputs;
// }

// form.addEventListener('submit', sumarInputValues);

// function sumarInputValues(event) {
//   // console.log({event});
//   event.preventDefault();
//   const sumaInputs =input1.value + input2.value;
//   pResult.innerText = "Resultado: " + sumaInputs;
// }

btn.addEventListener('click', sumarInputValues);

function sumarInputValues(event) {
  // console.log({event});
  // event.preventDefault();
  const sumaInputs =input1.value + input2.value;
  pResult.innerText = "Resultado: " + sumaInputs;
}
import './style.css'

import Card from './src/components/Card';
import createElement from './src/helpers/createElement';

const container = document.querySelector('#app');
container.classList.add('container-fluid')
container.classList.add('mt-5')
container.classList.add('text-center')
container.classList.add('mx-auto')

//PRIMERA VERSION
// let row = document.createcreateElement('div')
// row.classList.add('row')
// container.append(row)

// let col = document.createcreateElement('div')
// col.classList.add('col')

// col.append(Card())
// row.append(col)


// col = document.createcreateElement('div')
// col.classList.add('col')

// col.append(Card())
// row.append(col)

// col = document.createcreateElement('div')
// col.classList.add('col')

// col.append(Card())
// row.append(col)

//SEGUNDA VERSION
// const tarjeta = createElement(
//   {
//     el : 'div',
//     clas: [
//             'card',
//           ]
//   }
//   )

//   const tarjetaImg = createElement(
//   {
//     el : 'img',
//     text: 'hola mundo',
//     src : 'https://picsum.photos/200',
//     clas: [
//             'card-img-top',
//             'p-3',
//           ]
//         }
//         )

//         const tarjetaTxt = createElement(
//           {
//             el : 'h5',
//             text: 'hola mundo',
//             clas: [
//               'card-text',
//               'p-3',
//           ]
//   }
//   )

//   const rowTarjeta = createElement(
//   {
//     el : 'div',
//     clas: [
//             'row',
//             'm-5',
//           ]
//   }
//   )
//   const colTarjeta = createElement(
//   {
//     el : 'div',
//     clas: [
//             'col',
//           ]
//   }
//   )

//   container.append(rowTarjeta)
//   rowTarjeta.append(colTarjeta)
//   rowTarjeta.append(colTarjeta)
//   colTarjeta.append(tarjeta)
//   tarjeta.append(tarjetaImg)
//   tarjeta.append(tarjetaTxt)


//TERCERA VERSION
const FILAS = 3
const COLUMNAS = 5

const clas = ['card-text', 'mt-2', 'p-2', 'fs-5', 'fw-bold', 'text-primary']

for (let lineas = 1; lineas <= FILAS; lineas++) {

  let $row  = createElement({el:'div',clas:['row', 'mt-3']})

  for(let e = 1; e <= COLUMNAS; e++) {
    let $col  = createElement({el:'div',clas:['col']})
    let $card = createElement({el:'div',clas:['card', 'p-3']})
    let $cardImg = createElement({el:'img', clas:['card-img-top']})
    let $cardTxt = createElement({el:'h4', clas,  text: 'Fotito'})
    $card.append($cardImg)
    $card.append($cardTxt)
    $col.append($card)
    $row.append($col)
  }

  container.append($row)

}


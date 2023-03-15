import './style.css'

import Card from './src/components/Card';
import Element from './src/components/Element';

const container = document.querySelector('#app');
container.classList.add('container-fluid')
container.classList.add('mt-5')
container.classList.add('text-center')
container.classList.add('mx-auto')

//PRIMERA VERSION
// let row = document.createElement('div')
// row.classList.add('row')
// container.append(row)

// let col = document.createElement('div')
// col.classList.add('col')

// col.append(Card())
// row.append(col)


// col = document.createElement('div')
// col.classList.add('col')

// col.append(Card())
// row.append(col)

// col = document.createElement('div')
// col.classList.add('col')

// col.append(Card())
// row.append(col)

//SEGUNDA VERSION
// const tarjeta = Element(
//   {
//     el : 'div',
//     clas: [
//             'card',
//           ]
//   }
//   )

//   const tarjetaImg = Element(
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

//         const tarjetaTxt = Element(
//           {
//             el : 'h5',
//             text: 'hola mundo',
//             clas: [
//               'card-text',
//               'p-3',
//           ]
//   }
//   )

//   const rowTarjeta = Element(
//   {
//     el : 'div',
//     clas: [
//             'row',
//             'm-5',
//           ]
//   }
//   )
//   const colTarjeta = Element(
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

  let $row  = Element({el:'div',clas:['row', 'mt-3']})

  for(let e = 1; e <= COLUMNAS; e++) {
    let $col  = Element({el:'div',clas:['col']})
    let $card = Element({el:'div',clas:['card', 'p-3']})
    let $cardImg = Element({el:'img', clas:['card-img-top']})
    let $cardTxt = Element({el:'h4', clas,  text: 'Fotito'})
    $card.append($cardImg)
    $card.append($cardTxt)
    $col.append($card)
    $row.append($col)
  }

  container.append($row)

}


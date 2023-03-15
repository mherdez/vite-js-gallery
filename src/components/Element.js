

const Element = ( props ) => {

const {el = 'div', text = '', src = `https://picsum.photos/id/${Math.floor(Math.random() * 300 + 1)}/200/300`, clas = []} = props;

const elemento = document.createElement(el)

if(el == 'p' || el.includes('h')) {
  elemento.textContent = text
}
if(src) {
  elemento.src = src
  if(text) {
    elemento.title = text
    elemento.alt = text
  }
}

if(clas) {
 clas.forEach(clase => elemento.classList.add(clase))
}

  return elemento
}

export default Element;
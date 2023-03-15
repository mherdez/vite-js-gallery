
const Card = () => {

  const card = document.createElement('div')
  card.classList.add('card')
  card.classList.add('p-4')
  card.classList.add('shadow')

  const cardImg = document.createElement('img')
  cardImg.src = 'https://picsum.photos/500/600'
  cardImg.classList.add('card-img-top')

  const cardText = document.createElement('div')
  cardText.classList.add('card-title')
  cardText.classList.add('text-dark')
  cardText.classList.add('p-2')
  cardText.classList.add('mt-3')
  cardText.classList.add('fw-bold')
  cardText.textContent = 'Picsum Photo'

  card.append(cardImg)
  card.append(cardText)

  return card
}

export default Card
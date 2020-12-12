function shuffle(array) {
    const _array = array.slice(0);
    for (let i = 0; i < array.length - 1; i++) {
      let randomIndex = Math.floor(Math.random() * (i + 1));
      let temp = _array[i];
      _array[i] = _array[randomIndex];
      _array[randomIndex] = temp;
    }
    return _array;
  }

  
  export default function initializeDeck() {
    const letterCards = ['a', 'v', 'h', 'i', 'o', 'u', 'x','y', 't']
    const imageCards = ['abeja', 'vaca', 'hamburguesa', 'isla', 'oso', 'unicornio', 'xilofono',
    'yoyo', 'tortuga']
    const cardsArray = letterCards.concat(imageCards)
    console.log(cardsArray)
    let id = 0;
    const cards = cardsArray.reduce((acc, type) => {
      //pushing images onto the empty array. Does it twice
      //two images to match together
      acc.push({
        id: id++,
        type
      });
      return acc
    }, []);
    return shuffle(cards);
  }
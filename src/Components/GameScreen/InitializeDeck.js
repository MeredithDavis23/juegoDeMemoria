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
    let id = 0;
    const cards = ['abeja', 'ballena', 'carro', 'chile', 'dinosaurio', 'elefante', 'fuego', 'gato', 'hamburguesa', 'isla', 'jirafa', 
        'koala', 'leon', 'mono', 'nido', 'ñandú', 'oso', 'pulpo', 'queso', 'rana', 'sol', 'tortuga', 'unicornio',
        'vaca', 'washington', 'xilofono', 'yoyo', 'zapato'].reduce((acc, type) => {
      //pushing images onto the empty array. Does it twice
      //two images to match together
      acc.push({
        id: id++,
        type
      });
      acc.push({
        id: id++,
        type
      });
      return acc
    }, []);
    return shuffle(cards);
  }

  // const letterCards = ['abeja', 'ballena', 'carro', 'chile', 'dinosaurio', 'elefante', 'fuego', 'gato', 'hamburguesa', 'isla', 'jirafa', 
  // 'koala', 'leon', 'mono', 'nido', 'ñandú', 'oso', 'pulpo', 'queso', 'rana', 'sol', 'tortuga', 'unicornio',
  // 'vaca', 'washington', 'xilofono', 'yoyo', 'zapato']
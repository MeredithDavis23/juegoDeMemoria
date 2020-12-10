// import e from '.../e.png'
// import a from '.../a.png'
// import h from '.../h.png'
// import i from '.../i.png'
// import o from '.../o.png'
// import u from '.../u.png'
// import x from '.../x.png'
// import y from '.../y.png'


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
    const letterCards = ['a', 'e', 'h', 'i', 'o', 'u', 'x', 'y']
    const imageCards = ['abeja', 'elefante','hamburguesa', 'isla', 'oso', 'unicornio', 'xilofono',
    'yoyo']
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
      // acc.push({
      //   id: id++,
      //   type
      // });
      return acc
    }, []);
    return shuffle(cards);
  }

  



  // const letterCards = ['abeja', 'elefante', 'hamburguesa', 'isla', 'oso', 'unicornio', 'xilofono',
  //        'yoyo']
  //     acc.push({
  //       id: id++,
  //       type
  //     });
  //     return acc
  //   }, []);
  //   return shuffle(letterCards);
  // }

  // const cards = ['abeja', 'ballena', 'carro', 'chile', 'dinosaurio', 'elefante', 'fuego', 'gato', 'hamburguesa', 'isla', 'jirafa', 
  //       'koala', 'leon', 'mono', 'nido', 'ñandú', 'oso', 'pulpo', 'queso', 'rana', 'sol', 'tortuga', 'unicornio',
  //       'vaca', 'washington', 'xilofono', 'yoyo', 'zapato']


  // const letterCards = ['abeja', 'ballena', 'carro', 'chile', 'dinosaurio', 'elefante', 'fuego', 'gato', 'hamburguesa', 'isla', 'jirafa', 
  // 'koala', 'leon', 'mono', 'nido', 'ñandú', 'oso', 'pulpo', 'queso', 'rana', 'sol', 'tortuga', 'unicornio',
  // 'vaca', 'washington', 'xilofono', 'yoyo', 'zapato']
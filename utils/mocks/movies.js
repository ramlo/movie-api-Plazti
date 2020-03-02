const moviesMock = [
  {
    id: '63b81f22-d875-4ec9-aeae-9b6afb2207e9',
    title: 'Jim Jefferies: BARE',
    year: 2000,
    cover: 'http://dummyimage.com/168x215.png/5fa2dd/ffffff',
    description:
      'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.',
    duration: 1929,
    contentRating: 'NC-17',
    source: 'https://google.com.au/dui/proin/leo.aspx',
    tags: ['Drama', 'Drama', 'Comedy|Drama', 'Comedy|Drama|Romance']
  },
  {
    id: '9cd1bb94-2290-4c4b-a550-9d29189a69c7',
    title: 'Hansel & Gretel',
    year: 2002,
    cover: 'http://dummyimage.com/100x148.bmp/5fa2dd/ffffff',
    description:
      'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
    duration: 1921,
    contentRating: 'NC-17',
    source: 'http://nyu.edu/viverra/eget.png',
    tags: [
      'Documentary',
      'Comedy|Drama|Romance',
      'Drama|War',
      'Drama',
      'Comedy|Drama'
    ]
  },
  {
    id: '25a9af00-1096-4555-ab07-b7868f32630c',
    title: 'Seaside (Bord de Mer)',
    year: 2008,
    cover: 'http://dummyimage.com/104x147.png/5fa2dd/ffffff',
    description: 'Fusce consequat. Nulla nisl. Nunc nisl.',
    duration: 1907,
    contentRating: 'PG',
    source: 'https://comcast.net/in.png',
    tags: ['Comedy|Crime|Drama|Horror|Mystery']
  },
  {
    id: '82a9ef80-ade9-472a-b07d-920bd6598f29',
    title: 'Calcium Kid, The',
    year: 2005,
    cover: 'http://dummyimage.com/117x140.jpg/dddddd/000000',
    description:
      'Sed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
    duration: 1961,
    contentRating: 'G',
    source: 'https://squarespace.com/at/nulla/suspendisse/potenti/cras.json',
    tags: [
      'Crime|Drama|Mystery',
      'Documentary',
      'Documentary',
      'Action|Adventure|Thriller'
    ]
  },
  {
    id: '48b6cbf7-6abf-4b18-a1e2-ce39d751c9f4',
    title: 'Escape to Athena',
    year: 2000,
    cover: 'http://dummyimage.com/167x183.png/5fa2dd/ffffff',
    description:
      'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.',
    duration: 2045,
    contentRating: 'G',
    source:
      'http://reverbnation.com/nulla/neque/libero/convallis/eget/eleifend/luctus.html',
    tags: ['Comedy|Drama|Romance', 'Drama', 'Documentary', 'Western']
  },
  {
    id: 'ea6cea64-b0ee-45fe-9416-6609e3b145cc',
    title: 'Chains (Catene)',
    year: 1994,
    cover: 'http://dummyimage.com/158x166.bmp/ff4444/ffffff',
    description:
      'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.',
    duration: 1997,
    contentRating: 'PG-13',
    source:
      'https://sina.com.cn/eget/elit/sodales/scelerisque/mauris/sit/amet.aspx',
    tags: ['Action|Comedy', 'Action|Adventure|Drama|Romance|War', 'Drama|War']
  },
  {
    id: 'ced5ee9d-390c-4136-b401-c9edbe2ac3ce',
    title: 'Dancing Lady',
    year: 1985,
    cover: 'http://dummyimage.com/223x198.jpg/5fa2dd/ffffff',
    description:
      'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.',
    duration: 1913,
    contentRating: 'R',
    source: 'http://dot.gov/imperdiet/et/commodo/vulputate/justo/in.png',
    tags: [
      'Action|Drama|War',
      'Children|Drama',
      'Crime|Film-Noir|Thriller',
      'Drama|Horror|Mystery|Thriller',
      'Comedy|Drama|Romance'
    ]
  },
  {
    id: '161df713-ad91-42e4-9bce-69faffccf516',
    title: 'Solaris (Solyaris)',
    year: 1992,
    cover: 'http://dummyimage.com/211x171.jpg/cc0000/ffffff',
    description:
      'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.',
    duration: 1932,
    contentRating: 'PG-13',
    source: 'https://51.la/in/faucibus.html',
    tags: ['Comedy|Crime|Drama', 'Horror', 'Documentary', 'Crime|Mystery']
  },
  {
    id: '51d84ae5-b197-4f74-994c-5730942e5148',
    title: 'Father, The (Pedar)',
    year: 1986,
    cover: 'http://dummyimage.com/119x186.jpg/cc0000/ffffff',
    description:
      'Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
    duration: 2061,
    contentRating: 'PG',
    source:
      'https://newyorker.com/mauris/eget/massa/tempor/convallis/nulla/neque.aspx',
    tags: [
      'Drama',
      'Documentary',
      'Drama|Romance',
      'Western',
      'Action|Thriller|War'
    ]
  },
  {
    id: '6511e46a-7bc8-4021-bb8b-b871561805dd',
    title: 'Purple Rose of Cairo, The',
    year: 2009,
    cover: 'http://dummyimage.com/135x153.jpg/ff4444/ffffff',
    description:
      'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.',
    duration: 1957,
    contentRating: 'PG-13',
    source: 'https://apple.com/ut/blandit/non.json',
    tags: ['Drama']
  }
];

module.exports = {moviesMock};

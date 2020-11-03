use munro_visited;
db.dropDatabase();

db.munros.insertMany([
  {
      munroName: 'Derry Cairngorm',
      dateVisited: '01/03/2018',
      image: ''
  }
]);
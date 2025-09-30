class addhomeModel {
  constructor() {
    this.homes = [];
  }
  addHomeData(h_name, loc, no_room, price_per_night, desc) {
    const newHome = { h_name, loc, no_room, price_per_night, desc };
    this.homes.push(newHome);
    return newHome;
  }
//   getAllHomes(){
//     return this.homes;
//   }
}

module.exports = addhomeModel;

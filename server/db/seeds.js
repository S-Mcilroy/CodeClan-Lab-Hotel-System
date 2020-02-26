use hotel;

db.dropDatabase();

db.bookings.insertMany([
  {
    name: "Jack Portwood",
    email: "Na$TY_jack_420_6969@gmail.com",
    checked: true
  },
  {
    name: "Emma Roberts",
    email: "Where_all_the_dogs_at??@aol.com",
    checked: false
  },
  {
    name: "Kevin Archer",
    email: "little_kev_420@gmail.com",
    checked: true
  }

]);

use hotel;

db.dropDatabase();

db.bookings.insertMany([
  {
    name: "Jack Portwood",
    email: "JackP1990@gmail.com",
    checked: true
  },
  {
    name: "Emma Roberts",
    email: "E.Roberts@aol.com",
    checked: false
  },
  {
    name: "Kevin Archer",
    email: "Kev_Archer_20@gmail.com",
    checked: true
  }

]);

<template lang="html">
  <div class="body">
    <h1>We're at the Hotel, Motel, Holiday Inn</h1>
    <bookings-form />
    <bookings-grid />
    <iframe src="https://www.youtube.com/embed/2up_Eq6r6Ko?start=10&autoplay=1&loop=1" frameborder="0" allow="accelerometer; loop; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>
</template>

<script>
import BookingsForm from './components/BookingsForm.vue';
import BookingsGrid from './components/BookingsGrid.vue';

export default {
  name: 'app',
  components: {
    'bookings-form': BookingsForm,
    'bookings-grid': BookingsGrid
  }
}
</script>

<style lang="css" scoped>

html{
  height: 100%;
}

.body {
  background: url('https://upload.wikimedia.org/wikipedia/commons/f/f5/Nice_Hotel_Negresco_hall_central.jpg') no-repeat;
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  font-family: cursive;
  align-text: center;

}

h1 {
  display: flex;
  justify-content: center;
  border-image: url();
  font-family: cursive;
  font-size: 50px;
  color: #F1E03D;
  -webkit-text-stroke: 0.1px black;
  background: rgba(255,255,255, 0.7);
}
</style>

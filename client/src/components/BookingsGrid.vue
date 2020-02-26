<template lang="html">
  <div class="bookingsGrid">
    <booking v-for="booking, index in bookings" :key="index" :booking="booking"/>
  </div>

</template>

<script>
import { eventBus } from '../main.js';
import HotelService from '../services/HotelService.js'
import Booking from './Booking.vue';

export default {
  name: "bookings-grid",
  data() {
    return {
      bookings: []
    }
  },
  components: {
    'booking' : Booking
  },
  mounted(){
    this.fetchData()
    eventBus.$on('booking-added', booking => this.bookings.push(booking));

    eventBus.$on('booking-deleted', id => {
      const index = this.bookings.findIndex(booking => booking._id ===id);
      this.bookings.splice(index, 1);
    })

    eventBus.$on('booking-true', () => {
      this.fetchData()
      })

    eventBus.$on('booking-false', id => {
      this.fetchData()})
  },
  methods: {
    fetchData(){
      HotelService.getBookings()
      .then(bookings => this.bookings = bookings);
    }
  }
}
</script>

<style lang="css" scoped>
.bookingsGrid{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
</style>

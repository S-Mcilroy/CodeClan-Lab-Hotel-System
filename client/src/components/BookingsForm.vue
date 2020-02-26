<template lang="html">
<form id="bookings-form" v-on:submit="handleSubmit">
  <h2>Add a booking</h2>
  <div class="formWrap">
    <label for="name">Guest:</label>
    <input type="text" id="name" v-model="name" required>
  </div>
  <div class="formWrap">
    <label for="email">Guest E-mail:</label>
    <input type="text" v-model="email" required>
  </div>
  <div class="formWrap">
    <label for="checked">Guest Status</label>
    <input type="radio" :value="true" v-model="checked">Here
    <input type="radio" :value="false" v-model="checked">No Here
  </div>

  <input type="submit" id="save" value="save"/>
</form>
</template>

<script>
import {eventBus} from '../main.js'
import HotelService from '../services/HotelService.js'

export default {
  name: "bookings-form",
  data() {
    return {
      name: "",
      email: "",
      checked: null
    }
  },
  methods: {
    handleSubmit(event){
      event.preventDefault();

      const payload = {
        name: this.name,
        email: this.email,
        checked: this.checked
      };

      HotelService.postBooking(payload)
      .then(booking => {
        eventBus.$emit('booking-added', booking);
      });
    }
  }
}
</script>

<style lang="css" scoped>
form {
  width: 30%;
  margin: auto;
  background: rgba(255,255,255, 0.7);
  padding: 20px;
  margin-bottom: 40px;
  align-items: center;

}
</style>

<template>
  <Datepicker class="rounded-md" v-model="date"></Datepicker>
</template>

<script>
import Datepicker from "vue3-date-time-picker";
import "../../node_modules/vue3-date-time-picker/dist/main.css";

export default {
  components: { Datepicker },
  data() {
    return {
      date: null,
    };
  },
};
</script>

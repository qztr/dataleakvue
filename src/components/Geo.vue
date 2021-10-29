<template>? </template>

<script>
export default {
  mounted() {
    var options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };

    function success(pos) {
      var crd = pos.coords;

      console.log("Ваше текущее местоположение:");
      console.log(`Широта: ${crd.latitude}`);
      console.log(`Долгота: ${crd.longitude}`);
      console.log(`Плюс-минус ${crd.accuracy} метров.`);
    }

    function error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }

    navigator.geolocation.getCurrentPosition(success, error, options);
  },
};
</script>

<style></style>

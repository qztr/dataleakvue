<template>
  <div>
    <div class="mian grid col-span-full relative mx-6 mt-28 mb-24 ">
      <div class="header  flex flex-col w-auto ">
        <p class=" text-redy text-5xl font-bold uppercase mb-12">
          Share your data for free!
        </p>
      </div>
      <div
        class="content  flex flex-col w-auto justify-center align-middle  
        text-xl h-auto "
      >
        <p>
          You can share Your data absolutely for free and get nothing back! We
          already know Your:
        </p>
        <div class="">
          <br />
          1) IP
          <br />
          2) GEO
        </div>
        <br />
        <div>
          <p class="">
            <span>
              Don`t worry, we will store <br />
              Your data at
            </span>
            <span class="self-end text-green-500"> </span>

            <Tooltip
              placement="top"
              descrText="123"
              labelText="blockchain"
              class="self-end"
            />
          </p>
        </div>

        <p>
          and it will be kept by decentralized network of uncountable computers
          around the world!
          <br />
          <br />
          Later we will make your portrait and sell it to third party services.
          Thank you for sharing!
          <br />
          <br />
          Would you like to provide us more infromation?
        </p>
      </div>
      <div class="footer flex w-full justify-center align-middle">
        <div class="flexItem"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Tooltip from "./components/Tooltip.vue";

export default {
  name: "App",
  components: {
    Tooltip,
  },
  data() {
    return {
      msg: "THis is btn",
    };
  },
};
</script>

<style></style>

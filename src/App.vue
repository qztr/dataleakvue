<template>
  <div>
    <div
      class="mian grid col-span-full relative mx-4 mt-28 mb-24 justify-center align-middle "
    >
      <div class="header  flex flex-col w-auto ">
        <p class=" text-redy text-5xl font-bold uppercase mb-12">
          LEAK your data for free!
        </p>
      </div>
      <div
        class="relative content  flex flex-col w-full justify-center align-middle  
        text-xl h-auto "
      >
        <p>
          You can share Your data absolutely for
          <span class="font-bold italic">free</span> and get nothing back! We
          already know Your -
        </p>
        <div class="relative w-full">
          <br />
          <span class="font-bold text-2xl">IP:</span> {{ userIP }}
          <br />
          <span class="font-bold text-2xl">GEO:</span> {{ userLong }},
          {{ userLat }}
          <br />
          <span class="font-bold text-2xl">Location:</span> {{ userState }},
          {{ userCity }}
          <br />
          <br />
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
              descrText="Data saved in blockchain cannot be changed either deleted.
               What an amazing technology!"
              labelText="blockchain"
              class="self-end"
            />
          </p>
        </div>

        <p>
          and it will be kept by decentralized network of uncountable computers
          around the world <span class="font-bold italic">forever</span>!
          <br />
          <br />
          Later, we will
          <span class="font-extrabold italic">sell</span> it to third party
          services. Thank You for sharing!
          <br />
          <br />
        </p>
      </div>

      <!-- Question input/forms start  -->
      <div class="relative footer flex w-full justify-center align-middle ">
        <!-- first -->
        <div v-if="one" class="">
          <div class="relative h-auto bg-green-700 rounded-sm w-92 py-1 mt-6">
            <i
              v-if="loading"
              class="absolute left-1/3 top-1/3
                fas fa-search-dollar fa-6x h-auto  w-auto animate-spin-slow doNotChangeOpacity"
            ></i>
            <div
              class="m-12 flex flex-col"
              :class="{ 'opacity-30': loading === true }"
            >
              <p class="pt-0 text-xl">
                Would You like to provide us more infromation?
              </p>
              <div class="pt-8  ">
                What is your name?
                <input
                  class="text-black rounded-md border-8 border-white
                  border-opacity-100 shadow-lg w-full"
                  type="tel"
                  placeholder="First name Second name"
                  v-model="userName"
                  :disabled="!one"
                />
              </div>
              <div class="pt-8">
                What is your phone number?
                <input
                  class="text-black rounded-md border-8 border-white
                  border-opacity-100 shadow-lg w-full"
                  type="tel"
                  placeholder="+1 (234) 5678"
                  v-model="userPhone"
                  :disabled="!one"
                />
              </div>
              <div class="pt-8 pb-6">
                What is your birth date?
                <DatePicker
                  :disabled="!one"
                  class="w-full"
                  v-model="userBitrh"
                ></DatePicker>
              </div>

              <button
                class="w-3/4 h-full py-2  px-1 m-2 bg-red-600 self-center shadow-lg rounded-md"
                v-on:click="nextBlock"
                :disabled="!one"
              >
                Continue leaking
              </button>
            </div>
          </div>
        </div>
        <!-- first END -->

        <!-- second -->
        <LeakForm
          v-if="showNext"
          :socials="socials"
          :formsFilled="formsFilled"
          @formWasFilled="formWasFilled"
        ></LeakForm>
        <!-- second END -->

        <!-- third  -->
        <div v-if="formsFilled === socials.length" class="mt-6 ">
          <div class="h-auto w-auto bg-blue-600 ">
            <div class="p-8 text-center flex flex-col">
              Thank you! Now we will verify your leaks and sell them to a third
              parties. Also we will set a spam flow on your accounts.
              <br />
              <br />
              Have a good day!
              <button
                class="mt-5 text-sm text-yellow-200 hover:text-yellow-500"
                @click="modalAboutOn = !modalAboutOn"
              >
                What does it mean? What is this website about?
              </button>
            </div>
          </div>
        </div>
        <!-- third END -->
      </div>
      <!-- Question input/forms END  -->
    </div>
    <div class="h-12 w-ful flex justify-center align-middle">
      <div class="self-center">
        <button @click="modalAboutOn = !modalAboutOn">
          About
        </button>
      </div>
      <Geo></Geo>
      <ModalAbout v-if="modalAboutOn" @close="closeModal()">123</ModalAbout>
    </div>
  </div>
</template>

<script>
import Tooltip from "./components/Tooltip.vue";
// import axios from "axios";
import DatePicker from "./components/DatePicker.vue";
import LeakForm from "./components/LeakForm.vue";
import ModalAbout from "./components/ModalAbout.vue";
import Geo from "./components/Geo.vue";

export default {
  name: "App",
  components: {
    Tooltip,
    DatePicker,
    LeakForm,
    ModalAbout,
    Geo,
  },
  data() {
    return {
      msg: "THis is btn",
      userIP: "we know",
      userCity: "just not showing you",
      userLat: "for sure",
      userLong: null,
      userState: null,
      one: true,

      userName: "",
      userPhone: "",
      userBitrh: "",
      loading: false,
      socials: ["Facebook", "Instagram", "E-mail"],
      formsFilled: 0,
      showNext: false,
      modalAboutOn: false,
    };
  },
  mounted() {
    // axios.get("https://geolocation-db.com/json/").then((response) => {
    //   console.log(response.data);
    //   this.userIP = response.data.IPv4;
    //   this.userCity = response.data.city;
    //   this.userLat = response.data.latitude;
    //   this.userLong = response.data.longitude;
    //   this.userState = response.data.state;
    // });
  },
  methods: {
    nextBlock() {
      this.loading = true;
      setTimeout(
        () => (
          (this.one = false),
          (this.two = true),
          (this.loading = false),
          (this.showNext = true)
        ),
        4000
      );
    },
    formWasFilled() {
      this.formsFilled++;
    },
    closeModal() {
      this.modalAboutOn = false;
      console.log("close this shit");
    },
  },
};
</script>

<style></style>

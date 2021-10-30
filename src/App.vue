<!-- 

TODO: 
2) blockchain div is kinda pissing off by positioning
3) spining money on loading is never accurate at the center

 -->
<template>
  <div>
    <div
      class="mian grid col-span-full relative mx-4 mt-28 mb-24 justify-center align-middle "
    >
      <div class="header  flex flex-col w-auto md:pl-32 md:pr-32 ">
        <p
          class=" text-redy text-5xl  md:text-7xl font-bold uppercase mb-12 md:text-center"
        >
          LEAK your data for free!
        </p>
      </div>
      <div
        class="relative content  flex flex-col w-full justify-center align-middle  
        text-xl h-auto md:pl-32 md:pr-32 md:text-center"
      >
        <p>
          You can share Your data absolutely for
          <span class="font-bold italic">free</span> and get nothing back! We
          already know Your -
        </p>
        <div class="relative w-full">
          <span class="text-lg italic "
            >IP, Geolocation, City, ISP, Browser, Time-zone, Hair color, Weight,
            Height, Zip-code, Favorite dish, Sex and much much more.
          </span>
          <br />
        </div>
        <br />
        <div>
          <p class="md:flex md:m-auto md:justify-center ">
            <span>
              Don`t worry, we will store Your data at &NonBreakingSpace;
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
      <div
        class="relative footer flex w-full justify-center align-middle md:pl-32 md:pr-32 "
      >
        <!-- first -->
        <div v-if="one" class="">
          <div class="relative h-auto bg-green-700 rounded-sm w-92 py-1 mt-6">
            <i
              v-if="loading"
              class="absolute left-1/3 top-1/3 md:top-56 md:left-56 z-20
                fas fa-search-dollar fa-6x h-auto  w-auto animate-spin-slow doNotChangeOpacity"
            ></i>
            <div
              class="m-12 flex flex-col md:w-3/5 md:mx-auto"
              :class="{ 'opacity-30': loading === true }"
            >
              <p class="pt-0 text-xl">
                Would You like to provide us more infromation?
              </p>
              <div class="pt-8 ">
                What is your First name?
                <input
                  class="text-black rounded-md border-8 border-white
                  border-opacity-100 shadow-lg w-full"
                  type="text"
                  placeholder="First name"
                  v-model="userName2"
                  :disabled="!one"
                />
              </div>
              <div class="pt-8 ">
                What is your Second name?
                <input
                  class="text-black rounded-md border-8 border-white
                  border-opacity-100 shadow-lg w-full"
                  type="text"
                  placeholder="Second name"
                  v-model="userName"
                  :disabled="!one"
                />
              </div>
              <div class="pt-8 pb-6">
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

              <!-- <div class="pt-8 pb-6">
                What is your birth date?
                <DatePicker
                  :disabled="!one"
                  class="w-full"
                  v-model="userBitrh"
                ></DatePicker>
              </div> -->

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
      <ModalAbout v-if="modalAboutOn" @close="closeModal()"></ModalAbout>
    </div>
  </div>
  <ModalCookie
    class="realative h-auto top-2/3"
    v-if="modalCookieOn"
    @close="closeCookie()"
  ></ModalCookie>
</template>

<script>
import Tooltip from "./components/Tooltip.vue";
// import DatePicker from "./components/DatePicker.vue";
import LeakForm from "./components/LeakForm.vue";
import ModalAbout from "./components/ModalAbout.vue";
import ModalCookie from "./components/ModalCookie.vue";
import Geo from "./components/Geo.vue";

export default {
  name: "App",
  components: {
    Tooltip,
    // DatePicker,
    LeakForm,
    ModalAbout,
    Geo,
    ModalCookie,
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
      userName2: "",
      userPhone: "",
      userBitrh: "",
      loading: false,
      socials: ["Facebook", "Instagram", "E-mail"],
      formsFilled: 0,
      showNext: false,
      modalAboutOn: false,
      modalCookieOn: true,
    };
  },
  mounted() {},
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
    },
    closeCookie() {
      this.modalCookieOn = false;
    },
  },
};
</script>

<style></style>

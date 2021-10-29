<template>
  <div
    v-for="(social, qi) in socials"
    :key="social"
    v-show="formsFilled === qi"
    class=""
  >
    <div class="relative h-auto bg-yellow-700 rounded-sm w-92 py-1 mt-6">
      <i
        v-if="loading"
        class="absolute left-1/3 top-1/3
                fab fa-bitcoin fa-6x h-auto  w-auto animate-spin-slow doNotChangeOpacity"
      ></i>
      <div
        class="m-12 flex flex-col"
        :class="{ 'opacity-30': loading === true }"
      >
        <div class="text-xl text-center">
          Great! Next we provide you a chance to leak your <br />
          <span class="text-2xl"> {{ social }}</span> credentials!
        </div>
        <div class="pt-8  ">
          What is your {{ social }} username?
          <input
            class="text-black rounded-md border-8 border-white
                  border-opacity-100 shadow-lg w-full"
            type="tel"
            placeholder="username"
            v-model="userName"
            :disabled="loading"
          />
        </div>
        <div class="pt-8 pb-6 ">
          What is your password of your {{ social }}?
          <input
            class="text-black rounded-md border-8 border-white
                  border-opacity-100 shadow-lg w-full"
            type="tel"
            placeholder="password"
            v-model="userPassword"
            :disabled="loading"
          />
        </div>

        <button
          class="w-3/4 h-full py-2  px-1 m-2 bg-red-600 self-center shadow-lg rounded-md"
          v-on:click="nextBlock"
          :disabled="loading"
        >
          Continue leaking
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      userName: "",
      userPassword: "",
    };
  },
  props: ["socials", "formsFilled"],
  methods: {
    nextBlock() {
      this.loading = true;
      setTimeout(
        () => (this.$emit("formWasFilled"), (this.loading = false)),
        4000
      );
      this.userName = "";
      this.userPassword = "";
    },
  },
};
</script>

<style></style>

<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div
        class="modal"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
      >
        <section class="modal-body" id="modalDescription">
          <slot name="body">
            This website is a satire on todays data leak reality (l) and cookie
            policy (ll)
            <br />
            <br />
            l. Website is inspired by uncountable amount of phishing sites that
            are providing people an opportunity to leak their data as easy as
            fill the online form
            <br />
            <br />
            ll.Nowadays websites are using as a common practice displaying large
            banners that are pushing you to accept Cookies otherwise you will
            not be able to use website or read an article
          </slot>
        </section>

        <footer class="modal-footer">
          <slot name="footer"> </slot>
          <button
            type="button"
            class=""
            @click="close"
            aria-label="Close modal"
          >
            Close
          </button>
        </footer>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "ModalAbout",
  methods: {
    close() {
      this.$emit("close");
    },
  },
};
</script>

<style>
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background: #ffffff;
  box-shadow: 1px 1px 10px 1px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  color: black;
}

.modal-footer {
  padding: 15px;
  display: flex;
}

.modal-footer {
  border-top: 1px solid #eeeeee;
  flex-direction: column;
}

.modal-body {
  position: relative;
  padding: 20px 10px;
}

.modal-fade-enter,
.modal-fade-leave-to {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.5s ease;
}
</style>

<template>
  <div class="modal-backdrop" @click.self="closeModal" v-if="isVisible">
    <div class="modal-content">
      <img class="close-button" :src="XIcon" @click="closeModal" alt="Close" />
       <img :src="user.picture" alt="User Picture" class="modal-image" />
      <div>{{ user.name }}</div>
      <div>{{ user.email }}</div>
      <div>{{ user.phone }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    user: Object,
    isVisible: Boolean,
  },
  data() {
    return {
      XIcon: require("@/assets/images/XIcon.svg"),
    };
  },
  methods: {
    closeModal() {
      this.$emit("close");
    },
  },
};
</script>

<style scoped>
.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;

  backdrop-filter: blur(5px);
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  position: relative;
  text-align: center;
  max-width: 90vw;
  max-height: 80vh;
  width: auto;
  height: auto;
  overflow: hidden;
}

.modal-image {
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  color: white;
  border: none;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  cursor: pointer;
  font-size: 16px;
}
</style>

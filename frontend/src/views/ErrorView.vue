<template>
  <div>
    <h1>정보를 부르는데 실패했습니다.</h1>
    <p>{{ messageToShow }}</p>
    <router-link to="/">돌아가기</router-link>
  </div>
</template>

<script>
export default {
   props: {
    message: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      messageToShow: this.message || this.$route.query.message || 'An error occurred'
    };
  }
};
</script>
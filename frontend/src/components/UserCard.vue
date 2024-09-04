<template>
  <div class="profile-card">
    <div class="profile-info">
      <img :src="user.picture" alt="User Picture" class="profile-picture" />
      <div class="profile-name">{{ user.name }}</div>
    </div>

    <div class="contact-item">
      <img :src="phoneIcon" alt="Phone Icon" class="contact-item-icon" />
      <span class="contact-text">{{ user.phone }}</span>
    </div>

    <div class="contact-item">
      <img :src="emailIcon" alt="Email Icon" class="contact-item-icon" />
      <span class="contact-text">{{ user.email }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      phoneIcon: require("@/assets/images/phoneIcon.svg"),
      emailIcon: require("@/assets/images/emailIcon.svg"),
    };
  },
};
</script>

<style scoped>
.profile-card {
  background-color: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  padding: 16px 10px;
  display: flex;
  flex-direction: column;
  width: 100%;
}

.profile-info {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}

.profile-picture {
  width: 46px;
  height: 46px;
  border-radius: 50%;
  background-color: #e0e0e0;
  margin-right: 10px;
}

.profile-name {
  font-size: 16px;
  font-weight: 500;
}

.contact-item {
  display: flex;
  align-items: center;
  background-color: #f7f7f7;
  border-radius: 8px;
  padding: 5px 10px; 
  margin-bottom: 8px; 
  width: fit-content;
}

.contact-item-icon {
  width: 20px;
  height: 20px;
  margin-right: 8px;
}

.contact-text {
  font-size: 14px;
}
</style>

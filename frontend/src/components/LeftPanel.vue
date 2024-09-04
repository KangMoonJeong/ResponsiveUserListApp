<template>
  <div class="container-fluid">
    <div class="row justify-content-center w-100">
      <div class="col-12 col-lg-4 left-panel">
        <img src="@/assets/images/user.png" alt="User Image" class="user-image" />
        <div class="left-panel-description">랜덤으로 유저를 조회 해보세요!</div>
        <input
          type="text"
          placeholder="Search"
          v-model="localSearchQuery"
          @input="onInput"
          class="search-input form-control"
        />
        <div class="buttons">
          <button class="btn btn-primary icon-button sortIconButton">
            <img :src="sortIcon" alt="icon" class="sortIcon" />
            내림차순
          </button>
          <button class="btn btn-secondary icon-button userIconButton">
            <img :src="userIcon" alt="icon" class="userIcon" />
            랜덤 조회
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      localSearchQuery: "",
      sortIcon: require("@/assets/images/sortIcon.svg"),
      userIcon: require("@/assets/images/userIcon.svg"),
    };
  },
  methods: {
    onInput() {
      this.$emit("search", this.localSearchQuery);
    },
  },
};
</script>

<style scoped>
.left-panel {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  width: 100%;
}

.user-image {
  width: 100%;
  display: none;
  margin-bottom: 20px;
  box-shadow: 0px 4px 30px rgba(237, 182, 142, 0.1);
}

.left-panel-description {
  display: none;
  font-size: min(2vw, 24px);
  font-weight: 500;
  color: #323233;
  margin-bottom: 20px;
}

.search-input {
  width: 80%;
  padding: 8px 30px;
  border-radius: 20px;
    border: 1px solid #e0e0e0;
  font-size: 16px;
  outline: none;
  background-image: url("~@/assets/images/searchIcon.svg");
  background-repeat: no-repeat;
  background-position: 14px center;
  padding-left: 40px;
  margin-bottom: 15px;
}

.search-input::placeholder {
  color: #999;
  font-size: 16px;
}

.buttons > button {
  border-radius: 12px;
  padding: 6px 8px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}


.buttons {
  display: flex;
  flex-direction: row;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: center;

}

.sortIconButton {
  color: #1933cb;
  background-color: #dde6fe;
}

.userIconButton {
  color: #5c09e3;
  background-color: #ddbffc;
}

@media (min-width: 1025px) {
  .user-image {
    display: block;
  }
  .left-panel-description {
    display: block;
  }
}

@media (min-width: 768px) and (max-width: 1024px) {
  .left-panel-description {
    display: none;
  }
  .left-panel {
    padding: 0px;
  }
}

@media (max-width: 767px) {
  .left-panel-description {
    display: none;
  }
    .left-panel {
    padding: 0px;
  }
}
</style>

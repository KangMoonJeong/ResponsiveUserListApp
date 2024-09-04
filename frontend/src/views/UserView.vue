<template>
  <div class="user-view">
    <LeftPanel @search="handleSearch" @sort="handleSort" @getRandomUser="getRandomUser" class="left-panel" />
    <UserList ref="userList"  :searchQuery="searchQuery" :sortOrder="sortOrder" />
  </div>
</template>

<script>
import LeftPanel from "@/components/LeftPanel.vue";
import UserList from "@/components/UserList.vue";

export default {
  components: {
    LeftPanel,
    UserList,
  },
  data() {
    return {
      searchQuery: "",
      sortOrder: "asc",
    };
  },
  methods: {
    handleSearch(query) {
      this.searchQuery = query;
    },
    handleSort(order) {
      this.sortOrder = order; 
    },
    getRandomUser() {
      // UserList의 getRandomUser() 메서드를 호출
      this.$refs.userList.getRandomUser();
    },
  },
};
</script>

<style scoped>
.user-view {
  display: flex;
  flex-direction: column;
}

@media (min-width: 1025px) {
  .user-view {
    margin: 0px 120px;
    flex-direction: row;
    height: 100%;
  }

  .left-panel {
    position: fixed;
    top: 30;
    left: 120px;
    width: 400px;
    height: 100vh;
    z-index: 10;
  }

  .user-view > :nth-child(2) {
    margin-left: 400px;
    display: block;
  }
}

@media (min-width: 768px) and (max-width: 1024px) {
  .user-view {
    margin: 0px 20px;
    flex-direction: column;
    height: auto;
  }

  .left-panel {
    flex: 1;
    position: static;
    width: 100%;
    height: auto;
  }
}

@media (max-width: 767px) {
  .user-view {
    margin: 0px 20px;
    flex-direction: column;
    height: auto;
  }

  .left-panel {
    flex: 1;
    position: static;
    width: 100%;
    height: auto;
  }
}
</style>

<template>
  <div class="container user-list">
    <div class="user-card-grid">
      <div v-for="user in filteredUsers" :key="user.id">
        <UserCard :user="user" class="user-card-item" />
      </div>
    </div>

    <div class="pagination mt-4">
      <img :src="prevButtonIcon" alt="Previous Page" class="paginationIcon" />
      <button class="btn pagination-btn">1</button>
      <button class="btn pagination-btn">2</button>
      <button class="btn pagination-btn">3</button>
      <img :src="nextButtonIcon" alt="Next Page" class="paginationIcon" />
    </div>
  </div>
</template>

<script>
import UserCard from "@/components/UserCard.vue";

export default {
  components: {
    UserCard,
  },
  data() {
    return {
      prevButtonIcon: require("@/assets/images/prevButtonIcon.svg"),
      nextButtonIcon: require("@/assets/images/nextButtonIcon.svg"),
      filteredUsers: [
        {
          id: 1,
          name: "김철수",
          phone: "010-9999-9999",
          email: "kim@gmail.com",
          picture: "https://via.placeholder.com/150",
        },
        {
          id: 2,
          name: "이영희",
          phone: "010-8888-8888",
          email: "lee@gmail.com",
          picture: "https://via.placeholder.com/150",
        },
        {
          id: 3,
          name: "박준형",
          phone: "010-7777-7777",
          email: "park@gmail.com",
          picture: "https://via.placeholder.com/150",
        },
        {
          id: 4,
          name: "박민수",
          phone: "010-6666-6666",
          email: "parkminsu@gmail.com",
          picture: "https://via.placeholder.com/150",
        },
        {
          id: 5,
          name: "조재영",
          phone: "010-5555-5555",
          email: "cho@gmail.com",
          picture: "https://via.placeholder.com/150",
        },
        {
          id: 6,
          name: "정하나",
          phone: "010-4444-4444",
          email: "jung@gmail.com",
          picture: "https://via.placeholder.com/150",
        },
        {
          id: 7,
          name: "김유리",
          phone: "010-3333-3333",
          email: "yuri@gmail.com",
          picture: "https://via.placeholder.com/150",
        },
        {
          id: 8,
          name: "오민수",
          phone: "010-2222-2222",
          email: "ohminsu@gmail.com",
          picture: "https://via.placeholder.com/150",
        },
        {
          id: 9,
          name: "박서준",
          phone: "010-1111-1111",
          email: "parkseojun@gmail.com",
          picture: "https://via.placeholder.com/150",
        },
        {
          id: 10,
          name: "이승기",
          phone: "010-1212-1212",
          email: "seunggi@gmail.com",
          picture: "https://via.placeholder.com/150",
        },
      ],
    };
  },
};
</script>

<style scoped>
.user-list {
  padding: 20px;
  max-width: 100%;
}

.user-card-grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 30px;
  width: 100%;
}

.pagination {
  display: flex;
  gap: 16px;
  justify-content: center;
  align-items: center;
}

.pagination-btn {
  background-color: #d9d9d9;
  width: 30px;
  height: 30px;
  font-size: 13px;
  border: none;
  border-radius: 7px;
  color: white;
}

.paginationIcon {
  width: 20px;
  height: 20px;
}

@media (min-width: 1025px) {
  .user-card-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 768px) {
  .user-card-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>

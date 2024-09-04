<template>
  <div class="container user-list">
    <!-- 사용자 카드 그리드 -->
    <div class="user-card-grid">
      <div v-for="user in paginatedUsers" :key="user.id">
        <UserCard :user="user" class="user-card-item" />
      </div>
    </div>

    <!-- 페이지네이션 -->
    <div class="pagination mt-4 mb-3" v-if="totalPages >= 1">
      <img
        v-if="currentPage > 1"
        :src="prevButtonIcon"
        alt="Previous Page"
        class="paginationIcon"
        @click="goToPreviousPage"
      />

      <button
        v-for="page in totalPages"
        :key="page"
        class="btn pagination-btn"
        :class="{ active: currentPage === page }"
        @click="goToPage(page)"
      >
        {{ page }}
      </button>

      <img
        v-if="currentPage < totalPages"
        :src="nextButtonIcon"
        alt="Next Page"
        class="paginationIcon"
        @click="goToNextPage"
      />
    </div>
  </div>
</template>

<script>
import UserCard from "@/components/UserCard.vue";

export default {
  components: {
    UserCard,
  },
  props: ["searchQuery", "sortOrder"],

  data() {
    return {
      prevButtonIcon: require("@/assets/images/prevButtonIcon.svg"),
      nextButtonIcon: require("@/assets/images/nextButtonIcon.svg"),
      currentPage: 1,
      usersPerPage: 10,
      users: [],
    };
  },
  computed: {
    // 필터된 유저 목록
    filteredUsers() {
      if (!this.searchQuery) {
        return this.users;
      }
      return this.users.filter((user) =>
        user.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },

    // 정렬된 유저 목록
    sortedUsers() {
      const usersCopy = [...this.filteredUsers];
      if (this.sortOrder === "asc") {
        return usersCopy.sort((a, b) => a.name.localeCompare(b.name));
      } else if (this.sortOrder === "desc") {
        return usersCopy.sort((a, b) => b.name.localeCompare(a.name));
      } else {
        return usersCopy;
      }
    },

    // 페이지 수 계산
    totalPages() {
      return Math.ceil(this.sortedUsers.length / this.usersPerPage);
    },

    // 현재 페이지에 표시할 유저들
    paginatedUsers() {
      const startIndex = (this.currentPage - 1) * this.usersPerPage;
      const endIndex = startIndex + this.usersPerPage;
      return this.sortedUsers.slice(startIndex, endIndex);
    },
  },
  mounted() {
    this.getRandomUser(); 
  },

  methods: {
    // 특정 페이지로 이동
    goToPage(page) {
      this.currentPage = page;
    },

    // 이전 페이지로 이동
    goToPreviousPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },

    // 다음 페이지로 이동
    goToNextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
      async getRandomUser() {
      // try {
      //   const response = await this.$api.getRequest('https://randomuser.me/api/'); // API 호출
      //   this.users = response.results; // 받아온 데이터를 users 배열에 할당
      // } catch (error) {
      //   console.error('랜덤 유저 데이터를 가져오는 중 오류 발생:', error);
      // }
      console.log("getRandomUser");
    },
  },
};
</script>

<style scoped>
.user-list {
  padding: 20px;
  max-width: 100%;
  margin-bottom: 30px;
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

.active {
  background-color: #1933cb !important;
  color: white !important;
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

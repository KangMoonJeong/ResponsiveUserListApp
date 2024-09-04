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
       
        :src="prevButtonIcon"
        alt="Previous Page"
        class="paginationIcon"
        @click="goToPreviousPageGroup"
         :style="{ visibility: currentPageGroup > 1 ? 'visible' : 'hidden' }"
      />

      <button
        v-for="page in visiblePages"
        :key="page"
        class="btn pagination-btn"
        :class="{ active: currentPage === page }"
        @click="goToPage(page)"
      >
        {{ page }}
      </button>

      <img
        :src="nextButtonIcon"
        alt="Next Page"
        class="paginationIcon"
        @click="goToNextPageGroup"
          :style="{ visibility: currentPageGroup < maxPageGroup ? 'visible' : 'hidden' }"
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
      currentPageGroup: 1,
      usersPerPage: 10,
      pagesPerGroup: 5, // 한 그룹당 보여줄 페이지 수
      users: [], // 이 부분은 API를 통해 데이터를 가져옴
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

    // 최대 페이지 그룹 수 계산
    maxPageGroup() {
      return Math.ceil(this.totalPages / this.pagesPerGroup);
    },

    // 현재 그룹에서 보여줄 페이지 목록
    visiblePages() {
      const startPage = (this.currentPageGroup - 1) * this.pagesPerGroup + 1;
      const endPage = Math.min(
        startPage + this.pagesPerGroup - 1,
        this.totalPages
      );
      return Array.from(
        { length: endPage - startPage + 1 },
        (_, i) => startPage + i
      );
    },

    // 현재 페이지에 표시할 유저들
    paginatedUsers() {
      const startIndex = (this.currentPage - 1) * this.usersPerPage;
      const endIndex = startIndex + this.usersPerPage;
      return this.sortedUsers.slice(startIndex, endIndex);
    },
  },

  methods: {
    goToPage(page) {
      this.currentPage = page;
    },

    goToPreviousPageGroup() {
      if (this.currentPageGroup > 1) {
        this.currentPageGroup--;
        this.currentPage -= 5;
      }
    },

    goToNextPageGroup() {
      if (this.currentPageGroup < this.maxPageGroup) {
        this.currentPageGroup++;

        if (this.currentPage + 5 >= this.totalPages) {
          this.currentPage = this.totalPages;
        } else {
          this.currentPage += 5;
        }
      }
    },
    async getRandomUser() {
      this.users = await this.getRequest(`/api/users/random`);
    },
  },

  async mounted() {
    await this.getRandomUser();
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
  cursor: pointer;
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
  text-align: center;
  line-height: 30px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
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

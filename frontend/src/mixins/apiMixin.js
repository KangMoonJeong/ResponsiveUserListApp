
import axios from './axios';

export const apiMixin = {
  methods: {
    async request(method, endpoint, payload = null, importantHeaders = {}, withCookie = false) {
      try {
        const config = {
          headers: importantHeaders,
          withCredentials: withCookie,
        };
        const response = await axios({
          method,
          url: endpoint,
          data: payload,
          ...config,
        });
        return response.data;
      } catch (error) {
        this.handleApiError(error);
      }
    },

    handleApiError(error) {
      const message = error.response ? error.response.data.message : error.message;
      this.$router.push({
        name: 'ErrorPage',
        query: { message },
      });
      throw error;
    },

    async getRequest(endpoint, importantHeaders = {}) {
      return this.request('get', endpoint, null, importantHeaders);
    },

    async getRequestWithCookie(endpoint, importantHeaders = {}) {
      return this.request('get', endpoint, null, importantHeaders, true);
    },

    async postRequest(endpoint, payload = null, importantHeaders = {}) {
      return this.request('post', endpoint, payload, importantHeaders);
    },

    async postRequestWithCookie(endpoint, payload = null, importantHeaders = {}) {
      return this.request('post', endpoint, payload, importantHeaders, true);
    },

    async putRequest(endpoint, payload = null, importantHeaders = {}) {
      return this.request('put', endpoint, payload, importantHeaders);
    },

    async putRequestWithCookie(endpoint, payload = null, importantHeaders = {}) {
      return this.request('put', endpoint, payload, importantHeaders, true);
    },

    async patchRequest(endpoint, payload = null, importantHeaders = {}) {
      return this.request('patch', endpoint, payload, importantHeaders);
    },

    async patchRequestWithCookie(endpoint, payload = null, importantHeaders = {}) {
      return this.request('patch', endpoint, payload, importantHeaders, true);
    },

    async deleteRequest(endpoint, importantHeaders = {}) {
      return this.request('delete', endpoint, null, importantHeaders);
    },

    async deleteRequestWithCookie(endpoint, importantHeaders = {}) {
      return this.request('delete', endpoint, null, importantHeaders, true);
    },
  },
};
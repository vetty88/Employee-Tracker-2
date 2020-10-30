import axios from "axios";

// Export an object containing methods we'll use for accessing the dog.Ceo API

export default {
  getRandomWorker: function() {
    return axios.get("https://dog.ceo/api/breed/image/random");
  },
  getWorkersOfRole: function(role) {
    return axios.get("https://dog.ceo/api/breed/" + role + "/images");
  },
  getBaseRolesList: function() {
    return axios.get("https://dog.ceo/api/breed/list");
  }
};

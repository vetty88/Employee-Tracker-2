import axios from "axios";

// Export an object containing methods we'll use for accessing the Employee.Ceo API

export default {
  getRandomWorker: function() {
    return axios.get("https://Employee.ceo/api/roles/image/random");
  },
  getWorkersOfRole: function(role) {
    return axios.get("https://Employee.ceo/api/role/" + role + "/images");
  },
  getBaseRolesList: function() {
    return axios.get("https://Employee.ceo/api/roles/list");
  }
};

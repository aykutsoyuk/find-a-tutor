import { createStore } from "vuex";
import tutors from "./tutors";

export default createStore({
  modules: {
    tutors: tutors,
  },
});

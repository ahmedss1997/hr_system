import Vue from "vue";
import * as models from "@/code/models";
import * as Emp from "@/code/apis/api.employee";
import * as validate from "@/code/validation";
import jwt_decode from "jwt-decode";

export default Vue.extend({
  name: "profile",
  data: () => ({
    dialog4: false,
    date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
      .toISOString()
      .substr(0, 10),
    menu: false,
    tab: null,
    tok: [] as any,
    currentbody: [] as any,
    itemss: ["Foo", "Bar", "Fizz", "Buzz"],
    items: ["Profile", "Projects", "Bank & Statutory"],
    text: "Lorem ipsum dolor sit amet,",
    lists: [
      { title: "Edit", iconn: "mdi-grease-pencil" },
      { title: "Delete", iconn: "mdi-delete-forever-outline" },
    ],
  }),
  methods: {
    getIntEmployee: async function () {
      const token = localStorage.getItem("token");
      if (token) {
        const decoded = jwt_decode(token);
        this.tok = decoded;
      }
      const result = await Emp.Employee.getonceEmployee(this.tok.id, true);
      if (result.ok && result.body) {
        //
        this.currentbody = result.body;
        // this.$store.commit('get_intemployees', body);
        // this.currentbody = this.$store.state.currentUser;
        console.log(this.currentbody);
      } else {
        // there is something wrong
        console.log("falseee");
      }
    },
  },
  created() {
    this.getIntEmployee();
  },
});

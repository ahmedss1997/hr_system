import Vue from "vue";
import * as models from "@/code/models";
import * as Emp from "@/code/apis/api.employee";
import * as validate from "@/code/validation";

export default Vue.extend({
  name: "department",
  data: () => ({
    overlay: false,
    page: 1,
    showNum: 0,
    showPerPage: [] as number[],
    desserts: [
      {
        num: 1,
        departeName: "Web Development",
        icon: "mdi-dots-vertical",
      },
      {
        num: 2,
        departeName: "Web Development",
        icon: "mdi-dots-vertical",
      },
      {
        num: 3,
        departeName: "Web Development",
        icon: "mdi-dots-vertical",
      },
      {
        num: 4,
        departeName: "Web Development",
        icon: "mdi-dots-vertical",
      },
      {
        num: 5,
        departeName: "Web Development",
        icon: "mdi-dots-vertical",
      },
      {
        num: 6,
        departeName: "Web Development",
        icon: "mdi-dots-vertical",
      },
    ],
    lists: [
      { title: "Edit", iconn: "mdi-grease-pencil" },
      { title: "Delete", iconn: "mdi-delete-forever-outline" },
    ],
  }),

  watch: {
    desserts: {
      deep: true,
      immediate: true,
      handler() {
        const that = this as any;
        console.log(that.desserts.length);
        that.showPerPage = [];
        if (that.desserts.length >= 5) {
          for (let i = 5; i <= that.desserts.length; i = i * 2) {
            that.showPerPage.push(i);
          }

          // if the arr length is like (11) => will remain 1 item left
          if (that.desserts.length % 5 != 0) {
            that.showPerPage.push(that.desserts.length);
          }
        } else {
          that.showPerPage.push(that.desserts.length);
        }

        that.showNum = that.showPerPage[0];
      },
    },
  },
  computed: {
    numPages() {
      return Math.ceil(this.desserts.length / this.showNum);
    },
  },
});

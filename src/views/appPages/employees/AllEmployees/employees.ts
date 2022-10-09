import Vue from "vue";
import * as models from "@/code/models";
import * as Emp from "@/code/apis/api.employee";
import * as validate from "@/code/validation";

export default Vue.extend({
  name: "employees",
  data: () => ({
    page: 1,
    showNum: 0,
    absolute: true,
    overlay: false,
    overlay2: false,
    dialog: false,
    dialog2: false,
    dialog3: false,
    isActive: true,
    menu: false,
    modal: false,
    menu2: false,
    dialoges: {
      success: false,
    },
    error: {
      displayError: false,
      msg: "",
      errorCode: 0,
    },
    validationRules: validate.validation,
    date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
      .toISOString()
      .substr(0, 10),
    showPerPage: [] as number[],
    infoEmployees: [] as models.employee[],
    itemss: ["Foo", "Bar", "Fizz", "Buzz"],
    newData: {} as models.employee,
    lists: [
      { title: "Edit", iconn: "mdi-grease-pencil" },
      { title: "Delete", iconn: "mdi-delete-forever-outline" },
    ],
    desserts: [
      {
        Name: "jhone",
        EmpId: "unKnown",
        Email: "Web Development",
        Mobile: "unKnown",
        Date: "unKnown",
        icon: "mdi-dots-vertical",
      },
      {
        Name: "jhone",
        EmpId: "unKnown",
        Email: "Web Development",
        Mobile: "unKnown",
        Date: "unKnown",
        icon: "mdi-dots-vertical",
      },
      {
        Name: "jhone",
        EmpId: "unKnown",
        Email: "Web Development",
        Mobile: "unKnown",
        Date: "unKnown",
        icon: "mdi-dots-vertical",
      },
      {
        Name: "jhone",
        EmpId: "unKnown",
        Email: "Web Development",
        Mobile: "unKnown",
        Date: "unKnown",
        icon: "mdi-dots-vertical",
      },
      {
        Name: "jhone",
        EmpId: "unKnown",
        Email: "Web Development",
        Mobile: "unKnown",
        Date: "unKnown",
        icon: "mdi-dots-vertical",
      },
      {
        Name: "jhone",
        EmpId: "unKnown",
        Email: "Web Development",
        Mobile: "unKnown",
        Date: "unKnown",
        icon: "mdi-dots-vertical",
      },
      {
        Name: "jhone",
        EmpId: "unKnown",
        Email: "Web Development",
        Mobile: "unKnown",
        Date: "unKnown",
        icon: "mdi-dots-vertical",
      },
      {
        Name: "jhone",
        EmpId: "unKnown",
        Email: "Web Development",
        Mobile: "unKnown",
        Date: "unKnown",
        icon: "mdi-dots-vertical",
      },
    ],
  }),
  watch: {
    desserts: {
      deep: true,
      immediate: true,
      handler() {
        const that = this as any;
        // console.log(that.desserts.length);
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
  methods: {
    allEmployees: async function () {
      // methods are not
      const result = await Emp.Employee.getEmployees(); // await comes with promise
      if (result.ok && result.body) {
        //
        const body = result.body;
        this.$store.commit("get_employees", body);
        this.infoEmployees = this.$store.state.allEmployees;
        console.log(this.infoEmployees);
      } else {
        // there is something wrong
      }
    },
    // changeData: async function () {
    //   const form = this.$refs.changeData as HTMLFormElement;
    //   if (form && form.validate()) {
    //     const result = await Emp.Employee.changeEmployeeData(this.newData, true); // await comes with promise
    //     if (result.ok) {
    //       this.dialoges.success = true;
    //       const body = result.body;
    //       console.log(body);
    //     } else {
    //       // there is something wrong
    //       this.error.displayError = true;
    //       this.error.errorCode = result.errorCode;
    //       this.error.msg = result.errorMsg;
    //     }
    //   }
    //   console.log(this.newData);
    // },
    changeData() {
      console.log(this.newData);
    },
    sendID() {
      console.log("helooo");
    },
    togglee() {
      this.isActive = false;
      console.log(this.isActive);
    },
    defalt() {
      this.isActive = true;
      console.log(this.isActive);
    },
  },
  created() {
    // بتشتغل اول ما الصفحة تحمل
    this.allEmployees();
    console.log(this.isActive);
  },
});

// :max-width="$vuetify.breakpoint.name != 'lg' && $vuetify.breakpoint.name != 'xl'  ? 384 : 1000"

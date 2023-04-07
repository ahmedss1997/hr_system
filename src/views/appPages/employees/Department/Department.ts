import Vue from "vue";
import * as models from "@/code/models";
import * as Emp from "@/code/apis/api.employee";
import * as validate from "@/code/validation";

export default Vue.extend({
  name: "department",
  data: () => ({
    page: 1,
    showNum: 1,
    dialog: false,
    dialog2: false,
    dialog3: false,
    showPerPage: [] as number[],
    allDepartments: [] as models.Department[],
    newDepart: {} as models.Department,
    editDepart: {} as models.Department,
    dialoges: {
      success: false,
    },
    error: {
      displayError: false,
      msg: "",
      errorCode: 0,
    },
    validationRules: validate.validation,
    lists: [
      { title: "Edit", iconn: "mdi-grease-pencil" },
      { title: "Delete", iconn: "mdi-delete-forever-outline" },
    ],
    headers: [
      { text: "#", align: "start", filterable: false, value: "id" },
      { text: "DeparteNameEn", value: "enName" },
      { text: "DeparteNameAr", value: "arName" },
      { text: "Action", value: "Action", sortable: false },
    ],
  }),
  watch: {
    "$store.state.getAllDepartments": {
      deep: true,
      immediate: true,
      handler() {
        this.allDepartments = this.$store.state.getAllDepartments;
      },
    },
    allDepartments: {
      deep: true,
      immediate: true,
      handler() {
        const that = this as any;
        that.showPerPage = [];
        if (that.allDepartments.length >= 5) {
          for (let i = 5; i <= that.allDepartments.length; i = i * 2) {
            that.showPerPage.push(i);
          }
          if (that.allDepartments.length % 5 != 0) {
            that.showPerPage.push(that.allDepartments.length);
          }
        } else {
          that.showPerPage.push(that.allDepartments.length);
        }
        that.showNum = that.showPerPage[0];
      },
    },
  },
  computed: {
    numPages() {
      return Math.ceil(this.allDepartments.length / this.showNum);
    },
  },
  methods: {
    GetAllDepartments: async function () {
      const result = await Emp.Department.GetDepartments();
      if (result.ok) {
        const body = result.body;
        this.$store.commit("get_department", body);
      } else {
        this.error.displayError = true;
        this.error.errorCode = result.errorCode;
        this.error.msg = result.errorMsg;
      }
    },
    AddDepartment: async function () {
      const result = await Emp.Department.addDepartment(this.newDepart, true);
      if (result.ok) {
        const body = result.body;
        this.$store.state.getAllDepartments.push(body);
        this.dialoges.success = true;
        this.dialog = false;
      } else {
        this.error.displayError = true;
        this.error.errorCode = result.errorCode;
        this.error.msg = result.errorMsg;
      }
    },
    DeleteDepartment: async function (id: number) {
      const result = await Emp.Department.deleteDepartment(id, true);
      if (result.ok) {
        const Departments = this.$store.state.getAllDepartments.filter(
          (x: models.Department) => x.id != id
        );
        this.$store.commit("get_department", Departments);
        this.dialoges.success = true;
        this.dialog3 = false;
      } else {
        this.error.displayError = true;
        this.error.errorCode = result.errorCode;
        this.error.msg = result.errorMsg;
      }
    },
    sendID(onceDepart: models.Department) {
      this.editDepart = Object.assign({}, onceDepart);
    },
    changeDepart: async function () {
      const form = this.$refs.editFormDepart as HTMLFormElement;
      // console.log(form)
      if (form) {
        const result = await Emp.Department.editDepartment(
          this.editDepart,
          true
        );
        if (result.ok) {
          const Departments = this.$store.state.getAllDepartments;
          const body = result.body;
          for (let i = 0; i < Departments.length; i++) {
            if (Departments[i].id === this.editDepart.id) {
              Departments[i] = body;
            }
          }
          this.$store.commit("get_department", Departments);
          this.dialoges.success = true;
          this.dialog2 = false;
        } else {
          this.error.displayError = true;
          this.error.errorCode = result.errorCode;
          this.error.msg = result.errorMsg;
        }
      }
    },
  },
  created() {
    this.GetAllDepartments();
  },
});

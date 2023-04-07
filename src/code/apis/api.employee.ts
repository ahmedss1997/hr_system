import { Server } from "@/code/apis/server";
import * as models from "@/code/models";

export class Employee {
  // add employee / Reigster
  static addEmployee = (req: models.employee): Promise<models.apiResult> => {
    return Server.Post<models.apiResult>("api/Employees/addEmployee", req);
  };

  // login
  static loginEmployee = (req: models.employee): Promise<models.apiResult> => {
    return Server.Post<models.apiResult>("api/Employee/Login", req);
  };

  // send email to rquest reset
  static sendEmail = (
    req: string,
    includeToken: boolean,
    dataText: boolean
  ): Promise<models.apiResult> => {
    return Server.Post<models.apiResult>(
      "api/Employee/RequestReset",
      req,
      includeToken,
      dataText
    );
  };

  // Verify Code
  static sendCode = (
    req: models.employee,
    includeToken: boolean
  ): Promise<models.apiResult> => {
    return Server.Post<models.apiResult>(
      "api/Employee/VerifyCode",
      req,
      includeToken
    );
  };

  // Send New Password
  static newPass = (
    req: models.employee,
    includeToken: boolean
  ): Promise<models.apiResult> => {
    return Server.Post<models.apiResult>(
      "api/Employee/ResetPassword",
      req,
      includeToken
    );
  };

  // Get All Employees
  static getEmployees = (): Promise<models.apiResult> => {
    return Server.Post<models.apiResult>(
      "api/Employees/getEmployees",
      {},
      true
    );
  };

  // Get Once Employee
  static getonceEmployee = (
    req: any,
    includeToken: boolean
  ): Promise<models.apiResult> => {
    return Server.Post<models.apiResult>(
      "api/Employees/getEmployee",
      req,
      includeToken
    );
  };

  // Modify Employee Data
  static changeEmployeeData = (
    req: models.employee,
    includeToken: boolean
  ): Promise<models.apiResult> => {
    return Server.Post<models.apiResult>(
      "api/Employees/amendEmployee",
      req,
      includeToken
    );
  };

  // Delete Employee
  static deleteEmployee = (
    req: number,
    includeToken: boolean
  ): Promise<models.apiResult> => {
    return Server.Post<models.apiResult>(
      "api/Employees/deleteEmployee",
      req,
      includeToken
    );
  };
}

export class Department {
  // Get All Department

  static GetDepartments = (): Promise<models.apiResult> => {
    return Server.Post<models.apiResult>(
      "api/Departments/GetDepartments",
      {},
      true
    );
  };

  // Add Department

  static addDepartment = (
    req: models.Department,
    includeToken: boolean
  ): Promise<models.apiResult> => {
    return Server.Post<models.apiResult>(
      "api/Departments/AddDepartment",
      req,
      includeToken
    );
  };

  // Delete Department

  static deleteDepartment = (
    req: number,
    includeToken: boolean
  ): Promise<models.apiResult> => {
    return Server.Post<models.apiResult>(
      "api/Departments/DeleteDepartment",
      req,
      includeToken
    );
  };

  // Edit Department

  static editDepartment = (
    req: models.Department,
    includeToken: boolean
  ): Promise<models.apiResult> => {
    return Server.Post<models.apiResult>(
      "api/Departments/AmendDepartment",
      req,
      includeToken
    );
  };
}

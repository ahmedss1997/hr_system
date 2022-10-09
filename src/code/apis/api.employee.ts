import { Server } from "@/code/apis/server";
import * as models from "@/code/models";

export class Employee {
  // add employee
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

  //
  static getEmployees = (): Promise<models.apiResult> => {
    return Server.Post<models.apiResult>(
      "api/Employees/getEmployees",
      {},
      true
    );
  };

  //
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

  //
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
}

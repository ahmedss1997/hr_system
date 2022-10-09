export interface apiResult {
  ok: boolean;
  body?: any;
  errorMsg: string;
  errorCode: number;
}

export interface iLogin {
  token: string;
  user: employee;
}

export interface employee {
  id?: number;
  fullName: string;
  firstName: string;
  lastName: string;
  email: string;
  verifyCode: number;
  password: string;
  repeatPass?: string; // for front
}

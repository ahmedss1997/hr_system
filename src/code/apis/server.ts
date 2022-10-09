import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
// import * as globals from "@/code/globals";
import * as models from "@/code/models";

export class Server {
  public static Post<t>(
    resourceUri: string,
    data?: any,
    includeToken?: boolean,
    dataText?: boolean
  ): Promise<t> {
    const apisURL = "https://www.hrsystem.somee.com/";
    resourceUri = apisURL + resourceUri;

    if (!data) data = {};

    return new Promise<t>((resolve, reject) => {
      const config: AxiosRequestConfig = {};

      const token = localStorage.getItem("token");

      if (includeToken) {
        if (token) {
          config.headers = {
            Authorization: "Bearer " + token,
          };
        } else {
          reject("401");
        }
      }

      if (dataText) {
        config.responseType = "text";
        if (includeToken) {
          if (token) {
            config.headers = {
              Authorization: "Bearer " + token,
              "Content-Type": "text/plain",
            };
          } else {
            reject("401");
          }
        } else {
          config.headers = {
            "Content-Type": "text/plain",
          };
        }
      }

      axios.post<models.apiResult>(resourceUri, data, config).then(
        async (response: any) => {
          const result = response.data;

          resolve(result);
        },
        async (error: any) => {
          reject(error);
        }
      );
    });
  }
}

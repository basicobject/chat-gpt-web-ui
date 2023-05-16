import axios from "axios";

export type ErrorCode = -1 | 1;

export class ApiError {
  constructor(readonly code: ErrorCode, readonly message: string) {}
}

class ApiClient {
  readonly baseUrl: string;

  constructor(readonly host: string, readonly port: number) {
    this.baseUrl = `http://${this.host}:${this.port}`;
  }

  async sendMessage(text: string): Promise<ApiError | string> {
    return axios
      .post(`${this.baseUrl}/send-message`, {
        message: text,
      })
      .then((response) => {
        if (response.status === 200) {
          return "Api call completed successfully";
        } else {
          return new ApiError(1, response.data);
        }
      })
      .catch(
        (error) => new ApiError(-1, `Api call failed with some error ${error}`)
      );
  }
}

const api = new ApiClient("localhost", 3000);

export default api;

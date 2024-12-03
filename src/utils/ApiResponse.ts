export class ApiResponse<T> {
  success: boolean;
  message: string;
  data?: T;
  error?: string;
  code: number;

  private constructor(
    success: boolean,
    message: string,
    code: number,
    data?: T,
    error?: string
  ) {
    this.success = success;
    this.message = message;
    this.data = data;
    this.error = error;
    this.code = code;
  }

  static success<T>(code: number, message: string, data?: T): ApiResponse<T> {
    return new ApiResponse(true, message, code, data);
  }

  static error<T>(
    code: number,
    message: string,
    error?: string
  ): ApiResponse<T> {
    return new ApiResponse(false, message, code, undefined, error);
  }
}

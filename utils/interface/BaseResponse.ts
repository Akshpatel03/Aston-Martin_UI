export interface BaseResponse<T> {
  code: number;
  message: string;
  item: T;
  isSuccessStatusCode: boolean;
}

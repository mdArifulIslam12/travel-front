export interface IMeta {
  limit: number;
  page: number;
  total: number;
}

export type ResponseSuccessType = {
  data: any;
  meta?: IMeta;
};
export type IGenricErrorResponse = {
  statusCode?: number;
  message?: string;
  errorMessages?: IGenricErrorMessage;
};

export type IGenricErrorMessage = {
  path: string | number;
  message: string;
};

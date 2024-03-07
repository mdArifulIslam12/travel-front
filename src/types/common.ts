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

export type ITour = {
  title: string;
  price: number;
  image: string;
  description: string;
  duration: string;
  rating: number;
  maxPeople: number;
  minAge: number;
  continents: string;
  country: string;
  city: string;
  categories: string;
  offer?: string;
  tourType?: string;
};

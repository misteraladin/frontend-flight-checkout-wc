export interface Items {
    id: number;
    sequence: number;
    logo: string;
    name: string;
    url: string;
  }
  
  export interface Products {
    title: string;
    type: string;
    brands?: Items[];
  }
  
  export interface RootObject {
    title: string;
    contents: Products[];
  }
  
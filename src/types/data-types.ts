export interface PageData {
    background: IBackground;
    biography: IBiography;
    testimonials: IImage[];
    informations: IInformation[];
    differentials: IDifferential[];
    courses: ICourse[];
    questions: IQuestion[]
    contact: IContact
}
  
export interface ICourse {
    title: string;
    description: string[];
    price: IPrice
}

export interface IPrice {
    normalPrice: number;
    promotionalPrice: number;
  }

export interface IDifferential {
    text: string;
}

export interface IInformation {
    icon: string;
    title: string;
    description: string;
}

export interface IBiography {
    image: IImage;
    text: string;
}

export interface IBackground {
    image: IImage;
}

export interface IImage {
    src: string;
    description: string;
}

export interface IQuestion {
    title: string;
    description: string;
}

export interface IContact {
    link: string;
  }
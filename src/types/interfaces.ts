export interface IReview {
  _id?: string;
  reviewer?: {
    avatar?: string;
    firstName?: string;
    lastName?: string;
    follows?: number;
  };
  feedback?: string;
}

export interface IMerchandising {
  _id?: string;
  name?: string;
  price?: number;
  img?: string;
}

export interface ISong {
  _id?: string;
  name?: string;
  genre?: string;
}

export interface IArtist {
  _id?: string;
  avatar?: string;
  firstName?: string;
  lastName?: string;

  songs?: ISong[];
  reviews?: IReview[];
  merchandisings?: IMerchandising[];
}

export interface IBlogIdentification {
  id: string;
}

export interface IBlogFields {
  title: string;
  description: string;
  body: string;
}

export interface IBlogAttributes {
  attributes: Partial<IBlogFields> & Pick<IBlogFields, "title">;
}

export interface IBlog extends IBlogIdentification, IBlogAttributes {}

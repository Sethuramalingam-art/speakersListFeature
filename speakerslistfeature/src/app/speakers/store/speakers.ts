export interface Speakers {
  results: Speaker[];
}

export interface Speaker {
  id: {
    name: string;
    value: string;
  };
  name: {
    first: string;
    last: string;
  };
  location: {
    city: string;
  };
  gender: string;
  email: string;
  phone: string;
  cell: string;
  login: {
    uuid: string;
  };
}

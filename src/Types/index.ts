export interface Pet {
  image: string;
  name: string;
  sku: string;
  breed: string;
  gender: 'Male' | 'Female';
  age: string;
  size: 'Small' | 'Medium' | 'Large' | 'Extra Large';
  vaccinated: boolean;
  additional_info: string;
  price: string;
}

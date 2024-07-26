export type TProduct = {
    id: number;
    title: string;
    description: string;
    category: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    tags: string[]; // Assuming tags is an array of strings
    brand: string;
    sku: string;
    weight: number;
    dimensions: Dimensions; // Assuming dimensions is an object, define the Dimensions interface accordingly
    warrantyInformation: string;
    shippingInformation: string;
    availabilityStatus: string;
    reviews: Review[]; // Assuming reviews is an array of objects, define the Review interface accordingly
    returnPolicy: string;
    minimumOrderQuantity: number;
    meta: Meta; // Assuming meta is an object, define the Meta interface accordingly
    images: string[]; // Assuming images is an array of strings (URLs)
    thumbnail: string;
  }

  // Example interfaces for the nested objects
  type Dimensions = {
    length: number;
    width: number;
    height: number;
  }

  type Review = {
    userId: number;
    rating: number;
    comment: string;
    date: string;
  }

  type Meta = {
    [key: string]: any; // Assuming meta is a key-value object with flexible properties
  }
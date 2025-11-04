interface ImageDetail {
  thumbnail: string;
  mobile: string;
  desktop: string;
  tablet: string;
}

export type DessertItemProps = {
  name: string;
  category: string;
  price: number;
  image: ImageDetail;
};

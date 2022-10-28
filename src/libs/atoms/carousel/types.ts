export interface RootObject {
  id: number;
  title: string;
  description: string;
  image_url: string;
  link: string;
  type: string;
  product_type: string;
  product_type_name: string;
  slug_detail?: any;
  position: string;
  domain: string;
  original_image_url_resized: string;
  start_date: string;
  end_date: string;
  sequence: number;
  is_show_description?: any;
  position_description: string;
  filename: string;
  landing_link: string;
  share_link: string;
  created_by: number;
}
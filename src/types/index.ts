export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  service?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  features: string[];
  price?: string;
}

export interface NavigationItem {
  name: string;
  href: string;
  current: boolean;
}

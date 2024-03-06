export type Metadata = {
  metadataBase: string;
  title: string;
  description: string;
  canonical: string;
  openGraph: {
    url: string;
    title: string;
    description: string;
    images: {
      url: string;
      width: number;
      height: number;
      alt: string; 
    }[];
    site_name: string;
  };
};

export type RootLayoutProps = {
  children: ReactElement;
  hideButton?: boolean;
}

export type Data = {
  month: string;
  users: number;
  posts: number;
  pages: number;
  groups: number;
  [key: string]: string | number; // Allow dynamic property access
}
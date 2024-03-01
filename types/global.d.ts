type Metadata = {
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

export type { Metadata }; 
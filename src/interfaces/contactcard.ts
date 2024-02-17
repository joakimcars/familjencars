/*export type ContactCard = {
    title: string;  
    slug: string;
    name: string;
    email: string;
    imagePath: string;
    date: string;
  };*/
  export type ContactCard = {
    email: string | undefined;
    slug: string;
    title: string;
    imagepath: string;
    name: string;
    date: string;
    content: string;
    preview?: boolean;
    imagepaths: string[];
  }
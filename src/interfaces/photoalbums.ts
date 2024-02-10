export type PhotoAlbum = {
    slug: string;
    title: string;
    imagepath: string;
    date: string;
    content: string;
    preview?: boolean;
    imagepaths: string[];
  };
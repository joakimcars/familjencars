import { getAllPhotoAlbums, getPhotoAlbumsBySlug } from "@/lib/api";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { CMS_NAME } from "../../../lib/constants";

/*export default async function AlbumPage({ params }: Params) {
  const post = getPhotoAlbumsBySlug(params.id);
  return <div>{JSON.stringify(post, null, 2)}</div>;
}*/

export default async function AlbumPage({ params }: Params) {
  const post = getPhotoAlbumsBySlug(params.id);
  var imagepaths = post.imagepaths;
  return (
    <div className="mt-36 mr-36 ml-36">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {imagepaths.map((imagepath) => {
          return (
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src={imagepath}
              ></img>
            </div>
          );
        })}
      </div>
    </div>
  );
}

type Params = {
  params: {
    id: string;
  };
};

export function generateMetadata({ params }: Params): Metadata {
  const post = getPhotoAlbumsBySlug(params.id);

  if (!post) {
    return notFound();
  }

  const title = `${post.title} | Next.js Blog Example with ${CMS_NAME}`;

  return {
    openGraph: {
      title,
      images: [post.imagepath],
    },
  };
}

export async function generateStaticParams() {
  const posts = getAllPhotoAlbums();

  return posts.map((post) => ({
    id: post.slug,
  }));
}

import { getAllPhotoAlbums } from "@/lib/api";

export default function PhotoAlbumsPage() {
  const photoAlbums = getAllPhotoAlbums();
  return (
    <div className="mt-36 mr-36 ml-36">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {photoAlbums.map((photoAlbum) => {
          return (
            <div key={photoAlbum.slug}>
              <h2>
                <a href={`/photoalbums/${photoAlbum.slug}`}>
                  {photoAlbum.title}
                </a>
              </h2>
              <img
                className="h-auto max-w-full rounded-lg"
                src={photoAlbum.imagepath}
              ></img>
            </div>
          );
        })}
      </div>
    </div>
  );
}

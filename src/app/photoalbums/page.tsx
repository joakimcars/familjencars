import { getAllPhotoAlbums } from "@/lib/api";

/* export default function PhotoAlbumsPage() {
  const photoAlbums = getAllPhotoAlbums();
  return (
    <div className="mt-20 mr-20 ml-20">
      <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
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
 */

export default function PhotoAlbumsPage() {
  const photoAlbums = getAllPhotoAlbums();
  return (
    <div className="mt-20 mr-20 ml-20">
      <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
        {photoAlbums.map((photoAlbum) => {
          return (
            <div key={photoAlbum.slug}>
              <a href={`/photoalbums/${photoAlbum.slug}`}>
                <h2>{photoAlbum.title}</h2>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src={photoAlbum.imagepath}
                ></img>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}

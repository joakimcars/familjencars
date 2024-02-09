import { getAllNews } from "@/lib/api";

export default function NewsPage() {
  const articles = getAllNews();
  return (
    <div>
      <ul>
        {articles.map((article) => {
          return (
            <li key={article.slug}>
              <div>
                <div className="container my-24 mx-auto md:px-6">
                  <section className="mb-32 mx-40">
                    <img
                      src={article.imagepath}
                      className="mb-6 w-full rounded-lg shadow-lg dark:shadow-black/20"
                      alt="image"
                    />

                    <div className="mb-6 flex items-center">
                      <img
                        src={article.authorimagepath}
                        className="mr-2 h-8 rounded-full"
                        alt="avatar"
                        loading="lazy"
                      />
                      <div>
                        <span>
                          {" "}
                          Publicerat <u>{article.date}</u> av {article.author}
                        </span>
                      </div>
                    </div>

                    <h1 className="mb-6 text-3xl font-bold">{article.title}</h1>

                    <p>{article.text}</p>
                  </section>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

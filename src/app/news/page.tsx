import { getAllNews } from "@/lib/api";

/*export default function NewsPage() {
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
                      className="mb-6 rounded-lg shadow-lg dark:shadow-black/20"
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
                    <div>({article.text})</div>
                  </section>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}*/

export default function NewsPage() {
  return (
    <div>
      <ul>
        <li>
          <div>
            <div className="container my-24 mx-auto md:px-6">
              <section className="mb-32 mx-40">
                <img
                  src="/assets/news/familytree.jpg"
                  className="mb-6 rounded-lg shadow-lg dark:shadow-black/20"
                  alt="image"
                />
                <div className="mb-6 flex items-center">
                  <img
                    src="/assets/authors/henrik.jpg"
                    className="mr-2 h-8 rounded-full"
                    alt="avatar"
                    loading="lazy"
                  />
                  <div>
                    <span>
                      {" "}
                      Publicerat <u>2024-05-10</u> av Henrik Cars
                    </span>
                  </div>
                </div>
                <h1 className="mb-6 text-3xl font-bold">
                  Hemsida och släktträd (släktmatrikel) - släktföreningen Cars
                </h1>
                <div>
                  <p>
                    (Sammanfattning av Henrik Cars, februari 2024/justerat av
                    Tinna Cars-Björling april 2024)
                    <br />
                    <br />
                    Våra släktingar Joakim Cars och Elin Kullman Armini har
                    byggt en ny hemsida till släktföreningen! Stort tack till
                    båda!! Adressen till hemsidan är{" "}
                    <a
                      href="https://familjencars.pages.dev/"
                      className="text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      https://familjencars.pages.dev/
                    </a>
                    <br />
                    <br />
                    <span className="underline">
                      {" "}
                      Nu behövs några personer som tar ansvar för att fylla
                      hemsidan med intressant och aktuellt innehåll!
                    </span>
                    Det behövs inga IT- experter, men intresserade släktingar
                    som tar ansvar för att samla in aktuell information, bilder
                    och texter och hålla register uppdaterade. För att det ska
                    bli möjligt krävs förstås att vi alla bidrar med förslag
                    till innehåll och hejar på! Joakim har sagt sig vara beredd
                    att finnas som ”konsult”.
                    <br />
                    <br />
                  </p>
                  <h1 className="mb-6 text-3xl font-bold">Hemsidan</h1>
                  <p>
                    Tanken med hemsidan är att den skall vara uppdelad i ett par
                    olika kategorier/flikar t.ex.
                    <br />
                    <br />
                  </p>
                  <ol className="list-decimal mx-20">
                    <li>Nyheter, vad är på G, info om nästa släktträff</li>
                    <li>
                      Diverse information om släktingar, släktingar som bör
                      uppmärksammas, nyfödda, avlidna.
                    </li>
                    <li>Bilder från släktfester, möten, besök</li>
                    <li>
                      Historisk information om släkten och platser som hänger
                      ihop med släkten
                    </li>
                    <li>
                      Register över släktingars namn, mail och telefonregister.
                    </li>
                  </ol>
                  <p>
                    <br />
                    <br />
                    Genom att uppdatera hemsidan är målet att hålla intresset
                    uppe för föreningen och att kunna kalla till släktmiddagar
                    och informera med hjälp av ett uppdaterat släktregister.
                  </p>
                  <h1 className="mb-6 text-3xl font-bold my-10">Släktträdet</h1>
                  <p>
                    Tanken med att bygga ett ”nytt” släktträd (släktmatrikel) är
                    att vi alla lättare ska få hjälp med att hålla koll på ”vem
                    var det?” och ”hur är vi släkt?” Släktträdet är det en hel
                    del arbete med och det kommer att dröja längre innan det
                    ligger på nätet. Vi ser detta som ett försök att kunna hålla
                    ihop och uppdatera släkten då det har varit synnerligen
                    svårt att kunna rekrytera en ny styrelse till föreningen.
                  </p>
                  <h1 className="mb-6 text-3xl font-bold my-10">
                    Hur löser man GDPR? (General Data Protection Regulation)
                  </h1>
                  <p>
                    Förslag enligt följande exempel: “Jag, Henrik Cars,
                    godkänner att fotografier på mig och mina personuppgifter
                    (läggs in i släktföreningen Cars´ släktmatrikel och) får
                    publiceras på föreningens hemsida”. Uttalandet signeras,
                    fotograferas av med mobilen samt skickas till släktträdets
                    organisatörer. <br />
                    <br />
                    Hör gärna av dig om Du har frågor. <br />
                    <br />
                    Henrik Cars
                  </p>
                </div>
              </section>
            </div>
          </div>

          <div>
            <div className="container my-24 mx-auto md:px-6">
              <section className="mb-32 mx-40">
                <img
                  src="/assets/news/släktträff1920.jpg"
                  className="mb-6 rounded-lg shadow-lg dark:shadow-black/20"
                  alt="image"
                />
                <div className="mb-6 flex items-center">
                  <img
                    src="/assets/authors/henrik.jpg"
                    className="mr-2 h-8 rounded-full"
                    alt="avatar"
                    loading="lazy"
                  />
                  <div>
                    <span>
                      {" "}
                      Publicerat <u>2024-05-10</u> av Henrik Cars
                    </span>
                  </div>
                </div>
                <h1 className="mb-6 text-3xl font-bold">
                  UPPFÖLJNING EFTER SLÄKTMÖTET I ULLINGE AUGUSTI 2022
                </h1>
                <div>
                  <p>
                    Sedan mötet i Ullinge 2022 har styrelsen i samverkan med
                    valberedningen och flera andra släktningar arbetat med några
                    frågor som stod på dagordningen eller dök upp under den
                    ”brainstorming” som ingick i mötet.
                  </p>
                </div>
              </section>
            </div>
          </div>

          <div>
            <div className="container my-24 mx-auto md:px-6">
              <section className="mb-32 mx-40">
                <img
                  src="/assets/news/OttoCars.jpg"
                  className="mb-6 rounded-lg shadow-lg dark:shadow-black/20"
                  alt="image"
                />
                <div className="mb-6 flex items-center">
                  <img
                    src="/assets/authors/joakim.jpg"
                    className="mr-2 h-8 rounded-full"
                    alt="avatar"
                    loading="lazy"
                  />
                  <div>
                    <span>
                      {" "}
                      Publicerat <u>2024-05-10</u> av Joakim Cars
                    </span>
                  </div>
                </div>
                <h1 className="mb-6 text-3xl font-bold">
                  Välkommna till släkföreningen Cars nya hemsida!
                </h1>
                <div>
                  <p>
                    Välkomna till släkten Cars nya hemsida. Om du har några
                    intressanta nyheter från släkten som du vill dela på
                    hemsidan kontakta gärna mig på joakim.cars@rillion.com eller
                    0762318656.
                  </p>
                </div>
              </section>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}

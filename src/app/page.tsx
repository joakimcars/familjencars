import Container from "@/app/_components/container";
import { HeroPost } from "@/app/_components/hero-post";
import { Intro } from "@/app/_components/intro";
import { MoreStories } from "@/app/_components/more-stories";
import { getAllPosts } from "../lib/api";
import { Navbar } from "./_components/navbar";

export default function Index() {
  const allPosts = getAllPosts();

  const heroPost = allPosts[0];

  const morePosts = allPosts.slice(1);

  return (
    <main>
      <Container></Container>
      <div>
        <div>
          <div className="container my-24 mx-auto md:px-6">
            <section className="mb-32 mx-40">
              <h1 className="mb-6 text-3xl font-bold">Hej kära släktingar!</h1>

              <p>
                Så är det snart dags igen att få möjlighet att träffas och umgås
                med ”tjocka släkten”! <br />
                <br />
                Som vi redan tidigare informerat om så går mötet av stapeln{" "}
                <span className="font-bold">
                  24-25 augusti på jaktslottet Öster Malma i Nyköping, Sörmland.
                </span>{" "}
                Tanken med att välja just denna plats är att vi då befinner oss
                nära släktgraven i Gåsinge och Thyra och Eiras ”Torpet”. Se
                preliminärt program nedan. Dessutom ser det gamla slottet
                väldigt spännande ut! Se{" "}
                <a
                  href="https://www.ostermalma.se/"
                  className="text-blue-600 dark:text-blue-500 hover:underline"
                >
                  www.ostermalma.se
                </a>
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 my-10">
                <img
                  src="/assets/general/1.png"
                  className="mb-6 w-full rounded-lg shadow-lg dark:shadow-black/20"
                  alt="image"
                />

                <img
                  src="/assets/general/2.png"
                  className="mb-6 w-full rounded-lg shadow-lg dark:shadow-black/20"
                  alt="image"
                />

                <img
                  src="/assets/general/3.png"
                  className="mb-6 w-full rounded-lg shadow-lg dark:shadow-black/20"
                  alt="image"
                />
              </div>
              <div className="mb-6 flex items-center">
                <img
                  src="/assets/contacts/tinna.jpg"
                  className="mr-2 h-8 rounded-full"
                  alt="avatar"
                  loading="lazy"
                />
                <div>
                  <span>
                    {" "}
                    Publicerat <u>2024-04-15</u> av Tinna Cars Björling
                  </span>
                </div>
              </div>

              <h1 className="mb-6 text-3xl font-bold my-10">
                PROGRAM (preliminärt)
              </h1>

              <h4 className="mb-6 text-3xl font-bold mx-10">
                Lördag 24 Augusti
              </h4>
              <ul className="list-disc mx-20">
                <li>15.00: Ankomst/incheckning</li>
                <li>15.30: Fika/aktivitet/lekar</li>
                <li>17.00: Vila och ombyte inför medlemsmöte och middag </li>
                <li>
                  18.00: Medlemsmöte med bubbel (kallelse och
                  verksamhetsberättelse skickas ut i juni)
                </li>
                <li>19:00: Middag </li>
                <li>
                  Minnen från tiden med Thyra Cars, Eira Cars och Erik Andersson
                  (Eiras man) får gärna förgylla middagen.
                </li>
                <li>
                  I samband med middagen kommer en sammanfattande och trevlig
                  presentation av föreningens arkiv (dokument och foton) att
                  göras av Kerstin Kalén (föreningens arkivarie) och Eva Bjarman
                  (f Cars).
                </li>
              </ul>

              <h4 className="mb-6 text-3xl font-bold my-10 mx-10">
                Söndag 25 Augusti
              </h4>
              <ul className="list-disc mx-20">
                <li>Besök vid Gåsinge kyrka och Erik, Thyra och Eiras grav.</li>
                <li>Utflykt till ”Torpet”. Thyra och Eiras sommarställe.</li>
                <li>Under vägen möjlighet till fika eller lunch.</li>
              </ul>

              <h1 className="mb-6 text-3xl font-bold my-10">
                ANMÄLAN OCH BETALNING
              </h1>

              <p>
                Anmälan om deltagande görs{" "}
                <span className="font-bold">senast den 21 juli</span> till Björn
                Cars ('Björn Cars' bjorn.cars@hotmail.com eller mobil 070-781 85
                62).
              </p>

              <h1 className="mb-6 text-3xl font-bold my-10">
                Alternativ och kostnader för logi och middag
              </h1>

              <p>
                <span className="underline">Hotell</span> Dubbelrum 1595 kronor,
                enkelrum 1295 kronor (finns också ett dubbelrum reserverat för
                par/familj med hund….) <br />
                <br />
                <span className="underline">Vandrarhem </span>500 kronor per
                bädd inklusive lakan - exklusive frukost 150 kronor (vuxna) och
                95 kronor (barn 3-12 år) <br />
                <br />
                <span className="underline">Trerättersmiddag </span> 695 kronor
                (vuxna) och 360 kronor (barn 3-12 år) - antingen särskild
                barnmeny eller mindre portioner av vuxenmenyn <br />
                <br />
                Val av meny: kött, fisk eller vegetariskt görs i samband med
                nytt utskick från styrelsen i juni. Öster Malmas specialitet är
                deras viltmeny. <br />
                <br />
                <span className="font-bold">Betalning</span> av logi, mat och
                dryck görs av var och en i samband med utcheckning. <br />
                <br />
                <span className="font-bold">Viktig att veta</span> <br />
                <br />
                Styrelsen har bokat boende och middag för 50 personer på Öster
                Malma. Vid avbokning efter 24 juli (fyra veckor innan
                släktmötet) blir vi betalningsskyldiga. Björn Cars kommer att
                meddela Öster Malma antal anmälda deltagare efter den 21 juli.
                De kostnader som därefter uppstår i samband med för sen
                avbokning får var och en ansvara för.
              </p>

              <h1 className="mb-6 text-3xl font-bold my-10">
                Uppföljning efter släktmötet i Ullinge Augusti 2022.
              </h1>

              <p>
                Sedan mötet i Ullinge 2022 har styrelsen - i samverkan med
                valberedningen och flera andra släktningar arbetat med några
                frågor som stod på dagordningen eller dök upp under den
                ”brainstorming” som ingick i mötet.
              </p>

              <h1 className="mb-6 text-3xl font-bold my-10">
                Behov av nya medlemmar i styrelsen
              </h1>

              <p>
                I samband med släktmötet 2022 gjorde valberedningen - Hans
                Christian Cars och Henrik Cars - ett gediget arbete med att
                försöka rekrytera nya och yngre släktingar till styrelsen. Detta
                arbete lyckades tyvärr inte alls och den sittande styrelsen
                valdes om i sin helhet. <br />
                <br />
                Nuvarande styrelse: Björn Cars, Håkan Cars, Helena Sandermark
                och Tinna Cars-Björling. <br />
                <br />
                Helena är beredd att fortsätta uppdraget som kassör. Övriga
                ledamöter avstår från fortsatt styrelseuppdrag, men kan bidra
                med erfarenhet och stöd inför kommande släktmöte. <br />
                <br />
                Inför kommande medlemsmöte hoppas vi nu att några yngre förmågor
                träder fram och anmäler sitt intresse och därmed får möjlighet
                att lära känna släkten ännu bättre och dessutom ha väldigt
                trevligt!
                <br />
                <br />
                Hugade spekulanter kan med fördel höra av sig till Henrik Cars{" "}
                <a
                  href="henrikcars@hotmail.com"
                  className="text-blue-600 dark:text-blue-500 hover:underline"
                >
                  henrikcars@hotmail.com!
                </a>
              </p>

              <h1 className="mb-6 text-3xl font-bold my-10">
                Släktföreningen har fått en hemsida!{" "}
              </h1>

              <p>
                Släktföreningen har fått en hemsida!{" "}
                <span>
                  <a
                    href="https://familjencars.pages.dev/"
                    className="text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    familjencars.pages.dev
                  </a>
                </span>{" "}
                <br />
                <br />
                <span className="underline">
                  Vi efterlyser även här goda krafter för att underhålla och
                  förse hemsidan med intressant och relevant innehåll.
                </span>
                <br />
                <br />
              </p>

              <h1 className="mb-6 text-3xl font-bold my-10">
                Inbetalning av medlemsavgift
              </h1>

              <p>
                Och så påminner vi också om inbetalning av medlemsavgift för
                2024 ( = 100 kronor per vuxen över 18 år). Inbetalning av
                medlemsavgift görs till kassör Helena Sandermark. Välj något av
                nedanstående alternativ:
              </p>

              <ul className="list-disc mx-20">
                <li>
                  1. Svenska Handelsbanken; clearingnr 6561, kontonr 211 146 951
                </li>
                <li>2. Swish 0706083204 märkt med ”Cars” och namn.</li>
              </ul>

              <p>Ange tydligt för vilken/vilka inbetalningen gäller!</p>

              <h1 className="mb-6 text-3xl font-bold my-10">
                Vi ser fram emot ett välbesökt och härligt släktmöte i augusti!
              </h1>

              <p>
                Varma hälsningar! <br />
                Styrelsen
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}

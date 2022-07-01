import Link from "next/link";
import Head from "next/head";
import { NextPage } from "next";
import { MenuPrimary } from "components/templates/menu";
import { SectionText } from "components/templates/section";
import { Container, Row, Col } from "components/orgamis/flexboxgrid/index.flexboxgrid";

const Contact: NextPage<any, any> = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>Regulamin | POLSKI.DEV 👩‍💻👨‍💻</title>
      </Head>
      <Container>
        <Row>
          <MenuPrimary
            data={{
              title: "Przydatne",
              links: [
                { slug: "https://github.com/polski-dev", title: "Kod źródłowy", count: 2 },
                { slug: "/regulamin", title: "Regulamin", count: 1 },
                { slug: "/privacy-policy", title: "Polityka prywatnosći", count: 1 },
              ],
            }}
          />
          <Col xs={12} md={9}>
            <SectionText data={{ title: "Regulamin" }}>
              <p>Przed założeniem konta w Serwisie należy uważnie przeczytać poniższy Regulamin. Założenie konta jest równoznaczne z tym, że Użytkownik:</p>
              <ul>
                <li>Zapoznał się z treścią Regulaminu i wyraża zgodę na wszystkie jego postanowienia</li>
                <li>Zobowiązuje się do korzystania z Serwisu zgodnie z prawem</li>
                <li>Zgadza się na przetwarzanie jego danych osobowych w zakresie podanym w Regulaminie.</li>
              </ul>
              <p>
                Regulamin korzystania z serwisu internetowego <Link href="https://www.polski.dev">www.polski.dev</Link> oraz polityka serwisu w zakresie ochrony praw autorskich:
              </p>
              <h5>I. Definicje. </h5>
              <p>
                <b>1.1.</b> Użyte w Regulaminie pojęcia oznaczają:
              </p>
              <p>
                <b>1.1.1.</b> Adres e-mail Użytkownika - adres poczty elektronicznej, której wyłącznym dysponentem jest Użytkownik, konieczny do dokonania autoryzacji w trakcie uzyskiwania dostępu do Konta Użytkownika, ustalany przez Użytkownika podczas procesu Rejestracji.
              </p>
              <p>
                <b>1.1.2.</b> Awaria - oznacza stan Usługi, który uniemożliwia Użytkownikowi korzystanie z Usługi, jednak z wyłączeniem sytuacji, w której brak możliwości korzystania z Usługi jest wynikiem okresu zawieszenia lub przerwy w świadczeniu Usługi dozwolonej w ramach Regulaminu; lub jest
                wynikiem naruszenia Regulaminu przez Użytkownika; lub jest wynikiem działania Siły Wyższej; lub która wystąpiła w infrastrukturze telekomunikacyjnej, z której korzysta Użytkownik.
              </p>
              <p>
                <b>1.1.3.</b> Hasło - ciąg znaków alfanumerycznych konieczny do dokonania autoryzacji w trakcie uzyskiwania dostępu do Konta Użytkownika, ustalany przez Użytkownika podczas procesu Rejestracji.{" "}
              </p>
              <p>
                <b>1.1.4.</b> Komentarz - pisemne wyrażenie opinii przez Użytkownika na temat Treści, do których odniesienie zamieszczono przez innego Użytkownika.
              </p>
              <p>
                <b>1.1.5.</b> Konto Użytkownika (Konto, profil) - konto, do którego dostęp Użytkownika możliwy jest wyłącznie po dokonaniu przez niego jednorazowej Rejestracji oraz każdorazowym podaniu Nazwy Użytkownika i Hasła, za pośrednictwem którego Użytkownik dokonuje zamieszczenia odniesienia
                (linku) do Treści; Konto zawierać może inne informacje o Użytkowniku, stosownie do oferowanej w danym czasie funkcjonalności Serwisu. Zmiana danych w ramach Konta Użytkownika (w tym w zakresie umieszczonych w Serwisie plików) możliwa jest po uprzednim zalogowaniu się przez
                Użytkownika na Konto (wymagana Nazwa Użytkownika i Hasło).
              </p>
              <p>
                <b>1.1.6.</b> Nazwa Użytkownika (login) - ciąg znaków alfanumerycznych konieczny do dokonania autoryzacji w trakcie uzyskiwania dostępu do Konta Użytkownika, ustalany przez Użytkownika podczas procesu Rejestracji.
              </p>
              <p>
                <b>1.1.7.</b> Rejestracja - jednorazowa czynność, polegająca na założeniu przez Użytkownika Konta Użytkownika, dokonana z wykorzystaniem panelu administracyjnego udostępnionego przez Usługodawcę na stronie Serwisu.
              </p>
              <p>
                <b>1.1.8.</b> Regulamin - niniejszy Regulamin Serwisu dostępnego pod adresem: <Link href="https://www.polski.dev">www.polski.dev/regulamin</Link>
              </p>

              <p>
                <b>1.1.9.</b> Serwis - serwis internetowy, który umożliwia Użytkownikom przechowywanie Treści, pod adresem www.polskidev.pl, za pośrednictwem którego świadczona jest Usługa.
              </p>
              <p>
                <b>1.1.10.</b> Strony - Usługodawca i Użytkownik.
              </p>
              <p>
                <b>1.1.11.</b> Siła Wyższa - zdarzenie nadzwyczajne o charakterze zewnętrznym wobec strony, niezależne od danej strony, któremu strona nie mogła zapobiec przy dołożeniu należytej staranności.
              </p>
              <p>
                <b>1.1.12.</b> Treść (Treści) - treści i obiekty multimedialne (np. informacje, dane, pliki graficzne, zdjęcia lub filmy) w tym utwory w rozumieniu Ustawy o prawie autorskim i prawach pokrewnych oraz wizerunki osób fizycznych jakie są zamieszczane przez Użytkownika za pośrednictwem
                Konta.
              </p>
              <p>
                <b>1.1.13.</b> Umowa - umowa o świadczenie usług drogą elektroniczną pomiędzy Stronami.
              </p>
              <p>
                <b>1.1.14.</b> Usługa - usługa hostingu świadczona przez usługodawcę na zasadach określonych w Regulaminie oraz za pośrednictwem serwisu, która polega na zapewnieniu użytkownikowi narzędzi teleinformatycznych celem przechowywania - w ramach konta użytkownika - zamieszczonych przez
                użytkownika treści.
              </p>
              <p>
                <b>1.1.15.</b> Usługodawca - NA3 Sp. z o. o.
              </p>
              <p>
                <b>1.1.16.</b> Ustawa o prawie autorskim i prawach pokrewnych - Ustawa z dnia 4 lutego 1994 r. o prawie autorskim i prawach pokrewnych (Dz.U. 1994 r., Nr 24, poz. 83, ze zm.).
              </p>
              <p>
                <b>1.1.17.</b> Ustawa o ochronie danych osobowych - Ustawa o ochronie danych osobowych z dnia 27 sierpnia 1997 r. (tekst jednolity: Dz. U. z 2002 r. Nr 101, poz. 926 ze zm.)
              </p>
              <p>
                <b>1.1.18.</b> Ustawa o świadczeniu usług drogą elektroniczną - Ustawa z dnia 18 lipca 2002 r. o świadczeniu usług drogą elektroniczną (Dz.U. 2002 r., Nr 144, poz. 1244 ze zm.).
              </p>
              <p>
                <b>1.1.19.</b> Użytkownik - osoba fizyczna, która ukończyła 18 rok życia. W przypadku nieukończenia przez Użytkownika 18 roku życia wymagana jest zgoda jego przedstawiciela ustawowego.
              </p>

              <h5>II. Postanowienia Ogólne.</h5>
              <p>
                <b>2.1.</b> Niniejszy Regulamin określa zasady korzystania przez Użytkowników z serwisu internetowego dostępnego pod adresem www.polskidev.pl oraz z oferowanych za jego pośrednictwem usług.
              </p>
              <p>
                <b>2.2.</b> Niniejszy Regulamin jest regulaminem, o którym mowa w art. 8 ustawy z dnia 18 lipca 2002 r. o świadczeniu usług drogą elektroniczną (Dz. U. z 2002 r. Nr 144, poz. 1204 z późn. zm.).
              </p>
              <p>
                <b>2.3.</b> Nazwa Serwisu, jego koncepcja, wygląd graficzny, oprogramowanie oraz baza danych, a także elementy graficzne Stron, które zostały udostępnione Użytkownikom przez Serwis podlegają ochronie prawnej.
              </p>
              <p>
                <b>2.4.</b> Korzystanie z Serwisu oraz z usług oferowanych za pośrednictwem Serwisu oznacza wyrażenie przez Użytkownika zgody na warunki określone w niniejszym Regulaminie.
              </p>
              <p>
                <b>2.5.</b> Usługodawca zastrzega sobie prawo ograniczenia dostępu do wybranych usług oferowanych za pośrednictwem Serwisu dla Użytkowników, którzy spełnią określone warunki. Zastrzeżenie dotyczące możliwości skorzystania z wybranych usług będzie każdorazowo zamieszczane na stronach
                internetowych Serwisu.
              </p>
              <p>2.6. Zgodnie z obowiązującymi przepisami prawa Usługodawca zastrzega sobie możliwość ograniczenia świadczenia Usługi za pośrednictwem Serwisu do osób, które ukończyły wiek 18 lat. W takim przypadku Użytkownicy zostaną o powyższym powiadomieni.</p>

              <h5>III. Zakres i warunki korzystania z Serwisu.</h5>
              <p>
                <b>3.1.</b> W ramach Serwisu Usługodawca zobowiązuje się do świadczenia Usługi w zakresie i na warunkach określonych w niniejszym Regulaminie.
              </p>
              <p>
                <b>3.2.</b> Zakres Usługi obejmuje przechowywanie przez Usługodawcę Treści jakie zostały zamieszczone przez Użytkownika za pośrednictwem Konta.
              </p>
              <p>
                <b>3.3.</b> Umowa o świadczenie usług drogą elektroniczną zostaje zawarta z chwilą skutecznego przesłania przez Użytkownika wypełnionego formularza rejestracyjnego, zgodnie z procedurą Rejestracji do Serwisu. Umowa zostaje zawarta na czas nieoznaczony.
              </p>
              <p>
                <b>3.4.</b> Warunkiem rozpoczęcia korzystania z Usługi przez Użytkownika jest dokonanie Rejestracji Użytkownika w ramach Serwisu, która następuje w drodze akceptacji formularza rejestracyjnego, udostępnianego na jednej ze stron Serwisu, po wypełnieniu odpowiednich rubryk formularza
                oraz naciśnięciu przez Użytkownika odpowiedniego klawisza.
              </p>
              <p>
                <b>3.5.</b> Korzystanie z Usługi możliwe jest pod warunkiem spełnienia przez system teleinformatyczny, z którego korzysta Użytkownik następujących minimalnych wymagań technicznych:
              </p>
              <p>
                <b>3.5.1.</b> Procesor 1 GHz, pamięć 512 MB,
              </p>
              <p>
                <b>3.5.2.</b> zastosowania przeglądarek Microsoft Internet Explorer min. 7.0. lub nowszych z zainstalowanym oprogramowaniem do obsługi (np. Java Scriptu, apletów Java),
              </p>
              <p>
                <b>3.5.3.</b> rozszerzenie przeglądarki internetowej: włączona obsługa ActiveXPlayer, zaktualizowany komponent DRM
              </p>
              <p>
                <b>3.5.4.</b> zastosowania w pewnych przypadkach oprogramowania (np. Flash, Quicktime, Acrobat Reader, programy dekompresujące),
              </p>
              <p>
                <b>3.5.5.</b> Strona internetowa jest optymalizowana do rozdzielczości 1280x800
              </p>
              <p>
                <b>3.6.</b> Każda ze stron może rozwiązać Umowę bez podania przyczyn i w trybie natychmiastowym, z zastrzeżeniem zachowania praw nabytych przez drugą stronę przed rozwiązaniem Umowy. Nie istnieje minimalny okres, przez który Umowa nie może być wypowiedziana.
              </p>
              <p>
                <b>3.7.</b> Usługodawca, chcąc rozwiązać Umowę, poinformuje Użytkownika na Adres e-mail podany przez Użytkownika podczas Rejestracji w terminie 14 dni przed planowaną datą usunięcia Konta Użytkownika.
              </p>
              <p>
                <b>3.8.</b> Użytkownik rozwiązuje Umowę poprzez samodzielne usunięcie Konta z poziomu panelu użytkownika. Wszystkie dane konta zostaną wykasowane z bazy serwisu po upływie roku od dnia usunięcia konta.
              </p>
              <p>
                <b>3.9.</b> Użytkownik zobowiązuje się do przestrzegania postanowień Regulaminu. Usługodawca zastrzega sobie prawo do modyfikowania technicznego sposobu realizacji Usługi, stosownie do zakresu i warunków wynikających z posiadanych uprawnień, a także odpowiednio do posiadanych
                możliwości technicznych, bez pogarszania jej jakości, a także bez wpływu na zakres praw i obowiązków Stron.
              </p>
              <p>
                <b>3.10.</b> W celu zapewnienia bezpieczeństwa przekazu komunikatów w związku ze świadczoną Usługą, Usługodawca podejmuje środki techniczne i organizacyjne odpowiednie do stopnia zagrożenia bezpieczeństwa świadczonej Usługi.
              </p>
              <p>
                <b>3.11.</b> Usługodawca zastrzega sobie prawo do przesyłania Użytkownikowi na jego Konto w Serwisie informacji technicznych i systemowych dotyczących funkcjonowania Serwisu, nie stanowiących informacji handlowej w rozumieniu Ustawy o świadczeniu usług drogą elektroniczną.
              </p>
              <p>
                <b> 3.12.</b> W przypadku świadczenia Usługi Usługodawca nie jest dostawcą usługi Internetu. W celu korzystania z Usługi Użytkownik powinien we własnym zakresie uzyskać dostęp do stanowiska komputerowego, za pomocą którego możliwe jest korzystanie z Usługi za pośrednictwem Serwisu.
              </p>

              <h5>IV. Rejestracja Użytkownika.</h5>
              <p>
                <b>4.1.</b> W trakcie Rejestracji Użytkownik dokonuje czynności, na które składa się:
              </p>
              <p>
                <b>4.1.1.</b> potwierdzenie, że zapoznał się on z treścią Regulaminu oraz że akceptuje on jego postanowienia,
              </p>
              <p>
                <b>4.1.2.</b> wypełnienie formularza dostępnego na stronie Serwisu,
              </p>
              <p>
                <b>4.1.3.</b> podanie Nazwy, Hasła oraz Adresu e-mail Użytkownika, który wymaga potwierdzenia poprzez naciśnięcie na link (odniesienie) zawarty w treści wiadomości wysłanej pod ten adres przez Usługodawcę,
              </p>
              <p>
                <b>4.1.4.</b> uzyskanie dostępu do Konta Użytkownika z wykorzystaniem Nazwy Użytkownika oraz Hasła.
              </p>
              <p>
                <b>4.2.</b> Wraz z dokonaniem Rejestracji Użytkownik uzyskuje dostęp do Konta Użytkownika, który jest każdorazowo zapewniany przez Usługodawcę po wpisaniu przez Użytkownika Hasła i Nazwy Użytkownika.
              </p>
              <p>
                <b>4.3.</b> W trakcie Rejestracji, jak również podczas korzystania z Usługi, Użytkownik zobowiązany jest do:
              </p>
              <p>
                <b>4.3.1.</b> podawania danych zgodnych z prawdą, dokładnych i aktualnych, nie wprowadzających w błąd oraz nienaruszających praw osób trzecich,
              </p>
              <p>
                <b>4.3.2.</b> aktualizacji podanych w formularzu rejestracyjnym danych, niezwłocznie po każdej zmianie tych danych. Aktualizacji danych dokonuje się w ramach Konta Użytkownika,
              </p>
              <p>
                <b>4.3.3.</b> zachowania w tajemnicy Hasła oraz nieudostępniania go innym osobom.
              </p>
              <p>
                <b>4.4.</b> Użytkownik ponosi wyłączną odpowiedzialność za treść podanych przez siebie danych, jak również za wybór Nazwy Użytkownika oraz Hasła, w tym również odpowiedzialność za ewentualne naruszenie praw osób trzecich w związku z wyborem Nazwy Użytkownika i Hasła. Użytkownik
                ponosi również wyłączną odpowiedzialność związaną z ujawnieniem innym osobom swojego Hasła.
              </p>

              <h5>V. Prawa autorskie do zamieszczanych Treści oraz zgłoszenie naruszenia.</h5>
              <p>
                <b>5.1.</b> Użytkownik oświadcza, że w zakresie niezbędnym do korzystania z Serwisu oraz w ramach Treści, do których zamieszcza odniesienia (linki) dysponuje:
              </p>
              <ul>
                <li> autorskimi prawami majątkowymi oraz prawami pokrewnymi do Treści stanowiących utwory w rozumieniu Ustawy o prawie autorskim i prawach pokrewnych,</li>
                <li> prawami wyłącznymi w zakresie własności przemysłowej,</li>
                <li> prawami w zakresie wykorzystywania wizerunku artystów wykonawców oraz</li>
                <li> prawami do oznaczania tytułami ww. utworów składających się na Treści oraz nazwiskami lub nazwami artystów wykonawców lub ich zespołów.</li>
              </ul>

              <p>
                <b>5.2.</b> Do zamieszczania przez Użytkownika odniesień do Treści w ramach Serwisu dochodzi za pośrednictwem Konta Użytkownika.
              </p>
              <p>
                <b>5.3.</b> Użytkownik ponosi wyłączną odpowiedzialność z tytułu zamieszczenia w ramach Serwisu odniesień do Treści, Komentarzy oraz Nazwy Użytkownika jak również za ich charakter. W szczególności nie mogą one naruszać dóbr osobistych i praw wyłącznych osób trzecich (m.in. autorskich
                praw majątkowych), a także postanowień niniejszego Regulaminu oraz przepisów obowiązującego na terytorium Rzeczypospolitej Polskiej prawa.
              </p>
              <p>
                <b>5.4.</b> W szczególności zabronione jest zamieszczanie w ramach Serwisu odniesień do Treści, Komentarzy oraz Nazw Użytkownika, które:
              </p>
              <ul>
                <li> byłyby zamieszczane w ramach Serwisu w złej wierze, np. z zamiarem naruszenia dóbr osobistych osób trzecich oraz renomy Usługodawcy;</li>
                <li> byłyby obraźliwe bądź stanowiłyby lub mogłyby być uznane za groźbę skierowaną do innych osób, zawierałyby słownictwo naruszające dobre obyczaje (np. poprzez użycie wulgaryzmów lub określeń powszechnie uznawanych za obraźliwe;</li>
                <li> naruszałyby jakiekolwiek prawa osób trzecich, a w szczególności prawa pozostałych Użytkowników Serwisu,</li>
                <li> naruszałyby prawa związane z ochroną praw autorskich i praw pokrewnych, ochroną praw własności przemysłowej, tajemnicą przedsiębiorstwa lub mające związek ze zobowiązaniami o zachowaniu poufności,</li>
                <li>
                  naruszałyby w inny sposób postanowienia Regulaminu, przepisy obowiązującego prawa, normy społeczne lub obyczajowe (np. zawierały treści propagujące przemoc, treści o charakterze pornograficznym, nawołujące do nienawiści rasowej, wyznaniowej, etnicznej, naruszające uczucia
                  religijne).
                </li>
              </ul>
              <p>
                <b>5.5.</b> W przypadku powzięcia przez Użytkownika lub osobę trzecią informacji o fakcie zamieszczenia w ramach Serwisu Treści, Komentarzy lub Nazwy Użytkownika naruszających postanowienia niniejszego Regulaminu, prawa osób trzecich (m.in. autorskie prawa majątkowe) oraz przepisów
                obowiązującego na terytorium Rzeczypospolitej Polskiej prawa, Użytkownik lub osoba trzecia powinna niezwłocznie zgłosić taki fakt, kontaktując się z Serwisem pod adresem hello@uxu.pl
              </p>
              <p>
                <b>5.6.</b> W treści Zgłoszenia naruszenia, o którym mowa w 5.6 powyżej należy podać co najmniej dane podmiotu dokonującego ww. zgłoszenia, określić charakter naruszenia oraz wskazać Treści, Komentarze lub Nazwę Użytkownika, których dane Zgłoszenie naruszenia ma dotyczyć w sposób
                możliwy na ich identyfikację w ramach Serwisu.
              </p>
              <p>
                <b>5.7.</b> Usługodawca nie ponosi odpowiedzialności za charakter zamieszczanych przez Użytkowników odniesień do Treści, Komentarzy oraz Nazw Użytkownika. Nie dokonuje również ich bieżącej weryfikacji pod kątem zgodności z Regulaminem i przepisami obowiązującego prawa. Czynności w
                zakresie weryfikacji charakteru prawnego Treści, Komentarzy lub Nazw Użytkownika podejmowane są przez Usługodawcę dopiero wraz z otrzymaniem prawidłowo wypełnionego Zgłoszenia naruszenia.
              </p>
              <p>
                <b>5.8.</b> W przypadku stwierdzenia przez Usługodawcę, że dany Użytkownik dokonał zamieszczenia w ramach Serwisu Treści, Komentarzy lub Nazwy Użytkownika niezgodnych z postanowieniami Regulaminu jest on uprawniony do niezwłocznego:
              </p>

              <ul>
                <li>a) usunięcia odniesienia do Treści, Komentarzy lub Nazwy Użytkownika, których dotyczyło Zgłoszenie naruszenia i/lub</li>
                <li>b) usunięcia Konta Użytkownika, którego dotyczyło Zgłoszenie naruszenia oraz</li>
                <li>c) uniemożliwienia Użytkownikowi, którego dotyczy Zgłoszenie naruszenia dokonania ponownej Rejestracji i</li>
                <li>d) uniemożliwienia Użytkownikowi, którego dotyczy Zgłoszenie naruszenia ponownego zawarcia Treści, Komentarza lub Nazwy Użytkownika w ramach Serwisu.</li>
              </ul>
              <p>
                <b>5.9.</b> Użytkownik, poprzez zamieszczenie w ramach Serwisu odniesienia do Treści, wyraża tym samym zgodę na wykorzystanie ich przez pozostałych Użytkowników, w zakresie ich dozwolonego użytku osobistego.
              </p>
              <p>
                <b>5.10.</b> Usługodawca zastrzega sobie prawo do modyfikowania tych odniesień do Treści, Komentarzy lub Nazw Użytkownika oraz ich usuwania, co do których, opierając się na własnych źródłach lub opierając się na doniesieniach Użytkowników bądź innych osób lub organów stwierdzono, że
                mogą one stanowić naruszenie niniejszego Regulaminu, obowiązujących przepisów prawa lub stanowić uszczerbek dla dobrego imienia Serwisu. Niemniej jednak każdy Użytkownik powinien mieć na względzie, że Usługodawca nie prowadzi kontroli odniesień do Treści i Komentarzy zamieszczanych
                przez Użytkowników w ramach Serwisu.
              </p>
              <p>
                <b>5.11.</b> Użytkownik nie jest uprawniony do zamieszczania w ramach Serwisu danych osobowych osób trzecich oraz rozpowszechniania wizerunku osób trzecich bez wymaganego prawem zezwolenia lub zgody osoby trzeciej. Użytkownik oświadcza, iż osoby, których wizerunek zamieścił w
                Serwisie udzieliły mu na to odpowiedniego zezwolenia.
              </p>
              <p>
                <b>5.12.</b> Użytkownik oświadcza, że zamieszczenie za pośrednictwem Konta oraz udostępnienie w ramach Serwisu danych osobowych, wizerunku oraz informacji, dotyczących osób trzecich nastąpiło w sposób legalny, dobrowolny oraz za zgodą osób, których one dotyczą.
              </p>
              <p>
                <b>5.13.</b> Użytkownik, zamieszczając w ramach Serwisu dane, wizerunek lub inne Treści, wyraża zgodę na wgląd w te informacje przez innych Użytkowników oraz Usługodawcę.
              </p>
              <p>
                <b>5.14.</b> Użytkownik wyraża zgodę na nieodpłatne wykorzystywanie przez Usługodawcę umieszczonych przez Użytkownika w Serwisie na stronach dostępnych dla innych użytkowników Treści, wyłącznie w zakresie, w jakim stanowią one element całości obrazu (tzw. screenshot) dostępnej dla
                wszystkich innych Użytkowników strony Serwisu, do udostępniania lub publikacji, wyłącznie jako fragment całości obrazu strony Serwisu, w Internecie oraz w materiałach promocyjnych dotyczących Serwisu w Internecie, w prasie oraz w telewizji, a także ich rozpowszechniania za pomocą
                sieci telekomunikacyjnych, w celu informacji o działaniu Serwisu i promocji jego działalności, w sposób nienaruszający dóbr osobistych, w tym wizerunku Użytkownika.
              </p>
              <p>
                <b>5.15.</b> Treści, Komentarze oraz Nazwy Użytkownika zamieszczane przez Użytkowników w ramach Serwisu nie wyrażają poglądów Usługodawcy oraz nie powinny być utożsamiane z jego działalnością.
              </p>
              <p>
                <b>5.16.</b> W przypadku gdy w wyniku zawarcia przez Użytkownika w ramach Serwisu odniesienia do Treści, Komentarzy lub Nazwy Użytkownika dojdzie do naruszenia przepisów obowiązującego prawa oraz praw osób trzecich, w tym m.in. uprawnionych z tytułu autorskich praw majątkowych lub
                praw pokrewnych i praw własności przemysłowej przez Użytkownika lub Usługodawcę działającego w zaufaniu do oświadczeń Użytkownika złożonych poprzez akceptację niniejszego Regulaminu, Użytkownik jest zobowiązany do pełnego pokrycia szkody poniesionej w związku z tym naruszeniem przez
                Usługodawcę.
              </p>
              <p>
                <b>5.17.</b> W przypadku, jeżeli Usługodawca zostanie zobowiązany - zgodnie z obowiązującym prawem - do zapłaty jakiegokolwiek odszkodowania, kary lub grzywny w związku z roszczeniami osób trzecich, o których mowa w 5.16. powyżej, Użytkownik zobowiązany jest niezwłocznie zwrócić
                Usługodawcy równowartość tego odszkodowania, kary lub grzywny. Użytkownik zobowiązany jest również niezwłocznie pokryć wszelkie straty lub zwrócić udokumentowane koszty, jakie Usługodawca poniósł w związku z ujawnieniem uzasadnionych roszczeń osób trzecich, o których mowa powyżej.
              </p>

              <h5>VI. Zasady korzystania z Serwisu.</h5>
              <p>
                <b>6.1.</b> Użytkownik zobowiązany jest w szczególności do:
              </p>
              <p>
                <b>6.1.1.</b> korzystania z Serwisu w sposób nie zakłócający jego funkcjonowania, w szczególności poprzez użycie określonego oprogramowania lub urządzeń,
              </p>
              <p>
                <b>6.1.2.</b> niepodejmowania działań takich jak: rozsyłanie lub/i umieszczanie w Serwisie niezamówionej informacji handlowej; kilkukrotna rejestracja Użytkownika w Serwisie; korzystanie z Kont innych Użytkowników lub udostępnianie swojego Konta innym Użytkownikom; podejmowanie
                czynności informatycznych lub wszelkich innych mających na celu wejście w posiadanie Haseł innych Użytkowników,
              </p>
              <p>
                <b>6.1.3.</b> korzystania z Serwisu w sposób nieuciążliwy dla innych Użytkowników oraz dla Usługodawcy, z poszanowaniem ich dóbr osobistych (w tym prawa do prywatności) i wszelkich przysługujących im praw,
              </p>
              <p>
                <b>6.1.4. </b>korzystania z wszelkich Treści zamieszczonych w ramach Serwisu jedynie w zakresie własnego użytku osobistego. Wykorzystywanie Treści w innym zakresie jest dopuszczalne wyłącznie na podstawie wyraźnej zgody udzielonej przez uprawnioną osobę.
              </p>
              <p>
                <b>6.2.</b> Konta nie użytkowane przez okres dłuższy niż 6 miesięcy od ostatniego zalogowania, mogą zostać usunięte bez uprzedniego powiadomienia.
              </p>
              <p>
                <b>6.3.</b> Użytkownik ponosi wyłączną odpowiedzialność za czynności wykonane w ramach Serwisu przy pomocy ważnej Nazwy Użytkownika oraz Hasła.
              </p>
              <p>
                <b>6.4. </b>Użytkownik jest zobowiązany niezwłocznie powiadomić Usługodawcę o każdym przypadku naruszenia jego praw do Nazwy Użytkownika lub/i Hasła, jak również o jakimkolwiek przypadku naruszenia zasad określonych w niniejszym Regulaminie, w szczególności naruszenia zasad
                związanych z zamieszczaniem w Serwisie Treści.
              </p>
              <p>
                <b>6.5.</b> Usługodawca może pozbawić Użytkownika prawa do korzystania z Serwisu (blokując lub usuwając jego Konto), jak również może ograniczyć jego dostęp do części lub całości zasobów Serwisu lub usług oferowanych w ramach Serwisu, ze skutkiem natychmiastowym, w przypadku
                naruszenia przez Użytkownika niniejszego Regulaminu, w szczególności, gdy Użytkownik:
              </p>
              <p>
                <b>6.5.1.</b> podał w trakcie Rejestracji w Serwisie dane niezgodne z prawdą, niedokładne lub nieaktualne, wprowadzające w błąd lub naruszające prawa osób trzecich,
              </p>
              <p>
                <b>6.5.2.</b> zamieścił w ramach Serwisu Treści, Komentarze lub Nazwę Użytkownika niezgodne z obowiązującym prawem lub postanowieniami niniejszego Regulaminu,
              </p>
              <p>
                <b>6.5.3.</b> dopuści się za pośrednictwem Serwisu naruszenia dóbr osobistych osób trzecich, w szczególności dóbr osobistych innych Użytkowników Serwisu,
              </p>
              <p>
                <b>6.5.4.</b> dopuści się innych zachowań, które zostaną uznane przez Usługodawcę za zachowania naganne, niezgodne z obowiązującymi przepisami prawa lub/i ogólnymi zasadami korzystania z sieci Internet, za sprzeczne z celami utworzenia Serwisu lub godzące w dobre imię Usługodawcy.
              </p>
              <p>
                <b>6.6.</b> Osoba, która została pozbawiona prawa do korzystania z Serwisu, nie może dokonać powtórnej Rejestracji w Serwisie bez uprzedniej zgody Usługodawcy.
              </p>

              <h5>VII. Reklamacje.</h5>
              <p>
                <b>7.1.</b> W trakcie korzystania z Usługi, Użytkownik zobowiązany jest:
              </p>
              <p>
                <b>7.1.1.</b> niezwłocznie powiadomić Usługodawcę o wszelkich nieprawidłowościach, usterkach lub przerwach w funkcjonowaniu Serwisu oraz o niewłaściwej jakości Usługi,
              </p>
              <p>
                <b>7.1.2.</b> utrzymywać w poufności Hasła oraz dołożyć najwyższej staranności w celu uniemożliwienia osobom trzecim wejście w posiadanie Hasła,
              </p>
              <p>
                <b>7.1.3.</b> przestrzegać przepisów prawa oraz treści Regulaminu, a w szczególności nie dostarczać/przekazywać treści zabronionych przez prawo.
              </p>
              <p>
                <b>7.2.</b> Nieprawidłowości związane z funkcjonowaniem Usługi Użytkownik może zgłaszać na adres: hello@uxu.pl
              </p>
              <p>
                <b>7.3.</b> Za pośrednictwem Serwisu Usługodawca umożliwia:
              </p>
              <p>
                <b>7.3.1.</b> uzyskiwanie informacji o Serwisie,
              </p>
              <p>
                <b>7.3.2.</b>przyjmowanie zgłoszeń usterek i Awarii
              </p>
              <p>
                <b>7.3.3.</b> pomoc w dokonywaniu przez Użytkownika Rejestracji,
              </p>
              <p>
                <b>7.3.4.</b> złożenie reklamacji.
              </p>
              <p>
                <b>7.4.</b> Użytkownikowi przysługuje prawo do złożenia reklamacji w terminie miesiąca od dnia, w którym Usługa była nienależycie wykonana. Reklamację złożoną po upływie terminu określonego w zdaniu pierwszym, pozostawia się bez rozpoznania, o czym Usługodawca niezwłocznie powiadamia
                Użytkownika.
              </p>
              <p>
                <b>7.5.</b> Reklamacja może być złożona pisemnie lub przy wykorzystaniu innych środków porozumiewania się na odległość, w tym drogą elektroniczną, o ile nie stoją temu na przeszkodzie techniczne możliwości.
              </p>
              <p>
                <b>7.6.</b> Usługodawca zastrzega sobie prawo do ingerencji w Konto Użytkownika, w zakresie koniecznym dla usunięcia zakłócenia lub problemu w funkcjonowaniu Konta lub Serwisu.
              </p>
              <p>
                <b>7.7.</b> Za datę złożenia reklamacji uznaje się datę wpływu reklamacji do Usługodawcy.
              </p>

              <h5>VIII. Odpowiedzialność.</h5>
              <p>
                <b>8.1.</b> Usługodawca nie ponosi odpowiedzialności za problemy techniczne bądź ograniczenia techniczne występujące w sprzęcie komputerowym, systemie teleinformatycznym oraz infrastrukturze telekomunikacyjnej, z którego korzysta Użytkownik, a które uniemożliwiają Użytkownikowi
                korzystanie z Serwisu i oferowanej za jego pośrednictwem Usługi.
              </p>
              <p>
                <b>8.2.</b> Użytkownik jest wyłącznie odpowiedzialny za zapewnienie technicznej zgodności pomiędzy wykorzystywanym przez siebie w celu korzystania z Usługi sprzętem komputerowym i systemem teleinformatycznym, a Serwisem.
              </p>
              <p>
                <b>8.3.</b> Użytkownik ponosi odpowiedzialność za działania lub zaniechania innego podmiotu, któremu umożliwia korzystanie z Usługi, tak jak za działania lub zaniechania własne.
              </p>
              <p>
                <b>8.4.</b> Usługodawca nie ponosi odpowiedzialności za:
              </p>

              <p>
                <b>8.4.1.</b> utratę Treści spowodowaną awarią sprzętu, systemu lub też innymi okolicznościami z przyczyn nieleżących po stronie Usługodawcy oraz
              </p>
              <p>
                <b>8.4.2.</b> za treść reklam zamieszczanych w Serwisie przez podmioty trzecie, a także sposób, w jaki publikowane Treści będą wykorzystywane przez Użytkowników.
              </p>
              <p>
                <b>8.5.</b> Usługodawca nie ponosi odpowiedzialności za niedostępność Serwisu z powodu Siły Wyższej. Usługodawca zastrzega sobie ponadto możliwość zawieszenia lub zakończenia świadczenia usług w Serwisie w dowolnym momencie, z jakiejkolwiek przyczyny, w szczególności z uwagi na
                konieczność konserwacji, przeglądu lub rozbudowy bazy technicznej Serwisu w przypadku, gdy nie naruszy to praw Użytkownika.
              </p>

              <h5>IX. Polityka prywatności w Serwisie.</h5>
              <p>
                <b>9.1.</b> Dane osobowe Użytkowników przetwarzane są przez Usługodawcę w celu prowadzenia Serwisu, w szczególności zapewnienia sprawnego funkcjonowania Serwisu, jak również w celu umożliwienia świadczenia Użytkownikom Usługi oferowanej w ramach Serwisu.
              </p>
              <p>
                <b>9.2.</b> Usługodawca zastrzega sobie prawo ujawnienia wybranych informacji dotyczących Użytkownika właściwym organom bądź osobom trzecim, które zgłoszą żądanie udzielenia takich informacji, w oparciu o odpowiednią podstawę prawną oraz zgodnie z przepisami obowiązującego prawa.
                Poza przypadkami wskazanymi w zdaniu poprzednim informacje dotyczące Użytkownika nie zostaną ujawnione żadnej osobie trzeciej, bez zgody Użytkownika.
              </p>
              <p>
                <b>9.3.</b> Dane dotyczące Użytkownika, w tym dane osobowe, będą przechowywane przez okres nie dłuższy niż to jest konieczne w związku z korzystaniem z Serwisu, a następnie zostaną usunięte z systemu.
              </p>
              <p>
                <b>9.4.</b> Każdy Użytkownik ma prawo dostępu do treści swoich danych osobowych, prawo ich poprawiania, uzupełniania oraz prawo żądania zaprzestania przetwarzania danych i ich usunięcia, zwracając się w tym celu pisemnie do Usługodawcy. W przypadku usunięcia danych warunkujących
                korzystanie z wyodrębnionych zasobów Serwisu oraz usług oferowanych w jego ramach Użytkownik traci możliwość korzystania z nich.
              </p>
              <p>
                <b>9.5.</b> Usługodawca informuje, że z momentem połączenia się przez Użytkownika z Serwisem w logach systemowych Serwisu pojawia się informacja o numerze (w tym IP) i rodzaju urządzenia końcowego Użytkownika, z którego Użytkownik łączy się z Serwisem. Usługodawca informuje, że
                będzie przetwarzał, zgodnie z przepisami prawa, również dane dotyczące numeru (w tym IP) i rodzaju urządzenia końcowego Użytkownika i czasu połączenia Użytkownika z Serwisem oraz inne dane eksploatacyjne dotyczące aktywności Użytkownika w Serwisie. Dane te przetwarzane są w
                szczególności w celach technicznych oraz do zbierania ogólnych informacji statystycznych.
              </p>
              <p>
                <b>9.6.</b> Usługodawca wykorzystuje pliki typu cookie w celu gromadzenia informacji związanych z korzystaniem z Serwisu przez Użytkownika. Pliki typu cookies umożliwiają zidentyfikowanie komputera Użytkownika, w celu zapewnienia, że jego Konto Użytkownika jest używane przez osobę,
                która wprowadza do niego poprawną Nazwę Użytkownika i przyporządkowane mu Hasło.
              </p>
              <p>
                <b>9.7.</b> Usługodawca informuje, że wskutek Rejestracji przez Użytkownika w Serwisie zgodnie z Regulaminem, dane podane przez Użytkownika podczas rejestracji, a także dane umieszczone przez Użytkownika na stronach Serwisu po rejestracji będą udostępnione wszystkim osobom
                odwiedzającym stronę Serwisu. Na tej samej zasadzie zarejestrowany Użytkownik będzie miał dostęp do danych umieszczonych w Serwisie przez innych Użytkowników.
              </p>

              <p>
                <b>9.8.</b> Usługodawca zwraca uwagę, że przetwarzanie (w tym udostępnianie) przez Użytkownika w Serwisie danych osobowych innych osób, niestanowiące przetwarzania wyłącznie w celach osobistych lub domowych, może wiązać się z obowiązkiem spełnienia przez Użytkownika obowiązków
                wynikających z Ustawy o ochronie danych osobowych.
              </p>
              <p>
                <b>9.9.</b> Jeżeli Użytkownik umieszcza w Serwisie jakiekolwiek dane osobowe innych osób (w tym ich imię i nazwisko, wizerunek, adres, numer telefonu lub adres e-mail), może to uczynić jedynie pod warunkiem nienaruszenia przepisów obowiązującego prawa i dóbr osobistych tych osób.
              </p>
              <p>
                <b>9.10.</b> Usługodawca oświadcza, iż dołoży starań, aby zapewnić Użytkownikom wysoki poziom bezpieczeństwa w zakresie korzystania z Serwisu. Wszelkie zdarzenia mające wpływ na bezpieczeństwo przekazu informacji, w tym również dotyczące podejrzenia udostępniania plików zawierających
                wirusy i innych plików o podobnym charakterze lub innych aniżeli pliki treści o podobnym charakterze, należy zgłaszać Usługodawcy na konto hello@uxu.pl
              </p>
              <p>
                <b>9.11.</b> Jednocześnie Usługodawca oświadcza, że stosowane przy ochronie Serwisu nowoczesne techniki zabezpieczenia Kont i dostępu do danych i Treści służą zapewnieniu jak najwyższego poziomu bezpieczeństwa, jednak ze względów technicznych nie mogą gwarantować w pełni tajemnicy
                składowanych i przesyłanych informacji.
              </p>

              <p>
                <b>9.12.</b> Użytkownik uprawniony jest do korzystania z danych udostępnionych przez innych Użytkowników Serwisu wyłącznie w związku z korzystaniem z Serwisu, chyba że uzyska zgodę od tych Użytkowników na przetwarzanie ich danych w zakresie lub celu wykraczającym poza korzystanie z
                Serwisu.
              </p>

              <h5>X. Postanowienia końcowe.</h5>
              <p>
                <b>10.1.</b> Usługodawcy przysługuje prawo okresowego zawieszenia świadczenia Usługi w Serwisie w stosunku do wszystkich lub niektórych Kont Użytkowników w związku z przeprowadzaniem prac konserwacyjnych.
              </p>
              <p>
                <b>10.2.</b> Usługodawca zastrzega sobie prawo do całkowitego zaprzestania udostępniania Serwisu bez podania przyczyn po uprzednim poinformowaniu Użytkowników w drodze mailowej o podjęciu takiej decyzji co najmniej 14 (czternaście) dni wcześniej.
              </p>
              <p>
                <b>10.3.</b> Usługodawca ma prawo odstąpić od świadczenia Usługi w przypadku naruszenia przez Użytkownika Regulaminu, w szczególności zamieszczenia Treści o charakterze niedozwolonym, czyli sprzecznych z przepisami obowiązującego prawa lub niniejszego Regulaminu.
              </p>
              <p>
                <b>0.4.</b> Ewentualne spory powstałe pomiędzy Usługodawcą, a Użytkownikiem, który jest Konsumentem zostają poddane sądom właściwym zgodnie z postanowieniami przepisów Kodeksu postępowania cywilnego.
              </p>
              <p>
                <b>10.5.</b> Uznanie poszczególnych postanowień niniejszego Regulaminu w sposób przewidziany prawem za nieważne bądź nieskuteczne, nie wpływa na ważność czy skuteczność pozostałych postanowień Regulaminu. W miejsce nieważnego postanowienia zastosowana będzie reguła, która jest
                najbliższa celom nieważnego postanowienia i całego niniejszego Regulaminu.
              </p>
              <p>
                <b>10.6.</b> W sprawach nieuregulowanych w niniejszym Regulaminie mają zastosowanie przepisy Kodeksu cywilnego, przepisy Ustawy z dnia 18 lipca 2002r. o świadczeniu usług drogą elektroniczną (Dz. U. z 2002 r. Nr 144, poz. 1204 z późn. zm.) oraz Ustawy o prawie autorskim i prawach
                pokrewnych z dnia 4 lutego 1994 roku (tekst jedn. z dnia 17 maja 2006r. - Dz.U. Nr 90, poz. 631).
              </p>

              <p>
                <b>10.7.</b> Usługodawca zastrzega sobie prawo do zmiany niniejszego Regulaminu w dowolnym czasie. Zmiany Regulaminu obowiązują od momentu umieszczenia ich na stronie internetowej Serwisu. Zmiany uważane są za zaakceptowane przez Użytkownika z momentem skorzystania przez niego z
                Serwisu.
              </p>
              <p>
                <b>10.8.</b> Aktualny Regulamin jest publikowany na stronie internetowej Serwisu oraz dostarczany nieodpłatnie Użytkownikowi, a także na każde jego żądanie.
              </p>
              <p>
                <b>10.9.</b> Regulamin wchodzi w życie z dniem 22.06.2022 r.
              </p>
            </SectionText>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Contact;

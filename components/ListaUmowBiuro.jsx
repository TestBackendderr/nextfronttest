import React, { useState } from "react";

const ListaUmowBiuro = () => {
  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: "ascending",
  });

  const mockData = [
    {
      id: 1,
      imieNazwisko: "Jan Kowalski",
      telefon: "123-456-789",
      tel2: "987-654-321",
      kontaktowyTel: "555-666-777",
      email: "jan.kowalski@example.com",
      peselNip: "12345678901",
      dowod: "ABC123456",
      rodzajKlienta: "Osoba fizyczna",
      handlowiec: "Bartek Test",
      dataPodpisania: "2025-05-08",
      numerUmowy: "UM001/2025",
      operatorOsd: "PGE Dystrybucja",
      czyWlascicielLicznika: "Tak",
      ulica: "Zielona 12",
      miejscowosc: "Warszawa",
      kodPocztowy: "00-001",
      powiat: "Warszawski",
      wojewodztwo: "Mazowieckie",
      adresImie: "Jan Kowalski",
      adresUlica: "Zielona 12",
      adresNrDomu: "12",
      adresMiejscowosc: "Warszawa",
      adresKodPocztowy: "00-001",
      adresPowiat: "Warszawski",
      adresWojewodztwo: "Mazowieckie",
      cenaBrutto: 15000,
      pierwszaWplata: 5000,
      sposobPlatnosci1: "Przelew",
      czyJednaWplata: "Nie",
      drugaWplata: 10000,
      sposobPlatnosci2: "Kredyt",
      powierzchniaDomu: 120,
      przedaneProdukty: ["Fotowoltaika", "Pompa Ciepła"],
      czyPosiadaInstalacje: "Tak",
      miejsceInstalacji: "Adres klienta",
      miUlica: "Zielona 12",
      miNrDomu: "12",
      miMiejscowosc: "Warszawa",
      miKod: "00-001",
      miPowiat: "Warszawski",
      miWojewodztwo: "Mazowieckie",
      miejsceMontazu: "Dach budynku mieszkalnego",
      lancuchy: "2",
      licznikLokalizacja: "w budynku mieszkalnym w środku",
      zasiegInternetu: "WiFi",
      dwieKreski: "Tak",
      odgromowa: "Nie",
      numerDzialki: "123/45",
      mocPrzylaczeniowa: "10 kW",
      zabezpieczenie: "20A",
      fazowa: "Trójfazowa",
      taryfa: "G11",
      numerLicznika: "123456",
      numerPpm: "PPE123",
      uwagiHandlowca: "Klient zainteresowany instalacją fotowoltaiczną na dachu, wymaga konsultacji technicznej i wyceny.",
      banerZamontowany: "Tak",
      handlowiecWynagrodzenie: "Bartek Test",
      status: "Dodana",
    },
    {
      id: 2,
      imieNazwisko: "Anna Nowak",
      telefon: "222-333-444",
      tel2: "",
      kontaktowyTel: "",
      email: "anna.nowak@example.com",
      peselNip: "98765432109",
      dowod: "XYZ987654",
      rodzajKlienta: "Działalność gospodarcza",
      handlowiec: "Marcin Test",
      dataPodpisania: "2025-05-07",
      numerUmowy: "UM002/2025",
      operatorOsd: "Tauron Dystrybucja",
      czyWlascicielLicznika: "Nie",
      ulica: "Słoneczna 5",
      miejscowosc: "Kraków",
      kodPocztowy: "30-002",
      powiat: "Krakowski",
      wojewodztwo: "Małopolskie",
      adresImie: "Anna Nowak",
      adresUlica: "Słoneczna 5",
      adresNrDomu: "5",
      adresMiejscowosc: "Kraków",
      adresKodPocztowy: "30-002",
      adresPowiat: "Krakowski",
      adresWojewodztwo: "Małopolskie",
      cenaBrutto: 20000,
      pierwszaWplata: 8000,
      sposobPlatnosci1: "Gotówka",
      czyJednaWplata: "Tak",
      drugaWplata: null,
      sposobPlatnosci2: null,
      powierzchniaDomu: 150,
      przedaneProdukty: ["Klimatyzacje"],
      czyPosiadaInstalacje: "Nie",
      miejsceInstalacji: "Adres korespondencyjny",
      miUlica: "Słoneczna 5",
      miNrDomu: "5",
      miMiejscowosc: "Kraków",
      miKod: "30-002",
      miPowiat: "Krakowski",
      miWojewodztwo: "Małopolskie",
      miejsceMontazu: "Grunt",
      lancuchy: "1",
      licznikLokalizacja: "na zewnątrz",
      zasiegInternetu: "Ethernet",
      dwieKreski: "Nie",
      odgromowa: "Tak",
      numerDzialki: "678/90",
      mocPrzylaczeniowa: "15 kW",
      zabezpieczenie: "25A",
      fazowa: "Jednofazowa",
      taryfa: "G12",
      numerLicznika: "654321",
      numerPpm: "PPE456",
      uwagiHandlowca: "Umowa o instalację klimatyzacji w budynku biurowym. Potwierdzone szczegóły montażu.",
      banerZamontowany: "Nie",
      handlowiecWynagrodzenie: "Marcin Test",
      status: "Sprawdzona",
    },
  ];

  const [data, setData] = useState(mockData);

  const handleSort = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });

    const sortedData = [...data].sort((a, b) => {
      let aValue = a[key];
      let bValue = b[key];

      if (key === "przedaneProdukty") {
        aValue = aValue.join(", ");
        bValue = bValue.join(", ");
      }

      if (key === "dataPodpisania") {
        aValue = new Date(aValue);
        bValue = new Date(bValue);
      }

      if (aValue == null) aValue = "";
      if (bValue == null) bValue = "";

      if (aValue < bValue) return direction === "ascending" ? -1 : 1;
      if (aValue > bValue) return direction === "ascending" ? 1 : -1;
      return 0;
    });
    setData(sortedData);
  };

  const truncateText = (text, maxLength) => {
    if (!text) return "";
    return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
  };

  const getSortIcon = (key) => {
    if (sortConfig.key === key) {
      return sortConfig.direction === "ascending" ? " ↑" : " ↓";
    }
    return "";
  };

  return (
    <div className="lista-umow-biuro">
      <h2>Lista Umów - Biuro</h2>
      <div className="table-container">
        <div className="umowa-header sticky">
          <span onClick={() => handleSort("imieNazwisko")}>
            Imię i nazwisko{getSortIcon("imieNazwisko")}
          </span>
          <span onClick={() => handleSort("telefon")}>
            Telefon{getSortIcon("telefon")}
          </span>
          <span onClick={() => handleSort("tel2")}>
            Telefon 2{getSortIcon("tel2")}
          </span>
          <span onClick={() => handleSort("kontaktowyTel")}>
            Telefon kontaktowy{getSortIcon("kontaktowyTel")}
          </span>
          <span onClick={() => handleSort("email")}>
            Email{getSortIcon("email")}
          </span>
          <span onClick={() => handleSort("peselNip")}>
            PESEL/NIP{getSortIcon("peselNip")}
          </span>
          <span onClick={() => handleSort("dowod")}>
            Dowód{getSortIcon("dowod")}
          </span>
          <span onClick={() => handleSort("rodzajKlienta")}>
            Rodzaj klienta{getSortIcon("rodzajKlienta")}
          </span>
          <span onClick={() => handleSort("handlowiec")}>
            Handlowiec{getSortIcon("handlowiec")}
          </span>
          <span onClick={() => handleSort("dataPodpisania")}>
            Data podpisania{getSortIcon("dataPodpisania")}
          </span>
          <span onClick={() => handleSort("numerUmowy")}>
            Numer umowy{getSortIcon("numerUmowy")}
          </span>
          <span onClick={() => handleSort("operatorOsd")}>
            Operator OSD{getSortIcon("operatorOsd")}
          </span>
          <span onClick={() => handleSort("czyWlascicielLicznika")}>
            Właściciel licznika{getSortIcon("czyWlascicielLicznika")}
          </span>
          <span onClick={() => handleSort("ulica")}>
            Ulica (klient){getSortIcon("ulica")}
          </span>
          <span onClick={() => handleSort("miejscowosc")}>
            Miejscowość (klient){getSortIcon("miejscowosc")}
          </span>
          <span onClick={() => handleSort("kodPocztowy")}>
            Kod pocztowy (klient){getSortIcon("kodPocztowy")}
          </span>
          <span onClick={() => handleSort("powiat")}>
            Powiat (klient){getSortIcon("powiat")}
          </span>
          <span onClick={() => handleSort("wojewodztwo")}>
            Województwo (klient){getSortIcon("wojewodztwo")}
          </span>
          <span onClick={() => handleSort("adresImie")}>
            Adres imię{getSortIcon("adresImie")}
          </span>
          <span onClick={() => handleSort("adresUlica")}>
            Adres ulica{getSortIcon("adresUlica")}
          </span>
          <span onClick={() => handleSort("adresNrDomu")}>
            Adres nr domu{getSortIcon("adresNrDomu")}
          </span>
          <span onClick={() => handleSort("adresMiejscowosc")}>
            Adres miejscowość{getSortIcon("adresMiejscowosc")}
          </span>
          <span onClick={() => handleSort("adresKodPocztowy")}>
            Adres kod pocztowy{getSortIcon("adresKodPocztowy")}
          </span>
          <span onClick={() => handleSort("adresPowiat")}>
            Adres powiat{getSortIcon("adresPowiat")}
          </span>
          <span onClick={() => handleSort("adresWojewodztwo")}>
            Adres województwo{getSortIcon("adresWojewodztwo")}
          </span>
          <span onClick={() => handleSort("cenaBrutto")}>
            Cena brutto{getSortIcon("cenaBrutto")}
          </span>
          <span onClick={() => handleSort("pierwszaWplata")}>
            1. wpłata{getSortIcon("pierwszaWplata")}
          </span>
          <span onClick={() => handleSort("sposobPlatnosci1")}>
            Sposób płatności 1{getSortIcon("sposobPlatnosci1")}
          </span>
          <span onClick={() => handleSort("czyJednaWplata")}>
            Jedna wpłata?{getSortIcon("czyJednaWplata")}
          </span>
          <span onClick={() => handleSort("drugaWplata")}>
            2. wpłata{getSortIcon("drugaWplata")}
          </span>
          <span onClick={() => handleSort("sposobPlatnosci2")}>
            Sposób płatności 2{getSortIcon("sposobPlatnosci2")}
          </span>
          <span onClick={() => handleSort("powierzchniaDomu")}>
            Powierzchnia domu{getSortIcon("powierzchniaDomu")}
          </span>
          <span onClick={() => handleSort("przedaneProdukty")}>
            Przedane produkty{getSortIcon("przedaneProdukty")}
          </span>
          <span onClick={() => handleSort("czyPosiadaInstalacje")}>
            Posiada instalację?{getSortIcon("czyPosiadaInstalacje")}
          </span>
          <span onClick={() => handleSort("miejsceInstalacji")}>
            Miejsce instalacji{getSortIcon("miejsceInstalacji")}
          </span>
          <span onClick={() => handleSort("miUlica")}>
            Ulica (instalacja){getSortIcon("miUlica")}
          </span>
          <span onClick={() => handleSort("miNrDomu")}>
            Nr domu (instalacja){getSortIcon("miNrDomu")}
          </span>
          <span onClick={() => handleSort("miMiejscowosc")}>
            Miejscowość (instalacja){getSortIcon("miMiejscowosc")}
          </span>
          <span onClick={() => handleSort("miKod")}>
            Kod pocztowy (instalacja){getSortIcon("miKod")}
          </span>
          <span onClick={() => handleSort("miPowiat")}>
            Powiat (instalacja){getSortIcon("miPowiat")}
          </span>
          <span onClick={() => handleSort("miWojewodztwo")}>
            Województwo (instalacja){getSortIcon("miWojewodztwo")}
          </span>
          <span onClick={() => handleSort("miejsceMontazu")}>
            Miejsce montażu{getSortIcon("miejsceMontazu")}
          </span>
          <span onClick={() => handleSort("lancuchy")}>
            Łańcuchy{getSortIcon("lancuchy")}
          </span>
          <span onClick={() => handleSort("licznikLokalizacja")}>
            Lokalizacja licznika{getSortIcon("licznikLokalizacja")}
          </span>
          <span onClick={() => handleSort("zasiegInternetu")}>
            Zasięg internetu{getSortIcon("zasiegInternetu")}
          </span>
          <span onClick={() => handleSort("dwieKreski")}>
            2 kreski?{getSortIcon("dwieKreski")}
          </span>
          <span onClick={() => handleSort("odgromowa")}>
            Instalacja odgromowa{getSortIcon("odgromowa")}
          </span>
          <span onClick={() => handleSort("numerDzialki")}>
            Numer działki{getSortIcon("numerDzialki")}
          </span>
          <span onClick={() => handleSort("mocPrzylaczeniowa")}>
            Moc przyłączeniowa{getSortIcon("mocPrzylaczeniowa")}
          </span>
          <span onClick={() => handleSort("zabezpieczenie")}>
            Zabezpieczenie{getSortIcon("zabezpieczenie")}
          </span>
          <span onClick={() => handleSort("fazowa")}>
            Fazowa{getSortIcon("fazowa")}
          </span>
          <span onClick={() => handleSort("taryfa")}>
            Taryfa{getSortIcon("taryfa")}
          </span>
          <span onClick={() => handleSort("numerLicznika")}>
            Numer licznika{getSortIcon("numerLicznika")}
          </span>
          <span onClick={() => handleSort("numerPpm")}>
            Numer PPM/PPE{getSortIcon("numerPpm")}
          </span>
          <span onClick={() => handleSort("uwagiHandlowca")}>
            Uwagi handlowca{getSortIcon("uwagiHandlowca")}
          </span>
          <span onClick={() => handleSort("banerZamontowany")}>
            Baner zamontowany{getSortIcon("banerZamontowany")}
          </span>
          <span onClick={() => handleSort("handlowiecWynagrodzenie")}>
            Handlowiec wynagrodzenie{getSortIcon("handlowiecWynagrodzenie")}
          </span>
          <span onClick={() => handleSort("status")}>
            Status{getSortIcon("status")}
          </span>
        </div>
        <div className="umowy-container">
          {data.map((row) => (
            <div key={row.id} className="umowa-card">
              <div className="umowa-content">
                <span>{row.imieNazwisko}</span>
                <span>{row.telefon}</span>
                <span>{row.tel2 || "-"}</span>
                <span>{row.kontaktowyTel || "-"}</span>
                <span>{row.email || "-"}</span>
                <span>{row.peselNip}</span>
                <span>{row.dowod}</span>
                <span>{row.rodzajKlienta}</span>
                <span>{row.handlowiec}</span>
                <span>{new Date(row.dataPodpisania).toLocaleDateString()}</span>
                <span>{row.numerUmowy}</span>
                <span>{row.operatorOsd}</span>
                <span>{row.czyWlascicielLicznika}</span>
                <span>{row.ulica}</span>
                <span>{row.miejscowosc}</span>
                <span>{row.kodPocztowy}</span>
                <span>{row.powiat}</span>
                <span>{row.wojewodztwo}</span>
                <span>{row.adresImie}</span>
                <span>{row.adresUlica}</span>
                <span>{row.adresNrDomu}</span>
                <span>{row.adresMiejscowosc}</span>
                <span>{row.adresKodPocztowy}</span>
                <span>{row.adresPowiat}</span>
                <span>{row.adresWojewodztwo}</span>
                <span>{row.cenaBrutto || "-"}</span>
                <span>{row.pierwszaWplata || "-"}</span>
                <span>{row.sposobPlatnosci1 || "-"}</span>
                <span>{row.czyJednaWplata || "-"}</span>
                <span>{row.drugaWplata || "-"}</span>
                <span>{row.sposobPlatnosci2 || "-"}</span>
                <span>{row.powierzchniaDomu || "-"}</span>
                <span>
                  {row.przedaneProdukty.map((product) => (
                    <span
                      key={product}
                      className={`product-tag product-${product
                        .toLowerCase()
                        .replace(" ", "-")}`}
                    >
                      {product}
                    </span>
                  ))}
                </span>
                <span>{row.czyPosiadaInstalacje}</span>
                <span>{row.miejsceInstalacji}</span>
                <span>{row.miUlica || "-"}</span>
                <span>{row.miNrDomu || "-"}</span>
                <span>{row.miMiejscowosc || "-"}</span>
                <span>{row.miKod || "-"}</span>
                <span>{row.miPowiat || "-"}</span>
                <span>{row.miWojewodztwo || "-"}</span>
                <span>{row.miejsceMontazu}</span>
                <span>{row.lancuchy}</span>
                <span>{row.licznikLokalizacja}</span>
                <span>{row.zasiegInternetu}</span>
                <span>{row.dwieKreski}</span>
                <span>{row.odgromowa}</span>
                <span>{row.numerDzialki || "-"}</span>
                <span>{row.mocPrzylaczeniowa || "-"}</span>
                <span>{row.zabezpieczenie || "-"}</span>
                <span>{row.fazowa || "-"}</span>
                <span>{row.taryfa || "-"}</span>
                <span>{row.numerLicznika || "-"}</span>
                <span>{row.numerPpm || "-"}</span>
                <span className="tooltip">
                  {truncateText(row.uwagiHandlowca, 50)}
                  <span className="tooltip-text">{row.uwagiHandlowca}</span>
                </span>
                <span>{row.banerZamontowany}</span>
                <span>{row.handlowiecWynagrodzenie}</span>
                <span className={`status status-${row.status.toLowerCase().replace(" ", "-")}`}>
                  {row.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListaUmowBiuro;
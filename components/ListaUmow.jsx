import React, { useState } from "react";

const ListaUmow = () => {
  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: "ascending",
  });

  const mockData = [
    {
      id: 1,
      klient: "Jan Kowalski",
      dataPodpisania: "2025-05-08",
      handlowiec: "Bartek Test",
      sprzedaneProdukty: ["Fotowoltaika", "Pompa Ciepła"],
      opisUmowyBOK: "Klient zainteresowany instalacją fotowoltaiczną na dachu, wymaga konsultacji technicznej i wyceny. Planowana realizacja w czerwcu.",
      status: "Dodana",
    },
    {
      id: 2,
      klient: "Firma XYZ",
      dataPodpisania: "2025-05-07",
      handlowiec: "Marcin Test",
      sprzedaneProdukty: ["Klimatyzacje"],
      opisUmowyBOK: "Umowa o instalację klimatyzacji w budynku biurowym. Potwierdzone szczegóły montażu. Potwierdzono zgodność dokumentacji sprzetu.",
      status: "Sprawdzona",
    },
    {
      id: 3,
      klient: "Anna Nowak",
      dataPodpisania: "2025-05-06",
      handlowiec: "Katarzyna Nowak",
      sprzedaneProdukty: ["Magazyn Energii", "Inne"],
      opisUmowyBOK: "Klientka wybrała magazyn energii jednorodzinnego, dodatkowo inne usługi. Oczekiwanie na montaż.",
      status: "Zlecona do realizacji",
    },
    {
      id: 4,
      klient: "Piotr Wiśniewski",
      dataPodpisania: "2025-05-05",
      handlowiec: "Bartek Test",
      sprzedaneProdukty: ["Magazyn Ciepła"],
      opisUmowyBOK: "Montaż magazynu ciepła zaplanowany na maj, klient wymaga potwierdzenia terminu.",
      status: "Umówiony montaż",
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
      if (a[key] < b[key]) return direction === "ascending" ? -1 : 1;
      if (a[key] > b[key]) return direction === "ascending" ? 1 : -1;
      return 0;
    });
    setData(sortedData);
  };

  const truncateText = (text, maxLength) => {
    if (!text) return "";
    return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
  };

  return (
    <div className="lista-umow">
      <h2>Twoje Umowy</h2>
      <div className="sort-controls">
        <button onClick={() => handleSort("klient")}>
          Sortuj po kliencie{" "}
          {sortConfig.key === "klient" &&
            (sortConfig.direction === "ascending" ? "↑" : "↓")}
        </button>
        <button onClick={() => handleSort("status")}>
          Sortuj po statusie{" "}
          {sortConfig.key === "status" &&
            (sortConfig.direction === "ascending" ? "↑" : "↓")}
        </button>
      </div>
      <div className="umowy-container">
        {data.map((row) => (
          <div key={row.id} className="umowa-card">
            <div className="umowa-header">
              <span>Klient</span>
              <span>Data podpisania umowy</span>
              <span>Handlowiec</span>
              <span>Sprzedane produkty</span>
              <span>Opis umowy BOK</span>
              <span>Status umowy</span>
            </div>
            <div className="umowa-content">
              <span>{row.klient}</span>
              <span>{new Date(row.dataPodpisania).toLocaleDateString()}</span>
              <span>{row.handlowiec}</span>
              <span>
                {row.sprzedaneProdukty.map((product) => (
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
              <span className="tooltip" title={row.opisUmowyBOK}>
                {truncateText(row.opisUmowyBOK, 50)}
              </span>
              <span className={`status status-${row.status.toLowerCase().replace(" ", "-")}`}>
                {row.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListaUmow;

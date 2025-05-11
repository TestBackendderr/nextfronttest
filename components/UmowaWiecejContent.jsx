import React from "react";
import Dane from "../pages/wiecej/Dane";
import NumerUmowy from "../pages/wiecej/NumerUmowy";
import Status from "../pages/wiecej/Status";
import Historia from "../pages/wiecej/Historia";
import Platnosci from "../pages/wiecej/Platnosci";
import DaneInstalacji from "../pages/wiecej/DaneInstalacji";
import Dokumenty from "../pages/wiecej/Dokumenty";
import DataZlozenia from "../pages/wiecej/DataZlozenia";

const UmowaWiecejContent = () => {
  return (
    <div className="biuro2-content">
      <div className="biuro2-container">
        <div className="biuro2-left">
          <div className="biuro2-top-row">
            <Dane />
            <NumerUmowy />
            <Status />
          </div>
          <div className="biuro2-main-grid">
            <Platnosci />
            <DaneInstalacji />
            <Dokumenty />
            <DataZlozenia />
          </div>
        </div>
        <Historia />
      </div>
    </div>
  );
};

export default UmowaWiecejContent;
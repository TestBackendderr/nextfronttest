import React from "react";
import Navbar from "@/components/Navbar";
import Leftside from "@/components/Leftside";
import ListaUmow from "@/components/ListaUmow";

const MojeUmowy = () => {
  return (
    <div className="moje-umowy-page">
      <Navbar />
      <Leftside />
      <div className="moje-umowy-content">
        <ListaUmow />
      </div>
    </div>
  );
};

export default MojeUmowy;
import React from "react";
  import Navbar from "../Navbar";
  import Leftside from "../Leftside";

  const MainLayout = ({ children }) => {
    // Общий макет приложения с навигацией и боковым меню
    return (
      <div className="main-layout">
        <Navbar />
        <Leftside />
        <div className="main-content">{children}</div>
      </div>
    );
  };

  export default MainLayout;
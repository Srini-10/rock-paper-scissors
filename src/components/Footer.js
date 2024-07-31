import React, { useState } from "react";
import Modal from "./Modal";
const Footer = () => {
  const [modal, setModal] = useState(false);

  const toggle = () => {
    setModal(!modal);
  };

  return (
    <>
      <footer className="footer">
        <div class="attribution">
          Challenge by{" "}
          <a href="https://tuneup.in" className="TT" target="_blank">
            TuneUp Technologies
          </a>{" "}
          Coded by{" "}
          <a
            href="https://github.com/Sairam-Jeeva"
            className="TT"
            target="_blank"
          >
            Sairam Senthil
          </a>
        </div>
        <button className="rules" onClick={toggle}>
          Rules
        </button>
      </footer>
      {modal ? <Modal toggle={toggle} /> : null}
    </>
  );
};

export default Footer;

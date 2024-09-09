import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { GrConnect } from "react-icons/gr";
import { FaLinkedin } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import Link from "next/link";

function Contato() {
  return (
    <>
      <Header />
      <section className="text-gray-600 body-font pb-10">
        <div className="container flex flex-col items-center justify-center mx-auto">
          <h1 className="pt-16 mb-1 text-4xl font-bold tracking-tighter text-center text-white lg:text-7xl md:text-6xl">
            Contato
          </h1>
          <div className="w-full max-w-4xl h-90 bg-gray-900 rounded-lg p-8 mt-10 flex items-center">
            <div>
              <div className="flex">
                <GrConnect className="text-7xl md:text-5xl lg:text-5xl xl:text-5xl text-gray-400 mr-4 ml-4" />
                <h3 className="text-3xl font-semibold mb-4 text-white">
                  Informações de Contato
                </h3>
              </div>
              <p className="mt-2 ml-4 text-gray-300">
                Para sugestões, dúvidas, reclamações ou relatos de
                vulnerabilidades de segurança, estamos disponíveis para contato
                pelos canais fornecidos abaixo.
              </p>
              <div className="ml-4 mt-8">
                <div className="flex">
                  <Link
                    href="https://www.linkedin.com/in/daniel-silva-1a3209196/"
                    className="flex font-semibold text-lg text-white"
                    target="_blank"
                  >
                    <FaLinkedin className="text-4xl text-gray-400 mr-2" />
                    LinkedIn
                  </Link>
                </div>
                <div className="flex mt-2">
                  <Link
                    href="mailto:daniel.silva3320@gmail.com"
                    className="flex font-semibold text-lg text-white"
                  >
                    <SiGmail className="text-4xl text-gray-400 mr-2" />
                    Gmail
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Contato;

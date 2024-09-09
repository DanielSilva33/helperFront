import Link from "next/link";
import Footer from "../components/Footer";

export default function CustomizeErrorPage() {
  return (
    <>
      <main className="grid min-h-full place-items-center bg-black px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-indigo-500">500</h1>
          <h1 className="mt-4 text-2xl font-semibold tracking-tight text-gray-200 sm:text-4xl">
            Erro interno do servidor
          </h1>
          <p className="mt-6 text-base leading-7 text-gray-200">
            Desculpe, ocorreu um erro interno do servidor. Tente novamente mais
            tarde.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-gray-50 shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Retornar à tela inicial
            </Link>
            <Link
              href="/"
              className="rounded-md px-3.5 py-2.5 text-sm font-semibold text-gray-900 bg-gray-100 shadow-sm hover:bg-gray-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-200"
            >
              Contate o suporte
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

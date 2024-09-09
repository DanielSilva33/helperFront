import React from "react";
import Head from "next/head";

const Layout = ({ children }) => {
  const webserverHost = "https://simpleapi.com.br";

  const defaultMetadata = {
    title: "SimpleAPI",
    description:
      "O simpleApi é o hub definitivo para desbloquear o potencial do mundo das APIs.",
    image: `${webserverHost}/images/favicon-simple.png`,
    url: `${webserverHost}`,
    type: "website",
  };

  return (
    <div>
      <Head>
        <link rel="icon" href="/images/favicon.png" />

        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={defaultMetadata.description} />
        <meta
          name="keywords"
          content="API, NodeJS, Backend, Web, Javascript, simple, simpleAPI, api simple, API Simples, API Github, APIs diversas, APIs Financeiras, APIs climaticas, APIs de filmes"
        />
        <meta name="author" content="Daniel Silva" />

        <meta property="og:title" content={defaultMetadata.title} />
        <meta property="og:description" content={defaultMetadata.description} />
        <meta property="og:image" content={defaultMetadata.image} />
        <meta property="og:url" content={defaultMetadata.url} />
        <meta property="og:type" content={defaultMetadata.type} />

        <title>{defaultMetadata.title}</title>
      </Head>

      <main>{children}</main>
    </div>
  );
};

export default Layout;

import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Cotacao() {
  const [currencyFrom, setCurrencyFrom] = useState('');
  const [currencyTo, setCurrencyTo] = useState('');
  const [exchangeRate, setExchangeRate] = useState(null);
  const [error, setError] = useState(null);

  const handleFetchRate = async () => {
    try {
      const response = await fetch(
        `https://localhost:7273/ExchangeRate/${currencyFrom}-${currencyTo}`
      );
      if (!response.ok) throw new Error('Error fetching exchange rate');

      const data = await response.json();
      setExchangeRate(data[`${currencyFrom}${currencyTo}`]);
      setError(null);
      setCurrencyFrom('');
      setCurrencyTo('');
    } catch (err) {
      setExchangeRate(null);
      setError(
        'Falha ao buscar a taxa de câmbio. Verifique os códigos de moeda e tente novamente.'
      );
      setCurrencyFrom('');
      setCurrencyTo('');
    }
  };

  return (
    <>
      <Header />
      <div className='min-h-screen mb-3 flex flex-col items-center justify-center'>
        <div className='bg-white shadow-lg rounded-lg p-8 max-w-md w-full'>
          <h2 className='text-2xl font-bold mb-6 text-center'>
            Cotação de Moedas
          </h2>

          <div className='mb-4'>
            <label className='block text-sm font-medium text-gray-700'>
              Moeda de Origem (Ex: USD)
            </label>
            <input
              type='text'
              className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2'
              placeholder='USD'
              value={currencyFrom}
              onChange={(e) => setCurrencyFrom(e.target.value.toUpperCase())}
            />
          </div>

          <div className='mb-4'>
            <label className='block text-sm font-medium text-gray-700'>
              Moeda de Destino (Ex: BRL)
            </label>
            <input
              type='text'
              className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2'
              placeholder='BRL'
              value={currencyTo}
              onChange={(e) => setCurrencyTo(e.target.value.toUpperCase())}
            />
          </div>

          <button
            onClick={handleFetchRate}
            className='w-full bg-blue-600 text-white p-2 rounded-md font-bold hover:bg-blue-700 transition duration-200'>
            Pesquisar
          </button>

          {exchangeRate && (
            <div className='mt-6 bg-gray-50 p-4 rounded-lg'>
              <h3 className='text-lg font-bold mb-2'>Resultado</h3>
              <p>
                <strong>Moeda:</strong> {exchangeRate.name}
              </p>
              <p>
                <strong>Alta:</strong> {exchangeRate.high}
              </p>
              <p>
                <strong>Baixa:</strong> {exchangeRate.low}
              </p>
              <p>
                <strong>Compra:</strong> {exchangeRate.bid}
              </p>
              <p>
                <strong>Venda:</strong> {exchangeRate.ask}
              </p>
              <p>
                <strong>Variação:</strong> {exchangeRate.varBid}
              </p>
              <p>
                <strong>Alteração Percentual:</strong> {exchangeRate.pctChange}%
              </p>
              <p>
                <strong>Data:</strong> {exchangeRate.createDate}
              </p>
            </div>
          )}

          {error && <div className='mt-6 text-red-500'>{error}</div>}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Cotacao;

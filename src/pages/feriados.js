import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Feriados() {
  const [year, setYear] = useState('');
  const [holidays, setHolidays] = useState([]);
  const [error, setError] = useState(null);

  const handleFetchHolidays = async () => {
    try {
      const response = await fetch(`https://localhost:7273/Holidays/${year}`);
      if (!response.ok) throw new Error('Error fetching holidays');

      const data = await response.json();
      setHolidays(data);
      setError(null);
      setYear('');
    } catch (err) {
      setHolidays([]);
      setError('Falha ao buscar feriados. Por favor, tente novamente.');
      setYear('');
    }
  };

  function formatDate(dateString) {
    const [year, month, day] = dateString.split('-');
    return `${day}-${month}-${year}`;
  }

  return (
    <>
      <Header />
      <div className='min-h-screen mb-3 flex flex-col items-center justify-center'>
        <div className='bg-white shadow-lg rounded-lg p-8 max-w-4xl w-full'>
          <h2 className='text-2xl font-bold mb-6 text-center'>
            Feriados Nacionais
          </h2>

          <div className='mb-4'>
            <label className='block text-sm font-medium text-gray-700'>
              Ano (Ex: 2024)
            </label>
            <input
              type='text'
              className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2'
              placeholder='2024'
              value={year}
              onChange={(e) => setYear(e.target.value)}
            />
          </div>

          <button
            onClick={handleFetchHolidays}
            className='w-full bg-blue-600 text-white p-2 rounded-md font-bold hover:bg-blue-700 transition duration-200'>
            Pesquisar
          </button>

          {error && <div className='mt-6 text-red-500'>{error}</div>}

          {holidays.length > 0 && (
            <div className='mt-6 grid grid-cols-5 gap-4'>
              {holidays.map((holiday) => (
                <div
                  key={holiday.date}
                  className='bg-gray-300 p-4 rounded-lg text-center shadow-sm w-36'>
                  <p className='text-sm font-bold'>{holiday.name}</p>
                  <p className='text-xs pt-1'>{formatDate(holiday.date)}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Feriados;

import React from 'react';

    const subjects = [
      {
        name: 'Rekenen',
        image: '/images/rekenen.png',
        link: '/rekenen',
        description: 'Ontdek de wereld van getallen en vormen met leuke rekenoefeningen.',
        icon: '/images/pencil.png',
      },
      {
        name: 'Taal',
        image: '/images/taal.png',
        link: '/taal',
        description: 'Verbeter je taalvaardigheden met interactieve spellen en verhalen.',
        icon: '/images/book.png',
      },
      {
        name: 'Lezen',
        image: '/images/lezen.png',
        link: '/lezen',
        description: 'Duik in spannende avonturen en leer vlot en met plezier lezen.',
        icon: '/images/book-removebg-preview.png',
      },
      {
        name: 'Engels',
        image: '/images/engels.png',
        link: '/engels',
        description: 'Leer de Engelse taal met leuke liedjes en makkelijke oefeningen.',
        icon: '/images/star.png',
      },
      {
        name: 'Spelling',
        image: '/images/spelling.png',
        link: '/spelling',
        description: 'Oefen je spelling met grappige woordspelletjes en uitdagingen.',
        icon: '/images/ster.png',
      },
      {
        name: 'Werkwoordspelling',
        image: '/images/werkwoordspelling.png',
        link: '/werkwoordspelling',
        description: 'Word een meester in werkwoordspelling met onze interactieve trainingen.',
        icon: '/images/pencil.png',
      },
    ];

    const SubjectGrid = () => {
      return (
        <div className="container mx-auto py-8 px-4">
          <h2 className="text-4xl font-extrabold mb-8 text-gray-800 dark:text-white text-center">
            <span className="text-pink-500">Kies</span> je <span className="text-blue-600">vakgebied</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {subjects.map((subject, index) => (
              <div key={index} className="bg-white dark:bg-gray-700 rounded-3xl shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
                <img src={subject.image} alt={subject.name} className="w-full h-56 object-cover" />
                <div className="p-6 flex flex-col justify-between h-full">
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4 text-center flex items-center justify-center">
                      <img src={subject.icon} alt={`${subject.name} Icon`} className="h-6 w-6 mr-2" />
                      {subject.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-center mb-4">{subject.description}</p>
                  </div>
                  <div className="text-center">
                    <a href={subject.link} className="inline-flex items-center bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-700 transition-colors duration-200">
                      Ga naar {subject.name}
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 ml-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    };

    export default SubjectGrid;

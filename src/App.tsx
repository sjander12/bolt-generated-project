import React from 'react';
    import Header from './components/Header';
    import SubjectGrid from './components/SubjectGrid';
    import Footer from './components/Footer';

    function App() {
      return (
        <div className="dark:bg-gray-900 min-h-screen">
          <Header />
          <main className="py-8">
            <div className="container mx-auto px-4">
              <h1 className="text-5xl font-extrabold text-center text-gray-800 dark:text-white mb-8">
                Welkom bij <span className="text-pink-500">Edu</span><span className="text-blue-600">Fun</span>
              </h1>
              <p className="text-xl text-gray-700 dark:text-gray-300 text-center mb-12">
                Ontdek een wereld vol spelenderwijs leren. Kies een vakgebied en begin je avontuur!
              </p>
              <SubjectGrid />
            </div>
          </main>
          <Footer />
        </div>
      );
    }

    export default App;

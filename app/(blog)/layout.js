import React from 'react';

// Components
import Navigation from '../components/nav/Navigation';
import Footer from '../components/footer/Footer';

/*
 *
 * Layout
**/
const PageLayout = ({ children }) => {
  return (
    <React.Fragment>
      <nav>
        <div className="container">
          <Navigation />
        </div>
      </nav>
      <main>
        <div className="container">
          {children}
        </div>
      </main>
      <footer>
        <div className="container">
          <Footer />
        </div>
      </footer>
    </React.Fragment>
  );
}

export default PageLayout;

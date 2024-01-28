import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';

import { Pages } from './Pages';

const AppRouter = () => {
  return (
    <>
      <Header />
      <Routes>
        {Pages.map((page, pageIndex) => {
          const item = { ...page, pageIndex };

          return (
            <Route
              key={item.pageIndex}
              path={item.route}
              element={<item.page />}
              id={item.name}
            />
          );
        })}
      </Routes>
      <Footer />
    </>
  );
};

export default AppRouter;

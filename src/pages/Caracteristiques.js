import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import CaracteristiquesSectionNavigationsWhite1 from '../components/navigations-white/CaracteristiquesSectionNavigationsWhite1';
import CaracteristiquesSectionBlogContentWhitePattern2 from '../components/blog-content-white-pattern/CaracteristiquesSectionBlogContentWhitePattern2';
import CaracteristiquesSectionFootersWhitePattern3 from '../components/footers-white-pattern/CaracteristiquesSectionFootersWhitePattern3';

const meta = {
  title: '',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function Caracteristiques() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <CaracteristiquesSectionNavigationsWhite1 />
      <CaracteristiquesSectionBlogContentWhitePattern2 />
      <CaracteristiquesSectionFootersWhitePattern3 />
    </React.Fragment>
  );
}


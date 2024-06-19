import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import RessourcesSectionNavigationsWhite1 from '../components/navigations-white/RessourcesSectionNavigationsWhite1';
import RessourcesSectionBlogWhitePattern2 from '../components/blog-white-pattern/RessourcesSectionBlogWhitePattern2';
import RessourcesSectionFootersWhitePattern3 from '../components/footers-white-pattern/RessourcesSectionFootersWhitePattern3';

const meta = {
  title: '',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function Ressources() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <RessourcesSectionNavigationsWhite1 />
      <RessourcesSectionBlogWhitePattern2 />
      <RessourcesSectionFootersWhitePattern3 />
    </React.Fragment>
  );
}


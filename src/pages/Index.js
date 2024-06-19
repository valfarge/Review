import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import IndexSectionHeadersWhitePattern1 from '../components/headers-white-pattern/IndexSectionHeadersWhitePattern1';
import IndexSectionFeaturesWhitePattern5 from '../components/features-white-pattern/IndexSectionFeaturesWhitePattern5';
import IndexSectionCookiesWhite8 from '../components/cookies-white/IndexSectionCookiesWhite8';
import IndexSectionPricingWhitePattern3 from '../components/pricing-white-pattern/IndexSectionPricingWhitePattern3';
import IndexSectionFootersWhitePattern9 from '../components/footers-white-pattern/IndexSectionFootersWhitePattern9';
import  IndexSectionFaqsWhitePattern6  from '../components/faqs-white-pattern/IndexSectionFaqsWhitePattern6';
import CardGoogleMyBusiness from '../components/card-google-my-business/CardGoogleMyBusiness';
import { MoonPayProvider } from '@moonpay/moonpay-react';
import Home from '../components/moonpay/Moonpay';

const meta = {
  title: '',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function Index() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <IndexSectionHeadersWhitePattern1 />
      <IndexSectionFeaturesWhitePattern5 />
      <IndexSectionCookiesWhite8 />
      <IndexSectionPricingWhitePattern3 />
      <IndexSectionFaqsWhitePattern6 />
      <MoonPayProvider 
      apiKey="pk_test_123" 
      debug
    >
      <Home />
    </MoonPayProvider>
      <CardGoogleMyBusiness />
      <IndexSectionFootersWhitePattern9 />

    </React.Fragment>
  );
}


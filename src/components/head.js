import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import config from '@config';
import favicon from '@images/favicons/favicon.ico';
import appleIcon57x57 from '@images/favicons/apple-touch-icon.png';
import favicon32x32 from '@images/favicons/favicon-32x32.png';
import favicon16x16 from '@images/favicons/favicon-16x16.png';

const Head = ({ metadata }) => (
  <Helmet>
    <html lang="en" />
    <title itemProp="name" lang="en">
      {metadata.title}
    </title>
    <link rel="shortcut icon" href={favicon} />
    <link rel="canonical" href="https://cluzier.github.io" />

    <meta name="description" content={metadata.description} />
    <meta name="keywords" content={config.siteKeywords} />
    <meta name="google-site-verification" content={config.googleVerification} />
    <meta property="title" content={metadata.title} />
    <meta property="description" content={metadata.description} />
    <meta property="type" content="website" />
    <meta property="url" content={metadata.siteUrl} />
    <meta property="site_name" content={metadata.title} />
    <meta property="image:width" content="1200" />
    <meta property="image:height" content="630" />
    <meta property="image:type" content="image/png" />
    <meta property="locale" content={config.siteLanguage} />
    <meta itemProp="name" content={metadata.title} />
    <meta itemProp="description" content={metadata.description} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:url" content={metadata.siteUrl} />
    <meta name="twitter:site" content={config.twitterHandle} />
    <meta name="twitter:creator" content={config.twitterHandle} />
    <meta name="twitter:title" content={metadata.title} />
    <meta name="twitter:description" content={metadata.description} />
    <meta name="twitter:image:alt" content={metadata.title} />

    <link rel="apple-touch-icon" sizes="57x57" href={appleIcon57x57} />
    <link rel="icon" type="image/png" sizes="32x32" href={favicon32x32} />
    <link rel="icon" type="image/png" sizes="16x16" href={favicon16x16} />
    <meta name="msapplication-TileColor" content={config.navyColor} />
    <meta name="theme-color" content={config.navyColor} />
  </Helmet>
);

export default Head;

Head.propTypes = {
  metadata: PropTypes.object.isRequired,
};

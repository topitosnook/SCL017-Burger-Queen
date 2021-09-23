import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';

export default function MetaDecorator({ title }) {
  return (
    <Helmet>
      <title>{title}</title>
    </Helmet>
  );
}
MetaDecorator.propTypes = { title: PropTypes.string.isRequired };

import React from 'react';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';
import CollectionPreview from '../collection-preview/collection-preview';
import './collections-overview.scss';
import { selectCollections } from '../../store/reducers/shop/shop_selector';

const CollectionsOverview = ({ collections }) => (
  <div className="collections-overview">
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollections,
});

export default connect(mapStateToProps)(CollectionsOverview);

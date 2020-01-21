import React from 'react';
import { connect } from 'react-redux';

import CollectionItem from '../../components/collection-item/collection-item';
import './collection.scss';
import { selectCollection } from '../../store/reducers/shop/shop_selector';

const CollectionPage = ({ match }) => (
  <div className="collection-page">
    <h2>CollectionPage</h2>
  </div>
);

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});
export default connect(mapStateToProps)(CollectionPage);

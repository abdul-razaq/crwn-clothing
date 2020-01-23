import React from 'react';
import { Route } from 'react-router-dom';

import CollectionsOverview from '../../components/collections-overview/collections-overview';
import CollectionPage from '../collection/collection';

import { firestore } from '../../firebase/firebase';

class ShopPage extends React.Component {

  unsubscribeFromSnapShot = null;

  componentDidMount() {
    // Grab the collections ref
    const collectionRef = firestore.collection('collections');

    collectionRef.onSnapshot(async snapshot => {
      
    })
  }
  
  render() {
    const { match } = this.props;
    return (
      <div className="shop-page">
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route
          exact
          path={`${match.path}/:collectionId`}
          component={CollectionPage}
        />
      </div>
    );
  }
}

export default ShopPage;

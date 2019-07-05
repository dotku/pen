import React from 'react';
import LocalStorageItemList from './LocalStorageItemList';

export default class LocalStorageInfo extends React.Component {
  render() {
    return <div>
      <h2>Statistic</h2>
      <LocalStorageItemList />
    </div>
  }
}
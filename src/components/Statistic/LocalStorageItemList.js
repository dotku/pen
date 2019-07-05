import React from 'react';

export default class ItemList extends React.Component {
  render() {
    console.log('ItemList');
    let keys = [];
    let length = localStorage.length;
    let charLength = 0;
    while (length--) {
      keys.push(localStorage.key(length));
      charLength += localStorage.getItem(localStorage.key(length)).length;
    }
    console.log('itemList', keys);
    return <div>
      <h3>Item List</h3>
      <div>Characters Length: {charLength}</div>
      <React.Fragment>
        {keys.map((v,k) => <li key={k}><a href={`${window.location.origin}/${v}`}>{v}</a></li>)}
      </React.Fragment>
    </div>
  }
}
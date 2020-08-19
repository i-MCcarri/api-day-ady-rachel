import $ from 'jquery';

import 'normalize.css';
import './index.css';
import api from './api';
import shoppingList from './shopping-list';
import store from './store';
//If you have an import statement to import from your item module, delete it.

const main = function () {
  api.getItems()
    .then((items) => {
      items.forEach((item) => store.addItem(item));
      shoppingList.render();
      //In the main function, within the resolved getItems() promise and underneath the existing code, write the following test code,
      const item = store.items[0];
      console.log('current name: ' + item.name);
      store.findAndUpdate(item.id, { name: 'barbaz' });
      console.log('new name: ' + item.name);
      //The item.name should be updated after .findAndUpdate is executed,
    });

  shoppingList.bindEventListeners();
  shoppingList.render();
};

$(main);
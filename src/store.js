const items = [];
let error = null;
let hideCheckeditems = false;

//ind the item from this.items using the passed in id: currentItem,
const findById = function (id) {
  return this.items.find(currentItem => currentItem.id === id);
};

const addItem = function (item) {
  this.items.push(item);
};

//remove both findAndToggleChecked and findAndUpdateName from the store
/*
const findAndToggleChecked = function (id) {
  const currentItem = this.findById(id);
  currentItem.checked = !currentItem.checked;
};
*/

//remove both findAndToggleChecked and findAndUpdateName from the store
/*
const findAndUpdateName = function (id, name) {
  try {
    item.validateName(name);
    const currentItem = this.findById(id);
    currentItem.name = name;
  } catch (e) {
    console.log('Cannot update name: ' + e.message);
  }
};
*/

const findAndDelete = function (id) {
  this.items = this.items.filter(currentItem => currentItem.id !== id);
};

const toggleCheckedFilter = function () {
  this.hideCheckedItems = !this.hideCheckedItems;
};

//create a consolidated findAndUpdate method which merges the attributes of the received newData object with the item in the store.
//Have the method accept id and newData arguments.
const findAndUpdate = function (id, newData){
  const currentItem = this.findById(id);
  //use Object.assign() to merge the newData into the current found item,
  Object.assign(currentItem, newData);
};

const setError = function (error) {
  this.error = error;
};

export default {
  items,
  //Remember to expose the new findAndUpdate method from your module and remove the old ones!
  //findAndToggleChecked,
  // findAndUpdateName,
  error,
  findAndUpdate,
  setError,
  hideCheckeditems,
  findById,
  addItem,
  findAndDelete,
  toggleCheckedFilter
};
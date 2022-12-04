// PaginationHelper

// The class is designed to take in an array of values and an integer indicating how many items will be allowed per each page. The types of values contained within the collection/array are not relevant.

// The following are some examples of how this class is used:

// var helper = new PaginationHelper(['a','b','c','d','e','f'], 4);
// helper.pageCount(); //should == 2
// helper.itemCount(); //should == 6
// helper.pageItemCount(0); //should == 4
// helper.pageItemCount(1); // last page - should == 2
// helper.pageItemCount(2); // should == -1 since the page is invalid

// // pageIndex takes an item index and returns the page that it belongs on
// helper.pageIndex(5); //should == 1 (zero based index)
// helper.pageIndex(2); //should == 0
// helper.pageIndex(20); //should == -1
// helper.pageIndex(-10); //should == -1

class PaginationHelper {
  constructor(collection, itemsPerPage) {
    this.collection = collection;
    this.itemsPerPage = itemsPerPage;
    this.pageNumber = Math.ceil(this.collection.length / this.itemsPerPage);
    // The constructor takes in an array of items and a integer indicating how many
    // items fit within a single page
  }
  itemCount() {
    // returns the number of items within the entire collection
    return this.collection.length;
  }
  pageCount() {
    return Math.ceil(this.collection.length / this.itemsPerPage);
    // returns the number of pages
  }
  pageItemCount(pageIndex) {
    const items = (pageIndex + 1) * this.itemsPerPage;
    // console.log(items / this.itemsPerPage, items);
    if (items / this.itemsPerPage > this.pageNumber || pageIndex < 0) {
      return -1;
    } else {
      if (items > this.collection.length) {
        return this.collection.length - (items - this.itemsPerPage);
      } else {
        return this.itemsPerPage;
      }
    }
    // returns the number of items on the current page. page_index is zero based.
    // this method should return -1 for pageIndex values that are out of range
  }
  pageIndex(itemIndex) {
    if (itemIndex > this.collection.length || itemIndex <= 0 || itemIndex === this.collection.length) {
      return -1;
    } else {
      if (itemIndex === 0 && this.collection.length === 0) return -1;
      return Math.floor(itemIndex / this.itemsPerPage);
    }
    // determines what page an item is on. Zero based indexes
    // this method should return -1 for itemIndex values that are out of range
  }
}

const collection = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24,
];
const helper = new PaginationHelper(collection, 10);

// console.log('first')
console.log("item count", helper.itemCount());
console.log("page count", helper.pageCount());
console.log("page index", helper.pageIndex(17));
console.log("page index", helper.pageIndex(0));
console.log("page index", helper.pageIndex(-23));
helper.pageItemCount(0);
helper.pageItemCount(1);
helper.pageItemCount(2);


function PaginationHelper(collection, itemsPerPage) {
  
  this.collection = collection;
  this.itemsPerPage = itemsPerPage;
}

PaginationHelper.prototype.itemCount = function() {

  return this.collection.length;
};

PaginationHelper.prototype.pageCount = function() {

  return Math.ceil(this.collection.length / this.itemsPerPage);
};

PaginationHelper.prototype.pageItemCount = function(pageIndex) {

  if (pageIndex > this.pageCount() - 1 || pageIndex < 0) {
    return -1;
  } else if (pageIndex == this.pageCount() - 1) {
    return this.collection.length % this.itemsPerPage;
  } else {
    return this.itemsPerPage;
  }
};

PaginationHelper.prototype.pageIndex = function(itemIndex) {

  if (itemIndex > this.collection.length - 1 || itemIndex < 0) {
    return -1;
  }
  return Math.floor(itemIndex / this.itemsPerPage);
};
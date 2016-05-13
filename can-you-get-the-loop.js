function loop_size(node) {

  var slow = node;
  var fast = node.getNext();
  var count = 0;
  
  while (slow !== fast) {
    slow = slow.getNext();
    fast = fast.getNext().getNext();
  }
  count++;
  slow = slow.getNext();
  while (slow !== fast) {
    count++;
    slow = slow.getNext();
  }
  return count;
}
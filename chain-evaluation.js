Number.prototype.add = function(num) {
    return this.valueOf() + num;
};

Number.prototype.subtract = function(num) {
    return this.valueOf() - num;
};

Number.prototype.multiply = function(num) {
    return this.valueOf() * num;
};

Number.prototype.divide = function(num) {
    return this.valueOf() / num;
};

Number.prototype.square = function() {
    return this.valueOf() * this.valueOf();
};
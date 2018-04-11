var methods = module.exports = {};
var output;

methods.sumNumbers = function(a, b) {
    output = a + b;
    return output;
}

methods.circleCirc = function (radius) {
    output = 2 * Math.PI * radius;
    return output;
}

methods.areaOfRectangle = function(a, b) {
    output = a * b;
    return output;
}

// module.exports.data = methods
// exports.data = methods;
// exports.output = output;
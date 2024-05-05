function store_car_info(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        model: model
    };
    // Assign additional properties
    options.forEach(function (option) {
        var _a = option.split(":"), key = _a[0], value = _a[1];
        car[key.trim()] = value.trim();
    });
    return car;
}
// Call the function with required information and additional options
var myCar = store_car_info('Toyota', 'Corrolla', 'color: White', "Sunroof: True", "year: 2020");
// Print the returned Object
console.log(myCar);

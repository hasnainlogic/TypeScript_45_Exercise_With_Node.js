

function store_car_info(manufacturer: string, model: string, ...options)  {
        let car = {
            manufacturer: manufacturer,
            model: model
        };

        // Assign additional properties
   
        options.forEach(option => {
            let [key, value] = option.split(":");
            car [key.trim()] = value.trim();
          });
    
    return car;
}

// Call the function with required information and additional options
let myCar = store_car_info('Toyota', 'Corrolla', 'color: White', "Sunroof: True", "year: 2024");

// Print the returned Object
console.log(myCar);

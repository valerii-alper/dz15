// Написать функцию assignObjects(obj1, obj2), которая принимает 
// аргументами 2 объекта и возвращает новый, который состоит из 
// свойств обоих объектов (склеить). Если свойство повторяется, 
// то взять значение второго объекта



// assignObjects({ x: 10, y: 20 }, { z: 30 }) вывод { x:10, y:20, z: 30 }
// assignObjects({ x: 10 }, { x: 20, y: 30 }) вывод { x:20, y: 30 }


const num1 = { 
    x: 10, 
    y: 20,
};
const num2 = { 
    z: 30, 
};
const num3 = { 
    x: 10, 
};
const num4 = { 
    x: 20, 
    y: 30,
};


function assignObjects(obj1, obj2) {
    const newObj = {};
    for(let key in obj1) {
        newObj[key] = obj1[key];
    }
    for(let key in obj2) {
        newObj[key] = obj2[key];
    }
    return newObj;
};

console.log(assignObjects(num1, num2)); 
console.log(assignObjects(num3, num4)); 
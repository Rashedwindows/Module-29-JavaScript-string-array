const products =[

        'Dell hardcore i29 200GB Laptop',
        'iphone 1TB camera flishlight Phone',
        'yellow laptop with black camera',
        'Dell 1X59 Lenovo commercial yoga laptop',
        'LG supernova laptop',
        'HTC low price Phone',
        'Dell purple color phone with Laptop'
];

const searching = 'Dell';

// indexOf

const output = [];

for(const product of products){

    if (product.toLowerCase().indexOf(searching.toLowerCase()) != -1){
        // output.push(product);
    }
}

// console.log(output)

for(const product of products){

    if(product.toLowerCase().includes(searching.toLocaleLowerCase())){
        // output.push(product);
    }
}

// console.log(output);

// starts with

for(const product of products){

    if(product.toLowerCase().startsWith(searching.toLowerCase())){
        output.push(product);
    }
}

console.log(output);
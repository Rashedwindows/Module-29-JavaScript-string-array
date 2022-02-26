// -------find largest string array on arrays-----------//




/* function megaFriend(friends) {

    let mega = friends[0];
    for (const friend of friends) {

        if (friend.length > mega.length) {

            mega = friend;
        }
    }

    return mega;
}

const friendsName = ['Naeem', 'Sagor', 'Sabbir', 'Shofik', 'Kamrul', 'Arif'];

const myBigBuddy = megaFriend(friendsName);

console.log(myBigBuddy);  */





// ----------------------------------------------------------///




// ----------check input parameter is this parameter is an array--------//

/*


function megaFriend(friends) {

    if (Array.isArray(friends) == false) {

        return 'please provide an array of strings'
    }

    let mega = friends[0];

    for (const friend of friends) {

        if (friend.length > mega.length) {

            mega = friend;
        }
    }

    return mega;
}

const friendsName = ['Naeem', 'Sagor', 'Sabbir', 'Shofik', 'Kamrul', 'Arif'];

const myBigBuddy = megaFriend(friendsName);

console.log(myBigBuddy);


*/


// ---------------------------------------------------///




// --------search specific array string in array list using indexOf()---------//

/*

const friendsName2 = ['Naeem', 'Sagor', 'Sabbir', 'Shofik', 'Kamrul', 'Arif'];

if(friendsName2.indexOf('Sagor') != -1){

    console.log('Sagor exist');
}

else{

    console.log('sorry Sagor is not exist')
}

    */




// -------------------------------------//


//--------search specific array string in array list using includes()---------//


/*

const friendsName3 = ['Naeem', 'Sagor', 'Sabbir', 'Shofik', 'Kamrul', 'Arif'];

if(friendsName3.includes('Sagor')){

    console.log('Sagor exist');
}

else{

    console.log('sorry Sagor is not exist')

}

*/

// ----------------------------------------------------//


// ------------concat array to array---------------//


 const first = [1,2,3,4,5];

 const second = [6,7,8,9,10];

 const result = first.concat(second);

 console.log(result)
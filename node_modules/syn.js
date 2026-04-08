//You are working for a social media company that has just merged with another. You are tasked with creating a function that takes an undetermined amount of arrays of username and merges them into one larger array to keep track of all the users on your merged website. You will also want to create a date of merging and return that combined with the merged array as an object

function mergeUsers(...arrays) {
  
    const mergedArray = [].concat(...arrays);
    
    const mergeDate = new Date().toISOString();
    require('datejs');
    return {
        users: mergedArray,
        mergeDate: mergeDate
    };
}

const users1 = ['user1', 'user2'];
const users2 = ['user3', 'user4'];
const users3 = ['user5'];

const result = mergeUsers(users1, users2, users3);
console.log(result);
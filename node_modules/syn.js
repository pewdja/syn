function combineUsers(...arrays) {
    const users = arrays.flat();
    const merge_date = new Date().toISOString().split('T')[0];

    return {
        users,
        merge_date
    };
}

const users1 = ['user1', 'user2'];
const users2 = ['user3', 'user4'];
const users3 = ['user5'];

const result = combineUsers(users1, users2, users3);
console.log(result);

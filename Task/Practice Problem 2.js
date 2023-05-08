// Write an arrow function where it will do the following:

// a) It will take an array where the array elements will be the
// name of your friends

const friends = ["Sazid", "Sourov", "Salman", "Rakib", "Ruba", "Tuli"];
const OddFriend = [];
for (const friend of friends) {
  if (friend.length % 2 !== 0) {
    OddFriend.push(friend);
  }
}
console.log(OddFriend);

// b) Check if the length of each element is even, push elements
// with even length to a new array and return the result

const arrowEvenFriend = (friends) => {
  const evenFriends = [];
  friends.forEach((friend) => {
    if (friend.length % 2 === 0) {
      // console.log(friend);
      evenFriends.push(friend);
    }
  });
  return evenFriends;
};

console.log(arrowEvenFriend(friends));













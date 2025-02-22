function chatroomStatus(arr) {
  const [user1, user2, ...others] = arr;
  return arr.length === 0
    ? "no one online"
    : arr.length === 1
    ? `${user1} online`
    : arr.length === 2
    ? `${user1} and ${user2} online`
    : `${user1}, ${user2} and ${others.length} others online`;
}

// console.log(chatroomStatus([]))

// console.log(chatroomStatus(["paRIE_to"]))

// console.log(chatroomStatus(["s234f", "mailbox2"]))

console.log(
  chatroomStatus([
    "pap_ier44",
    "townieBOY",
    "panda321",
    "motor_bike5",
    "sandwichmaker833",
    "violinist91",
  ])
);

export const getSender = (loggedUser, users) => {
  const otherUser =
    users[0]._id === loggedUser._id ? users[1].name : users[0].name;
  return otherUser;
};

type VerifyUser = (user: User, sentValue: User) => boolean;
type User = { username: string; password: string};

const verifyUser: VerifyUser = (user, sentValue) => {
    return user.username === sentValue.username && user.password === sentValue.password
};

const bdUser = { username: 'joao', password: '1212121'};
const sentUser = { username: 'joao', password: '1212121'};
const loggedIn = verifyUser(bdUser, sentUser);

console.log(loggedIn);

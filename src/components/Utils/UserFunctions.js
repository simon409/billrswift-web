import { users } from "../Data/TestData";

const getUserById = (userId) => {
    return users.find(user => user.id === userId);
};

export { getUserById };
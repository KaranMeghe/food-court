/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import { createContext, useState, useEffect } from "react";
import axios from "axios";
// import { BsBook } from "react-icons/bs";?

const userContext = createContext();

export const Provider = ({ children }) => {
  const [users, setUsers] = useState([
    {
      userName: "SignIn",
      contactNumber: null,
      email: null,
    },
  ]);

  const [phoneNumber, setPhoneNumber] = useState();
  const [userLoginName, setUserLoginName] = useState("SignIn");

  console.log(users);
  console.log(phoneNumber);

  // fetching user
  const fetchUsers = async () => {
    const usersData = await axios.get("http://localhost:3002/users");
    setUsers(usersData.data);
  };

  // creating users

  const createUser = async (contactNumber, userName, email) => {
    const response = await axios.post("http://localhost:3002/users", {
      userName,
      contactNumber,
      email,
    });
    console.log(response.data);
    const updatedUsers = [...users, response.data];
    setUsers(updatedUsers);
  };

  console.log(users);

  // validating users

  // const loginUser = (contactNumber) => {
  //   setPhoneNumber(contactNumber);

  //   const updateUserName = users.map((user) => {
  //     // console.log(
  //     //   `${user.userName}: ${user.contactNumber} and login number is ${phoneNumber}`
  //     // );

  //     if (user.contactNumber === phoneNumber) {
  //       return user.userName;
  //     } else {
  //       return "SignInn";
  //     }
  //   });
  //   return setUserLoginName(updateUserName);
  // };

  const loginUser = (contactNumber) => {
    console.log(contactNumber);
    return setPhoneNumber(contactNumber);
  };

  // const loginName = () => {
  //   const updateName = users.map((user) => {
  //     user.contactNumber === phoneNumber
  //       ? setUserLoginName(user.userName)
  //       : setUserLoginName("SignInn");
  //   });
  //   return updateName;
  // };

  /* In original code, the mistake was that i used the map method instead of the find method in the loginName() function. The map method iterates over each user in the users array and sets the userLoginName state based on whether their contactNumber matches the phoneNumber. However, this updates the state for every user, which is not what i intended.

To fix the mistake,  i use the find method instead of map. The find method searches for a specific user in the users array based on the condition i provide. It stops searching and returns the first user that satisfies the condition. In my case, the condition is whether the user.contactNumber matches the phoneNumber.

By using find, i can locate the user with the matching contactNumber and set the userLoginName state based on that user only. This ensures that the state is updated correctly.
*/

  const loginName = () => {
    const matchedUser = users.find(
      (user) => user.contactNumber === phoneNumber
    );
    if (matchedUser) {
      setUserLoginName(matchedUser.userName);
    } else {
      setUserLoginName("SignIn");
    }
  };

  useEffect(() => {
    loginName();
  }, [phoneNumber]);

  // };

  const dataToShare = {
    users,
    setUsers,
    createUser,
    fetchUsers,
    loginUser,
    phoneNumber,
    setUserLoginName,
    userLoginName,
  };

  return (
    <userContext.Provider value={dataToShare}>{children}</userContext.Provider>
  );
};

export default userContext;

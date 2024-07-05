import React, { createContext, ReactNode, useContext, useState } from "react";
import { useRouter } from "next/navigation";
import {
  EditProps,
  LoginProps,
  RegisterProps,
  UserProps,
} from "@/components/User/Props";
import { AlertContents } from "@/components/AlertRB";

interface ProviderProps {
  children: ReactNode;
}

type UserContextType = {
  users: UserProps[];
  currentUser: UserProps | null;
  setCurrentUser: React.Dispatch<React.SetStateAction<UserProps | null>>;
  editCurrentUser: (data: EditProps) => AlertContents;
  login: (data: LoginProps) => AlertContents;
  logout: () => AlertContents;
  signup: (data: RegisterProps) => AlertContents;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUserContext must be used within a UserProvider");
  }
  return context;
};

const UserProvider = ({ children }: ProviderProps) => {
  const [users, setUsers] = useState<UserProps[]>([]);
  const [currentUser, setCurrentUser] = useState<UserProps | null>(null);
  const router = useRouter();

  const editCurrentUser = (data: EditProps): AlertContents => {
    setCurrentUser((prevDatas) => {
      if (prevDatas) {
        return {
          ...prevDatas,
          ...data,
        };
      }
      return prevDatas;
    });
    return { title: "Success", description: "Your profile has been updated!" };
  };

  const login = ({ email, password }: LoginProps): AlertContents => {
    const authenticatedUser = users.find((user) => user.email === email);
    if (authenticatedUser) {
      if (authenticatedUser.password === password) {
        setCurrentUser(authenticatedUser);
        router.push("/profile");
        return { title: "Success", description: "You are logged in!" };
      }
      return {
        title: "Error",
        description: "The password you entered is incorrect!",
      };
    }
    return {
      title: "Error",
      description: "No user found with this email address!",
    };
  };

  const logout = (): AlertContents => {
    setCurrentUser(null);
    router.push("/");
    return {
      title: "Success",
      description: "You are logged out!",
    };
  };

  const signup = (data: RegisterProps): AlertContents => {
    const anotherUser = users.find((user) => user.email === data.email);
    if (!anotherUser) {
      const nextId = users.length > 0 ? users[users.length - 1].id + 1 : 0;
      const user = { id: nextId, ...data };
      setUsers([...users, user]);
      setCurrentUser(user);
      router.push("/profile");
      return {
        title: "Success",
        description: "You are logged in!",
      };
    } else
      return {
        title: "Error",
        description:
          "An account is already registered with this email address!",
      };
  };

  const userContextValue: UserContextType = {
    users,
    currentUser,
    setCurrentUser,
    editCurrentUser,
    login,
    logout,
    signup,
  };

  return (
    <UserContext.Provider value={userContextValue}>
      {children}
    </UserContext.Provider>
  );
};

export { useUserContext, UserProvider };

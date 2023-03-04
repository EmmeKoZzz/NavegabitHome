import {createContext, Dispatch, ReactNode, SetStateAction, useState,} from "react";

interface PathContextInterface {
  path: string;
  setPath: Dispatch<SetStateAction<string>>;
}

const defaultPath = {
  path: "test",
  setPath: (path: string) => {},
} as PathContextInterface;

export const PathContext = createContext(defaultPath);

type PathProviderProps = {
  children: ReactNode;
};

const PathProvider = ({ children }: PathProviderProps) => {
  const [path, setPath] = useState(defaultPath.path);

  return (
    <PathContext.Provider value={{ path, setPath }}>
      {children}
    </PathContext.Provider>
  );
};

export default PathProvider;
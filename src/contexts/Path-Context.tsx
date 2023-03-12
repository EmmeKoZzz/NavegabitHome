import {
	createContext,
	Dispatch,
	ReactNode,
	SetStateAction,
	useMemo,
	useState,
} from 'react';

interface PathContextInterface {
	path: string;
	setPath: Dispatch<SetStateAction<string>>;
}

const defaultPath = {
	path: 'test',
	setPath: () => {},
} as PathContextInterface;

export const PathContext = createContext(defaultPath);

type PathProviderProps = {
	children: ReactNode;
};

function PathProvider({ children }: PathProviderProps) {
	const [path, setPath] = useState(defaultPath.path);
	const pathDefault = useMemo(() => ({ path, setPath }), [path]);

	return (
		<PathContext.Provider value={pathDefault}>{children}</PathContext.Provider>
	);
}

export default PathProvider;

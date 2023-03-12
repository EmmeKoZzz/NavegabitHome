import { Outlet } from 'react-router-dom';
import PathProvider from '../contexts/Path-Context';

function Layout() {
	return (
		<>
			<PathProvider>
				<div />
			</PathProvider>
			<Outlet />
		</>
	);
}

export default Layout;

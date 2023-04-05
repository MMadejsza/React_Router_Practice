import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';

const permission = false;

const AdminPage = () => {
	return (
		<Routes>
			<Route
				// no particular path for this route so '*', later under condition we specify the path
				path='*'
				element={
					permission ? (
						<h3>Admin Panel - Hello!</h3>
					) : (
						<Navigate
							replace
							to='/login'
						/>
					)
				}
			/>
		</Routes>
	);
};

export default AdminPage;

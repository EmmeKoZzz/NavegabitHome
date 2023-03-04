import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home.index";
import Layout from "./Layout";

const PathHandler = () => {
  return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path={"/"} element={<Layout />}>
						<Route index element={<Home />} />
						<Route path="test" element={<div />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default PathHandler;

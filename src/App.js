import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./App.css"
import GetStarted from "./pages/GetStarted"
import SignUp from "./pages/SignUp"
import SignIn from "./pages/SignIn"
import Home from "./pages/Home"

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<GetStarted />} />
				<Route path="/signup" element={<SignUp />} />
				<Route path="/signin" element={<SignIn />} />
				<Route path="/home" element={<Home />} />
			</Routes>
		</Router>
	)
}

export default App
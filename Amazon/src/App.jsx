import { useEffect } from "react";
import "./App.css";
import Header from "./Components/Header/Header.jsx";
import Home from "./Components/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./Components/Checkout/Checkout";
import Login from "./Components/Login/Login";
import { useStateValue } from "./Components/StateProvider/StateProvider";
import { auth } from "../src/Components/firebase";
import Payment from "./Components/Payment/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Components/Orders/Orders";
import Footer from "./Components/Footer/Footer";

const promise = loadStripe(
	"pk_test_51NQDohIBU5uDlk4gqgGQqapMGcoSlmJlPA8zXN4LP0olybhzsPrwN2wOKNBvjIcr192kR8QQQ6d48blW6CqyRQx800Llsxn1FV"
);

function App() {
	const [{}, dispatch] = useStateValue();
	useEffect(() => {
		auth.onAuthStateChanged((authUser) => {
			// console.log("THE USER IS >>> ", authUser);
			if (authUser) {
				dispatch({
					type: "SET_USER",
					user: authUser,
				});
			} else {
				dispatch({
					type: "SET_USER",
					user: null,
				});
			}
		});
	}, []);

	return (
		<Router>
			<div className="App">
				<Routes>
					<Route
						path="/orders"
						element={
							<>
								<Header />
								<Orders />
								<Footer />
							</>
						}
					/>

					<Route
						path="/login"
						element={
							<>
								<Login />
								<Footer />
							</>
						}
					/>
					<Route
						path="/payment"
						element={
							<>
								<Header />
								<Elements stripe={promise}>
									<Payment />
								</Elements>
								<Footer />
							</>
						}
					/>
					<Route
						path="/checkout"
						element={
							<>
								<Header />
								<Checkout />
								<Footer />
							</>
						}
					/>
					<Route
						path="/"
						element={
							<>
								<Header />
								<Home />
								<Footer />
							</>
						}
					/>
				</Routes>
			</div>
		</Router>
	);
}

export default App;

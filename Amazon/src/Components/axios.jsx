import axios from "axios";

const instance = axios.create({
	// baseURL: "https://fluffy-trench-coat-hen.cyclic.app/",
	baseURL: "http://localhost:10000",
});

export default instance;

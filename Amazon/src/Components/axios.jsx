import axios from "axios";

const instance = axios.create({
	baseURL: "https://fluffy-trench-coat-hen.cyclic.app/",
	// baseURL: "https://us-central1-aug-bc35b.cloudfunctions.net/api",
});

export default instance;

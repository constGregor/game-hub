import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "e945fdef8829435f898c64878605efb4"
    }
})
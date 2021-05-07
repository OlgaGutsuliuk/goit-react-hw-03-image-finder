import axios from "axios";


 const API_KEY = "21136426-afcb5201061db39cb3c01877f";

const fetchArticles = ({searchQuery="", page=1}) => {
    return axios
        .get(`https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`)
    .then(response=>response.data.hits)
}
export default {fetchArticles}
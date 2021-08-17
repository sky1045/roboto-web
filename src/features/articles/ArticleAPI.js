import axios from 'axios';

const getArticles = async () => {
    try {
        return await axios.get('http://localhost:8080/article')
    } catch(err) {
        throw err
    }
}

const getArticle = async (id) => {
    try {
        return await axios.get('http://localhost:8080/article/' + id)
    } catch(err) {
        throw err
    }
}

export {
    getArticles,
    getArticle,
}
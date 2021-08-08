import axios from 'axios';

const getArticles = async () => {
    try {
        return await axios.get('http://localhost:8080')
    } catch(err) {
        throw err
    }
}

const getArticle = async (id) => {
    try {
        return await axios.get('http://localhost:8000/' + id)
    } catch(err) {
        throw err
    }
}

export {
    getArticles,
    getArticle,
}
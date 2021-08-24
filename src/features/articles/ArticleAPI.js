import axios from 'axios';

const getArticles = async (page) => {
    try {
        return await axios.get('http://localhost:8080/article?page='+(page-1))
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

const createArticle = async (data) => {
    try {
        return await axios.post('http://localhost:8080/article', data)
    } catch(err) {
        throw err
    }
}

const updateArticle = async(id, data) => {
    try {
        return await axios.put('http://localhost:8080/article' + id, data)
    } catch(err) {
        throw err
    }
}

export {
    getArticles,
    getArticle,
    createArticle,
    updateArticle as putArticle
}
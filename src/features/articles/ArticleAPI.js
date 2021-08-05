import axios from 'axios';

const getArticles = async () => {
    try {
        return await axios.get('http://localhost:8080')
    } catch(err) {
        throw err
    }
}

export {
    getArticles
}
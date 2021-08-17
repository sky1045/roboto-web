import react from 'react'
import { Route } from 'react-router-dom';
import MainPage from './Main';
import ArticleDetail from './Article/ArticleDetail';
import ArticleCreate from './Article/ArticleCreate';

const Routes = (routeProps) => {
    return (
        <>
            <Route path="/" component={MainPage} exact />
            <Route path="/article/:id" component={ArticleDetail} exact />
            <Route path="/article" component={ArticleCreate} exact />
        </>
    )
}

export default Routes
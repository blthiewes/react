import React, {Component} from 'react';
import DataApi from '../DataApi';
import {data} from '../testData';
import ArticleList from './ArticleList';

const api = new DataApi(data);

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      authors: api.getAuthors(),
      articles: api.getArticles(),
    };
  }
  articleActions = {
    lookupAuthor: authorId => this.state.authors[authorId],
  };
  render() {
    return (
      <ArticleList
        articles={this.state.articles}
        articleActions={this.articleActions}
      />
    );
  }
}

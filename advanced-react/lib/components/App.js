import React, {Component} from 'react';
import DataApi from '../DataApi';
import {data} from '../testData';

const api = new DataApi(data);

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      authors: api.getAuthors(),
      articles: api.getArticles(),
    };
  }
  render() {
    return <div>...</div>;
  }
}

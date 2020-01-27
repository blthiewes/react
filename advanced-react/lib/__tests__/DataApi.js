
import {data} from '../testData';

import DataApi from '../DataApi';

const api = new DataApi(data);

describe('DataApi', () => {
  it('should expose articles as an object', () => {
    const articles = api.getArticles();
    const articleId = data.articles[0].id;
    const articleTitle = data.articles[0].title;

    expect(articles).toHaveProperty(articleId);
    expect(articles[articleId].title).toBe(articleTitle);
  });

  it('should expose authors as an object', () => {
    const authors = api.getAuthors();
    const authorId = data.authors[0].id;
    const authorTitle = data.authors[0].title;

    expect(authors).toHaveProperty(authorId);
    expect(authors[authorId].title).toBe(authorTitle);});
});


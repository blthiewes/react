import React from 'react';
const styles = {};
const dateDisplay = dateString => new Date(dateString).toDateString();

function Article(props) {
  const {article, author} = props;
  return (
    <div style={styles.article}>
      <div style={styles.title}>{article.title}</div>
      <div style={styles.date}>{dateDisplay(article.date)}</div>
      <div style={styles.author}>
        <a href={author.website}>
          {author.firstName} {author.lastName}
        </a>
      </div>
      <div style={styles.body}>{article.body}</div>
    </div>
  );
}

export default Article;

import React from 'react';
import PropTypes from 'prop-types';

import Comment from './Comment';

function Post({author, date, content, comments}) {  
  return (
    <article className="post">
      <header className="post-header">
        <img src={author.avatar} alt="Perfil"/>
        <ul className="post-header-info">
          <li><a href="#">{author.name}</a></li>
          <li>{date}</li>
        </ul>
      </header>
      <p className="post-content">{content}</p>
      <section className="post-comments">        
        {comments.map(comment => (
          <Comment key={comment.id} author={comment.author} content={comment.content} />
        ))}                
      </section>
    </article>
  );
}

Post.propTypes = {
  author: PropTypes.exact({
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
  }).isRequired,
  date: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      author: PropTypes.shape({
        name: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired,
      }).isRequired,
      content: PropTypes.string.isRequired,
    }),
  ).isRequired,
}

export default Post;
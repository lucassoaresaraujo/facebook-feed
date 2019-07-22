import React from 'react';
import PropTypes from 'prop-types';

function Comment({author, content}) {
  return (
      <div className="comment">          
          <img className="comment-user" src={author.avatar} alt="Perfil"/>
          <p className="comment-content"><strong><a href="#">{author.name}</a></strong> {content}</p>
      </div>    
  );
}

Comment.propTypes = {
  author: PropTypes.exact({
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
  }).isRequired,
  content: PropTypes.string.isRequired,
}

export default Comment;
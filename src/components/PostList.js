import React, { Component } from 'react';

import Post from './Post';

import PerfilImg from '../assets/img/perfil1.png';
import CommentImg from '../assets/img/comment1.png';
import LucasImg from '../assets/img/lucas.jpeg';

export default class PostList extends Component {

  state = {
    posts: [
      {
        id: 2,
        author: {
          name: 'Diego Fernandes',
          avatar: PerfilImg
        },
        date: '04 Jun 2019',
        content: 'Pessoal, alguém sabe se a Rocketseat está contratando?',
        comments: [
          {
            id: 1,
            author: {
              name: 'Diego Fernandes',
              avatar: CommentImg
            },
            content: "Conteúdo do comentário"
          },
          {
            id: 2,
            author: {
              name: 'Lucas Soares',
              avatar: LucasImg
            },
            content: "Nossa cara, estou com muita fome. Não sei como vocês aguentam ficar sem comer."
          }
        ],
      },
      {
        id: 1,
        author: {
          name: 'Diego Fernandes',
          avatar: PerfilImg
        },
        date: '04 Jun 2019',
        content: 'Pessoal, alguém sabe se a Rocketseat está contratando?',
        comments: [
          {
            id: 1,
            author: {
              name: 'Diego Fernandes',
              avatar: CommentImg
            },
            content: "Conteúdo do comentário"
          },
          {
            id: 2,
            author: {
              name: 'Lucas Soares',
              avatar: LucasImg
            },
            content: "Nossa cara, estou com muita fome. Não sei como vocês aguentam ficar sem comer."
          }
        ],
      },
    ]  
  };

  render() {
    const { posts } = this.state;
    return (
      <section id="post-list">
        {posts.map(post => (
          <Post key={post.id} author={post.author} content={post.content} date={post.date} comments={post.comments} />
        ))}
      </section>
    );
  }
}

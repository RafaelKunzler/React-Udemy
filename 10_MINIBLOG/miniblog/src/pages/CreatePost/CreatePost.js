import styles from './CreatePost.module.css';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthValue } from '../../context/AuthContext';
import { useInsertDocument } from '../../hooks/useInsertDocument';

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState([]);
  const [formError, setFormError] = useState("");

  const { user } = useAuthValue();

  const { insertDocument, response } = useInsertDocument();

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError("")
    console.log("handle Submit")

    // validate image url

    // create tags array

    // check all values

    console.log({
      title,
      image,
      body,
      tags,
      uid: user.uid,
      createdBy: user.displayName,
    })

    insertDocument({
      title,
      image,
      body,
      tags,
      uid: user.uid,
      createdBy: user.displayName,
    });

    // redirect to home page
  }



  return (
    <div className={styles.create_post}>
        <h2>Criar post</h2>
        <p>Escreva sobre o que quiser e compartilhe o seu conhecimento!</p>
        <form onSubmit={handleSubmit}>
          <label>
            <span>Titulo:</span>
            <input 
              type="text" 
              name= "title"
              required
              placeholder='Pense num bom título...'
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
          </label>
          <label>
            <span>Url da imagem:</span>
            <input 
              type="text" 
              name= "image"
              required
              placeholder='Insira uma imagem que representa  seu post'
              onChange={(e) => setImage(e.target.value)}
              value={image}
            />
          </label>
          <label>
            <span>Conteúdo</span>
            <textarea
              name= "body"
              required
              placeholder='Insira o conteudo do post'
              onChange={(e) => setBody(e.target.value)}
              value={body}
            ></textarea>
          </label>
          <label>
            <span>Tags:</span>
            <input 
              type="text" 
              name= "tags"
              required
              placeholder='Insira as tags separadas por virgula'
              onChange={(e) => setTags(e.target.value)}
              value={tags}
            />
          </label>          
          {!response.loading && <button className="btn">Criar post!</button>}
          {response.loading && (
            <button className="btn" disabled>
              Aguarde.. .
            </button>
          )}
          {(response.error || formError) && (
            <p className="error">{response.error || formError}</p>
          )}
        </form>
    </div>
  )
}

export default CreatePost
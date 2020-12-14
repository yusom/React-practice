import React, { Component } from 'react';

class CreateContent extends Component {
    render() {
      return(
        <article>
          <h2>Create</h2>
          <form>
            <p><input type="text" name="title" placeholder="title"></input></p>
            <p>
              <textarea name="desc" placeholder="description"></textarea></p>
            <p>
              
            </p>
          </form>
        </article>
      )
    }
  }

  export default CreateContent;

  //placeholder 빈칸에 아무것도 입력안했을 때 출력되는 글씨
  //textarea 입력할 text가 여러줄일 때 사용
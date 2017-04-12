import React from 'react';

export default class AddCard extends React.Component {
  render() {
    const addCard = this.props.addCard;
    let name;
    let photo;
    return(
      <form>  
        <div>
          <label>Full Name</label>
          <input ref={ node => { name = node; }} required></input>
        </div>
        <div>
          <label>Photo URL</label>
          <input ref={ node => { photo = node; }}></input> 
        </div>
        <button
          onClick={(e) => {
            e.preventDefault();
            addCard({
              name: name.value,
              photo: photo.value
            });
            name.value = '';
            photo.value = '';
          }}
        >Create</button>
      </form>
    );
  }
}

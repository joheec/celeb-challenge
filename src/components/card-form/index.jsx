import React from 'react';
import './style.scss';

export default ({ addCard }) => {
  let name;
  let photo;
  return(
    <form>  
      <div>
        <label className="name">Full Name</label>
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

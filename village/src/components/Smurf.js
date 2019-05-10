import React from 'react';

const Smurf = props => {

  const smurf = props.smurfs.find( smurf => `${smurf.id}` === props.match.params.id);

  if(!smurf) {
    return <h2>Smurf not found!</h2>
  }

  const deleteSmurf = event => {
    event.preventDefault();
    props.deleteSmurf(smurf.id)
  }
  
  return (
    <div className="Smurf">
      <h3>{smurf.name}</h3>
      <strong>{smurf.height} tall</strong>
      <p>{smurf.age} smurf years old</p>
      <button onClick={deleteSmurf}>Delete Smurf</button>
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;


import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Bootstrape_Demo = () => {
    return (<>
        <input type="submit" className="btn btn-success" />
      <h1 className='text-center mt-3 text-success'>Hello Welcome 😄</h1>
        <div className="alert alert-success" role="alert">
  A simple success alert—check it out!
</div>



<div className="container my-5" >
  <div className="row">  

  <div className="col-sm">
<div className="card" style={{width: '18rem'}}>
  <img src="https://picsum.photos/200/200" className="card-img-top" alt="..." height="200px"/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
</div>

<div className="col-sm">
<div className="card" style={{width: '18rem'}}>
  <img src="https://picsum.photos/200/201" className="card-img-top" alt="..." height="200px"/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
</div>

<div className="col-sm">
<div className="card" style={{width: '18rem'}}>
  <img src="https://picsum.photos/200/202" className="card-img-top" alt="..." height="200px"/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
</div>

</div>
</div>


    </>);
};

export default Bootstrape_Demo;
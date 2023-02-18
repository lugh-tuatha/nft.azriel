import './index.css';

import img from '../../assets/image/dummy/aae04385c14ba84b5a7d8a00fcc53e68.gif';

function Collection({ image, title, floorPrice, volume }) {
  return (
    <div className="card">
      <img src={image} className="card-img-top img-fluid" alt="..." />
      <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <div className="row info">
            <div className="col">
              <p className="label">floor</p>
              <p className="value">{floorPrice}</p>
            </div>
            <div className="col">
              <p className="label">Total volume</p>
              <p className="value">{volume}</p>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Collection;
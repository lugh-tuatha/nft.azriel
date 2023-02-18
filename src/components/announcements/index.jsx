import './index.css';

import img from '../../assets/image/dummy/good_apes__pfp_1668010066125.jpg';

function Announcements() {
  return (
    <div className='container-fluid announcement-container'>
      <div className="section-header">
        <h2 className="title">Trending announcements 📢 </h2>
        <span className="bandge">beta</span>
      </div>
      <div className="card no-hover">
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <div className="row">
              <div className="col-lg-3">
                <div className="profile">
                  <img src={img} alt="" />
                  <p className="name">Leprechauns</p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="topic">
                  <p className="date">1 hour ago</p>
                  <h6 className="title">We are thrilled to launch Golden Gambit!</h6>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="more-details">
                  <a href="" className='view-details'>View Details</a>
                  <a href="" className='social'><i className="bi bi-twitter"></i></a>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Announcements;
import './index.css';

function Announcements({author, date, caption, authorProfile}) {
  return (
    <div className="card no-hover mb-2">
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <div className="row">
            <div className="col-lg-3">
              <div className="profile">
                <img src={authorProfile} />
                <p className="name">{author}</p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="topic">
                <p className="date">{date}</p>
                <h6 className="title">{caption}</h6>
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
  )
}

export default Announcements;
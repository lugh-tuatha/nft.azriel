import '../index.css'
import Feature from '../components/feature'
import Announcements from '../components/announcements'
import Collection from '../components/collections'
import Footer from '../components/footer'

import NotableCollection from '../data/notable-collection/notableCollection'
import announcement from '../data/announcements/announcements'

import './pages.css'

export default function Dashboard() {
  return (
    <div>
      <Feature />

      <div className="cotainer-fluid announcement-container">
        <div className="section-header">
          <h2 className="title">Trending announcements 📢 </h2>
          <span className="bandge">beta</span>
        </div>
        {announcement.map(announcements => (
          <Announcements author={announcements.author} date={announcements.date} caption={announcements.caption} authorProfile={announcements.authorProfile}/>
        ))}
      </div>


      <div className='container-fluid collectionContainer'>
        <div className="section-header">
          <h2 className="title">Notable Collections</h2>
        </div>
        <div className="row collectionCards">
          {NotableCollection.map(nCollection => (
            <Collection key={nCollection.key} title={nCollection.title} floorPrice={nCollection.floorPrice} volume={nCollection.volume} image={nCollection.image}/>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}
import '../index.css'
import Feature from '../components/feature'
import TeamCards from '../components/team-cards'
import Announcements from '../components/announcements'
import Collection from '../components/collections'
import Footer from '../components/footer'

import NotableCollection from '../data/notable-collection/notableCollection'

import './pages.css'

export default function Dashboard() {
  return (
    <div>
      <Feature />
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
      {/* <h1>Notable collection</h1> */}
      <Announcements />
      <Footer />
      {/* <h1>Teams</h1> */}
    </div>
  )
}
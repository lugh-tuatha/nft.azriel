import '../index.css'
import Feature from '../components/feature'
import TeamCards from '../components/team-cards'
import Announcements from '../components/announcements'
import Footer from '../components/footer'

import './pages.css'

export default function Dashboard() {
  return (
    <div>
      <Feature />
      {/* <h1>Notable collection</h1> */}
      <Announcements />
      <Footer />
      {/* <h1>Teams</h1> */}
    </div>
  )
}
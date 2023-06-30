import './App.css'
import Header from './components/header'
import FriendsArea from './components/friendsArea'
import SuggestedArea from './components/suggestedArea'
import Feed from './components/feed'

export default function App() {
  return (
    <div className="container">
      <div className="cabecalho"><Header /> </div>
      <div className="areaAmigos"><FriendsArea /> </div>
      <div className="feed"><Feed /></div>
      <div className="areaSugestao"><SuggestedArea /> </div>
    </div>
  )
}

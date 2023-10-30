import Navigation from './components/navigation/Navigation'
import MainContent from './components/main/MainContent'
import { DataProvider } from './context/DataProvider'
import Popup from './components/dialog/Popup'

function App() {

  return (
    <DataProvider>
      <div className='w-full sm:w-[500px] mx-auto px-5 py-8'>
        <header className='font-bold text-2xl text-my-color-text mb-6'>What's the plans for today?</header>
        <Navigation />
        <MainContent />
      </div>
      <Popup />
    </DataProvider>
  )
}

export default App

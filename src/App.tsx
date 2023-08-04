import { Header } from './components/Header'
import { useState } from 'react'
import createMockData  from './createMockData'
import { OverviewDaily } from './views/OverviewDaily'

function App() {
  const startingDate = new Date()
  const [data, setData] = useState(createMockData(30, startingDate))
  const [currentView, setCurrentView] = useState('Overview Daily')



  let displayContent;
  if(currentView === 'Overview Daily'){
    displayContent = <OverviewDaily data={data}/>
  } else if(currentView === 'Overview Monthly'){
    displayContent = <>LOL</>
  }

  return (
    <>
        <Header 
          setData={setData} 
          currentView={currentView}
          setCurrentView={setCurrentView}/>       
        {displayContent}
    </>
  )
}

export default App

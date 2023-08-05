import { Header } from './components/Header'
import { useState } from 'react'
import { createMockData } from './createMockData'
import { OverviewDaily } from './views/OverviewDaily'
import { OverviewMonthly } from './views/OverviewMonthly'

function App() {
  const startingDate = new Date()
  const [data, setData] = useState(createMockData(30, startingDate))
  const [currentView, setCurrentView] = useState('Overview Daily')



  let displayContent;
  switch(currentView){
    case 'Overview Daily':
      displayContent = <OverviewDaily data={data}/>
    break;
    case 'Overview Monthly':
      displayContent = <OverviewMonthly data={data}/>
    break;

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

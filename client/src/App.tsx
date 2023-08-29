import { Header } from './components/Header'
import { useEffect, useState } from 'react'
import { fetchData } from './access-api/fetchData'
import { OverviewDaily } from './views/OverviewDaily'
import { OverviewMonthly } from './views/OverviewMonthly'
import { PieChartTotalSpend } from './views/PieChartTotalSpend'
import { CreativePerformance } from './views/CreativePerformance'
import { BestDays } from './views/BestDays'

function App() {

  const [data, setData] = useState([])
  const [currentView, setCurrentView] = useState('Overview Daily')
  const [loading, setLoading] = useState(false)

  useEffect(() =>{
    const startDate = new Date()
    const endDate = new Date()
    endDate.setDate(startDate.getDate() - 30)


    async function getDailyDataForDateRange(startDate:Date, endDate:Date){
      setLoading(true)
      const startDateIso = startDate.toISOString().slice(0, 10).replace('T', ' ')
      const endDateIso = endDate.toISOString().slice(0, 10).replace('T', ' ')
      // add api call here with startDate and endDate
      const url = `http://localhost:3000/daily-transactions?start=${startDateIso}&end=${endDateIso}`
      console.log(url)
      const res = await fetchData(url)
        // display loading spinner
      console.log(res)
      setData(res)
      console.log(data)
      // transform data to match frontend specifications
        // transform date to Date Object?: 
        console.log('test')
        setLoading(false)
    }
    getDailyDataForDateRange(startDate, endDate)
  },[])



  let displayContent;
  switch(currentView){
    case 'Overview Daily':
      displayContent = <OverviewDaily data={data}/>
    break;
    case 'Overview Monthly':
      displayContent = <OverviewMonthly data={data}/>
    break;
    case 'Pie Chart Total Spend':
      displayContent = <PieChartTotalSpend data={data}/>
    break;
    case 'Creative Performance':
      displayContent = <CreativePerformance data={data}/>
    break;
    case 'Best Days':
      displayContent = <BestDays data={data}/>
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

import Chart from 'react-google-charts';
 
const options = {
    legend: "none",   
    chartArea: { width: "75%", height: "75%"}
  };

const UniqueChart = ({dataDay}: {dataDay: Array<[string, number, number, number, number]>}) => {

    dataDay.reverse()

    const data = [["day", "Day", "b", "c", "d"], ...dataDay]
    
  return (
    <Chart
      chartType="CandlestickChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  )
}

export default UniqueChart
import React, {useEffect, useState,} from 'react';
import './App.css';

const  App = ()  =>{ 
  const FETCH_INTERVAL = 30000;
  const REFRESH_INTERVAL = 1000; 
  const [loading, setLoading] = useState<Boolean>(false)
  const [serverTime, setServerTime] = useState(0)
  const [timeDiff, setTimeDiff] = useState<string>('')
  const [metrics, setMetrics] = useState<String>('')

  const fetchTime = async () => {
    setLoading(true);
    try {
      const res = await fetch('http://localhost:8080/time', {
        method: 'GET',
        headers: {
          "Authorization": 'mysecrettoken',
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
      });
  
      if (!res.ok) {
        throw new Error(`Error: ${res.status}`);
      }
  
      const timeData = await res.json();
      setServerTime(timeData.properties.epoch.description);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const fetchMetrics = async () => {
    try {
      const res = await fetch('http://localhost:8080/metrics', {
        method: 'GET',
        headers: {
          "Authorization": 'mysecrettoken',
        }
      });
      if (!res.ok) {
        throw new Error(`Error: ${res.status}`);
      }

      const metricsData = await res.text();
      setMetrics(metricsData);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
        fetchTime(); 
        fetchMetrics();

    const fetchInterval = setInterval(() => {
        fetchTime();
    }, FETCH_INTERVAL);

        return () => clearInterval(fetchInterval);
  },[])

  const calculateTimeDifference = () => {
    const currentEpoch = Date.now(); 
    const diff = new Date(currentEpoch - serverTime); 
    setTimeDiff(`${diff.getUTCHours().toString().padStart(2, '0')}:${diff.getUTCMinutes().toString().padStart(2, '0')}:${diff.getUTCSeconds().toString().padStart(2, '0')}`); 
  }

  useEffect(() => {
    const diffInterval = setInterval(() => {
      calculateTimeDifference(); 

    }, REFRESH_INTERVAL)

    return () => clearInterval(diffInterval)

  }, [serverTime])


  if (loading) { return <div>Loading...</div> }
  
  return (
    <div className="App">
      <div className='grid-container'>
        <div className='grid-content'>
          <h2>Server Time</h2>
      <p>{new Date(serverTime).toString()}</p>
      <p>Time Difference:{timeDiff}</p>
    </div>
    <div className='grid-content'>
    <h2>Metrics</h2>
    <pre>
      {metrics}
    </pre>
    </div>
      </div>
    </div>
  );
}

export default App;

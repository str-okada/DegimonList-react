import './App.css';
import { useEffect, useState } from 'react';
import { getAllDegimon, getDegimon } from './utils/degimon';
import Card from './components/Card';

function App() {
  const initailURL = "https://digimon-api.vercel.app/api/digimon";
  
  const [loading, setLoading] = useState(true);
  const [degimonData,setDegimonData] = useState([]);

  useEffect(() => {
    const fetchDegimonData = async () => {
      // get all degimon
      let res = await getAllDegimon(initailURL);

      // get details!
      loadDegimon(res);

      setLoading(false);
    }
    fetchDegimonData();
  }, []);

  const loadDegimon = async (data) => {
    let _degimon = await Promise.all(
    data.map((degimon) => {
      return degimon;
    })
    )
    setDegimonData(_degimon);
  }


  return (
    <div className="App">
      <h1>Digimon List</h1>
      {loading ? (
        <h1>Loading...</h1>
      ) : (<>
        <div className='degimonCardContainer'>
        {
          degimonData.map((degimon, i)=>{
            // return <div>Degimon</div>;
            return <Card key={i} degimon={degimon}></Card>
          })
        }
        </div>
      </>
      )}
    </div>
  );
}

export default App;

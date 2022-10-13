import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Checkbox from './Checkbox';
import { Catalogues } from './mock';
import { Autocomplete, TextField } from '@mui/material';

function App() {
  // const options =  useEffect(() => {
  //   axios.get("https://jsonplaceholder.typicode.com/users")
  //     .then(res => res.data)
  //     .then(result => setData(result))
  // }, [])

  // const options = useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/users", { method: "GET" })
  //     .then((data) => data.json())
  //     .then((result) => setData(result));
  // }, [])


  const options = ['Monday', 'Tuesday', 'Thursday',
    'Friday', 'Saturday', 'Sunday']

  const [isCheckAll, setIsCheckAll] = useState(false);
  const [isCheck, setIsCheck] = useState([]);
  const [list, setList] = useState([]);

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users", { method: "GET" })
      .then((data) => data.json())
      .then((result) => setData(result));
  }, [])

  useEffect(() => {
    setList(Catalogues);
  }, [list]);

  const handleSelectAll = e => {
    setIsCheckAll(!isCheckAll);
    setIsCheck(list.map(li => li.id));
    if (isCheckAll) {
      setIsCheck([]);
    }
  };

  const handleClick = e => {
    const { id, checked } = e.target;
    setIsCheck([...isCheck, id]);
    if (!checked) {
      setIsCheck(isCheck.filter(item => item !== id));
    }
  };

  console.log(isCheck);

  const catalog = list.map(({ id, name }) => {
    return (
      <>
        <Checkbox
          key={id}
          type="checkbox"
          name={name}
          id={id}
          handleClick={handleClick}
          isChecked={isCheck.includes(id)}
          // onclick={setData}
        />
        {name}
      </>
    );
  });
  return (
    <div className="App">
      <div>
        <Checkbox
          type="checkbox"
          name="selectAll"
          id="selectAll"
          handleClick={handleSelectAll}
          isChecked={isCheckAll}
          // onclick={setData}

        />
        Select All
        <hr />
        {catalog}
      </div>

      <hr />

      <h3>city</h3>
      <div style={{ marginLeft: '40%', marginTop: '60px' }}>
        <Autocomplete
          options={options}
          style={{ width: 300 }}
          renderInput={(params) =>
            <TextField {...params} label="Combo box" variant="outlined" />}
        />
      </div>
    </div>
  );
}

export default App;

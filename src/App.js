import "./App.css";
import { useEffect, useState } from "react";
import { getUsers } from "./api/axios";
import SearchBar from "./SearchBar";
import List from "./List";


function App() {
  const [user, setUser] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  

  useEffect(() => {
  getUsers()
      .then((json) => {
        setUser(json);
        return (json);
            })
      .then((json) => {
        setSearchResults(json);
      });

  }, []);

  return (
<>
<SearchBar  user={user} setSearchResults={setSearchResults} />
<List searchResults={searchResults}/>

</>
  )
}
export default App;

import { useContext } from 'react';
import './Search.css'
import SearchIcon from '@mui/icons-material/Search';
import { Context } from '../context/Context';

function Search() {
  const {input, setInput, search} = useContext(Context);
  let handleSubmit = async(e) => {
    await e.preventDefault();
  }
  return (
    <div className="searchBar sm:mb-2 sm:w-[90vw]">
          <form onSubmit={handleSubmit} method="GET" action="/listings" className="d-flex searchips" role="search">
          <input onChange={(e)=>setInput(e.target.value)} value={input} type="search" placeholder='Ask Jarvis' className="form-control me-2 searchip"/>            
            <button onClick={()=> search(input) } className="btn Sbtn rounded-full w-[66.4px]" type="submit">
            <SearchIcon />
            </button> 
        </form>
    </div>
  )
}

export default Search

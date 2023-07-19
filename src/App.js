
import { useEffect, useState } from 'react';
import './App.css';
import SearchIcon from'./search.svg';
import MovieCard from './MovieCard';

// API key/URL
const API_URL ='http://www.omdbapi.com?apikey=YourAPIKey';


const App = ()=>{

    // usestate 
    const [movies,setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    const searchMovies = async (title) =>{
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        setMovies(data.Search);

    }



    useEffect(() =>{
     
    },[]);

    return(
          <>  
         <div className="app">
        <h1>Zedflix</h1>
        
         <div className="search">
          {/* search bar input  */}
            <input
            placeholder='search'
            onChange={(e)=>{setSearchTerm(e.target.value)}}
            />
            {/* search icon */}
            <img
            src={SearchIcon}
            alt='search icon'
            onClick={()=> searchMovies(searchTerm)}
            />
        </div>

    
      </div>
        {/* if no movies are found */}
    {
        movies?.length > 0
        ?(
            <div className='container'>
            {movies.map((movie) => (     
                 <MovieCard movie ={movie}/>)
          
            )}
        </div>
        ):
        <div className='empty'>
            <h2>No movies found</h2>
        </div>
    }




        </>
     
    );
}

export default App;

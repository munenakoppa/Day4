import {useEffect,useState} from 'react';

function AlbumList(){
    const [albums, setAlbums] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [iserror, setIsError] = useState(false);
    const [error, setError] = useState(null);
        
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/albums").then((response)=>{
            if(response.ok){
                    return response.json()
            }
            throw new Error("Failed to Fetch data");
        }
    ).then((data)=>{
        console.log(data);
        setAlbums(data);
        setIsLoading(false);
        setIsError(false);
    }).catch((error)=>{
        console.log(error);
        setError("Something Wrong in the API Loading..");
        setIsError(true);
        setIsLoading(false);
    })
       
    },[]);

return(
    <div>
        { isLoading && <p>Trying to fetch the data from Server</p>}
        { iserror && !isLoading && <p>{error}</p>}
        { !isLoading && !iserror &&
        <ul>
        {albums.map(album => (
        <li key={album.id}>{album.title}</li>
        ))}
        </ul>
    }

        
    </div>
)
}

export default AlbumList;
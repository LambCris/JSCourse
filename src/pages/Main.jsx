import OneDayWeather from "../components/OneDayWeather";
import InputSearch from "../components/InputSearch";

export default function Main(){
  return(
    <div className='mainWrapper'> 
    <div className= 'container'>
    <InputSearch/>
    <OneDayWeather/>
    </div>
    </div>  
   ); 

}
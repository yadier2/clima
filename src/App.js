import React, { useEffect, useState } from 'react'
import useGeoLocation from './hooks/useGeoLocation'
import { Navbar } from './components/Navbar'
import { InfoClima } from './components/InfoClima'
import { HourConditon } from './components/HourConditon'
import { WeekConditions } from './components/WeekConditions'

const initialLocation = () => {
  if (localStorage.getItem("lastLocation")) {
    let savedLocation = JSON.parse(localStorage.getItem("lastLocation"));
    return (savedLocation);
  } else {
    return ({
      lat: 36.115778036660316,
      lng: -115.17280731388223,
    });
  }
}


export const App = () => {
  const [medidasTiempo, setMedidasTiempo] = useState("")
  const [city, setCity] = useState(initialLocation);
  const [weatherHour, setWeatherHour] = useState([]);
  const [weatherWeek, setweatherWeek] = useState([]);
  const [weatherForecast, setWeatherForecast] = useState({});
  const gpsLocate = useGeoLocation();

  const handleGeolocate = () => {
    
    if (gpsLocate.error) {
      alert("Error, Actualiza y permitenos acceder a tu ubicacion")
    return
    }

      setCity({
        lat: gpsLocate.coordinates.lat,
        lng: gpsLocate.coordinates.lng,
        ciudad: '',
      });
    };
  

  let dayHour = new Date(1624972733 * 1000).getHours()
  if (dayHour > 6 && dayHour < 18) {

  }
  useEffect(() => {
   
    const getClima = async () => {
      const url = `https://corsproxybypass.herokuapp.com/https://api.darksky.net/forecast/88030114c5e47763a011a75e7a10c633/${city.lat}, ${city.lng}`
      const res = await fetch(url)
      const data = await res.json();
      console.log(data);
      setMedidasTiempo({
        temperature: (((data.currently.temperature - 32) * 5) / 9).toFixed(1),
        wind: data.currently.windSpeed,
        humidity: data.currently.humidity,
        dewPoint: data.currently.dewPoint,
        pressure: data.currently.pressure,
        icon: data.currently.icon,
        summary: data.currently.summary,
        ciudad: city.ciudad
      })

      setWeatherHour(data.hourly.data)
      setweatherWeek(data.daily.data);
      setWeatherForecast({
        summary2: data.hourly.summary,
        icon2: data.hourly.icon
      })
    }
    getClima()
  }, [city])

  const getLocation = async (e) => {
    e.preventDefault()
    const { city } = e.target.elements
    // console.log(city, country);
    const cityValue = city.value;
    if (cityValue) {
      const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${cityValue}.json?access_token=pk.eyJ1Ijoiam9uYXRoeiIsImEiOiJja3FkYmxqeTYxMThyMnBzN3IxZzV1NjY3In0.HpVGfj3JG4CfaxCzpYLn_g`
      const res = await fetch(url)
      const data = await res.json();
      console.log(data,"sssssss");
      if(data.features.length<1){
        alert("Ingresa una ciudad valida")
        return
      }
        setCity({
          lat: data.features[0].center[1],
          lng: data.features[0].center[0],
          ciudad: data.features[0].place_name,
        });
      

      localStorage.setItem(
        "lastLocation",
        JSON.stringify({
          lat: data.features[0].center[1],
          lng: data.features[0].center[0],
          ciudad: data.features[0].place_name,
        })
      )
    }
  }
  return (
    <>
      <Navbar getLocation={getLocation} handleGeolocate={handleGeolocate} medidasTiempo={medidasTiempo} />
      <div className="container">
        <div className="row mt-4" >
          <InfoClima {...medidasTiempo} {...weatherForecast} />
          <HourConditon weatherHour={weatherHour} />
          <WeekConditions weatherWeek={weatherWeek} />
        </div>
      </div>
    </>
  )
}



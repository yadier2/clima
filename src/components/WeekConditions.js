import React from 'react'
import Moment from "react-moment";
export const WeekConditions = ({ weatherWeek }) => {

  return (
    <div>
      {
          weatherWeek.length>0 && <h2 className="mt-5 mb-3">Clima para la próxima semana</h2>
      }
      <div className="row d-flex justify-content-around">
        {
          weatherWeek?.map((day, id) => (
              <div key={id} className="card m-2 shadow" style={{ width: "15rem" }}>
                <div className="text-center">

                <img src={`https://darksky.net/images/weather-icons/${day.icon}.png`}
                 className="card-img-top" alt="..." 
                 style={{ width: "80px"}}/>
                 </div>
                <div className="card-body">
                  <h5 className="card-title">
                    <Moment unix format="dddd">
                      {day.time}
                    </Moment> 
                
                  </h5>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between"><span><i className="fas fa-temperature-low"></i> Min</span> <span>{(((day.temperatureMin - 32) * 5) / 9).toFixed(1)}<sup>°c </sup></span></li>
                    <li className="list-group-item d-flex justify-content-between">
                           <span><i className="fas fa-temperature-high"></i> Max</span>
                           <span>  {(((day.temperatureMin - 32) * 5) / 9).toFixed(1)}<sup>°c</sup></span>
                      </li>
                    <li className="list-group-item d-flex justify-content-between" >  <span><i className="fas fa-wind"></i> Wind</span>
                      <span>{day.windSpeed} mph</span></li>
                    <li className="list-group-item d-flex justify-content-between" > <span><i className="fas fa-tint"></i> Humidity</span> <span>{(day.humidity * 100).toFixed()}% </span></li>
                    <li className="list-group-item d-flex justify-content-between" ><span><i className="fas fa-arrows-alt-v"></i> Pressure</span><span>{day.pressure.toFixed()} mb</span> </li>
                  </ul>
                </div>
              </div>
          )
          )
        }
      </div>
    </div>
  )
}

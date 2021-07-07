import React from 'react'

export const InfoClima = (props) => {
    return (
        <>
            <div className='col-md-7'>
                {
                    props.temperature ?
                        <div className="card card-body text-white" style={{ background: '#04709418' }}>
                            <h3>
                                {!props.ciudad ?
                                    "El tiempo ahora"
                                    :
                                    `Tiempo en ${props.ciudad}`
                                }
                            </h3>
                            <div className="row">
                                <div className="col-md-6">
                                    <img src={`https://darksky.net/images/weather-icons/${props.icon}.png`}
                                        style={{ width: "60px" }}
                                        alt="" />

                                    <span className="fs-1">{props.temperature}<sup>°c</sup></span>
                                    <h4 className="mt-3">{props.summary}</h4>
                                </div>
                                <div className="col-md-6">
                                    <div className="d-flex justify-content-between p-0 m-0">
                                        <p className="fs-4 mb-0">Humedad</p>
                                        <p className="fs-4 mb-0">{props.humidity}%</p>
                                    </div>
                                    <hr className="mt-1" />
                                    <div className="d-flex justify-content-between p-0 m-0">
                                        <p className="fs-4 mb-0">Viento</p>
                                        <p className="fs-4 mb-0">{props.wind} mph</p>
                                    </div>
                                    <hr className="mt-1" />
                                    <div className="d-flex justify-content-between p-0 m-0">
                                        <p className="fs-4 mb-0">Presión</p>
                                        <p className="fs-4 mb-0">{props.pressure} mb</p>
                                    </div>
                                    <hr className="mt-1" />
                                </div>
                            </div>

                        </div>
                        :
                        <div>
                            <h3 className="text-center">Verifica tu conexion o ingresa una ciudad.</h3>

                        </div>
                }
            </div>
            {
                props.temperature &&
                <div className="col-md-5">

                    <div className="card mt-3">
                        <div className="card-body shadow-lg" >
                            <h5 className="card-title">Pronóstico de hoy</h5>
                            <hr />
                            <div className="d-flex align-items-center">

                                <img src={`https://darksky.net/images/weather-icons/${props.icon2}.png`} width="70px" alt="" />
                                <p className="card-text fs-4 ms-1">{props.summary2}</p>
                            </div>
                        </div>
                    </div>
                </div>

            }

        </>

    )
}

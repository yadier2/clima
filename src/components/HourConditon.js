import React from 'react'
import { Line } from 'react-chartjs-2';

export const HourConditon = ({ weatherHour }) => {
    let temperature = weatherHour.map((temp) => parseFloat(
        (((temp?.temperature - 32) * 5) / 9).toFixed(1))
    )
    let hourTime = weatherHour.map((time) => new Date(time.time * 1000).getHours() + ":00")

    return (
        <>
        { temperature.length>0 && <>
            <h2 className="mt-4 ">Clima cada hora</h2>
            <div className="border border-info shadow-lg ">
                <Line
                    data={{
                        labels: hourTime,
                        datasets: [
                            {
                                fill: true,
                                label: 'temperature',
                                data: temperature,
                                backgroundColor: '#FFB467'
                            }],
                    }}
                    height={250}
                    /*   width={600}   */
                    options={{
                        maintainAspectRatio: false,
                        animations: {
                            tension: {
                                duration: 2000,
                                easing: 'linear',
                                from: 1,
                                to: 0,
                                loop: true
                            }
                        },
                        scales: {
                            yAxes: [
                                {
                                    beginAtZero: true,
                                }
                            ]
                        },
                        plugins: {
                            legend: {
                                display: false,
                            }
                        }
                    }}
                />
        
            </div>
            </>
}
        </>
    )
}

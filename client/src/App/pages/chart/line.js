import React from 'react';
import { Line as Grafico } from 'react-chartjs-2';

const Line = ({ data, datados, labels, backgroundColor, title }) => {
    return (
        <div>
            <Grafico
                data={
                    {
                        labels,
                        datasets: [
                            {
                                fill: false,
                                lineTension: 0.2,
                                pointRadius: 7,
                                pointHitRadius: 10,
                                label: "Cantidad Postulantes",
                                data: data,
                                backgroundColor: 'blue'
                            },
                            {
                                fill: false,
                                lineTension: 0.2,
                                pointRadius: 7,
                                pointHitRadius: 10,
                                label: "Canidad Ingresantes",
                                data: datados,
                                backgroundColor: 'cyan'
                            }

                        ]
                    }
                }
            />
        </div>
    );
};
export default Line;
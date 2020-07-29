import React from 'react';
import { Bar as Grafico } from 'react-chartjs-2';

const Bar = ({ data, datados, labels, backgroundColor, title }) => {

    return (
        <div>
            <Grafico
                data={
                    {
                        labels,
                        datasets: [
                            {
                                label: "Cantidad Postulantes",
                                data: data,
                                backgroundColor: 'blue'
                            },
                            {
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
export default Bar;
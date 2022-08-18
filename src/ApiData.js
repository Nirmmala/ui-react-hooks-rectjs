import React, { useEffect, useState } from 'react';
import './ApiData.css';
import './ApiData';


const ApiData = () => {

    const [data, setdata] = useState([]);

    const getCovidData = async () => {

        const res = await fetch('https://data.covid19india.org/data.json');
        const actualData = await res.json();
        setdata(actualData.statewise);
        

    }

    useEffect(() => {
        getCovidData();
    }, []);



    return (

        <div>

            <h1>India Covid 19 Dashboard</h1>
            <h2>Statewise Data</h2>
            <table >
                
                <thead>
                    <tr>
                        <th>State</th>
                        <th>Confirmed</th>
                        <th>Recovered</th>
                        <th>Deaths</th>
                        <th>Active</th>
                        <th>Updates</th>
                        <th>deltadeaths</th>
                        <th>deltarecovered</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((curElem, ind) => {
                            return (
                                <tr>
                                    <td>{curElem.state}</td>
                                    <td>{curElem.confirmed}</td>
                                    <td>{curElem.recovered}</td>
                                    <td>{curElem.deaths}</td>
                                    <td>{curElem.active}</td>
                                    <td>{curElem.deltadeaths}</td>
                                    <td>{curElem.deltarecovered}</td>
                                    <td>{curElem.lastupdatedtime}</td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>

        </div>
    );

   


}

export default ApiData;


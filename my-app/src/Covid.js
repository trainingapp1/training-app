import React, { useEffect } from 'react';
import "./Covid.css";
import { FormControl, Select, MenuItem } from '@material-ui/core';
function Covid() {
const [countries, setCountries] = useState([
    'USA','UK','INDIA'
]);

useEffect(() => {

}, [countries]);

return(
    <div className="covid">
        <div className="covid_header">
        <h1>COVID-19 TRACKER</h1>
        <FormControl classname="covid_dropdown">
            <Select variant="outlined" value="abc">

                {
                    contries.map(country =>(
                    <MenuItem value={country}>{country}</MenuItem>
                    ))
                }
                <MenuItem value="worlwide">Worldwide</MenuItem>
                <MenuItem value="worlwide">Worldwide</MenuItem>
                <MenuItem value="worlwide">Worldwide</MenuItem>
                <MenuItem value="worlwide">Worldwide</MenuItem>
                <MenuItem value="worlwide">Worldwide</MenuItem>
            </Select>
        </FormControl>

        </div>

        {/* header */}
        {/* title+ select input dropdown field */}
        {/* infoboxs */}
        {/* infoboxs */}
        {/* infoboxs */}

        {/* table */}
        {/* graph*/}

        {/* map */}
    </div>
);

}
export default Covid;
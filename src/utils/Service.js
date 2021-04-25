import SpacexData from "./SpacexData";
import axios from 'axios'

function getLaunches(searchString = " ") {
    return axios.get( `https://api.spacexdata.com/v3/launches?limit=100&${searchString.slice(1)}` )
        .then( res => res.data )
        .then( res => SpacexData.formatLaunchData(res) );
}

export default {getLaunches}

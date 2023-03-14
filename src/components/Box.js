import React from "react";
import Card from "./Card";

const usrPosition = {
    latitude: 0,
    longitude: 0
};
const issPosition = {
    latitude: 0,
    longitude: 0
};

function getUsrLocation(ip) {
    fetch(`http://www.geoplugin.net/json.gp?${ip}`)
      .then(resp => resp.json())
      .then(data => {
                usrPosition.latitude = data['geoplugin_latitude'];
                usrPosition.longitude = data['geoplugin_longitude'];
            })
        .catch(console.log)
    return usrPosition;
}

function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

function getIssLocation() {
    let data = JSON.parse(httpGet('http://api.open-notify.org/iss-now.json'))['iss_position'];
    issPosition.latitude = data['latitude'];
    issPosition.longitude = data['longitude'];
    return data;
    //   fetch('http://api.open-notify.org/iss-now.json')
    //   .then(resp => resp.json())
    //   .then(data => data['iss_position'])
    //   .then(pos => {
    //     issPosition.latitude = pos['latitude'];
    //     issPosition.longitude = pos['longitude'];
    //   })
    // return issPosition;
}

const Box = ({ip}) => {

    return (
         <div style={{border: '1px solid black', height: '800px' }}>
            <Card 
                usrLoca={getUsrLocation(ip)} 
                issLoca={getIssLocation()}
            />
        </div>
    )
}

export default Box;
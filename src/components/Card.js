import React from "react";
import distanceBetweenPoints from 'dist-two-points';

function getDistance(usrLoca, issLoca) {
    let dis = distanceBetweenPoints(
        usrLoca.latitude, 
        usrLoca.longitude, 
        issLoca.latitude,
        issLoca.longitude);

    return dis / 1000;

}

const Card = ({usrLoca, issLoca}) => {
    return (
        issLoca.longitude === 0 || issLoca.latitude === 0  ?
        <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
            <div>
                <h2>Your location is:</h2>
                <p>{usrLoca.latitude} | {usrLoca.longitude}</p>
            </div>
        </div> :
       <><div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
            <div>
                <h2>Your location is:</h2>
                <p>{usrLoca.latitude} | {usrLoca.longitude}</p>
            </div>
        </div>
        <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
            <div>
                <h2>The ISS location is:</h2>
                <p>{issLoca.latitude} | {issLoca.longitude}</p>
            </div>
        </div>
        <br/>
        <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
            <div>
                <h2>Your distance from ISS is:</h2>
                <p>{getDistance(usrLoca, issLoca)}km</p>
            </div>
        </div></>

    )
}

export default Card;
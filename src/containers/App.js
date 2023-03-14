import React, {Component} from "react";
import 'tachyons';
import Box from '../components/Box';
import Card from "../components/Card";

class App extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();
    this.state = {
      ip: ''
    }
  }
  
  // getUserLocation() {
  //   if (!this.state.ip == '') {
  //     fetch(`http://www.geoplugin.net/json.gp?${this.state.ip}`)
  //     .then(resp => resp.json())
  //     .then(data => {
  //         this.setState({ipLat: data['geoplugin_latitude']});
  //         this.setState({ipLon: data['geoplugin_longitude']});
  //     })
  //     .catch(console.log)
  //   }
  // }
  // getIssLocation() {
  //   fetch('http://api.open-notify.org/iss-now.json')
  //   .then(resp => resp.json())
  //   .then(data => data['iss_position'])
  //   .then(pos => {
  //     this.setState({issLat: pos['latitude']});
  //     this.setState({issLon: pos['longitude']});
  //   })
  // }
  componentDidMount() {
    fetch('https://ipv4.jsonip.com/')
    .then(resp => resp.json())
    .then(data => this.setState({ip: data['ip']}))
    .catch(console.log);
  }

  render() {
    return this.state.ipLat === 0 ? 
      (
        <div className="tc">
          <h1>Loading...</h1>
        </div>        
      ) :
       (
      <div className="tc">
        <h1 className="f1">Am I Close To ISS?</h1>
          <Box ip={this.state.ip}/>
        {/* <p>Your ip is: {this.state.ip}</p>
        <p>Your latitude is: {this.state.ipLat}</p>
        <p>Your longitude is: {this.state.ipLon}</p>
        <p>The ISS latitude is: {this.state.issLat}</p>
        <p>The ISS longitude is: {this.state.issLon}</p> */}
      </div>
    )
  }
}

export default App;
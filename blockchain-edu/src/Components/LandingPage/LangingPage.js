import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';
import SimpleAppBar from '../User/simple';
import Search from '../Search/Search';
import Createuser from './createUser';
import Addbage from './addBadge';
import Createbadge from './createBadge';
import { Card } from '@material-ui/core';
import Foot from '../footer/footer';

const styles = theme => ({
    root: {
      ...theme.mixins.gutters(),
      paddingTop: theme.spacing.unit * 2,
      paddingBottom: theme.spacing.unit * 2,
    },
  });

class LandingPage extends Component {
    state = {
        address: '',
        info: [],
        Company: false,
        User: true,
        query: '',
        Badges: [
            { name: 'Badge1', image: 'download.jpeg'},
            { name: 'Badge2', image: 'images.png'},
            { name: 'Badge3', image: 'download.jpeg'},
        ],
        Apiresponse: []
    }
    getInfo() {
        axios.get(`http://localhost:9000/pylon/allUsers`)
        .then(res => {
          const Apiresponse = res.data;
          this.setState({ Apiresponse });
      });
    }
    handleChange = name => event => {
        this.setState({ [name]: event.target.checked });
      };
    componentDidMount() {
        window.ethereum.enable()
      window.web3.eth.getAccounts((req, res) => {
        const account = res
         console.log(account[0]);
         this.setState({ address: account })
         axios.get('http://localhost:9000/pylon/allUserBadgesByAddress', {
            params: {
             address: account[0]
            }
          })
          .then((res) => {
            this.setState({ info: res.data });
          })
       });
    }
    handleFormChange = name => event => {
        this.setState({
            [name]: event.target.value
          })
        this.getInfo()
    };
    render() {
        // const { classes } = this.props;
        const { info, Company } = this.state;
        const listItems = info.map((key) =>
        <div className="card" key={key}>
          <div className="card-body">
            <h4 key={key.name}>{key.CourseName}</h4>
            <hr></hr>
            <br></br>
            <p key={key.catagory}>Catagory: {key.CourseCategory}</p>
            <p key={key.author}>Author: {key.CourseAuthors}</p>
            <p key={key.date}>Created/Start date: {key.CourseCreationDate}</p>
            </div>
          </div>
        );
        return (
            <div className="landing-page">
            <SimpleAppBar info={this.state.info} value={this.state.Company} user={this.state.User} handle={this.handleChange} address={this.state.address}></SimpleAppBar>
            <div id="mob">{Company ? <Companypaper query={this.state.query} handleFormChange={this.handleFormChange} Apiresponse={this.state.Apiresponse}></Companypaper> : <Userpaper Badges={this.state.Badges} info={this.state.info} listItems={listItems}></Userpaper>}</div>
            <Foot></Foot>
            </div>
        )
    }
}

class Userpaper extends Component {
    render() {
        const { listItems } = this.props;
        return (
        <div>
            <Card className="paper">
                <h1>Welcome!</h1>
                <h6>Here are your current badges:</h6>
                <br></br>
                </Card>
                <div>
                <div className="paper1">{listItems}</div>
              </div>
        </div>
        )
    }
}
class Companypaper extends Component {
    render() {
        const { query, handleFormChange, getInfo, Apiresponse } = this.props;
        return (
            <div>
            <div className="paper">
                <Paper>
                    <Typography className="name" variant="h5" component="h1">
                    <i className="fas fa-users fab-2x"></i>
                    </Typography>
                    <Typography className="name" variant="h5" component="h1">
                    Corporate view
                    <br></br>
                    <Search query={query} handleFormChange={handleFormChange} getInfo={getInfo} Apiresponse={Apiresponse}></Search>
                    </Typography>
                </Paper>
            </div>
            <div className="paper">
                  <Paper>
                    <Typography className="name" variant="h5" component="h1">
                    <i className="fa fa-address-card fa-2x"></i>
                    </Typography>

                    <div className="Pad"><h1>Add User to Smartcontract.</h1></div>
                    <Createuser></Createuser>
                  </Paper>
            </div>
            <div className="paper">
              <div>
                  <Paper>
                    <Typography className="name" variant="h5" component="h1">
                    <i className="fa fa-id-badge fa-3x"></i>
                    </Typography>
                    <div className="Pad"><h1>Add Badge to User.</h1></div>
                    <Addbage></Addbage>
                  </Paper>
              </div>
            </div>
            <div className="paper">
              <div>
                  <Paper>
                    <Typography className="name" variant="h5" component="h1">
                    <i className="fa fa-certificate fa-3x"></i>
                    </Typography>
                    <div className="Pad"><h1>Create Badage.</h1></div>
                    <Createbadge></Createbadge>
                  </Paper>
              </div>
            </div>
            </div>
        )
    }
}

export { Userpaper, Companypaper }

export default withStyles(styles)(LandingPage);

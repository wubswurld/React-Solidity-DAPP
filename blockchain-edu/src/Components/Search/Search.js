import React, { Component } from 'react';
import InputBase from '@material-ui/core/InputBase';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
// import SearchIcon from '@material-ui/icons/Search';

const styles = theme => ({
  root: {
    width: '50%',
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '80%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit,
      width: 'auto',
    },
  },
  inputRoot: {
    color: 'inherit',
    width: '40%',
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200,
      },
    },
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
});

class Search extends Component {
    onClick = event => {
        if (this.state.query === this.state.Apiresponse.map) {
          console.log("match");
        }
      }
      
    render() {
        const { classes, handleFormChange, query } = this.props;
        const isInvalid = query === '';
        return (
            <form id="form" onSubmit={this.onClick}>
            <div className="search">
                 <div className={classes.grow} />
                    <div className={classes.search}>
                    {/* {error && <p>{error.message}</p>} */}
                </div>
                <i className="fas fa-search" id="searchIcon"></i>
                    <InputBase
                    className="search-Input"
                    placeholder="Search..."
                    value={query}
                    onChange={handleFormChange('query')}
                    classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                }}
            />
            <div>
                <br></br>
            <Button  id="searchsubmit" color="primary" type="submit" disabled={isInvalid} className="searchsubmit">send</Button>
            </div>
          </div>
          </form>
        )
    }
}

export default withStyles(styles)(Search);
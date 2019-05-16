import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    minWidth: 275,
    width: 45,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};

function SimpleCard(props) {
  const { classes, Badges } = props;
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <div>
    <Card className="paper">
    <CardContent>
    <h1>Welcome User!</h1>
                <div id="grab"></div>
    </CardContent>
      <CardContent>
        <Typography variant="h5" component="h2">
        Current courses:
        </Typography>
        <br></br>
        <div>
        <img className="card-img-top" src={Badges[0].image} alt="Card image cap"/>
            <div className="card-body">
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
                    </div>
                  </div>
                  <div>
                    <img className="card-img-top" src={Badges[1].image} alt="Card image cap"/>
                    <div className="card-body">
                      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
                    </div>
                  </div>
                  <div>
                    <img className="card-img-top" src={Badges[2].image} alt="Card image cap"/>
                    <div className="card-body">
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
                </div>
            </div>
      </CardContent>
    </Card>
    </div>
  );
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleCard);

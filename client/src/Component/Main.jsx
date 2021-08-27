import { Box, Typography, makeStyles } from '@material-ui/core';
import maz from '../Assets/images/maz.jpg';
import InstaTele from '../Assets/images/InstaTele.jpeg';

const useStyles = makeStyles({
    component: {
        margin: 50,
        '& > *': {
            marginTop: 50
        }
    },
    image: {
        width: '30%',
        height: '30%',
        borderRadius:11
        
    },
    paragraph:{
        color: 'blue',
        textAlign:'right',
    },
})

const Main = () => {
    const classes = useStyles();
    return (
        <Box className={classes.component}>
            <Typography variant="h4" style={{textAlign:'center'}}>Just For Testing Purpose...</Typography>
            <Box style={{display: 'flex'}}>
                <img src={maz} className={classes.image} />
                <Typography variant="h6" className={classes.component}>
                    My name is Muhammad Mazhar.I am Fullstack and Mernstack web and App developer.I have expertise 
                    in Reactjs,React Native,Nodejs(expressjs) ,firebase and mongodb  of 2.5+ years.<br />
                    This is just CRUD ( create,read,update,delete ) App. Which is frontend developed by Reactjs 
                    and backend with Nodejs and Expressjs and as a database is used mongodb .
                   
                </Typography>
            </Box>
        </Box>
    )
}

export default Main;
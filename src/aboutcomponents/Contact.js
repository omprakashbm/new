import React, { useContext } from 'react';
import { LanguageContext } from '../App';
import Box from '@material-ui/core/Box';
import Typography from "@material-ui/core/Typography";

const circleProps = {
  bgcolor: '#0D6199',
  borderColor: '#0D6199',
  m: 3,
  style: { 
      width: '25rem', 
      height: '10rem',
      display:'flex',
      flexDirection:'column',
      justifyContent:'center',
      alignItems:'center',
      color:'white',
      fontSize:'3rem' },
};

const circleprops2 = {

  style: { 
    //   backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5))`,
      display:'flex',
      flexGrow:1,
      color:'#0D6199',
      justifyContent:'center',
      alignItems:'center',
      padding:'1rem',   
      flexWrap:'wrap',
 
      textAlign:'center',   
      fontSize:'3rem' },
};

const Contact = () => {
    const language = useContext(LanguageContext);
    let homeData={
        'titleen':'eng title',
        'titlenp':'np title'
    }
    return ( 
        <>
        {/* {homeData[`title${language}`]} */}
 
        <Box display="flex" justifyContent="center" flexWrap='wrap' padding='1rem'>
            <Typography gutterBottom variant="h4" component="h2" color='primary'>
                Contact Us
            </Typography>
        </Box>
        <Box display="flex" justifyContent="center" flexWrap='wrap'>

            <Box display="flex" {...circleprops2}>
                <Box borderRadius="5%" {...circleProps}>
                    <Typography variant="body2" color="textSecondary" component="p" color="inherit">
                        Rishav Raj - Manager
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p" color="inherit">
                        +977-9860478881
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p" color="inherit">
                        rishav@missionoxygenteam.org 
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p" color="inherit">
                        ran.rishav@gmail.com
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p" color="inherit">
                        Lalitpur
                    </Typography>

                </Box>
                <Box borderRadius="5%" {...circleProps}>
                    <Typography variant="body2" color="textSecondary" component="p" color="inherit">
                        Bikash Gurung - Executive Director
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p" color="inherit">
                        +977-9851208879
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p" color="inherit">
                        ran.bikashgurung@gmail.com
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p" color="inherit">
                                                bikash@missionoxygenteam.org 

                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p" color="inherit">
                        Lalitpur
                    </Typography>

                </Box>
                <Box borderRadius="5%" {...circleProps}>
                    <Typography variant="body2" color="textSecondary" component="p" color="inherit">
                        Nabin Munankarm - Country Director
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p" color="inherit">
                        +977-9841585197
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p" color="inherit">
                        nabin2045@gmail.com

                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p" color="inherit">
                                                                        nabin@missionoxygenteam.org 



                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p" color="inherit">
                        Bhaktapur
                    </Typography>

                </Box>
            </Box>

        </Box>
            
        </>
     );
}
 
export default Contact;
 
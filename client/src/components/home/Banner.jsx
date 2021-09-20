import Carousel from 'react-material-ui-carousel';
import { bannerData } from '../../constants/data';
import { makeStyles } from '@material-ui/core';

const useStyle = makeStyles({
    image :{
        width:'100%',
        height:280,
    },

    carousel:{
        marginTop:10,
    }
})

const Banner = () => {
    const classes = useStyle()
    return (
        <Carousel
            autoPlay={true}
            animation='slide'
            indicators={false}
            navButtonsAlwaysVisible={true}
            cycleNavigation={true}
            navButtonsProps={{
                style:{
                    background:'#FFFFFF',
                    borderRadius:0,
                    margin:0,
                    color:'#494949'
                }
            }}
            className={classes.carousel}
        >
            {
                bannerData.map( image =>
                    (
                        <img src={image} alt="Banner" className={classes.image}/>
                    ))
            }
        </Carousel>
    )
}

export default Banner

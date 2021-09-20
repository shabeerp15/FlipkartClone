import { Box, makeStyles } from "@material-ui/core"
import { imageURL } from "../../constants/data"


const useStyle= makeStyles({
    wrapper:{
        display:'flex',
        marginTop:20,
        justifyContent:'space-between'
    }
})

const MidSection = () => {
    const classes = useStyle()
    return (
        <Box className={classes.wrapper}>
            {
                imageURL.map((image,key) =>(
                    <img src={image} alt={key} style={{width:'33%'}} />
                ))
            }
        </Box>
    )
}

export default MidSection

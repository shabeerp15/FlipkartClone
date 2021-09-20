import { useEffect } from 'react'
import { Box, makeStyles } from '@material-ui/core'

// components
import Banner from './Banner'
import MidSection from './MidSection'
import Navbar from './Navbar'
import Slide from './Slide'

// import { products } from '../../constants/data'
import { useSelector, useDispatch } from 'react-redux'
import { getProducts as listProducts } from '../../redux/actions/productActions'

const useStyle = makeStyles({
  component: {
    padding: 10,
    background: '#f2f2f2',
  },
  rightWrapper: {
    background: '#ffffff',
    padding: 5,
    margin: '12px 0 0 10px',
    width: '17%',
  },
})

const Home = () => {
  const classes = useStyle()
  const adURL =
    'https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70'

  const { products } = useSelector((state) => state.getProducts)

  const dispatch = useDispatch()

  useEffect(() => {
     dispatch(listProducts())
  }, [dispatch])

  return (
    <div>
      <Navbar />
      <Box className={classes.component}>
        <Banner />
        <Box style={{ display: 'flex' }}>
          <Box style={{ width: '83%' }}>
            <Slide timer={true} title="Deal of the Day" products={products} />
          </Box>
          <Box className={classes.rightWrapper}>
            <img src={adURL} alt="" style={{ width: 220 }} />
          </Box>
        </Box>
        <MidSection />
        <Slide timer={false} title="Discounts for You" products={products} />
        <Slide timer={false} title="Suggested Items" products={products} />
        <Slide timer={false} title="Top Selection" products={products} />
        <Slide timer={false} title="Recomented Items" products={products} />
        <Slide timer={false} title="Best Sellers" products={products} />
      </Box>
    </div>
  )
}

export default Home

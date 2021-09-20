import {  makeStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import {Search} from '@material-ui/icons';

const useStyle = makeStyles( (theme) =>({
    search: {
        borderRadius: 2,
        backgroundColor: '#fff',
        marginLeft: 10,
        width: '38%',
        display:'flex'
      },
      searchIcon: {
        padding: 5,
        height: '100%',
        display: 'flex',
        color:'#2874f0'
      },
      inputRoot: { 
        fontSize:14,
        width:'100%',
      },
      inputInput: {
        paddingLeft:20
      },
}))
const SearchBar = () => {
    const classes = useStyle()
    return (
        <div className={classes.search}>
            
            <InputBase
              placeholder="Search Products and Brands..."
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
            <div className={classes.searchIcon}>
              <Search />
            </div>
          </div>
    )
}

export default SearchBar


import '../App.css';
import Header from '../MyComponents/Header';
import Menu from '../MyComponents/Menu';
import MenuItem from '../MyComponents/MenuItem.js';
import Footer from '../MyComponents/Footer'
import ItemList1 from '../MyComponents/ItemList1'


    



function Home( props) {

  const {handlelogout,user}=props;

  return (
  <>
    <Header/>
    <Menu  handlelogout={handlelogout} user={user}/>
    <MenuItem/>
    <ItemList1   handlelogout={handlelogout} user={user}    />
     <div className="spacehome">
       Anything
     </div>


    {/* 
    <ItemList2/>
    <ItemList3/> */}
    <Footer/>

    </>
  );
}

export default Home;

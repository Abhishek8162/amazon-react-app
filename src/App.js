import logo from './logo.svg';
import './App.css';
import Header from './MyComponents/Header';
import Menu from './MyComponents/Menu';
import MenuItem from './MyComponents/MenuItem.js';
import Footer from './MyComponents/Footer'
import ItemList1 from './MyComponents/ItemList1'


    



function App() {
  return (
  <>
    <Header/>
    <Menu/>
    <MenuItem/>
    <ItemList1/>

    {/* 
    <ItemList2/>
    <ItemList3/> */}
    <Footer/>

    </>
  );
}

export default App;

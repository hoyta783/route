
import './App.css';

import {
  BrowserRouter as Router, Routes, Route, Link
} from "react-router-dom";

const Homepage = () => {
  return(
    <div>
    <h1>Welcome to our Website!</h1>
    <p></p>
    </div>
  )
}

const About = () => {
  return(
   <div>
    <h1>Here is information about Ancient Rome!</h1>
    <p>Ancient Rome began as a settlement, dated to 753 BC. The settlement grew into the city of Rome, and came into power of its neighbors through treaties and military strength. Eventually, Rome dominated the Italian Peninsula and acquired an Empire that took most of Europe and the people surrounding the Mediterranean Sea. It was one of the biggest empires in the ancient world. It was estimated to have a population of 50-90 million people. This was about 20% of the worlds population at the time. Some of there horrific rulers were Caligula, Nero, and Commodus. </p>
    
  
  </div>
  )
}

const Caligula = () => {
  return(
    <div>
    <h1>Caligula ruled in Ancient Rome from 37-41 AD!</h1>
    <p>Caligula was the third emperor of Rome. He was famous for megalomania and sadism. He met a violent end in Rome in 41 AD. He had only been Emperor for 4 years. Caligula was popular, but after 7 months he had an illness that seemingly turned him into this horrific monster. He is called a bad emperor because he supposedly killed at whim and financed himself with legalized looting. From 40 AD he started saying he was a god, while his palace was described as a brothel. Supposedly the last straw was a planned move to Egypt to live as a sun god. This is what allegedly triggered his murder in January 41 AD.</p>
    </div>
  )
}

const Nero = () => {
  return(
    <div>
    <h1>Nero ruled in Ancient Rome from 54-68 AD!</h1>
    <p>Nero has many horror stories to his name. He killed his mother so that he could remarry, by divorcing and then executing his first wife. His second wife he killed by kicking her to death. His third marriage was to a freed slave. In Nero’s third marriage he had the freed slave castrated and calling him by his second wife’s name. The Senate condemned him to death by crucifixion, and his household guard abandoned him. Nero was just 30 years old when he fled Rome and committed suicide.</p>
    </div>
  )
}

const Commodus = () => {
  return(
    <div>
    <h1>Commodus ruled in Ancient Rome from 180-192 AD!</h1>
    <p>Commodus wasn’t naturally horrible but was heavily influenced by his companions. Commodus's rule was comparatively peaceful in the military sense but caused political strife. Dissatisfaction with his state of affairs would lead to several attempts at his life. Eventually conspirators sent his wrestling partner to strangle him in his bath.</p>
    </div>
  )
}

function App() {
  return (

    
    <Router>
     

    <header>
      <Link to="/" style={{textDecoration: 'none'}}>Home</Link>
      <Link to="/about" style={{textDecoration: 'none'}}>About us</Link>
      <Link to="/caligula" style={{textDecoration: 'none'}}>Ancient Rome Ruler 1</Link>
      <Link to="/nero" style={{textDecoration: 'none'}}>Ancient Rome Ruler 2</Link>
      <Link to="/commodus" style={{textDecoration: 'none'}}>Ancient Rome Ruler 3</Link>
     
    </header>

    <Routes>
    <Route path="/" element= {<Homepage />} />
    <Route path="/about" element={<About />} />
    <Route path="/caligula" element={<Caligula/>} />
    <Route path="/nero" element={<Nero/>} />
    <Route path="/commodus" element={<Commodus/>} />
    
    

    </Routes>


  </Router>
  );
}
export default App;


import './index.css'
import cone from './assets/cone.png'
import icosahedron from './assets/icosahedron.png'
import sphere from './assets/sphere.png'
import torus from './assets/torus.png'

function App() {
  return (
    <div> 
        <a href="#" class="button">
            <span class="button__text">
                play
            </span>
            <img src={cone} alt="" class="button__cone" />
            <img src= {icosahedron} alt="" class="button__torus" />
            <img src={sphere} alt="" class="button__icosahedron" />
            <img src={torus} alt="" class="button__sphere" />
        </a>
    </div>
  );
}

export default App;

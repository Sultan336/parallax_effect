import moon from './art/moon.png';
import land from './art/land.png';
import cat from './art/cat.gif';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';


function App() {


  return (
    <div >
      <Parallax pages={4} >
      {/*  <ParallaxLayer speed={1}>
          <h2>Hey!</h2>
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.5}>
          <h2>Web development is awsome</h2>
        </ParallaxLayer> */}

    <ParallaxLayer
      offset={0}
      speed={1}
      factor={2}
      style={{
        backgroundImage: `url(${moon})`,
        backgroundSize: 'cover',
      }}
      />

    <ParallaxLayer
    offset={2}
    speed={1}
    factor={4}
    style={{
      backgroundImage: `url(${land})`,
      backgroundSize: 'cover',
    }}
    ></ParallaxLayer>
    
    <ParallaxLayer
      sticky={{ start:0.9, end:2.4 }}
      style={{textAlign: 'center'}}
      >
        <img src={cat}/>
        
      </ParallaxLayer>

 

    </Parallax>
    </div>
  );
}  



export default App

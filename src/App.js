import './App.css';
import clock from '../src/Assets/clock.png'
import calendar from '../src/Assets/calendar.png'
import goldImage from '../src/Assets/gold.png'
import silverImage from '../src/Assets/silver.png'


function App() {
  return (
    <div className="main">
      <div className='head'>
        <div className='td'>
          <div className='time'>
            <img src={clock} height={56} width={56} />
            <h3>11.24 Am</h3>
          </div>
          <div className='date'>
            <img src={calendar}/>
            <div className='year-day'>
              <div className='yr'><h3>02 FEB 2023</h3></div>
              <div className='dy'><h4>MONDAY</h4></div>

            </div>
          </div>
        </div>

      </div>
<div className='mid-body'>
<div className='left'>
<div className="second-container">
        <div className="first-box">
          <div className="text">
            <h2>GOLD</h2>
          </div>
          <div className="image">
            <img src={goldImage} alt="" />
          </div>
          <div className="rate">
            <h3>229.25</h3>
          </div>
        </div>
        <div className="rectangle">
          <div className="top-bar">
            <div className="first-div">
              <div className="one">
                <h2>$</h2>
              </div>
              <div className="two"><h2>BID</h2></div>
              <div className="three"><h6>OZ</h6></div>
            </div>

            <div className="second-div">
              <div className="one">
                <h2>$</h2>
              </div>
              <div className="two"><h2>ASK</h2></div>
              <div className="three"><h6>OZ</h6></div>
            </div>

          </div>
        </div>
        <div className="sec-bar">
          <div className="red">
            <h5>1935.42</h5>
          </div>
          <div className="blue">
            <h5>1936.24</h5>
          </div>
        </div>

        <div className="low-high">
          <div className="low">
            <h4>LOW</h4>
          </div>
          <div className="high">
            <h4>HIGH</h4>
          </div>
        </div>

        <div className="bottom">
          <div className="bottom-1">
            <h4>1933.04</h4>
          </div>
          <div className="bottom-2">
            <h4>1800.13</h4>
          </div>
        </div>
      </div>



      <div className="second-box-image">
        <div className="text-1">
          <h2>SILVER</h2>
        </div>
        <div className="image-1">
          <img src={silverImage} alt="" />
        </div>
        <div className="rate-1">
          <h3>2.88</h3>
        </div>

        <div className="next-box">
          <div className="second-bar">
            <div className="frst-div">
              <div className="on-1">
                <h2>$</h2>
              </div>
               <div className="two-1"><h2>BID</h2></div> 
              <div className="three-1"><h6>OZ</h6></div> 
            </div>

            <div className="frsst-div">
              <div className="onee-1">
                <h2>$</h2>
              </div>
               <div className="twoo-1"><h2>BID</h2></div> 
              <div className="threee-1"><h6>OZ</h6></div> 
            </div>

            <div className="sec-barr">
          <div className="red-1">
            <h5>1935.42</h5>
          </div>
          <div className="blue-1">
            <h5>1936.24</h5>  
          </div>
        </div>   

        <div className="low-highh">
          <div className="loww">
            <h4>LOW</h4>
          </div>
          <div className="highh">
            <h4>HIGH</h4>
          </div>
        </div> 
        <div className='abc'>
          <div className='abc1'>
            <h4>1800.13</h4>
          </div>
          <div className='abc2'>
            <h4>1800.13</h4>
          </div>
          </div>    

          </div>
        </div>

      </div>
</div>
<div className='right'>
  <div className='z1'>
    <div className='z11'>
      <h4>yuuj</h4>
    </div>
    <div className='z12'>
      <h4>322</h4>
    </div>
  </div>
  <div className='z2'>
    <div className='z21'>
      <h4>yuuj</h4>
    </div>
    <div className='z22'>
      <h4>322</h4>
    </div>
  </div>
  <div className='z3'>
    <div className='z31'>
      <h4>yuuj</h4>
    </div>
    <div className='z32'>
      <h4>322</h4>
    </div>
  </div>
  


</div>



</div>
<div className='gggg'>

<div className='end1'>
        <div className='one22'>
          Powered by www.bullionview.com
        </div>
        <div className='two22'>
          <div className='two1'>
            <div className='p1'><p>BUYERS</p></div>
            <div className='p2'><p>9.677%</p></div>
            <div className='p3'> <p>SELLERS</p></div>
          </div>
          <div className='two2'>
            <div className='a'></div>
            <div className='b'></div>

          </div>
          <div className='two3'>
            <div className='b1'><p>62%</p></div>
            <div className='b2'><p>38%</p></div>
            
         

          </div>

        </div>

      </div>
      <div className='end2'>
        <div className='e1'>
        <p>News</p>
        </div>
        <div className='e2'>
          <p>Know the latest Gold News, Gold rate, Gold price in India, Go Know the latest Gold News, Gold rate,
</p>

        </div>
      </div>

</div>

    </div>

  );
}

export default App;




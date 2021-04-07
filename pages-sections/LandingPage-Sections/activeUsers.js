import React, {useState,useEffect,useContext} from 'react';
import Card from "../../components/Card/Card";
import CardBody from "../../components/Card/CardBody";
import particle from "../../assets/img/particle.jpg";
import {
    Container,
    Row,
    Col,
    Button
} from 'reactstrap'
import CountUp from 'react-countup'
import {Waypoint} from 'react-waypoint'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUsers} from '@fortawesome/free-solid-svg-icons'
import {faPlus} from '@fortawesome/free-solid-svg-icons'
import AccountBalance from '@material-ui/icons/AccountBalance'


const ActiveUsers =()=>{
    const [main,setmain]=useState()
    const [users,setUsers]=useState(100)
    const [worth,setWorth]=useState(100)
    
    var userValue=100

    const increase=()=>{
       setUsers(users+1)
    }

    return (
        <div className='active-users-body'>
            
                   <Container fluid style={{backgroundImage:`url(${particle})`,}} className='active-users'>
                        <Row className='active-user-row'>
                           
                        <CountUp
  start={1}
  end={164}
  duration={1.3}
  separator=" "
  decimals={0}
  suffix={'K+'}
  
  
  onEnd={() => console.log('Ended! 👏')}
  onStart={() => console.log('Started! 💨')}
>
  {({ countUpRef, start }) => (
    <div>
        <Waypoint
        onEnter={start}
        
        />
          <Col md={12} xs={12} style={{fontWeight:'bold'}} className='active-values' >
          <span style={{textAlign:'center'}} ref={countUpRef} />
          </Col>
          <Col md={12} xs={12}>
          <FontAwesomeIcon icon={faUsers} style={{height:60,width:60}} className='active-icon fa-align-center' />
          </Col>
           <Col md={12} xs={12} style={{fontWeight:'bold'}} className='active-talk'>
                               
             Active users
          </Col>
                            
    </div>
  )}
</CountUp>
                        </Row>
                        <Row>
                          
                           <CountUp
  start={1}
  end={836}
  duration={1.75}
  separator=" "
  decimals={0}
  decimal=","
  prefix='$'
  suffix='M+'
  
  onEnd={() => console.log('Ended! 👏')}
  onStart={() => console.log('Started! 💨')}
>
  {({ countUpRef, start }) => (
    <div>
        <Waypoint
        onEnter={start}
        
/>
      <Col md={12} xs={12} style={{fontWeight:'bold'}} className='active-worth'>
                                <span style={{textAlign:'center'}} ref={countUpRef} />
                            </Col>
                            <Col md={12} xs={12}>
          <AccountBalance style={{height:60,width:60}} className='asset-icon fa-align-center' />
          </Col>
                           
                            <Col md={12} xs={12} style={{fontWeight:'bold',}} className='active-worth-talk'>
                                Worth of assets earned
                            </Col>
    </div>
  )}
</CountUp>
                        </Row>
                   </Container>
              
        </div>
    )
}


export default ActiveUsers 
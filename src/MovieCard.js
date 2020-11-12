import {Card,Button} from 'react-bootstrap'
import {Link,Route,BrowserRouter} from 'react-router-dom'


const MovieCard=(props)=>{
    return (
        
        <div>
            <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={props.data.img} />
  <Card.Body>
    <Card.Title>{props.data.title}</Card.Title>
    <Card.Text>
      {props.data.description}
    </Card.Text>
    <Link to={`/${props.data.title.replace( / /gi, '')}`}><Button variant="primary">movie trailer</Button></Link>
  </Card.Body>
</Card>
        </div>
        
       
    )
}
export default MovieCard
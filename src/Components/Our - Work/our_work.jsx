import './our_work.css'
import MainImg from '../../assets/postive-caring-relationships-teachers 1.png'


const ourWork = () => {
  return (
    <div>
      <div className='ourwork'>
        <div className='image-container'>
          <img src={MainImg} className='main-ourwork img-fluid ' />
          <div className='overlay mm'>
            <h1 className='fw-bold extra-bold pb-2 text-start'>Our Work...</h1>
            <h3>&rsquo;Stunning designs that make your brand unforgettable!&rsquo;</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ourWork;
import iconSun from './images/icon-sun.svg'
import iconMoon from './images/icon-moon.svg'

const Button = () => {
  const onClick = () => { 
    console.log('click')
  }
  
  return (
    <div className='dark-light-theme'>
      <img src={iconSun} alt="icon-sun" 
      className="icon-sun"
      />

      <img src={iconMoon} alt="icon-moon" 
      className="icon-moon"
      onClick={onClick} />
    </div>
  )
};

export default Button;

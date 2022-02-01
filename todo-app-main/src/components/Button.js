import iconSun from './images/icon-sun.svg'
import iconMoon from './images/icon-moon.svg'

const Button = () => {
  return (
    <div className='dark-light-theme'>
      <img src={iconSun} alt="icon-sun" />
      <img src={iconMoon} alt="icon-sun" />
    </div>
  )
};

export default Button;

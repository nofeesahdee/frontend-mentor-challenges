import iconSun from './images/icon-sun.svg'
import iconMoon from './images/icon-moon.svg'

const Header = () => {
    const onClick = () => {
        console.log('click')
    }

  return(
    <header>
        <h1>Todo</h1>
        <div>
            <img onClick={onClick} src={iconSun} alt="icon-sun" />
            <img src={iconMoon} alt="icon-sun" />
        </div>
    </header>
  ) 
};

export default Header;

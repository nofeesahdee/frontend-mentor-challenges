import iconCheck from './images/icon-check.svg'

const Input = () => {
  return (
    <div>
        <div className="circle"></div>
        <input type="text" name="" id="" placeholder='Create a new todo...' />
        <img src={iconCheck} alt="icon-check" />
    </div>
  )
  
};

export default Input;

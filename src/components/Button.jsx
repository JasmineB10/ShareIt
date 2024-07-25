import { Link } from 'react-router-dom'
    
    function Button(props) {
      return (
       
            <button className='px-4 py-2 text-indigo-400 font-bold shadow-md shadow-red-300 rounded-full'>
              <Link to={props.path}>{props.title}</Link>
            </button>
      )
    }
    
    export default Button
    
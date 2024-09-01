import { Link } from "react-router-dom"
const NavCourse = () => { 
    const courses =[
        "Grammar","Conversation","Vocabulary","Reading","Writing"
      ]
    return(
    <div> 
        <div className=" bg-white flex list-none space-x-4 justify-center my-[-50rem] box-border h-18 w-50 rounded-md border-10 p-4">
          <li><Link to="/course/Vocabulary" className="hover:text-blue-400 transition-colors">{courses[2]}</Link></li>
          <li><Link to="/course/Conversation" className="hover:text-blue-400 transition-colors">{courses[1]}</Link></li>
          <li><Link to="/course/Grammar" className="hover:text-blue-400 transition-colors">{courses[0]}</Link></li>
          <li><Link to="/course/Writing" className="hover:text-blue-400 transition-colors">{courses[4]}</Link></li>
          <li><Link to="/course/Reading" className="hover:text-blue-400 transition-colors">{courses[3]}</Link></li>
        </div>
    </div>
)
} 
export default NavCourse
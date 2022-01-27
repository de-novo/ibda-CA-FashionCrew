import {Link,} from 'react-router-dom'
function Adminnav(){
    return(
      <div className='adminbox'>
      <div className='btnbox'> <button className='btn'> <Link to='/admin/member'>Add Member</Link></button> </div>
      <div className='btnbox'> <button className='btn'><Link to='/admin/project'>Add Project</Link></button> </div>
      <div className='btnbox'> <button className='btn'><Link to='/admin/photo'>Add Photo</Link></button> </div>
      <div className='btnbox'> <button className='btn'><Link to='/admin/content'>Add content</Link></button> </div>
    </div>
    )
  }
export default Adminnav;
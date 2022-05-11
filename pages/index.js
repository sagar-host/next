

import Link from 'next/link'
  
  function index() {
    return (
      <>
      {/* <div>hello world  nextjs works on file based routing --dynamic routing</div> */}
      <nav>
        <ul>

          <Link href='/'>
            <a>Home</a>
          </Link>
          <Link href='/about'>
            <a>about</a>
          </Link>
          <Link href='/contact'>
            <a>contact</a>
          </Link>
          <Link href='/blog'>
            <a>Blog</a>
          </Link>
        </ul>
      </nav>
      </>
    )
  }
  
  export default index
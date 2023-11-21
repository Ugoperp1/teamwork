import React from 'react';
import Schoolwork from '../Assets/Schoolwork.jpg';
import Students from '../Assets/Students.png'
import Footer from './Footer';



function About() {
  return (
    <div>
      <div className='bg-[#fff]' style={{ textAlign: 'center' }}>

        <div className='p-28' style={{ backgroundImage: `url(${Schoolwork})` }}>
          <p className='text-white  text-4xl'><b>About</b></p>
          <p className='text-white mt-4 '><a className='hover:text-gray-900' href='https://demo.themeies.com/elearning-react/'>Home</a>/ About</p>
        </div>


        <div>
          <p className='text-red-500 mt-16' style={{ textAlign: 'center' }}> <b>ABOUT US </b></p>
          <p className='text-indigo-900 text-4xl mt-4'><b>Educating and empowering <br></br>the community</b></p>
        </div>

        <div className='md:grid grid-cols-2 gap-4'>
          <div>
            <h1 className='text-start pl-20 text-2xl mt-20 text-indigo-900'><b>Perspiciatis unde omnis iste natus<br></br> error inventore.</b></h1>
            <p className='text-start pl-20 mt-7 text-gray-500 ' style={{ fontSize: '90%' }} >Perspiciatis unde omnis iste natus error sit voluptatem accusantium
              doloremque<br></br>laudantium, totam rem aperiam, eaque ipsa quae ab illo
              inventore veritatis et<br></br> quasi architecto beatae vitae dicta sunt explicabo.</p>

            <h1 className='text-start pl-20 text-1xl mt-10 text-indigo-900 text-lg'> <b>Dolor sit amet consectetur adipisicing elit. Unde, quasi.</b></h1>
            <p className='text-start pl-20 mt-5 text-gray-500 ' style={{ fontSize: '90%' }}>Nemo dolores, iusto pariatur corporis quis
              ullam harum voluptate porro officiis<br></br> aliquam quas explicabo?</p>

            <p className='text-start pl-20 mt-5 text-gray-500 ' npm start
            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias similique,<br /> consequuntur incidunt at repellendus ratione totam
              excepturi iste. Similique<br /> ipsum numquam recusandae, eligendi maiores temporibus officia harum labore<br /> deleniti quasi.</p>
          </div>


          <div className='p-40 mb-20 width-200 ' style={{ backgroundImage: `url(${Students})` }}>
          </div>
        </div>




      </div>

<Footer />
    </div >

  )
}

export default About
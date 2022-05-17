import React from 'react'

const Header = () => {
  return (
    <>

    <section className='container main-hero-container'>
        <div className='row'>
            <div className='col-12 col-lg-6 header-left-side d-flex justify-content-center flex-column'>
                <h1 className='display-2'>Title goes here</h1>

                <div className='input-group mt-3'>
                        <input type='text' className='rounded-pill w-75 p-4 mt-5 me-3 form-control-text'placeholder='Name'/>
                        <input type='text' className='rounded-pill w-75 p-4 mt-5 me-3 form-control-text'placeholder='Email'/>
                        <input type='text' className='rounded-pill w-75 p-4 mt-5 me-3 form-control-text'placeholder='Phone number'/>
                        
                </div>
                <button class="btn btn-style mt-5 " type="submit">Submit</button>
            </div>
         {/* right side */}
            <div className='col-12 col-lg-6 header-right-side d-flex justify-content-center aligh-items-center main-herosection-images'>
              <img src='../images/Headerimg1.jpg' alt='' className='img-fluid'/>
              <img src='../images/Headerimg2.jpg' alt='' className='img-fluid main-hero-img2'/>
            </div>
        </div>
    </section>

    </>
  )
}

export default Header;
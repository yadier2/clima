import React from 'react'

export const Navbar = ({getLocation,handleGeolocate,medidasTiempo}) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light sticky-top shadow-lg" style={{backgroundColor: '#e3f2fd'}}>
        <div className="container-fluid">
          <a className="navbar-brand " href="/#" >Weather</a>
         
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" href="/#" >{medidasTiempo.ciudad} {medidasTiempo.temperature} {medidasTiempo.temperature && <sup>°c</sup>}</a>
              </li>
              <li className="nav-item">
                <a className="nav-link"  href="/#" >Mundo</a>
              </li>
             
            </ul>
          
          </div>
        
        </div>
        <div className="ps-3 location-form">
        
          <div onClick={handleGeolocate} className="">
        <i className="fas fa-map-marker-alt pe-2 fs-4"></i>
          </div>


        <form onSubmit={getLocation} className="d-flex justify-content-center align-items-center p-1 bg-white rounded-pill d-md-bg-danger form-buscar">
              <input name="city" className="p-1 ps-3 fs-6 search" type="search"placeholder="Search" aria-label="Search" 
              style={{border:'none', background:'none', outline:'none',  borderRadius: '15px',
              }}/>
              <button  type='submit' className="p-1 border border-0 " style={{background: 'none'}}><i className="fas fa-search fs-5 text-warning"></i></button>
            </form>
            
            </div>
      </nav>
    )
}

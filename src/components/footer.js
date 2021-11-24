import React from 'react'
import {Link} from 'react-router-dom'

function footer() {
    return (
        <div className="footer">
            <footer className="footer">
            <div className="container bottom_border">
                <div className="row">
                    <div className=" col-sm-4 col-md col-sm-4  col-12 col ml-3">
                        <h5 className="headin5_amrc col_white_amrc pt2">Find us</h5>
                        
                        <p className="mb10">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                        <p><i className="fa fa-location-arrow"></i> 9878/25 sec 9 rohini 35 </p>
                        <p><i className="fa fa-phone"></i>  +91-9999878398  </p>
                        <p><i className="fa fa fa-envelope"></i> info@example.com  </p>


                    </div>


                    <div className=" col-sm-4 col-md  col-6 col">
                        <h5 className="headin5_amrc col_white_amrc pt2">Quick links</h5>
                       
                        <ul className="footer_ul_amrc">
                            <li><Link to="http://webenlance.com">Image Rectoucing</Link></li>
                            <li><Link to="http://webenlance.com">Clipping Path</Link></li>
                            <li><Link to="http://webenlance.com">Hollow Man Montage</Link></li>
                            <li><Link to="http://webenlance.com">Ebay & Amazon</Link></li>
                            <li><Link to="http://webenlance.com">Hair Masking/Clipping</Link></li>
                            <li><Link to="http://webenlance.com">Image Cropping</Link></li>
                        </ul>
                        
                    </div>


                    <div className=" col-sm-4 col-md  col-6 col">
                        <h5 className="headin5_amrc col_white_amrc pt2">Quick links</h5>
                        
                        <ul className="footer_ul_amrc">
                            <li><Link to="http://webenlance.com">Remove Background</Link></li>
                            <li><Link to="http://webenlance.com">Shadows & Mirror Reflection</Link></li>
                            <li><Link to="http://webenlance.com">Logo Design</Link></li>
                            <li><Link to="http://webenlance.com">Vectorization</Link></li>
                            <li><Link to="http://webenlance.com">Hair Masking/Clipping</Link></li>
                            <li><Link to="http://webenlance.com">Image Cropping</Link></li>
                        </ul>
                        
                    </div>


                    <div className=" col-sm-4 col-md  col-12 col">
                        <h5 className="headin5_amrc col_white_amrc pt2">Follow us</h5>
                        
                        <ul className="footer_ul2_amrc">
                            <li><Link to="#"><i className="fab fa-twitter fleft padding-right"></i> </Link><p>Lorem Ipsum is simply dummy text of the printing...<Link to="#">https://www.lipsum.com/</Link></p></li>
                            <li><Link to="#"><i className="fab fa-twitter fleft padding-right"></i> </Link><p>Lorem Ipsum is simply dummy text of the printing...<Link to="#">https://www.lipsum.com/</Link></p></li>
                            <li><Link to="#"><i className="fab fa-twitter fleft padding-right"></i> </Link><p>Lorem Ipsum is simply dummy text of the printing...<Link to="#">https://www.lipsum.com/</Link></p></li>
                        </ul>
                        
                    </div>
                </div>
            </div>


            <div className="container">
                <ul className="foote_bottom_ul_amrc">
                    <li><Link to="http://webenlance.com">Home</Link></li>
                    <li><Link to="http://webenlance.com">About</Link></li>
                    <li><Link to="http://webenlance.com">Services</Link></li>
                    <li><Link to="http://webenlance.com">Pricing</Link></li>
                    <li><Link to="http://webenlance.com">Blog</Link></li>
                    <li><Link to="http://webenlance.com">Contact</Link></li>
                </ul>
               
                <p className="text-center">Copyright @2017 | Designed With by <Link to="#">Your Company Name</Link></p>

                <ul className="social_footer_ul">
                    <li><Link to="http://webenlance.com"><i className="fab fa-facebook-f"></i></Link></li>
                    <li><Link to="http://webenlance.com"><i className="fab fa-twitter"></i></Link></li>
                    <li><Link to="http://webenlance.com"><i className="fab fa-linkedin"></i></Link></li>
                    <li><Link to="http://webenlance.com"><i className="fab fa-instagram"></i></Link></li>
                </ul>
               
            </div>
        </footer>
        </div>
    )
}

export default footer

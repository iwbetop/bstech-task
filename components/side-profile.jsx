// Avatar
import Image from "next/image"
import { MDBTypography } from 'mdb-react-ui-kit';

export function SideProfile(){
    return(
        <div 
        className="d-flex flex-row justify-content-center bg-dark text-light p-2 rounded-8 pt-4"
        style={{
            height: "fit-content"
        }}>
            {/* ---avatar--- */}
            <div className="d-flex flex-column align-items-center">
                <div 
                className="position-relative" 
                style={{
                    width: "130px",
                    height: "130px"
                }}>
                    <Image
                    src="/carlbajo.jpeg" 
                    fill 
                    alt="carlbajo"
                    className="rounded-circle shadow-4"
                    style={{
                        objectFit: "cover"
                    }}/>
                </div>
                <MDBTypography tag='div' className='display-5 py-3 mb-3 border-bottom'>
                    Carl Bajo
                </MDBTypography>
                <p className="text-muted">Web developer 
                    <span className="badge bg-primary mx-2">Beginner</span>
                </p>
                <div>
                {/* ---Tools--- */}
                <div className="d-flex gap-3 py-3">
                    <i class="fa-brands fa-html5 fa-xl"></i>
                    <i class="fa-brands fa-css3-alt fa-xl"></i>
                    <i class="fa-brands fa-js fa-xl"></i>
                    <i class="fa-brands fa-react fa-xl"></i>
                    <i class="fa-solid fa-database fa-xl"></i>
                    <i class="fa-brands fa-java fa-xl"></i>
                </div>
                </div>
            </div>
        </div>
    )
}
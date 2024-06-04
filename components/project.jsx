import { MDBBadge, MDBListGroup, MDBListGroupItem } from 'mdb-react-ui-kit';

export function ProjectList() {
  return (
    <MDBListGroup light numbered style={{ minWidth: '22rem' }}>
      <MDBListGroupItem className='d-flex justify-content-between align-items-start'>
        <div className='ms-2 me-auto'>
          <div className='fw-bold'>Portfolio of Excellence</div>
          <span>Capstone project for school year 2023-2024, Full stack developer and used nextjs, tailwindCSS, reactJS, postgreSQL, prismaORM, typescript, and other web tool designs</span>
        </div>
        <MDBBadge pill light>
          2024
        </MDBBadge>
      </MDBListGroupItem>
      <MDBListGroupItem className='d-flex justify-content-between align-items-start'>
        <div className='ms-2 me-auto'>
          <div className='fw-bold'>My Portfolio</div>
          <span>Task for my On the job training uses nextJS, reactJS, and bootstrap version 5</span>
        </div>
        <MDBBadge pill light>
          2024
        </MDBBadge>
      </MDBListGroupItem>
      <MDBListGroupItem className='d-flex justify-content-between align-items-start'>
        <div className='ms-2 me-auto'>
          <div className='fw-bold'>Todo Task app</div>
          <span>Simple project for adding tasks and inserting to database</span>
        </div>
        <MDBBadge pill light>
          2023
        </MDBBadge>
      </MDBListGroupItem>
      <MDBListGroupItem className='d-flex justify-content-between align-items-start'>
        <div className='ms-2 me-auto'>
          <div className='fw-bold'>Web based Hotel Spa Reservation Management System</div>
          <span>Fun project for my System Administration subject</span>
        </div>
        <MDBBadge pill light>
          2023
        </MDBBadge>
      </MDBListGroupItem>
    </MDBListGroup>
  );
}
import { MDBBadge, MDBListGroup, MDBListGroupItem } from 'mdb-react-ui-kit';

export function EducationList() {
  return (
    <MDBListGroup light numbered style={{ minWidth: '22rem' }}>
      <MDBListGroupItem className='d-flex justify-content-between align-items-start'>
        <div className='ms-2 me-auto'>
          <div className='fw-bold'>Palaming Elementary School</div>Kinder to grade 6
        </div>
        <MDBBadge pill light>
          2008
        </MDBBadge>
      </MDBListGroupItem>
      <MDBListGroupItem className='d-flex justify-content-between align-items-start'>
        <div className='ms-2 me-auto'>
          <div className='fw-bold'>Saint Charles Academy</div>Grade 7 to 10
        </div>
        <MDBBadge pill light>
          2014
        </MDBBadge>
      </MDBListGroupItem>
      <MDBListGroupItem className='d-flex justify-content-between align-items-start'>
        <div className='ms-2 me-auto'>
          <div className='fw-bold'>San Carlos Preparatory School</div>Grade 11 to 12
        </div>
        <MDBBadge pill light>
          2018
        </MDBBadge>
      </MDBListGroupItem>
      <MDBListGroupItem className='d-flex justify-content-between align-items-start'>
        <div className='ms-2 me-auto'>
          <div className='fw-bold'>Universidad de Dagupan</div>College
        </div>
        <MDBBadge pill light>
          2020
        </MDBBadge>
      </MDBListGroupItem>
    </MDBListGroup>
  );
}
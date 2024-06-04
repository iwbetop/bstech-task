import { MDBBadge, MDBListGroup, MDBListGroupItem } from 'mdb-react-ui-kit';

export function AchievementList() {
  return (
    <MDBListGroup light numbered style={{ minWidth: '22rem' }}>
      <MDBListGroupItem className='d-flex justify-content-between align-items-start'>
        <div className='ms-2 me-auto'>
          <div className='fw-bold'>Dean Lister</div>
          <span>I received a high grades on my 3rd year college</span>
        </div>
        <MDBBadge pill light>
          2023
        </MDBBadge>
      </MDBListGroupItem>
      <MDBListGroupItem className='d-flex justify-content-between align-items-start'>
        <div className='ms-2 me-auto'>
          <div className='fw-bold'>Computer Virtuoso of the year</div>
          <span>I received a title on my senior high school days for having some little knowledge on coding and editing</span>
        </div>
        <MDBBadge pill light>
          2019
        </MDBBadge>
      </MDBListGroupItem>
    </MDBListGroup>
  );
}
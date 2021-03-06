import React,  {useState}  from 'react';
import CompetitionSection from '../../site/signUp/competitor-form';
import SponsorshipSection from '../../site/signUp/sponsor-form';
import VisitorSection from '../../site/signUp/visitor-form';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
const SectionChange = () =>  {
  const [value,setValue]=useState('Select');
  const handleSelect=(e)=>{
    console.log(e);
    setValue(e);
  }
   
    if(value==='Competitor'){
      return ( 
        <CompetitionSection /> 
        );
    }
    else if(value==='Sponsor'){
      return ( 
        <SponsorshipSection /> 
        );
    }
    else if (value === 'Visitor') {
      return (
        <VisitorSection />
      );
    }
    else{
      return (
        <div>
           <section className="section-container">
      
        <div className="spacer">
          </div>
        <div className="form-container">
          <h3>Select Category</h3>
          <DropdownButton
          alignRight
          title={value}
          id="dropdown-menu-align-right"
          onSelect={handleSelect}
          className="category-dropdown"
          >
            <Dropdown.Item eventKey="Competitor">Competitor</Dropdown.Item>
            <Dropdown.Item eventKey="Sponsor">Sponsor</Dropdown.Item>
            <Dropdown.Item eventKey="Visitor">Visitor</Dropdown.Item>
          </DropdownButton>
        </div>
        <div className="spacer">
          </div>
          </section>
        </div>
        
        );
    }
  }
  export default SectionChange;

import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import OpenRoles from './OpenRoles';
import { BrowserRouter } from 'react-router-dom';

test('Button should render with Show filter text', () => {
  const { getByText } = render( <OpenRoles />);
  
  const showFilterButton = getByText('Show Filter');
  expect(showFilterButton).toBeInTheDocument();
 
  
  })

test('Button should render and filter should not', () => {
  const { getByText, queryByText } = render( <OpenRoles /> );
  
  const showFilterButton = getByText('Show Filter');
  expect(showFilterButton).toBeInTheDocument();
  
  const filterByRoleHeading = queryByText('Filter by Role');
  expect(filterByRoleHeading).toBeNull();
  
  })

  
  test('when show filter button is clicked the filter component should render on screen', () => {
    const { getByText } = render( <BrowserRouter><OpenRoles /></BrowserRouter> );

    const showFilterButton = getByText('Show Filter');

    fireEvent.click(showFilterButton);
  
    const hideFilterButton = getByText('Hide Filter');
    expect(hideFilterButton).toBeInTheDocument();
    
    const roleFilterHeading = getByText('Filter by Role');
    expect(roleFilterHeading).toBeInTheDocument();
    });

 

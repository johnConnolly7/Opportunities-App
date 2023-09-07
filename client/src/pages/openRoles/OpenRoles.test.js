import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import OpenRoles from './OpenRoles';
import { BrowserRouter } from 'react-router-dom';

test('Button should render with initial text and show RoleFilter when clicked', () => {
  const { getByText, queryByText } = render( <BrowserRouter><OpenRoles /></BrowserRouter> );
  
  const showFilterButton = getByText('Show Filter');
  expect(showFilterButton).toBeInTheDocument();
  
  const filterByRoleHeading = queryByText('Filter by Role');
  expect(filterByRoleHeading).toBeNull();
  
  fireEvent.click(showFilterButton);
  
  const hideFilterButton = getByText('Hide Filter');
  expect(hideFilterButton).toBeInTheDocument();
  
  const roleFilterHeading = getByText('Filter by Role');
  expect(roleFilterHeading).toBeInTheDocument();
  });

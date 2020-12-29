import * as React from 'react';
import { render } from '@testing-library/react';
import { expect } from 'chai';
import App from '../components/App';

describe('<App>', () => {
  it('renders learn react link', () => {
    const { getByText } = render(<App />);
    const linkElement = getByText(/APP/i);
    expect(document.body.contains(linkElement));
  });
});
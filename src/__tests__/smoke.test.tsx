import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';

// A simple smoke test to ensure the testing environment works
describe('Elector IN Application', () => {
  it('should have a working test environment', () => {
    expect(true).toBe(true);
  });

  it('renders a basic component', () => {
    render(<div data-testid="test-element">Elector IN</div>);
    expect(screen.getByTestId('test-element')).toHaveTextContent('Elector IN');
  });
});

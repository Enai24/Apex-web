import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';

// Mock next/navigation
jest.mock('next/navigation', () => ({
  usePathname: () => '/',
  useRouter: () => ({ push: jest.fn() }),
}));

// Mock next/link
jest.mock('next/link', () => {
  return ({ children, href }: { children: React.ReactNode; href: string }) => (
    <a href={href}>{children}</a>
  );
});

expect.extend(toHaveNoViolations);

describe('Accessibility Tests', () => {
  it('should have no accessibility violations', async () => {
    // This is a basic accessibility test template
    // Add component-specific tests below
    const { container } = render(<div>Test</div>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});

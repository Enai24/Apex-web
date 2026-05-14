import { render, screen } from '@testing-library/react';
import Footer from '@/components/Footer';

// Mock useI18n hook
jest.mock('@/i18n/client', () => ({
  useI18n: () => ({
    translate: (key: string) => key,
    translateData: (data: unknown[]) => data,
  }),
}));

describe('Footer Component', () => {
  it('renders without crashing', () => {
    render(<Footer />);
    expect(screen.getByText('APEX')).toBeInTheDocument();
  });

  it('has proper accessibility attributes', () => {
    render(<Footer />);
    const footer = screen.getByRole('contentinfo');
    expect(footer).toBeInTheDocument();
  });

  it('renders all navigation sections', () => {
    render(<Footer />);
    expect(screen.getByText('Company')).toBeInTheDocument();
    expect(screen.getByText('Services')).toBeInTheDocument();
    expect(screen.getByText('AI Solutions')).toBeInTheDocument();
    expect(screen.getByText('Resources')).toBeInTheDocument();
    expect(screen.getByText('Locations')).toBeInTheDocument();
  });
});

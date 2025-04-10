import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { CreditCard, Lock } from 'lucide-react';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY || '');

const plans = [
  {
    id: 'basic',
    name: 'Basic',
    price: '499',
    features: [
      '10 Job Applications',
      'Basic Resume Builder',
      'Email Notifications',
      '30 Days Access',
    ],
  },
  {
    id: 'pro',
    name: 'Professional',
    price: '999',
    features: [
      'Unlimited Job Applications',
      'Advanced Resume Builder',
      'Priority Application Status',
      'Direct Recruiter Contact',
      '90 Days Access',
    ],
  },
];

export default function PaymentForm() {
  const [selectedPlan, setSelectedPlan] = React.useState(plans[0]);
  const [loading, setLoading] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const stripe = await stripePromise;
      if (!stripe) throw new Error('Stripe failed to load');

      // Create checkout session
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          planId: selectedPlan.id,
        }),
      });

      const session = await response.json();

      // Redirect to Stripe checkout
      const result = await stripe.redirectToCheckout({
        sessionId: session.id,
      });

      if (result.error) {
        throw new Error(result.error.message);
      }
    } catch (error) {
      console.error('Payment error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900">Choose Your Plan</h2>
        <p className="mt-4 text-lg text-gray-600">
          Select the plan that best fits your job search needs
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:gap-12">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className={`relative rounded-2xl shadow-sm ring-1 ${
              selectedPlan.id === plan.id
                ? 'ring-2 ring-blue-600'
                : 'ring-gray-900/10'
            }`}
          >
            <div className="p-8">
              <h3 className="text-2xl font-semibold leading-7 text-gray-900">{plan.name}</h3>
              <p className="mt-4 flex items-baseline gap-x-2">
                <span className="text-4xl font-bold tracking-tight text-gray-900">₹{plan.price}</span>
                <span className="text-sm font-semibold leading-6 text-gray-600">/month</span>
              </p>
              <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <svg
                      className="h-6 w-5 flex-none text-blue-600"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                type="button"
                onClick={() => setSelectedPlan(plan)}
                className={`mt-8 block w-full rounded-md px-3.5 py-2.5 text-center text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
                  selectedPlan.id === plan.id
                    ? 'bg-blue-600 text-white hover:bg-blue-500 focus-visible:outline-blue-600'
                    : 'bg-white text-blue-600 ring-1 ring-inset ring-blue-200 hover:ring-blue-300'
                }`}
              >
                {selectedPlan.id === plan.id ? 'Selected' : 'Select Plan'}
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12">
        <div className="rounded-2xl bg-white shadow-sm ring-1 ring-gray-900/10">
          <div className="p-8">
            <h3 className="text-xl font-semibold leading-7 text-gray-900">Payment Details</h3>
            <form onSubmit={handleSubmit} className="mt-6 space-y-6">
              <div className="space-y-6 sm:space-y-5">
                <div>
                  <label
                    htmlFor="card-number"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Card Number
                  </label>
                  <div className="relative mt-2 rounded-md shadow-sm">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <CreditCard className="h-5 w-5 text-gray-400" aria-hidden="true" />
                    </div>
                    <input
                      type="text"
                      name="card-number"
                      id="card-number"
                      className="block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                      placeholder="4242 4242 4242 4242"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="expiry"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Expiry Date
                    </label>
                    <input
                      type="text"
                      name="expiry"
                      id="expiry"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                      placeholder="MM/YY"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="cvc"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      CVC
                    </label>
                    <input
                      type="text"
                      name="cvc"
                      id="cvc"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                      placeholder="123"
                    />
                  </div>
                </div>
              </div>

              <div className="flex items-center">
                <Lock className="h-5 w-5 text-gray-400 mr-2" />
                <span className="text-sm text-gray-500">
                  Your payment information is secure and encrypted
                </span>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Processing...' : `Pay ₹${selectedPlan.price}`}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
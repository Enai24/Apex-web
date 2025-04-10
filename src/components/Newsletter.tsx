import React from 'react';
import { Mail } from 'lucide-react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

export default function Newsletter() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = async (data: any) => {
    try {
      // Here you would typically send the data to your backend
      console.log('Newsletter subscription:', data);
      toast.success('Thank you for subscribing to our newsletter!');
      reset();
    } catch (error) {
      toast.error('Failed to subscribe. Please try again.');
    }
  };

  return (
    <div className="bg-white py-8 sm:py-12">
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-16 shadow-2xl sm:rounded-3xl sm:px-24">
          <h2 className="mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Stay Informed with Industry Insights
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-lg leading-8 text-gray-300">
            Subscribe to our newsletter for the latest trends, insights, and industry updates.
          </p>
          <form onSubmit={handleSubmit(onSubmit)} className="mx-auto mt-10 max-w-md">
            <div className="flex gap-x-4">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address',
                  },
                })}
                type="email"
                placeholder="Enter your email"
                className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
              />
              <button
                type="submit"
                className="flex-none rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Subscribe
              </button>
            </div>
            {errors.email && (
              <p className="mt-2 text-sm text-red-400">{errors.email.message as string}</p>
            )}
          </form>
          <svg
            viewBox="0 0 1024 1024"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2"
            aria-hidden="true"
          >
            <circle cx="512" cy="512" r="512" fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
            <defs>
              <radialGradient
                id="759c1415-0410-454c-8f7c-9a820de03641"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(512 512) rotate(90) scale(512)"
              >
                <stop stopColor="#7775D6" />
                <stop offset="1" stopColor="#E935C1" stopOpacity="0" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}
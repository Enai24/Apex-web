import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useNavigate } from 'react-router-dom';
import { Lock, Mail, Brain, BarChart2, Shield, Zap, MessageSquare, LineChart, Globe, Monitor } from 'lucide-react';
import toast from 'react-hot-toast';
import { signInClient } from '../../lib/auth';
import { AI_SOLUTIONS } from '../../utils/ai-workforce';

const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  rememberMe: z.boolean().optional(),
});

type LoginFormData = z.infer<typeof loginSchema>;

export default function ClientLoginForm() {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormData) => {
    try {
      await signInClient(data.email, data.password);
      toast.success('Successfully logged in');
      navigate('/client/dashboard');
    } catch (error) {
      toast.error('Invalid credentials');
    }
  };

  const featuredAgents = AI_SOLUTIONS.slice(0, 4);

  return (
    <div className="min-h-screen flex bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="flex flex-col justify-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-center text-3xl font-extrabold text-gray-900">
                Client Portal Login
              </h2>
              <p className="mt-2 text-center text-sm text-gray-600">
                Access your dashboard and manage your account
              </p>
            </div>
            <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
              <div className="rounded-md shadow-sm -space-y-px">
                <div>
                  <label htmlFor="email" className="sr-only">
                    Email address
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      {...register('email')}
                      type="email"
                      className="appearance-none rounded-none relative block w-full px-3 py-2 pl-10 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                      placeholder="Email address"
                    />
                  </div>
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="password" className="sr-only">
                    Password
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      {...register('password')}
                      type="password"
                      className="appearance-none rounded-none relative block w-full px-3 py-2 pl-10 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                      placeholder="Password"
                    />
                  </div>
                  {errors.password && (
                    <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>
                  )}
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    {...register('rememberMe')}
                    type="checkbox"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                    Remember me
                  </label>
                </div>

                <div className="text-sm">
                  <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
                    Forgot your password?
                  </a>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
                >
                  {isSubmitting ? 'Signing in...' : 'Sign in'}
                </button>
              </div>
            </form>

            <div className="text-center text-sm text-gray-600">
              <p>Demo credentials:</p>
              <p>Email: client.demo@apex.com</p>
              <p>Password: ApexClient2024#</p>
            </div>
          </div>
        </div>

        <div className="hidden lg:block">
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              Access Our AI Workforce Solutions
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {featuredAgents.map((agent) => (
                <div key={agent.id} className="bg-white rounded-lg shadow p-5 border border-gray-100">
                  <div className="flex items-center mb-4">
                    <div className="h-10 w-10 rounded-lg bg-indigo-100 flex items-center justify-center mr-3">
                      <agent.icon className="h-5 w-5 text-indigo-600" />
                    </div>
                    <h4 className="text-md font-semibold text-gray-900">{agent.title}</h4>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">{agent.description}</p>
                  <div className="text-xs text-indigo-600 font-medium">
                    Login to access this solution
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 text-center">
              <span className="text-sm text-gray-500">
                Plus 4 more AI solutions available in your dashboard
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
import React, { useState } from 'react';
import { CheckCircle, AlertCircle, Upload, Briefcase, User, Mail, Phone, MapPin, FileText, Send } from 'lucide-react';

interface FormField {
  id: string;
  name: string;
  label: string;
  type: string;
  placeholder: string;
  required: boolean;
  options?: string[];
}

interface ApplyFormProps {
  jobTitle?: string;
  jobId?: string;
  department?: string;
  location?: string;
  onSubmit?: (formData: FormData) => void;
  onClose?: () => void;
}

const ApplyForm: React.FC<ApplyFormProps> = ({ 
  jobTitle = "Open Application", 
  jobId = "general", 
  department = "", 
  location = "",
  onSubmit,
  onClose
}) => {
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState<FormData>(new FormData());
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [fileName, setFileName] = useState<string>('');

  // Form fields for each step
  const personalDetailsFields: FormField[] = [
    { id: 'name', name: 'name', label: 'Full Name', type: 'text', placeholder: 'Your full name', required: true },
    { id: 'email', name: 'email', label: 'Email Address', type: 'email', placeholder: 'Your email address', required: true },
    { id: 'phone', name: 'phone', label: 'Phone Number', type: 'tel', placeholder: 'Your phone number', required: true },
    { id: 'location', name: 'location', label: 'Current Location', type: 'text', placeholder: 'City, State', required: true },
    { id: 'linkedin', name: 'linkedin', label: 'LinkedIn Profile', type: 'url', placeholder: 'https://linkedin.com/in/your-profile', required: false }
  ];
  
  const experienceFields: FormField[] = [
    { id: 'experience', name: 'experience', label: 'Years of Experience', type: 'select', placeholder: 'Select experience', required: true, options: ['0-1 years', '1-3 years', '3-5 years', '5-10 years', '10+ years'] },
    { id: 'current_role', name: 'current_role', label: 'Current Role', type: 'text', placeholder: 'Your current job title', required: true },
    { id: 'current_company', name: 'current_company', label: 'Current Company', type: 'text', placeholder: 'Your current company', required: false },
    { id: 'notice_period', name: 'notice_period', label: 'Notice Period', type: 'select', placeholder: 'Select notice period', required: true, options: ['Available immediately', '15 days', '30 days', '60 days', '90+ days'] }
  ];
  
  const applicationQuestions: FormField[] = [
    { id: 'why_join', name: 'why_join', label: 'Why do you want to join Apex Enterprises?', type: 'textarea', placeholder: 'Share your reasons for wanting to join our team...', required: true },
    { id: 'skills', name: 'skills', label: 'What relevant skills do you bring to this role?', type: 'textarea', placeholder: 'Describe your key skills and competencies...', required: true },
    { id: 'salary', name: 'salary', label: 'Expected Salary (Annual in INR)', type: 'text', placeholder: 'Your salary expectations', required: false },
    { id: 'referral', name: 'referral', label: 'How did you hear about us?', type: 'select', placeholder: 'Select an option', required: true, options: ['Job Board', 'Company Website', 'LinkedIn', 'Referral', 'Other'] }
  ];

  // Handle field changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    // Create a new FormData object
    const updatedFormData = new FormData();
    
    // Copy all existing entries
    for (const [key, val] of formData.entries()) {
      updatedFormData.append(key, val as string);
    }
    
    // Update the changed field
    updatedFormData.set(name, value);
    setFormData(updatedFormData);
    
    // Clear error for this field if any
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  // Handle file upload
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Check file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        setErrors(prev => ({ ...prev, resume: 'File size should be less than 5MB' }));
        return;
      }
      
      // Check file type
      const validTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      if (!validTypes.includes(file.type)) {
        setErrors(prev => ({ ...prev, resume: 'Please upload PDF or Word document' }));
        return;
      }
      
      // Add to form data
      const updatedFormData = new FormData();
      for (const [key, val] of formData.entries()) {
        updatedFormData.append(key, val as string);
      }
      updatedFormData.set('resume', file);
      setFormData(updatedFormData);
      setFileName(file.name);
      
      // Clear error
      if (errors.resume) {
        setErrors(prev => {
          const newErrors = { ...prev };
          delete newErrors.resume;
          return newErrors;
        });
      }
    }
  };

  // Validate current step
  const validateStep = (): boolean => {
    const newErrors: Record<string, string> = {};
    
    let currentFields: FormField[] = [];
    if (step === 1) currentFields = personalDetailsFields;
    else if (step === 2) currentFields = experienceFields;
    else if (step === 3) {
      // Special case for resume
      if (!formData.get('resume')) {
        newErrors.resume = 'Please upload your resume';
      }
      currentFields = applicationQuestions;
    }
    
    currentFields.forEach(field => {
      if (field.required && !formData.get(field.name)) {
        newErrors[field.name] = `${field.label} is required`;
      }
      
      // Email validation
      if (field.type === 'email' && formData.get(field.name)) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.get(field.name) as string)) {
          newErrors[field.name] = 'Please enter a valid email address';
        }
      }
    });
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle next step
  const handleNext = () => {
    if (validateStep()) {
      setStep(prev => prev + 1);
    }
  };

  // Handle previous step
  const handlePrevious = () => {
    setStep(prev => prev - 1);
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateStep()) {
      // Add job related info to form data
      formData.append('jobTitle', jobTitle);
      formData.append('jobId', jobId);
      if (department) formData.append('department', department);
      if (location) formData.append('location', location);
      
      // Call the onSubmit callback if provided
      if (onSubmit) {
        onSubmit(formData);
      }
      
      // Show success state
      setSubmitted(true);
    }
  };

  // Render form fields
  const renderFields = (fields: FormField[]) => {
    return fields.map(field => (
      <div key={field.id} className="mb-4">
        <label htmlFor={field.id} className="block text-sm font-medium text-gray-700 mb-1">
          {field.label} {field.required && <span className="text-red-500">*</span>}
        </label>
        
        {field.type === 'select' ? (
          <select
            id={field.id}
            name={field.name}
            value={formData.get(field.name) as string || ''}
            onChange={handleChange}
            className={`block w-full rounded-md border ${errors[field.name] ? 'border-red-500' : 'border-gray-300'} px-3 py-2 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500`}
            required={field.required}
          >
            <option value="">{field.placeholder}</option>
            {field.options?.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        ) : field.type === 'textarea' ? (
          <textarea
            id={field.id}
            name={field.name}
            placeholder={field.placeholder}
            value={formData.get(field.name) as string || ''}
            onChange={handleChange}
            rows={4}
            className={`block w-full rounded-md border ${errors[field.name] ? 'border-red-500' : 'border-gray-300'} px-3 py-2 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500`}
            required={field.required}
          />
        ) : (
          <input
            type={field.type}
            id={field.id}
            name={field.name}
            placeholder={field.placeholder}
            value={formData.get(field.name) as string || ''}
            onChange={handleChange}
            className={`block w-full rounded-md border ${errors[field.name] ? 'border-red-500' : 'border-gray-300'} px-3 py-2 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500`}
            required={field.required}
          />
        )}
        
        {errors[field.name] && (
          <p className="mt-1 text-sm text-red-600">{errors[field.name]}</p>
        )}
      </div>
    ));
  };

  // Render file upload field
  const renderFileUpload = () => (
    <div className="mb-6">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Resume <span className="text-red-500">*</span>
      </label>
      
      <div className={`mt-1 flex justify-center rounded-md border-2 border-dashed ${errors.resume ? 'border-red-500' : 'border-gray-300'} px-6 pt-5 pb-6`}>
        <div className="space-y-1 text-center">
          <Upload className="mx-auto h-12 w-12 text-gray-400" />
          <div className="flex text-sm text-gray-600">
            <label htmlFor="resume" className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500">
              <span>Upload a file</span>
              <input
                id="resume"
                name="resume"
                type="file"
                className="sr-only"
                accept=".pdf,.doc,.docx"
                onChange={handleFileUpload}
              />
            </label>
            <p className="pl-1">or drag and drop</p>
          </div>
          <p className="text-xs text-gray-500">
            PDF or Word up to 5MB
          </p>
          {fileName && (
            <p className="text-sm text-indigo-600 font-medium mt-2">
              {fileName}
            </p>
          )}
        </div>
      </div>
      
      {errors.resume && (
        <p className="mt-1 text-sm text-red-600">{errors.resume}</p>
      )}
    </div>
  );

  // Render cover letter field
  const renderCoverLetter = () => (
    <div className="mb-6">
      <label htmlFor="cover_letter" className="block text-sm font-medium text-gray-700 mb-1">
        Cover Letter (Optional)
      </label>
      <textarea
        id="cover_letter"
        name="cover_letter"
        rows={6}
        placeholder="Tell us more about yourself and why you're interested in this role..."
        value={formData.get('cover_letter') as string || ''}
        onChange={handleChange}
        className="block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
      />
    </div>
  );

  // Progress bar
  const renderProgressBar = () => {
    const steps = ['Personal Details', 'Experience', 'Application'];
    
    return (
      <div className="mb-8">
        <div className="flex items-center justify-between">
          {steps.map((stepLabel, index) => (
            <div key={index} className="flex flex-col items-center">
              <div 
                className={`h-8 w-8 rounded-full flex items-center justify-center text-sm ${
                  step > index + 1 
                    ? 'bg-indigo-600 text-white' 
                    : step === index + 1 
                      ? 'bg-indigo-600 text-white' 
                      : 'bg-gray-200 text-gray-600'
                }`}
              >
                {step > index + 1 ? <CheckCircle className="h-5 w-5" /> : index + 1}
              </div>
              <span className={`text-xs mt-1 ${step >= index + 1 ? 'text-indigo-600 font-medium' : 'text-gray-500'}`}>
                {stepLabel}
              </span>
            </div>
          ))}
        </div>
        <div className="mt-3 grid grid-cols-2 gap-2">
          <div className={`h-1 ${step > 1 ? 'bg-indigo-600' : 'bg-gray-200'}`}></div>
          <div className={`h-1 ${step > 2 ? 'bg-indigo-600' : 'bg-gray-200'}`}></div>
        </div>
      </div>
    );
  };

  // Success state
  if (submitted) {
    return (
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
        <div className="flex flex-col items-center text-center">
          <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
            <CheckCircle className="h-10 w-10 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Application Submitted!</h2>
          <p className="text-lg text-gray-600 mb-6">
            Thank you for applying to {jobTitle} at Apex Enterprises. We'll review your application and get back to you soon.
          </p>
          <div className="mt-2 bg-indigo-50 p-4 rounded-lg max-w-md">
            <p className="text-sm text-indigo-800">
              A confirmation email has been sent to {formData.get('email')}. Please check your inbox and spam folder.
            </p>
          </div>
          <div className="mt-8">
            <button
              type="button"
              onClick={onClose}
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-2xl mx-auto">
      {/* Header */}
      <div className="mb-6 flex justify-between items-center">
        <div>
          <h2 className="text-xl font-bold text-gray-900">{jobTitle}</h2>
          <div className="mt-1 flex items-center text-sm text-gray-500 space-x-4">
            {department && (
              <span className="flex items-center">
                <Briefcase className="h-4 w-4 mr-1" />
                {department}
              </span>
            )}
            {location && (
              <span className="flex items-center">
                <MapPin className="h-4 w-4 mr-1" />
                {location}
              </span>
            )}
          </div>
        </div>
        {onClose && (
          <button
            type="button"
            onClick={onClose}
            className="text-gray-400 hover:text-gray-500"
          >
            <span className="sr-only">Close</span>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>
      
      {/* Progress tracker */}
      {renderProgressBar()}
      
      {/* Form */}
      <form onSubmit={handleSubmit}>
        {/* Step 1: Personal Details */}
        {step === 1 && (
          <div>
            <div className="mb-6">
              <h3 className="text-lg font-medium text-gray-900">Personal Details</h3>
              <p className="text-sm text-gray-500">Tell us about yourself</p>
            </div>
            {renderFields(personalDetailsFields)}
          </div>
        )}
        
        {/* Step 2: Experience */}
        {step === 2 && (
          <div>
            <div className="mb-6">
              <h3 className="text-lg font-medium text-gray-900">Professional Experience</h3>
              <p className="text-sm text-gray-500">Tell us about your work history</p>
            </div>
            {renderFields(experienceFields)}
          </div>
        )}
        
        {/* Step 3: Application */}
        {step === 3 && (
          <div>
            <div className="mb-6">
              <h3 className="text-lg font-medium text-gray-900">Your Application</h3>
              <p className="text-sm text-gray-500">Upload your resume and answer a few questions</p>
            </div>
            {renderFileUpload()}
            {renderCoverLetter()}
            {renderFields(applicationQuestions)}
          </div>
        )}
        
        {/* Form actions */}
        <div className="mt-8 flex justify-between">
          {step > 1 ? (
            <button
              type="button"
              onClick={handlePrevious}
              className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Previous
            </button>
          ) : (
            <div></div>
          )}
          
          {step < 3 ? (
            <button
              type="button"
              onClick={handleNext}
              className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Next
            </button>
          ) : (
            <button
              type="submit"
              className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              <Send className="h-4 w-4 mr-2" />
              Submit Application
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default ApplyForm; 
import React from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Plus, Minus, Upload } from 'lucide-react';
import { useDropzone } from 'react-dropzone';
import toast from 'react-hot-toast';

const applicationSchema = z.object({
  personalInfo: z.object({
    firstName: z.string().min(2, 'First name is required'),
    lastName: z.string().min(2, 'Last name is required'),
    email: z.string().email('Invalid email address'),
    phone: z.string().min(10, 'Invalid phone number'),
    location: z.string().min(2, 'Location is required'),
  }),
  experience: z.array(z.object({
    company: z.string().min(2, 'Company name is required'),
    position: z.string().min(2, 'Position is required'),
    startDate: z.string(),
    endDate: z.string().optional(),
    current: z.boolean().optional(),
    description: z.string(),
  })),
  education: z.array(z.object({
    institution: z.string().min(2, 'Institution name is required'),
    degree: z.string().min(2, 'Degree is required'),
    field: z.string().min(2, 'Field of study is required'),
    graduationYear: z.string(),
  })),
  skills: z.array(z.string()),
  noticePeriod: z.string(),
  expectedSalary: z.string(),
  preferredLocations: z.array(z.string()),
});

type ApplicationFormData = z.infer<typeof applicationSchema>;

export default function JobApplicationForm() {
  const { register, control, handleSubmit, formState: { errors } } = useForm<ApplicationFormData>({
    resolver: zodResolver(applicationSchema),
    defaultValues: {
      experience: [{ company: '', position: '', startDate: '', description: '' }],
      education: [{ institution: '', degree: '', field: '', graduationYear: '' }],
      skills: [],
      preferredLocations: [],
    },
  });

  const { fields: experienceFields, append: appendExperience, remove: removeExperience } = 
    useFieldArray({ control, name: 'experience' });

  const { fields: educationFields, append: appendEducation, remove: removeEducation } = 
    useFieldArray({ control, name: 'education' });

  const onDrop = React.useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (file.size > 5 * 1024 * 1024) {
      toast.error('File size must be less than 5MB');
      return;
    }
    // Handle file upload
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/pdf': ['.pdf'],
      'application/msword': ['.doc'],
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx'],
    },
    maxSize: 5 * 1024 * 1024,
    multiple: false,
  });

  const onSubmit = async (data: ApplicationFormData) => {
    try {
      // Handle form submission
      console.log(data);
      toast.success('Application submitted successfully!');
    } catch (error) {
      toast.error('Failed to submit application');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-4xl mx-auto p-6 space-y-8">
      <div className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl p-6">
        <h2 className="text-2xl font-semibold mb-6">Personal Information</h2>
        <div className="grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
          <div>
            <label className="block text-sm font-medium text-gray-700">First Name</label>
            <input
              type="text"
              {...register('personalInfo.firstName')}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
            {errors.personalInfo?.firstName && (
              <p className="mt-1 text-sm text-red-600">{errors.personalInfo.firstName.message}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Last Name</label>
            <input
              type="text"
              {...register('personalInfo.lastName')}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          {/* Add other personal info fields */}
        </div>
      </div>

      <div className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl p-6">
        <h2 className="text-2xl font-semibold mb-6">Resume Upload</h2>
        <div
          {...getRootProps()}
          className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer ${
            isDragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
          }`}
        >
          <input {...getInputProps()} />
          <Upload className="mx-auto h-12 w-12 text-gray-400" />
          <p className="mt-2 text-sm text-gray-600">
            Drag & drop your resume here, or click to select file
          </p>
          <p className="text-xs text-gray-500">
            PDF, DOC, or DOCX (max. 5MB)
          </p>
        </div>
      </div>

      <div className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Work Experience</h2>
          <button
            type="button"
            onClick={() => appendExperience({ company: '', position: '', startDate: '', description: '' })}
            className="flex items-center text-sm text-blue-600 hover:text-blue-500"
          >
            <Plus className="h-4 w-4 mr-1" />
            Add Experience
          </button>
        </div>
        {experienceFields.map((field, index) => (
          <div key={field.id} className="mb-6 pb-6 border-b border-gray-200 last:border-0">
            {/* Experience fields */}
            <div className="grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-gray-700">Company</label>
                <input
                  type="text"
                  {...register(`experience.${index}.company`)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              {/* Add other experience fields */}
            </div>
            {index > 0 && (
              <button
                type="button"
                onClick={() => removeExperience(index)}
                className="mt-4 flex items-center text-sm text-red-600 hover:text-red-500"
              >
                <Minus className="h-4 w-4 mr-1" />
                Remove
              </button>
            )}
          </div>
        ))}
      </div>

      {/* Similar sections for Education, Skills, etc. */}

      <div className="flex justify-end">
        <button
          type="submit"
          className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        >
          Submit Application
        </button>
      </div>
    </form>
  );
}
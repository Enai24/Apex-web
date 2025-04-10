import React, { useState, useEffect } from 'react';

export default function LogoUploader() {
  const [logo, setLogo] = useState<string | null>(null);

  // Load the saved logo from localStorage on component mount
  useEffect(() => {
    const savedLogo = localStorage.getItem('uploadedLogo');
    if (savedLogo) {
      setLogo(savedLogo);
    }
  }, []);

  const handleLogoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const logoData = reader.result as string;
        setLogo(logoData);
        localStorage.setItem('uploadedLogo', logoData); // Save the logo in localStorage
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <label
        htmlFor="logo-upload"
        className="cursor-pointer text-blue-600 underline"
      >
        Upload Logo
      </label>
      <input
        id="logo-upload"
        type="file"
        accept="image/*"
        onChange={handleLogoUpload}
        className="hidden"
      />

      {logo && (
        <div className="flex flex-col items-center gap-2">
          <img
            src={logo}
            alt="Uploaded Logo"
            className="h-16 w-auto object-contain"
          />
        </div>
      )}
    </div>
  );
}
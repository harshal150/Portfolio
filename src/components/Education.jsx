import React from 'react';

const Education = () => {
  const educationData = [
    {
      year: '2022 - 2024',
      degree: 'Master of Computer Application (MCA)',
      institution: 'Zeal Institute of Business Administration, Computer Application & Research (ZIBACAR), Pune.',
    },
    {
      year: '2019 - 2022',
      degree: 'Bachelor of Computer Application (BCA)',
      institution: 'Ganpatrao Arwade College of Commerce, Sangli.',
    },
    {
      year: '2019',
      degree: '12th - Higher Secondary School Certificate (HSC)',
      institution: 'Shri Datta Kanishtha Mahavidyalaya, Kurundwad.',
    },
    {
      year: '2017',
      degree: '10th - Secondary School Certificate (SSC)',
      institution: 'Sitabai Patwardhan Highschool, Kurundwad.',
    },
  ];

  return (
    <div className=" text-white p-10">
      {/* <h2 className="text-gray-500 text-sm font-semibold">WHAT I LEARN</h2> */}
      <h1 className="text-4xl font-bold mb-8">Education</h1>
      <div className="relative">
        <div className="absolute left-4 transform -translate-x-1/2 w-px h-full bg-gray-600"></div>
        {educationData.map((item, index) => (
          <div key={index} className="flex items-start mb-8">
            <div className="relative z-10 w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 font-semibold">
              <div className="w-4 h-4 bg-gray-600 rounded-full"></div>
            </div>
            <div className="ml-6">
              <p className="text-sm text-gray-400">{item.year}</p>
              <h3 className="text-xl font-semibold">{item.degree}</h3>
              <p className="text-gray-400">{item.institution}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;

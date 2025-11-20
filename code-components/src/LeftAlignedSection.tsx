import React from 'react';

interface LeftAlignedSectionProps {
  heading: string;
  paragraph: string;
  image: {
    src: string;
    alt?: string;
  };
  button: React.ReactNode;
}

export const LeftAlignedSection: React.FC<LeftAlignedSectionProps> = ({ heading, paragraph, image, button }) => {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', alignItems: 'center' }}>
      <div>
        <h1>{heading}</h1>
        <p>{paragraph}</p>
        {button}
      </div>
      <div>
        <img src={image.src} alt={image.alt} style={{ width: '100%', height: 'auto' }} />
      </div>
    </div>
  );
};

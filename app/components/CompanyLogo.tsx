import React from "react";

const logoStyle = {
    width: '140px',
    height: 'auto',
    cursor: 'pointer',
  };

const CompanyLogo = () => {
  return (
    <img
      src={
        "https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/61f12e6faf73568658154dae_SitemarkDefault.svg"
      }
      style={logoStyle}
      alt="Quick Chef Logo"
    />
  );
};

export default CompanyLogo;

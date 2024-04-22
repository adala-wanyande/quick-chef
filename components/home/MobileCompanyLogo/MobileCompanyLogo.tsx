import React from "react";
import Image from "next/image";
import Link from "next/link";

const MobileCompanyLogo = () => {
  const logoWidth = 38;
  const logoHeight = 38;

  return (
    <div
      style={{
        width: logoWidth,
        height: logoHeight,
        position: "relative",
        margin: 2,
      }}
    >
      <Link href="/">
        <Image
          src="/logo/quick-chef-logo-mobile.png"
          alt="Quick Chef Logo"
          width={logoWidth}
          height={logoHeight}
        />
      </Link>
    </div>
  );
};

export default MobileCompanyLogo;

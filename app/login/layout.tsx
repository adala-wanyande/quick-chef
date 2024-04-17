import React from 'react'

const LoginLayout = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
  return (
    <>
        <div>LoginLayout</div>
        {children}
    </>
  )
}

export default LoginLayout
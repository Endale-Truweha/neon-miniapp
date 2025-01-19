import Footer from '@/components/footer'
import React from 'react'


/**
 * Layout component wraps its children with a div and includes a Footer component.
 * 
 * @param {Object} props - The properties object.
 * @param {React.ReactNode} props.children - The child components to be rendered within the layout.
 * @returns {JSX.Element} The layout component.
 */
function layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      {/* Render the children components */}
      {children}
      {/* Render the Footer component */}
      <Footer />
    </div>
  );
}

export default layout
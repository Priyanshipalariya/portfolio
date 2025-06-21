const Button = ({className, children, ...props}) => (
  <button className={`cursor-pointer font-mono text-white bg-black hover:bg-gray-700 border-transparent rounded-md px-4 py-1  ${className}`} {...props}>{children}</button>
);

const ButtonContrast = ({className, children, ...props}) => (
  <button className={`cursor-pointer font-mono bg-white text-black hover:bg-gray-200  border border-gray-300 rounded-md px-4 py-1  ${className}`} {...props}>{children}</button>
);

export {Button, ButtonContrast};
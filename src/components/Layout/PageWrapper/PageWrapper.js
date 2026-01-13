import './pageWrapper.css'

function PageWrapper({ children }) {
  return <main className="page-wrapper">{children}</main>;
}

export default PageWrapper;

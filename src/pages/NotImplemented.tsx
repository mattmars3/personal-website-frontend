import NavigationBar from "../components/NavigationBar"
import '../stylesheets/not-implemented.css'
import '../stylesheets/main.css'

export default function NotImplemented({pageName}) {
  return (
    <div className="fill-page">
    <NavigationBar />
    <div className="not-implemented-body">
      <p>Sorry... the {pageName} page has not yet been implemented.</p>
      <p>Check back soon.</p>
    </div>
    </div>
  )
}

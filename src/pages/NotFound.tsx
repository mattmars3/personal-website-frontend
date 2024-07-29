import NavigationBar from '../components/NavigationBar'

export default function NotFound() {
  return (
    <div>
      <NavigationBar />
      <div className='not-found-body'>
        <h2>Sorry... Page Not Found</h2>
      </div>
    </div>
  )
}

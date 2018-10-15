import Link from 'next/link';
// putting the href in an anchor link will refresh the page and lose our cache (will need to go to server to get data again)
// using Link still creates the anchor link in the DOM but now it's bound to HTML5 history push state

const Home = props => {
  return (
    <div>
      <p>Hi!</p>
    </div>
  )
}

export default Home;
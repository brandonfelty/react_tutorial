const NavBar = () => {
  return (
  <>
    NavBar
  </>);
}

const MainBody = () => {
  return (
    <p>I'm the main body</p>
  )
}

ReactDOM.render(
  <div>
    <NavBar />
    <MainBody />
  </div>,
  document.getElementById('root')
);
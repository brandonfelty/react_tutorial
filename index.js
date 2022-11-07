// const NavBar = () => {
//   return (
//   <>
//     NavBar
//   </>);
// }

// const MainBody = () => {
//   return (
//     <p>I'm the main body</p>
//   )
// }

// ReactDOM.render(
//   <div>
//     <NavBar />
//     <MainBody />
//   </div>,
//   document.getElementById('root')
// );

// const h1 = document.createElement('h1');
// h1.textContent = 'Imperative way to program';
// h1.className = 'header';
// document.getElementById('root').appendChild(h1);

const page = (
  <div>
    <h1 className='header'>This is JSX</h1>
    <p>This is a paragraph</p>
  </div>
)

console.log(page)

ReactDOM.render(
  page,
  document.getElementById('root')
)
//This componet helps keep track of the document title
const Helmet = ({ children , title}) => {

  document.title = "Pancong Lumer-" + title;

  return children
}

export default Helmet
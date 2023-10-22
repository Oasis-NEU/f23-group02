import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const GuestNavbar = () => {
  let navigate = useNavigate();

  function goConnect() {
    navigate("/aboutus");
  }

  function goHome() {
    navigate("/home");
  }

  function goMusic() {
    navigate("/music");
  }

  const handleClick = (ref : any) => {
    ref.current?.scrollIntoView({behavior: 'smooth'});
    console.log("i be scrollin");
}

  return (
    <nav className="navbar">
      <Link to="/"><div className="logo"></div></Link>
      <div className="links">
        <Link to="/home">Home</Link>
        <Link to="/connect">Connect</Link>
        <Link to="/music">Music</Link>
      </div>
    </nav>
  );
};

export default GuestNavbar;


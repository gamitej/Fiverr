import "./Feature.scss";

const Feature = () => {
  return (
    <div className="featured">
      <div className="container">
        <div className="left">
          <h1>Find the perfect freelance services for your business</h1>
          <div className="search">
            <div className="searchInput">
              <input type="text" placeholder='Try "building mobile app"' />
            </div>
            <button>Search</button>
          </div>
          <div className="popular">
            <span>Popular:</span>
            <button>Web Design</button>
            <button>Wordpress</button>
            <button>Logo Design</button>
            <button>AI Services</button>
          </div>
        </div>
        <div className="right"></div>
      </div>
    </div>
  );
};

export default Feature;

import React, { useEffect, useState } from "react";
import Header from "./header";
import { repoBox } from "./data";

function Repos() {
  const [currentPosition, setCurrentPosition] = useState(0);
  const [loading, setLoading] = useState(true);
  const [listItems, setListItems] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    setListItems(repoBox);
    setFilteredItems(repoBox); // Initialize filtered items with all items
    setLoading(false);
  }, []);

  useEffect(() => {
    // Filter items whenever search or listItems changes
    const filtered = listItems.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredItems(filtered);
    setCurrentPosition(0); // Reset pagination to first page when search changes
  }, [listItems, search]);

  const handleNext = (event) => {
    event.preventDefault();
    if (currentPosition + 5 < filteredItems.length) {
      setCurrentPosition((prevPosition) => prevPosition + 5);
    }
  };

  const handlePrev = (event) => {
    event.preventDefault();
    if (currentPosition > 0) {
      setCurrentPosition((prevPosition) => prevPosition - 5);
    }
  };

  function showDetails(id) {
    let element = document.getElementById(id);
    if (element) {
      element.classList.add("itemInfoContent");
      element.classList.remove("box");
    }
  }

  function hideDetails(id) {
    let element = document.getElementById(id);
    if (element) {
      element.classList.remove("itemInfoContent");
      element.classList.add("box");
    }
  }

  return (
    <div className="repos-container">
      <Header />
      <div className="content">
        <input
          type="text"
          placeholder="Search for repositories...."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          name="searchValue"
        />
        <div className="repos ">
          {loading ? (
            <div>Loading...</div>
          ) : (
            filteredItems
              .slice(currentPosition, currentPosition + 5)
              .map((item) => (
                <div id={`box-${item.id}`} className="box" key={item.id}>
                  <h4 id="xyz" onClick={() => showDetails(`box-${item.id}`)}>
                    {item.title}
                  </h4>
                  <div>
                  <p>
                    <span>Stars: </span>
                    {item.stars}
                  </p>
                  <p>
                    <span>Forks: </span>
                    {item.forks}
                  </p>
                  <p>
                    <span>Language: </span>
                    {item.language}
                  </p>
                  <p>
                    <span>Description: </span>
                    {item.description}
                  </p>
                  <p>
                    <a href={item.url}>
                      <span>URL:</span>
                    </a>{" "}
                    {item.url}
                  </p>
                  <button onClick={() => hideDetails(`box-${item.id}`)}>
                    close
                  </button>
                  </div>
                </div>
              ))
          )}
        </div>
        <div className="paginate">
          <button
            className="prev"
            onClick={handlePrev}
            disabled={currentPosition === 0}
          >
            Previous
          </button>
          <button
            className="next"
            onClick={handleNext}
            disabled={
              currentPosition + 5 >= filteredItems.length ||
              filteredItems.length === 0
            }
          >
            Next
          </button>
        </div>
      </div>
      <div className=""></div>
    </div>
  );
}

export default Repos;

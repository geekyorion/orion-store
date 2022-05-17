const App = () => {

  const categories = [
    { id: 1, title: 'Hats' },
    { id: 2, title: 'Jackets' },
    { id: 3, title: 'Sneakers' },
    { id: 4, title: 'Men' },
    { id: 5, title: 'Women' }
  ];

  return (
    <div className="App">
      <div className="categories-container">
        {categories.map(({ title, id }) => (
          <div className="category-container" key={id}>
            <img className="background-image" src="" alt="" />
            <div className="category-body-container">
              <h2>{ title }</h2>
              <p>Shop now</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

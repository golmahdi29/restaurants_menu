import React, { useState } from 'react';
import Categories from './Components/Categories'
import Menu from './Components/Menu'
import menu from "./data";

const allCategory = ['all', ...new Set(menu.map((item) => item.category))]

function App() {

  const [allMenus, setAllMenus] = useState(menu);
  const [categories, setCategories] = useState(allCategory);

  const filterItems = (category) => {
    if (category === 'all') {
      setAllMenus(menu)
      return
    }
    const newMenu = menu.filter((item) => item.category === category)
    setAllMenus(newMenu)
  }

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>

          <Categories allCategory={categories} filterItems={filterItems} />
          <Menu allMenu={allMenus} />
        </div>
      </section>
    </main>
  );
}

export default App;

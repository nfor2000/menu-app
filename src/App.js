
import React, { useState } from 'react';
import items from './data';
import Menu from './menu'
import Categories from './categories';

const allCategories = ['all',...new Set(items.map((item)=> item.category))];

function App() {
     const [menuItems, setMenuItems] = useState(items);
     const [categories, setCategories] = useState(allCategories);

     function filterItems (category) {
          if(category === 'all') {
               setMenuItems(items);
               return;
          }
          const newItems = items.filter((item)=> item.category === category);
          setMenuItems(newItems);
     }
     return (
          <main>


               <section className="menu section">
                    <div className="title">
                         <h2>Our menu</h2>
                         <div className="underline"></div>
                    </div>
                    <Categories categories={categories} filterItems={filterItems}/>
                    <Menu items={menuItems} />
               </section>
          </main>
     )
}

export default App;

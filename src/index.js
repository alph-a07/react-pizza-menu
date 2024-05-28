import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function App() {
    return (
        <div className='container'>
            <Header />
            <Menu />
            <Footer />
        </div>
    );
}

const pizzaData = [
    {
        name: 'Focaccia',
        ingredients: 'Bread with italian olive oil and rosemary',
        price: 6,
        photoName: 'pizzas/focaccia.jpg',
        soldOut: false,
    },
    {
        name: 'Pizza Margherita',
        ingredients: 'Tomato and mozarella',
        price: 10,
        photoName: 'pizzas/margherita.jpg',
        soldOut: false,
    },
    {
        name: 'Pizza Spinaci',
        ingredients: 'Tomato, mozarella, spinach, and ricotta cheese',
        price: 12,
        photoName: 'pizzas/spinaci.jpg',
        soldOut: false,
    },
    {
        name: 'Pizza Funghi',
        ingredients: 'Tomato, mozarella, mushrooms, and onion',
        price: 12,
        photoName: 'pizzas/funghi.jpg',
        soldOut: false,
    },
    {
        name: 'Pizza Salamino',
        ingredients: 'Tomato, mozarella, and pepperoni',
        price: 15,
        photoName: 'pizzas/salamino.jpg',
        soldOut: true,
    },
    {
        name: 'Pizza Prosciutto',
        ingredients: 'Tomato, mozarella, ham, aragula, and burrata cheese',
        price: 18,
        photoName: 'pizzas/prosciutto.jpg',
        soldOut: false,
    },
];

function Header() {
    return (
        <header className='header'>
            <h1>Fast React Pizza Co.</h1>
        </header>
    );
}

function Menu() {
    const pizzasList = pizzaData;
    // const pizzasList = [];

    if (pizzasList.length === 0) return <p>We're still working on our menu. Please visit later.</p>;

    return (
        <main className='menu'>
            <h2>Our Menu</h2>
            <p>Authentic Italian cuisine. {pizzasList.length} creative dishes to choose from. All from our stone oven, all organic, all delicious.</p>

            <ul className='pizzas'>
                {pizzaData.map(item => (
                    <Pizza pizzaItem={item} key={item.name} />
                ))}
            </ul>
        </main>
    );
}

function Pizza({ pizzaItem }) {
    return (
        <li className={`pizza${pizzaItem.soldOut ? ' sold-out' : ''}`}>
            <img src={pizzaItem.photoName} alt={pizzaItem.name} />
            <div>
                <h3>{pizzaItem.name}</h3>
                <p>{pizzaItem.ingredients}</p>
                <span>{pizzaItem.soldOut ? 'SOLD OUT' : `$${pizzaItem.price}`}</span>
            </div>
        </li>
    );
}

function Footer() {
    const openHours = 10;
    const closeHours = 22;

    const currentHour = new Date().getHours();
    const isOpen = currentHour >= openHours && currentHour <= closeHours;

    return <footer className='footer'>{isOpen ? <Order closeHours={closeHours} /> : <p>Oops! We're currently closed!</p>}</footer>;
}

function Order({ closeHours }) {
    return (
        <div className='order'>
            <p>We're open till {closeHours}:00. Come visit us or order online.</p>
            <button className='btn'>Order now</button>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);

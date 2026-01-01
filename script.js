// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Intersection Observer
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Products data
const products = [
    {
        name: "Nutria bebé",
        price: "Q785",
        image: "images/product2.jpeg",
        description: "Bellas y adorables nutrias tejidas a mano con material rabbit para dar un aspecto más realista.",
        message: "Hola, me interesa la Nutria bebé",
        tags: ["nuevo", "personalizado"]
    },
    {
        name: "Spider-Bear",
        price: "Q600",
        image: "images/product1.png",
        description: "Precioso oso vestido de Spider-Man elaborado con rabbit para el oso y chenille para el traje.",
        message: "Hola, me interesa el Spider-Bear",
        tags: ["más vendido"]
    },
    {
        name: "Lola Bunny",
        price: "Q600",
        image: "images/product3.jpeg",
        description: "Lola Bunny bebé creada en época navideña con materiales chenille y rabbit.",
        message: "Hola, me interesa Lola Bunny",
        tags:["nuevo"]
    }
];

// Render products
const productsContainer = document.getElementById('products-container');

products.forEach(product => {
    const card = document.createElement('article');
    card.classList.add('product-card');
    const tagsHTML = product.tags
    .map(tag => `<span class="tag tag-${tag.replace(' ','-')}">${tag}</span>`)
    .join('');

    card.innerHTML = `
        <img src="${product.image}" loading="lazy" alt="${product.name}">
        <div class="product-info">
            <div class="tags">${tagsHTML}</div>
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <span class="price">${product.price}</span>
            <a 
                href="https://wa.me/50242131465?text=${encodeURIComponent(product.message)}"
                class="btn-contact"
                target="_blank"
            >
                Comprar
            </a>
        </div>
    `;

    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';

    productsContainer.appendChild(card);
    observer.observe(card);
});

// Hamburger menu
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
}

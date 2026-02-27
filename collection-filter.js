const products = [
    {
        id: 'col-1',
        name: 'Chic diamond ring',
        price: 22.00,
        originalPrice: 40.00,
        category: 'Rings',
        material: 'Diamond',
        image: 'https://jelwo.myshopify.com/cdn/shop/files/jewelry-product-9.jpg?v=1742442751&width=1920',
        discount: '45%',
        availability: 'In Stock',
        date: '2024-01-01'
    },
    {
        id: 'col-2',
        name: 'Gemstone jhumkas',
        price: 18.00,
        originalPrice: 50.00,
        category: 'Earrings',
        material: 'Gold',
        image: 'https://jelwo.myshopify.com/cdn/shop/files/jewelry-product-8.jpg?v=1742442751&width=1920',
        discount: '64%',
        availability: 'In Stock',
        date: '2024-01-02'
    },
    {
        id: 'col-3',
        name: 'Drop gold earrings',
        price: 14.00,
        originalPrice: 44.00,
        category: 'Earrings',
        material: 'Gold',
        image: 'https://jelwo.myshopify.com/cdn/shop/files/jewelry-product-7.jpg?v=1742442751&width=1920',
        discount: '68%',
        availability: 'In Stock',
        date: '2024-01-03'
    },
    {
        id: 'col-4',
        name: 'Gold ring',
        price: 14.00,
        originalPrice: 44.00,
        category: 'Rings',
        material: 'Gold',
        image: 'https://jelwo.myshopify.com/cdn/shop/files/jewelry-product-26.jpg?v=1742444221&width=352',
        discount: '68%',
        availability: 'Out of Stock',
        date: '2024-01-04'
    },
    {
        id: 'col-5',
        name: 'Luxary Diamond Pendant',
        price: 85.00,
        originalPrice: 120.00,
        category: 'Necklace',
        material: 'Diamond',
        image: 'https://jelwo.myshopify.com/cdn/shop/files/jewelry-product-5.jpg?v=1742442751&width=300',
        discount: '29%',
        availability: 'In Stock',
        date: '2024-01-05'
    },
    {
        id: 'col-6',
        name: 'Floral Gold Bangle',
        price: 45.00,
        originalPrice: 60.00,
        category: 'Bracelets',
        material: 'Gold',
        image: 'https://jelwo.myshopify.com/cdn/shop/files/jewelry-pro-21.jpg?v=1741607520&width=300',
        discount: '25%',
        availability: 'In Stock',
        date: '2024-01-06'
    },
    {
        id: 'col-7',
        name: 'Pearl Drop Earrings',
        price: 12.00,
        originalPrice: 24.00,
        category: 'Earrings',
        material: 'Platinum',
        image: 'https://jelwo.myshopify.com/cdn/shop/files/jewelry-pro-56.jpg?v=1741670785&width=300',
        discount: '50%',
        availability: 'In Stock',
        date: '2024-01-07'
    },
    {
        id: 'col-8',
        name: 'Emerald Cut Ring',
        price: 15.00,
        originalPrice: 30.00,
        category: 'Rings',
        material: 'Diamond',
        image: 'https://jelwo.myshopify.com/cdn/shop/files/jewelry-product-1.jpg?v=1742442751&width=300',
        discount: '50%',
        availability: 'In Stock',
        date: '2024-01-08'
    },
    {
        id: 'col-9',
        name: 'Gold Chain Necklace',
        price: 35.00,
        originalPrice: 50.00,
        category: 'Necklace',
        material: 'Gold',
        image: 'https://jelwo.myshopify.com/cdn/shop/files/jewelry-product-2.jpg?v=1742442751&width=300',
        discount: '30%',
        availability: 'Out of Stock',
        date: '2024-01-09'
    },
    {
        id: 'col-10',
        name: 'Elegant Pearl Bracelet',
        price: 28.00,
        originalPrice: 40.00,
        category: 'Bracelets',
        material: 'Platinum',
        image: 'https://jelwo.myshopify.com/cdn/shop/files/jewelry-product-3.jpg?v=1742442751&width=300',
        discount: '30%',
        availability: 'In Stock',
        date: '2024-01-10'
    },
    {
        id: 'col-11',
        name: 'Sapphire Studs',
        price: 20.00,
        originalPrice: 35.00,
        category: 'Earrings',
        material: 'Gold',
        image: 'https://jelwo.myshopify.com/cdn/shop/files/jewelry-product-4.jpg?v=1742442751&width=300',
        discount: '42%',
        availability: 'In Stock',
        date: '2024-01-11'
    },
    {
        id: 'col-12',
        name: 'Classic Wedding Band',
        price: 10.00,
        originalPrice: 15.00,
        category: 'Rings',
        material: 'Platinum',
        image: 'https://jelwo.myshopify.com/cdn/shop/files/jewelry-product-6.jpg?v=1742442751&width=300',
        discount: '33%',
        availability: 'Out of Stock',
        date: '2024-01-12'
    }
];

function renderProductCards(productsToRender) {
    const grid = document.getElementById('collection-grid');
    if (!grid) return;

    grid.innerHTML = productsToRender.map(product => `
        <div class="group relative border border-gray-100 bg-white text-center transition-all hover:shadow-lg h-auto flex flex-col">
            <div class="relative aspect-square overflow-hidden bg-[#f9f9f9] p-8">
                ${product.discount ? `<span class="absolute left-2 top-2 z-20 bg-[#48bb78] px-2 py-1 text-[10px] md:text-xs text-white">${product.discount}</span>` : ''}
                ${product.availability === 'Out of Stock' ? `<span class="absolute right-2 top-2 z-20 bg-gray-500 px-2 py-1 text-[10px] md:text-xs text-white uppercase font-bold">Sold Out</span>` : ''}
                <img src="${product.image}" alt="${product.name}" class="mx-auto h-full w-full object-contain transition-transform duration-500 group-hover:scale-105 ${product.availability === 'Out of Stock' ? 'grayscale opacity-60' : ''}">
                
                <div class="absolute inset-0 z-10 flex items-center justify-center gap-3 bg-[#bb9d89] opacity-0 transition-opacity duration-300 group-hover:opacity-90">
                    <button onclick="addToWishlist({id: '${product.id}', name: '${product.name}', price: 'Rs. ${product.price.toFixed(2)}', image: '${product.image}'})" class="flex h-10 w-10 items-center justify-center rounded-full border border-white text-white hover:bg-white hover:text-[#bb9d89] transition-colors">
                        <i class="ri-heart-line text-lg"></i>
                    </button>
                    <button class="flex h-10 w-10 items-center justify-center rounded-full border border-white text-white hover:bg-white hover:text-[#bb9d89] transition-colors">
                        <i class="ri-eye-line text-lg"></i>
                    </button>
                </div>
            </div>
            
            <div class="p-4 h-32 relative overflow-hidden flex flex-col justify-center">
                <!-- Default State -->
                <div class="transition-all duration-500 group-hover:-translate-y-full group-hover:opacity-0 text-center">
                    <p class="text-[10px] uppercase tracking-widest text-gray-400 font-semibold">${product.category}</p>
                    <h3 class="font-bold text-gray-800 mt-1">${product.name}</h3>
                    <p class="mt-2 text-[#b58e58] font-bold">
                        Rs. ${product.price.toFixed(2)} 
                        ${product.originalPrice ? `<span class="text-gray-400 line-through font-normal ml-1 text-xs">Rs. ${product.originalPrice.toFixed(2)}</span>` : ''}
                    </p>
                </div>

                <!-- Hover State -->
                <div class="absolute inset-0 flex flex-col items-center justify-center gap-3 translate-y-full opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 px-4">
                    ${product.availability === 'Out of Stock' ? `
                        <div class="text-sm font-bold text-gray-500 uppercase tracking-widest">
                            Currently Unavailable
                        </div>
                    ` : `
                        <div class="flex gap-2">
                            <select class="border border-gray-200 text-[10px] p-1 outline-none text-gray-500 bg-white">
                                <option>${product.material}</option>
                                <option>Silver</option>
                            </select>
                            <div class="flex border border-gray-200 items-center text-[10px]">
                                <button class="px-2 py-1 text-gray-400 hover:text-black">-</button>
                                <span class="px-2 py-1 border-x border-gray-100 font-bold">1</span>
                                <button class="px-2 py-1 text-gray-400 hover:text-black">+</button>
                            </div>
                        </div>
                        <button onclick="addToCart({id: '${product.id}', name: '${product.name}', price: 'Rs. ${product.price.toFixed(2)}', image: '${product.image}'})" 
                            class="border-b-2 border-[#bb9d89] text-[#bb9d89] font-bold text-[10px] md:text-xs uppercase tracking-[0.2em] pb-1 hover:text-black hover:border-black transition-all">
                            Add to Cart
                        </button>
                    `}
                </div>
            </div>
        </div>
    `).join('');

    // Update Counts
    const countMobile = document.getElementById('product-count-mobile');
    const totalResults = document.getElementById('total-results');
    const currentRange = document.getElementById('current-range');

    if (countMobile) countMobile.textContent = `${productsToRender.length} Products`;
    if (totalResults) totalResults.textContent = productsToRender.length;
    if (currentRange) currentRange.textContent = productsToRender.length > 0 ? `1-${productsToRender.length}` : '0';
}

function handleFilters() {
    const checkboxes = document.querySelectorAll('.filter-checkbox');
    const sortBy = document.getElementById('sort-by');

    function filterAndSort() {
        let filtered = [...products];

        // 1. Filter by Category / Material etc.
        const activeCategories = Array.from(document.querySelectorAll('input[value="Rings"], input[value="Earrings"], input[value="Necklace"], input[value="Bracelets"]'))
            .filter(i => i.checked).map(i => i.value);

        const activeMaterials = Array.from(document.querySelectorAll('input[value="Gold"], input[value="Diamond"], input[value="Platinum"]'))
            .filter(i => i.checked).map(i => i.value);

        if (activeCategories.length > 0) {
            filtered = filtered.filter(p => activeCategories.includes(p.category));
        }

        if (activeMaterials.length > 0) {
            filtered = filtered.filter(p => activeMaterials.includes(p.material));
        }

        const activeAvailability = Array.from(document.querySelectorAll('input[value="In Stock"], input[value="Out of Stock"]'))
            .filter(i => i.checked).map(i => i.value);

        if (activeAvailability.length > 0) {
            filtered = filtered.filter(p => activeAvailability.includes(p.availability));
        }

        // 2. Filter by Price
        const minPriceInput = document.querySelector('input[placeholder="From"]');
        const maxPriceInput = document.querySelector('input[placeholder="To"]');
        const minPrice = parseFloat(minPriceInput.value) || 0;
        const maxPrice = parseFloat(maxPriceInput.value) || Infinity;

        filtered = filtered.filter(p => p.price >= minPrice && p.price <= maxPrice);

        // 3. Sort
        const sortValue = sortBy.value;
        if (sortValue === 'price-low') {
            filtered.sort((a, b) => a.price - b.price);
        } else if (sortValue === 'price-high') {
            filtered.sort((a, b) => b.price - a.price);
        } else if (sortValue === 'newest') {
            filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
        }

        renderProductCards(filtered);
    }

    checkboxes.forEach(cb => cb.addEventListener('change', filterAndSort));
    if (sortBy) sortBy.addEventListener('change', filterAndSort);

    // Price inputs
    const priceInputs = document.querySelectorAll('input[placeholder="From"], input[placeholder="To"]');
    priceInputs.forEach(input => input.addEventListener('input', filterAndSort));

    // Mobile Filter Toggle
    const mobileTrigger = document.getElementById('mobile-filter-trigger');
    const sidebar = document.getElementById('filter-sidebar');
    if (mobileTrigger && sidebar) {
        mobileTrigger.addEventListener('click', () => {
            sidebar.classList.toggle('hidden');
            sidebar.classList.toggle('block');
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    renderProductCards(products);
    handleFilters();
});

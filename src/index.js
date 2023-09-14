// DEFINE CARDS HERE
var cards = [
    {path: 'austia', category: 'ux-design', title: 'Photography school, Austria', subtitle: 'Landing page'},
    {path: 'estheme-landing', category: 'ux-design', title: 'Estheme cachemire Paris', subtitle: 'Landing page'},
    {path: 'estheme', category: 'ux-design', title: 'Estheme cachemire Paris', subtitle: 'E-commerce fashion'},
    {path: 'gradual', category: 'ux-design', title: 'Gradual', subtitle: 'AI Powered Sales Role Play Platform'},
    {path: 'vcashno', category: 'ux-design', title: 'Vcashno', subtitle: 'Cloud Document Management System'},
    {path: 'astronautFindingLove', category: 'art', title: '', subtitle: ''},
    {path: 'colorGuy', category: 'art', title: '', subtitle: ''},
    {path: 'flamingo', category: 'art', title: '', subtitle: ''},
    {path: 'horse', category: 'art', title: '', subtitle: ''},
    {path: 'jupyterEmbodied', category: 'art', title: '', subtitle: ''},
    {path: 'zebras', category: 'art', title: '', subtitle: ''},
    {path: 'ufo', category: 'art', title: '', subtitle: ''},
    {path: 'soul', category: 'art', title: '', subtitle: ''},
    {path: 'rose', category: 'art', title: '', subtitle: ''},
    {path: 'redSunset', category: 'art', title: '', subtitle: ''},
    {path: 'racoon', category: 'art', title: '', subtitle: ''},
    {path: 'kissception', category: 'art', title: '', subtitle: ''},
    {path: 'abstractBlack', category: 'art', title: '', subtitle: ''},
    {path: 'abstractPlants', category: 'art', title: '', subtitle: ''},
];

// Get the container where you want to insert the cards
const container = document.getElementById('portfolio-grid-container'); // Change 'card-container' to the actual ID of your container

// Iterate through the 'cards' array and create card elements
for (let i = 0; i < cards.length; i++) {
    const card = cards[i];
    
    // Create a new card element
    const cardElement = document.createElement('div');
    cardElement.classList.add('portfolio-item', card.category);
    
    // Create the card's HTML structure using a template string
    cardElement.innerHTML = `
        <div class="">
            <img src="assets\\portfolio-items\\${card.category}\\${card.path}.jpg" class="card-img-top" alt="Portfolio Item ${i + 1}">
            <div class="card-body">
                <h5 class="card-title">${card.title}</h5>
                <h6 class="card-title">${card.subtitle}</p>
            </div>
        </div>
    `;

    // Append the card element to the container
    container.appendChild(cardElement);

    cardElement.addEventListener('click', () => {
        // add href for ux-design and graphic-design
        if (card.category === 'ux-design' || card.category === 'graphic-design') {
            window.location = 'html\\case-studies\\' + card.category + '\\' + card.path + '.html';
        }
        // add click to zoom on photo art
        console.log(card.path);
        console.log(card.category);
        console.log(card.title);
        console.log(card.subtitle);
        console.log(card);
        console.log(cardElement);
    });
}

// Initialize Masonry
var masonry;
imagesLoaded(container, function () {
    masonry = new Masonry('.portfolio-grid', {
        itemSelector: '.portfolio-item',
        // columnWidth: '.grid-sizer',
        columnWidth: '.portfolio-item:not(.hidden)',
        gutter: 20, // Adjust gutter size as needed
    })
    masonry.layout();
});

// Get all filter buttons
const filterButtons = document.querySelectorAll('.portfolio-filter-button');

// Get all portfolio items
const portfolioItems = document.querySelectorAll('.portfolio-item');

// Add click event listeners to filter buttons
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove the 'active' class from all filter buttons
        filterButtons.forEach(btn => {
            btn.classList.remove('active');
        });

        // Add the 'active' class to the clicked button
        button.classList.add('active')
        
        // Get the value of the data-filter attribute of the clicked button
        const filter = button.getAttribute('data-filter');

        // Show items matching the selected class with animation
        portfolioItems.forEach(item => {
            if (filter === 'all' || item.classList.contains(filter)) {
                item.classList.remove('hidden');
            } else {
                item.classList.add('hidden');
            }
        });

        masonry.layout();
    });
});

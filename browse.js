// JavaScript for browsingpage.html

const materials = [
    {
        id: 1, title: "Material 1", description: "Description for Material 1",
        preview: "Preview content for Material 1 Preview content for Material 1 Preview content for Material 1 Preview content for Material 1 Preview content for Material 1 Preview content for Material 1 Preview content for Material 1 Preview content for Material 1 Preview content for Material 1 Preview content for Material 1 Preview content for Material 1 Preview content for Material 1 Preview content for Material 1 Preview content for Material 1 Preview content for Material 1 Preview content for Material 1 Preview content for Material 1 Preview content for Material 1 Preview content for Material 1 Preview content for Material 1 Preview content for Material 1 Preview content for Material 1 Preview content for Material 1 Preview content for Material 1 Preview content for Material 1 Preview content for Material 1 Preview content for Material 1",
        price: "$10", image: "https://cdn.corporatefinanceinstitute.com/assets/economics.jpeg", department: "Economics", year: "Year 1"
    },
    {
        id: 2, title: "Material 2", description: "Description for Material 2 Description for Material 2 Description for Material 2 Description for Material 2",
        preview: "Preview content for Material 2 Preview content for Material 2 Preview content for Material 2 Preview content for Material 2 Preview content for Material 2 Preview content for Material 2 Preview content for Material 2 Preview content for Material 2 Preview content for Material 2 Preview content for Material 2 Preview content for Material 2 Preview content for Material 2 Preview content for Material 2 Preview content for Material 2 Preview content for Material 2 Preview content for Material 2 Preview content for Material 2 Preview content for Material 2 Preview content for Material 2 Preview content for Material 2 Preview content for Material 2 Preview content for Material 2 Preview content for Material 2 Preview content for Material 2 Preview content for Material 2 Preview content for Material 2 Preview content for Material 2",
        price: "$15", image: "https://cdn.corporatefinanceinstitute.com/assets/economics.jpeg", department: "Marketing", year: "Year 2"
    },
    {
        id: 3, title: "Material 3", description: "Description for Material 3",
        preview: "Preview content for Material 3 Preview content for Material 3 Preview content for Material 3 Preview content for Material 3 Preview content for Material 3 Preview content for Material 3 Preview content for Material 3 Preview content for Material 3 Preview content for Material 3 Preview content for Material 3 Preview content for Material 3 Preview content for Material 3 Preview content for Material 3 Preview content for Material 3 Preview content for Material 3 Preview content for Material 3 Preview content for Material 3 Preview content for Material 3 Preview content for Material 3 Preview content for Material 3 Preview content for Material 3 Preview content for Material 3 Preview content for Material 3 Preview content for Material 3 Preview content for Material 3 Preview content for Material 3 Preview content for Material 3",
        price: "$20", image: "https://cdn.corporatefinanceinstitute.com/assets/economics.jpeg", department: "Accounting", year: "Year 3"
    },
    {
        id: 4, title: "Material 1", description: "Description for Material 1",
        preview: "Preview content for Material 1 Preview content for Material 1 Preview content for Material 1 Preview content for Material 1 Preview content for Material 1 Preview content for Material 1 Preview content for Material 1 Preview content for Material 1 Preview content for Material 1 Preview content for Material 1 Preview content for Material 1 Preview content for Material 1 Preview content for Material 1 Preview content for Material 1 Preview content for Material 1 Preview content for Material 1 Preview content for Material 1 Preview content for Material 1 Preview content for Material 1 Preview content for Material 1 Preview content for Material 1 Preview content for Material 1 Preview content for Material 1 Preview content for Material 1 Preview content for Material 1 Preview content for Material 1 Preview content for Material 1",
        price: "$10", image: "https://cdn.corporatefinanceinstitute.com/assets/economics.jpeg", department: "Economics", year: "Year 1"
    },
    {
        id: 5, title: "Material 2", description: "Description for Material 2",
        preview: "Preview content for Material 2 Preview content for Material 2 Preview content for Material 2 Preview content for Material 2 Preview content for Material 2 Preview content for Material 2 Preview content for Material 2 Preview content for Material 2 Preview content for Material 2 Preview content for Material 2 Preview content for Material 2 Preview content for Material 2 Preview content for Material 2 Preview content for Material 2 Preview content for Material 2 Preview content for Material 2 Preview content for Material 2 Preview content for Material 2 Preview content for Material 2 Preview content for Material 2 Preview content for Material 2 Preview content for Material 2 Preview content for Material 2 Preview content for Material 2 Preview content for Material 2 Preview content for Material 2 Preview content for Material 2",
        price: "$15", image: "https://cdn.corporatefinanceinstitute.com/assets/economics.jpeg", department: "Marketing", year: "Year 2"
    },
    {
        id: 6, title: "Material 3", description: "Description for Material 3",
        preview: "Preview content for Material 3 Preview content for Material 3 Preview content for Material 3 Preview content for Material 3 Preview content for Material 3 Preview content for Material 3 Preview content for Material 3 Preview content for Material 3 Preview content for Material 3 Preview content for Material 3 Preview content for Material 3 Preview content for Material 3 Preview content for Material 3 Preview content for Material 3 Preview content for Material 3 Preview content for Material 3 Preview content for Material 3 Preview content for Material 3 Preview content for Material 3 Preview content for Material 3 Preview content for Material 3 Preview content for Material 3 Preview content for Material 3 Preview content for Material 3 Preview content for Material 3 Preview content for Material 3 Preview content for Material 3",
        price: "$20", image: "https://cdn.corporatefinanceinstitute.com/assets/economics.jpeg", department: "Accounting", year: "Year 3"
    },
    {
        id: 7, title: "Material 1", description: "Description for Material 1",
        preview: "Preview content for Material 1 Preview content for Material 1 Preview content for Material 1 Preview content for Material 1 Preview content for Material 1 Preview content for Material 1 Preview content for Material 1 Preview content for Material 1 Preview content for Material 1 Preview content for Material 1 Preview content for Material 1 Preview content for Material 1 Preview content for Material 1 Preview content for Material 1 Preview content for Material 1 Preview content for Material 1 Preview content for Material 1 Preview content for Material 1 Preview content for Material 1 Preview content for Material 1 Preview content for Material 1 Preview content for Material 1 Preview content for Material 1 Preview content for Material 1 Preview content for Material 1 Preview content for Material 1 Preview content for Material 1",
        price: "$10", image: "https://cdn.corporatefinanceinstitute.com/assets/economics.jpeg", department: "Economics", year: "Year 1"
    },
    {
        id: 8, title: "Material 2", description: "Description for Material 2",
        preview: "Preview content for Material 2 Preview content for Material 2 Preview content for Material 2 Preview content for Material 2 Preview content for Material 2 Preview content for Material 2 Preview content for Material 2 Preview content for Material 2 Preview content for Material 2 Preview content for Material 2 Preview content for Material 2 Preview content for Material 2 Preview content for Material 2 Preview content for Material 2 Preview content for Material 2 Preview content for Material 2 Preview content for Material 2 Preview content for Material 2 Preview content for Material 2 Preview content for Material 2 Preview content for Material 2 Preview content for Material 2 Preview content for Material 2 Preview content for Material 2 Preview content for Material 2 Preview content for Material 2 Preview content for Material 2",
        price: "$15", image: "https://cdn.corporatefinanceinstitute.com/assets/economics.jpeg", department: "Marketing", year: "Year 2"
    },
    {
        id: 9, title: "Material 3", description: "Description for Material 3",
        preview: "Preview content for Material 3 Preview content for Material 3 Preview content for Material 3 Preview content for Material 3 Preview content for Material 3 Preview content for Material 3 Preview content for Material 3 Preview content for Material 3 Preview content for Material 3 Preview content for Material 3 Preview content for Material 3 Preview content for Material 3 Preview content for Material 3 Preview content for Material 3 Preview content for Material 3 Preview content for Material 3 Preview content for Material 3 Preview content for Material 3 Preview content for Material 3 Preview content for Material 3 Preview content for Material 3 Preview content for Material 3 Preview content for Material 3 Preview content for Material 3 Preview content for Material 3 Preview content for Material 3 Preview content for Material 3",
        price: "$20", image: "https://cdn.corporatefinanceinstitute.com/assets/economics.jpeg", department: "Accounting", year: "Year 3"
    },
    {
        id: 10, title: "Material 1", description: "Description for Material 1",
        preview: "Preview content for Material 1 Preview content for Material 1 Preview content for Material 1 Preview content for Material 1 Preview content for Material 1 Preview content for Material 1 Preview content for Material 1 Preview content for Material 1 Preview content for Material 1 Preview content for Material 1 Preview content for Material 1 Preview content for Material 1 Preview content for Material 1 Preview content for Material 1 Preview content for Material 1 Preview content for Material 1 Preview content for Material 1 Preview content for Material 1 Preview content for Material 1 Preview content for Material 1 Preview content for Material 1 Preview content for Material 1 Preview content for Material 1 Preview content for Material 1 Preview content for Material 1 Preview content for Material 1 Preview content for Material 1",
        price: "$10", image: "https://cdn.corporatefinanceinstitute.com/assets/economics.jpeg", department: "Economics", year: "Year 1"
    },
    {
        id: 11, title: "Material 2", description: "Description for Material 2",
        preview: "Preview content for Material 2 Preview content for Material 2 Preview content for Material 2 Preview content for Material 2 Preview content for Material 2 Preview content for Material 2 Preview content for Material 2 Preview content for Material 2 Preview content for Material 2 Preview content for Material 2 Preview content for Material 2 Preview content for Material 2 Preview content for Material 2 Preview content for Material 2 Preview content for Material 2 Preview content for Material 2 Preview content for Material 2 Preview content for Material 2 Preview content for Material 2 Preview content for Material 2 Preview content for Material 2 Preview content for Material 2 Preview content for Material 2 Preview content for Material 2 Preview content for Material 2 Preview content for Material 2 Preview content for Material 2",
        price: "$15", image: "https://cdn.corporatefinanceinstitute.com/assets/economics.jpeg", department: "Marketing", year: "Year 2"
    },
    {
        id: 12, title: "Material 3", description: "Description for Material 3",
        preview: "Preview content for Material 3 Preview content for Material 3 Preview content for Material 3 Preview content for Material 3 Preview content for Material 3 Preview content for Material 3 Preview content for Material 3 Preview content for Material 3 Preview content for Material 3 Preview content for Material 3 Preview content for Material 3 Preview content for Material 3 Preview content for Material 3 Preview content for Material 3 Preview content for Material 3 Preview content for Material 3 Preview content for Material 3 Preview content for Material 3 Preview content for Material 3 Preview content for Material 3 Preview content for Material 3 Preview content for Material 3 Preview content for Material 3 Preview content for Material 3 Preview content for Material 3 Preview content for Material 3 Preview content for Material 3",
        price: "$20", image: "https://cdn.corporatefinanceinstitute.com/assets/economics.jpeg", department: "Accounting", year: "Year 3"
    },
];

function filterMaterials() {
    const department = document.getElementById('department').value;
    const year = document.getElementById('year').value;
    const courseSearch = document.getElementById('course-search').value.toLowerCase();

    const filteredMaterials = materials.filter(material => {
        return (
            (!department || material.department.toLowerCase() === department.toLowerCase()) &&
            (!year || material.year.toLowerCase() === year.toLowerCase()) &&
            (!courseSearch || material.title.toLowerCase().includes(courseSearch))
        );
    });

    const materialsContainer = document.getElementById('materials-container');
    materialsContainer.innerHTML = '';

    if (filteredMaterials.length === 0) {
        materialsContainer.innerHTML = '<p>No materials found matching the criteria.</p>';
        return;
    }

    filteredMaterials.forEach(material => {
        const materialItem = document.createElement('div');
        materialItem.className = 'material-item';
        materialItem.innerHTML = `
            <img src="${material.image}" alt="${material.title}" class="material-image" />
            <h4>${material.title}</h4>
            <p>${material.description}</p>
            <p>Price: ${material.price}</p>
        `;
        materialItem.addEventListener('click', () => {
            openMaterialViewer(material);
        });
        materialsContainer.appendChild(materialItem);
    });
}

// Attach event listeners to department and year dropdowns to trigger filtering dynamically
document.getElementById('department').addEventListener('change', filterMaterials);
document.getElementById('year').addEventListener('change', filterMaterials);

// Ensure the search button triggers the filterMaterials function
document.querySelector('button[onclick="filterMaterials()"]')?.addEventListener('click', filterMaterials);

function openMaterialViewer(material) {
    const materialViewer = document.getElementById('materialViewer');
    const materialTitle = document.getElementById('materialTitle');
    const materialDescription = document.getElementById('materialDescription');
    const materialPreview = document.getElementById('materialPreview');

    materialTitle.textContent = material.title;
    materialDescription.textContent = material.description;

    const previewContent = material.preview;
    const visiblePart = previewContent.substring(0, 150);
    const blurredPart = previewContent.substring(150);

    materialPreview.innerHTML = `<p>${visiblePart}</p><p class='blurred' style='filter: blur(5px);'>${blurredPart}</p>`;

    // Ensure font size controls are not duplicated
    let fontSizeControls = document.querySelector('.font-size-controls');
    if (!fontSizeControls) {
        fontSizeControls = document.createElement('div');
        fontSizeControls.className = 'font-size-controls';
        fontSizeControls.innerHTML = `
            <button onclick="changeFontSize('increase')">A+</button>
            <button onclick="changeFontSize('decrease')">A-</button>
        `;
        materialViewer.prepend(fontSizeControls);
    }

    materialViewer.classList.add('visible'); // Show the modal by adding a visible class
}

function changeFontSize(action) {
    const materialContent = document.getElementById('materialContent');
    const currentFontSize = parseFloat(window.getComputedStyle(materialContent).fontSize);
    if (action === 'increase') {
        materialContent.style.fontSize = `${currentFontSize + 2}px`;
    } else if (action === 'decrease') {
        materialContent.style.fontSize = `${currentFontSize - 2}px`;
    }
}

document.getElementById('closeViewer').addEventListener('click', () => {
    const materialViewer = document.getElementById('materialViewer');
    materialViewer.classList.remove('visible'); // Hide the modal by removing the visible class
});

document.getElementById('payButton').addEventListener('click', () => {
    window.location.href = 'payment.html';
});

// Call filterMaterials on page load to display all materials by default
window.onload = filterMaterials;

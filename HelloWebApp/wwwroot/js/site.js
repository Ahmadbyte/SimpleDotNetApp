async function performSearch() {
    const query = document.getElementById('searchQuery').value;
    const resultsDiv = document.getElementById('searchResults');
    resultsDiv.innerHTML = 'Loading...';

    try {
        const response = await fetch(`/api/search?query=${encodeURIComponent(query)}`);
        const data = await response.json();
        
        // Display results
        resultsDiv.innerHTML = '';
        if (data.organic_results) {
            data.organic_results.forEach(result => {
                const item = document.createElement('div');
                item.innerHTML = `<a href="${result.link}" target="_blank">${result.title}</a>`;
                resultsDiv.appendChild(item);
            });
        } else {
            resultsDiv.innerHTML = 'No results found.';
        }
    } catch (error) {
        console.error('Error fetching search results:', error);
        resultsDiv.innerHTML = 'Error fetching results.';
    }
}

// Update current time every second
function updateTime() {
    const currentTimeDiv = document.getElementById('currentTime');
    const now = new Date();
    currentTimeDiv.innerHTML = now.toLocaleTimeString();
}

// Add a todo item
function addTodo() {
    const input = document.getElementById('todoInput');
    const task = input.value.trim();
    if (task) {
        const list = document.getElementById('todoList');
        const listItem = document.createElement('li');
        listItem.textContent = task;
        list.appendChild(listItem);
        input.value = ''; // Clear input
    }
}

// Initialize
setInterval(updateTime, 1000);

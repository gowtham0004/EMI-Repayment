document.addEventListener('DOMContentLoaded', function() {
    const showAgentsButton = document.getElementById('showAgents');
    const showCustomersButton = document.getElementById('showCustomers');
    const detailsDiv = document.getElementById('details');

    showAgentsButton.addEventListener('click', function() {
        detailsDiv.innerHTML = `
            <h2>Agents</h2>
            <input type="text" id="searchAgent" placeholder="Search agent by name">
            <button id="searchButton">Search</button>
            <div id="agentDetails">
                <h3>Agent Recovery</h3>
                <p>Amount Recovered: $X</p>
                <p>Documents Submitted: Y</p>
                <h3>Agent Performance</h3>
                <p>Top Performers: List</p>
            </div>
        `;
        // Add search functionality here if needed
    });

    showCustomersButton.addEventListener('click', function() {
        detailsDiv.innerHTML = `
            <h2>Customers</h2>
            <div id="customerDetails">
                <h3>New Customer Applications</h3>
                <p>List of new applications</p>
                <h3>Loan Paid Customers</h3>
                <p>List of customers who have paid their loans</p>
            </div>
        `;
    });
});
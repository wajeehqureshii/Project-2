// Used on the résumé to make the employment history interactive (each job is clickable)
document.addEventListener('DOMContentLoaded', function () {
    // Placeholder array with employment history data
    const employmentHistory = [
        { id: 1, title: 'Accountant', company: 'Archon Inc', years: '2023 - Present', description: 'File Reconcillation between Warehouse and Office Databases' },
        { id: 2, title: 'Intern', company: 'Hillcrestech', years: '2024', description: '50 hours of hands on training with AWS along with several AWS projects' },
        { id: 3, title: 'Property Insepctor', company: 'Mueller Reports', years: '2023', description: 'Professional Property Inspections in NJ' }
		//{ id: 4, title: 'Systems Engineer', company: 'Palo Alto Networks', years: '2018 - 2020', description: 'Description of what you did' }
        // Add more entries as needed
    ];

    const timeline = document.getElementById('timeline');

    // Create timeline entries
    employmentHistory.forEach(job => {
        // Entry container for job
        const entry = document.createElement('div');
        entry.className = 'entry';
        entry.id = 'entry-' + job.id;

        // Title header for job
        const header = document.createElement('div');
        header.className = 'entry-header';
        header.innerText = job.title;

        // Content container for job, initially hidden
        const content = document.createElement('div');
        content.className = 'entry-content';
        content.innerHTML = `<strong>Company:</strong> ${job.company}<br>
                             <strong>Years:</strong> ${job.years}<br>
                             <p>${job.description}</p>`;
        content.style.display = 'none';

        // Append header and content to the entry
        entry.appendChild(header);
        entry.appendChild(content);

        // Event listener to toggle content visibility
        header.addEventListener('click', function () {
            // Check if the clicked header's content is currently shown
            const isContentShown = content.style.display === 'block';
            // Hide all open contents
            document.querySelectorAll('.entry-content').forEach(el => {
                el.style.display = 'none'; // Hide content
            });
            // Deactivate all headers
            document.querySelectorAll('.entry').forEach(el => {
                el.classList.remove('active'); // Remove active class
            });

            if (!isContentShown) {
                // If it was not shown before, display it
                content.style.display = 'block';
                entry.classList.add('active');
            } // If it was shown, it will be hidden as part of the above loop
        });

        timeline.appendChild(entry);
    });
});

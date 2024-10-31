// Optionally, you can add functionality to change the active dot
const dots = document.querySelectorAll('.dot');
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        dots.forEach(d => d.classList.remove('active'));
        dot.classList.add('active');
        // You can add additional logic here to change the displayed content if needed
    });
});

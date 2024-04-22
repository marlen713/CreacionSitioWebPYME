document.querySelector('.nav-item-contact').addEventListener('mouseover', function() {
    document.querySelector('.dropdown').style.display = 'block';
});

document.querySelector('.nav-item-contact').addEventListener('mouseout', function() {
    document.querySelector('.dropdown').style.display = 'none';
});
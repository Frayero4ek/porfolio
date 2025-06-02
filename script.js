 
  document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('light-mode-toggle').addEventListener('click', function() {
      document.body.classList.remove('dark-mode');
      document.body.classList.add('light-mode');
    });

    document.getElementById('dark-mode-toggle').addEventListener('click', function() {
      document.body.classList.remove('light-mode');
      document.body.classList.add('dark-mode');
    });
  });
 

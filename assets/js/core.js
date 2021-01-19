
function openSidebar() {
    var sidebar = document.getElementById('sidebar');
  sidebar.classList.add('fixed', 'top-0', 'right-0', 'left-0','bottom-0', 'z-10');
  sidebar.classList.remove('hidden');
}

function closeSidebar() {
    var sidebar = document.getElementById('sidebar');
    sidebar.classList.remove('fixed', 'top-0', 'right-0', 'left-0','bottom-0', 'z-10');
    sidebar.classList.add('hidden');
}

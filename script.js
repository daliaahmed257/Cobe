document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, {edge:'right'});

    var collapsibleElems = document.querySelectorAll('.collapsible');
    var collapsibleInstances = M.Collapsible.init(collapsibleElems, {});
});

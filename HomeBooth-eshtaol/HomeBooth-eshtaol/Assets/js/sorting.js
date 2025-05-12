//sort elements with alphabet
function sortList() {
    var list, i, switching, b, shouldSwitch;
    list = document.getElementById("id01");
    switching = true;
    /* Make a loop that will continue until
    no switching has been done: */
    while (switching) {
      // start by saying: no switching is done:
      switching = false;
      //iiiiiiiiiiiidddddddddddd ezigar
      b = list.getElementsByTagName("");
      // Loop through all list-items:
      for (i = 0; i < (b.length - 1); i++) {
        // start by saying there should be no switching:
        shouldSwitch = false;
        /* check if the next item should
        switch place with the current item: */
        if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {
          /* if next item is alphabetically
          lower than current item, mark as a switch
          and break the loop: */
          shouldSwitch = true;
          break;
        }
      }
      if (shouldSwitch) {
        /* If a switch has been marked, make the switch
        and mark the switch as done: */
        b[i].parentNode.insertBefore(b[i + 1], b[i]);
        switching = true;
      }
    }
  }
  // sorting by date
  var sortOrder = "desc";
  function sortByDate() {
                  var dateArray = [];
                   var dateMap = {};
                   var dateElements = jQuery(".date_elements_class");
                      jQuery(dateElements).each(function() {

                          dateMap[$(this).text().replace(/^\s+|\s+$/g, '')] = $(this).parent();
                          dateArray.push($(this).text().replace(/^\s+|\s+$/g, ''));
                      });
                      dateArray.sort();
                      dateArray.sort(function(a, b) {
                              a = new Date(a);
                              b = new Date(b);
                              return a>b;
                          });
                      if(sortOrder === "desc") {
                          sortOrder = "asc";
                      } else {
                          dateArray.reverse();
                          sortOrder = "desc";

                      }


                      jQuery(jQuery("").find("")[0]).html("");

                      for (var i = 0; i < dateArray.length; i++) {
                          jQuery(jQuery("table.tbl-general").find(".list-holder")[0]).append(dateMap[dateArray[i]]);
                      }
                    }
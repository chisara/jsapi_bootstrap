////////////////////////////////////////////////////////////////////////////////
// Global Variables

var viz, workbook, activeSheet;
//var url = "http://10.32.150.148/views/WorldIndicators/GDPperCapitaDashboard";
var url ="http://public.tableau.com/views/taleof100_0/Dashboardat570";

////////////////////////////////////////////////////////////////////////////////
// 1 - Create a View
function renderViz() {

    // Define variables for viz
    var mainVizDiv = $("#tableauViz");
  //  var mainWorkbookUrl = "https://" + serverName + "/t/SkunkWorks/views/JavaScriptTarget/Dashboard";
    var mainVizOptions = {
        hideTabs: false,
        hideToolbar: false,
        //toolbarPositon: top  (or "bottom")
        //width: mainVizDiv.parent().innerWidth() + "px",
        //height: mainVizDiv.parent().innerHeight() + "px",
        width: 500,
        height: 500,
        onFirstInteractive: function () {
            mainWorkbook = mainViz.getWorkbook();
        }
    };
    //  Create viz
    mainViz = new tableauSoftware.Viz(mainVizDiv[0], url, mainVizOptions);
}

function renderVizMoreOptions() {

    // Define variables for viz
    var mainVizDiv = $("#tableauViz");
   // var mainWorkbookUrl = "https://" + serverName + "/t/SkunkWorks/views/JavaScriptTarget/Dashboard";
    var mainVizOptions = {
        hideTabs: false,
        hideToolbar: false,
        width: mainVizDiv.parent().innerWidth() + "px",
        height: mainVizDiv.parent().innerHeight() + "px",
        //Filter Category field - note NO spaces between multiple filter values. Just a comma
        Category: "Office Supplies,Furniture",
        //Set Top Customers Parameter Value - note wrapping quotes around parameter name since it contains spaces
        "Top Customers": 22,
        onFirstInteractive: function () {
            mainWorkbook = mainViz.getWorkbook();
        }
    };
    //  Create viz
    mainViz = new tableauSoftware.Viz(mainVizDiv[0], url, mainVizOptions);
}


function dispose() {

    if (mainViz === null) {
        alertOrConsole("No Viz has been rendered, so I can't dispose anything");
        return;
    } else {
        mainViz.dispose();
    }
}

function mySource(aFunction) {
    var src = aFunction.toString();
    //var optionsTxt = options.valueOf();
    //var rep = src.replace(optionsVar,optionsTxt);
    //alert(src);
    document.getElementById("source").innerText = src;
    prettyPrint();
}
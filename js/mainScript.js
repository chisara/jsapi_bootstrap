////////////////////////////////////////////////////////////////////////////////
// Global Variables

var viz, workbook, activeSheet;
var url ="http://public.tableau.com/views/taleof100_0/Dashboardat570";
var alert = false;


////////////////////////////////////////////////////////////////////////////////
// renderViz
// Creates the viz with the following options:
// width: 850px, height: 860px
// renders it into the <div> tableauViz in demo.html
////////////////////////////////////////////////////////////////////////////////
function renderViz() {

    // Define variables for viz
    var mainVizDiv = $("#tableauViz");
    var mainVizOptions = {
        hideTabs: true,
        hideToolbar: true,
        //toolbarPositon: top, //  (or "bottom")
        width: 850,
        height: 860,
        onFirstInteractive: function () {
            mainWorkbook = mainViz.getWorkbook();
        }
    };
    //  Create viz
    mainViz = new tableauSoftware.Viz(mainVizDiv[0], url, mainVizOptions);
}

////////////////////////////////////////////////////////////////////////////////
// renderVizMoreOptions
// Creates the viz with the following options:
// tabs, toolbar, width: 850px, height: 860px
// renders it into the <div> tableauViz in demo.html
// Filters on Office Suplies, Furniture Category
// and sets Top Customer Parameter Value
////////////////////////////////////////////////////////////////////////////////
function renderVizMoreOptions() {

    // Define variables for viz
    var mainVizDiv = $("#tableauViz");
    var mainVizOptions = {
        hideTabs: false,
        hideToolbar: false,
        //toolbarPositon: top, //  (or "bottom")        
        width: 850,
        height: 860,
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

////////////////////////////////////////////////////////////////////////////////
// dispose
// if a viz is rendered, delete it
////////////////////////////////////////////////////////////////////////////////
function dispose() {

    if (mainViz === null) {
        alertOrConsole("No Viz has been rendered, so I can't dispose anything");
        return;
    } else {
        mainViz.dispose();
    }
}

////////////////////////////////////////////////////////////////////////////////
// hideViz
// if a viz is rendered, delete it
////////////////////////////////////////////////////////////////////////////////
function hideViz(){
	if (mainViz === null){
		alertOrConsole('Viz must be rendered before it can be hidden');
	} else {
		mainViz.hide();
	}
}

// TODO: add getIsVizHidden, showToolbar, hideToolbar, isToolbarHidden, showTabs, hideTabs, areTabsHidden

////////////////////////////////////////////////////////////////////////////////
// download
// if a viz is rendered, delete it
////////////////////////////////////////////////////////////////////////////////
function download(){
	if (mainViz === null){
		alertOrConsole('Viz must be rendered before it can be downloaded');
	} else {
		mainViz.showDownloadWorkbookDialog();
	}
}

////////////////////////////////////////////////////////////////////////////////
// exportCrosstab
// if a viz is rendered, delete it
////////////////////////////////////////////////////////////////////////////////
function exportCrosstab(sheetName){
	if (mainViz === null){
		alertOrConsole('Viz must be rendered before it can be downloaded as a Crosstab');
	} else {
		mainViz.showExportCrossTabDialog();
	}
}

////////////////////////////////////////////////////////////////////////////////
// exportData
// if a viz is rendered, delete it
////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
// hideViz
// if a viz is rendered, delete it
////////////////////////////////////////////////////////////////////////////////

// writes out messages for the alerts or console depending on the users's preference
function alertOrConsole(msg){
	if(alert){
		// output as an alert box
		alert(msg.toString());
	} else {
		//output as a console message
		console.log(msg.toString());
	}
}

// TODO: should this go into menu.js? maybe!
//function outputHint(document.getElementById()){
//	var hintTxt = document.getElementById('hint');
//	hintTxt.textContent = describe.toString();
//}

////////////////////////////////////////////////////////////////////////////////
// Noah
// 
////////////////////////////////////////////////////////////////////////////////
function mySource(aFunction) {
    var src = aFunction.toString();
    //var optionsTxt = options.valueOf();
    //var rep = src.replace(optionsVar,optionsTxt);
    //alert(src);
    document.getElementById("source").innerText = src;
    prettyPrint();
}
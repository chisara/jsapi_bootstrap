
//////////////////////////////////////////////////////////////////////////////
// Data
//////////////////////////////////////////////////////////////////////////////

var data = {

  menu:[{
//menulist:[{

    name: "Start Here.",
    link: null,
    sub: [{
      name: "Render Viz",
      color: "#231F20",
      describe: "To begin, you MUST render a viz. So, start here.",
      link: 'renderViz()',
      sub: null,
    },{
      name: "Render Viz with more Options",
      color: "#231F20",
      describe: "Render a viz with a filter and parameter selection in place",
      link: 'renderVizMoreOptions()',
      sub: null,
    }]
  },{

    name: "Viz Class",
    link: null,
    sub: [{
      name: "Dispose viz",
      color: "#002261",
      describe: "Clear out the current viz being displayed",
      link: 'dispose()',
      sub: null,
    },{
      name: "Download Workbook",
      color: "#002261",
      describe: "Download the workbook you are viewing",
      link: 'hideViz()',
      sub: null,
    },{
      name: "Export Crosstab",
      color: "#002261",
      describe: "Broken in b7: Doesn't allow an export of a worksheet inside a dashboard like it should",
      link: 'showExportCrosstabDialog()',
      sub: null,
    },{
      name: "Export Data",
      color: "#002261",
      describe: "Launches View Data dialog for 'Sales by Date' view",
      link: 'exportData()',
      sub: null,
    },{
      name: "Export Image",
      color: "#002261",
      describe: "Exports the the active sheet as an image",
      link: 'exportImage()',
      sub: null,
    },{
      name: "Export PDF",
      color: "#002261",
      describe: "Exports the the active sheet as as a PDF",
      link: 'exportPDF()',
      sub: null,
    },{
      name: "Hide Viz",
      color: "#002261",
      describe: "If a viz has been rendered and is currently visible, hide it",
      link: 'hideViz()',
      sub: null,
    },{
      name: "Pause automatic updates",
      color: "#002261",
      describe: "Pause automatic updates - just like on the toolbar",
      link: 'pauseAutomaticUpdatesAsync()',
      sub: null,
    },{
      name: "Refresh Data",
      color: "#002261",
      describe: "Refresh Data - just like on the toolbar",
      link: 'refreshData()',
      sub: null,
    },{
      name: "Resume automatic updates",
      color: "#002261",
      describe: "Resume updates - just like on the toolbar",
      link: 'resumeAutomaticUpdates()',
      sub: null,
    },{
      name: "Revert All",
      color: "#002261",
      describe: "Revert the viz - just like on the toolbar",
      link: 'revertAll()',
      sub: null,
    },{
      name: "Set frame size",
      color: "#002261",
      describe: "Change the frame size (to a smaller size, in this case)",
      link: 'setFrameSize()',
      sub: null,
    },{
      name: "Show share dialog",
      color: "#002261",
      describe: "Make the Share Dialog appear",
      link: 'showShareDialog()',
      sub: null,
    },{
      name: "Show Viz",
      color: "#002261",
      describe: "If a viz and rendered but hidden, show it",
      link: 'showViz()',
      sub: null,
    },{
      name: "Toggle automatic updates",
      color: "#002261",
      describe: "Toggle automatic updates - like on the Toolbar",
      link: 'toggleAutomaticUpdates()',
      sub: null,
    },{
      name: "Viz Property: AreAutomaticUpdatesPaused",
      color: "#002261",
      describe: "Check to see if autoamatic updates are currently paused",
      link: 'getAreAutomaticUpdatesPaused()',
      sub: null,
    },{
      name: "Viz Property: AreToolbarsHidden",
      color: "#002261",
      describe: "Check to see if the Toolbar is hidden",
      link: 'areToolbarsHidden()',
      sub: null,
    },{
      name: "Viz Property: AreTabsHidden",
      color: "#002261",
      describe: "Check to see if Tabs are hidden",
      link: 'areTabssHidden()',
      sub: null,
    },{
      name: "Viz Property: IsHidden",
      color: "#002261",
      describe: "Is this viz currently hidden?",
      link: 'getIsVizHidden()',
      sub: null,
    },{
      name: "Viz Property: IsInteractive",
      color: "#002261",
      describe: "Cut in Beta 8: Is this viz currently interactive?",
      link: 'getIsInteractive()',
      sub: null,
    },{
      name: "Viz Property: ParentElement",
      color: "#002261",
      describe: "What is the parent HTML element into which this viz is embedded",
      link: 'getParentElement()',
      sub: null,
    },{
      name: "Viz Property: Url",
      color: "#002261",
      describe: "What is the URL of this viz",
      link: 'getURL()',
      sub: null,
    },{
      name: "Viz Property: Workbook",
      color: "#002261",
      describe: "Return the Workbook object - message box output won't be interesting",
      link: 'getWorkbook()',
      sub: null,
    },{
      name: "Activate event listeners",
      color: "#002261",
      describe: "Turn on event listeners. You'll get annoyed after a while",
      link: 'activateEventListeners()',
      sub: null,
    },{
      name: "Deactivate event listeners",
      color: "#002261",
      describe: "Turn off event listeners and enjoy the silence",
      link: 'deactivateEventListeners()',
      sub: null,
    }]
  },{
    name: "Workbook Class",
    link: '2',
    sub: [{

      name: "Change Parameter Value Async",
      color: "#231F20",
      describe: "Change the paramter 'Top Customers' to show 10 instead of 25",
      link: 'changeParameterValueAsync()',
      sub: null,
    },{

      name: "Revert all async",
      color: "#231F20",
      describe: "Revert changes in this workbook - similar to the same method on the Viz class ",
      link:'revertAllAsync()',
      sub: null
    },{
      name: "Save as custom view named 'test'",
      color: "#231F20",
      describe: "Please Make some changes to the current dashboard, then click me to save them as a Custom View named 'test' ",
      link:'rememberCustomViewAsync()',
      sub: null
    },{
      name: "Remove custom view 'test'",
      color: "#231F20",
      describe: "If you have created a custom view (above), delete it. Please be kind to the next user and clean up after yourself",
      link:'removeCustomViewAsync()',
      sub: null
    },{
      name: "Set Active Sheet - Categorical Example",
      color: "#231F20",
      describe: "Switch to the 'Profit by Subcategory' tab. Use me before applying a category filter",
      link:'activateSheetCategorical()',
      sub: null
    },{
      name: "Set Active Sheet - Date Period",
      color: "#231F20",
      describe: "Switch to the 'Shipped by Date' tab. Use me before applying a Date Period filter",
      link:'activateSheetDatePeriod()',
      sub: null
    },{
      name: "Set Active Sheet - Range Example",
      color: "#231F20",
      describe: "Switch to the 'Sales by Date' tab. Use me before applying a Range filter",
      link:'activateSheetRange()',
      sub: null
    },{
      name: "Set Active Sheet - Relative Date",
      color: "#231F20",
      describe: "Switch to the 'Profit by Date' tab. Use me before applying a Relative Date filter",
      link:'activateSheetRelative()',
      sub: null
    },{
      name: "Show custom view 'test'",
      color: "#231F20",
      describe: "Show the Custom View you created earlier",
      link:'showCustomViewAsync()',
      sub: null
    },{
      name: "Set active view as default",
      color: "#231F20",
      describe: "Make your 'test' Custom View the default for the currently logged in user",
      link:'setActiveCustomViewAsDefaultAsync()',
      sub: null
    },{
      name: "WB Property: ActiveCustomView",
      color: "#231F20",
      describe: "Will show info about a Custom View IF a custom view is currently active",
      link:'getActiveCustomView()',
      sub: null
    },{
      name: "WB Property: ActiveSheet",
      color: "#231F20",
      describe: "Shows information about the current active sheet or dashboard",
      link:'getActiveSheet()',
      sub: null
    },{
      name: "WB Property: Name",
      color: "#231F20",
      describe: "What is the name of this workbook?",
      link:'getName()',
      sub: null
    },{
      name: "WB Property: Parameters",
      color: "#231F20",
      describe: "Return a collection of parameters that exist in this workbook. This example also counts them.",
      link:'etParametersAsync()',
      sub: null
    },{
      name: "WB Property: PublishedSheetsInfo",
      color: "#231F20",
      describe: "Get information about the sheets in this dashboard ",
      link:'getPublishedSheetsInfo()',
      sub: null
    }]
  },{

    name: "Custom View Class",
    link: '3',
    sub: [{
      name: "Create Custom View",
      color: "#231F20",
      describe: "Create a custom view named 'Test 2' via the Workbook class",
      link: 'customView()',
      sub:null
    },{
      name: "Save Custom View",
      color: "#231F20",
      describe: "Saves the 'Test 2' custom view in order to generate a custom URL - Works only directly after 'Create Custom View'",
      link: 'saveAsync()',
      sub:null
    },{
      name: "Share Custom View",
      color: "#231F20",
      describe: "'Advertises' the 'Test 2' Custom View as a Shared View",
      link: 'setAdvertised()',
      sub:null
    },{
      name: "Rename Custom View",
      color: "#231F20",
      describe: "Rename custom view 'Test 2' to 'Renamed Test 2'.",
      link: 'setName()',
      sub:null
    },{
      name: "Show Custom View",
      color: "#231F20",
      describe: "Show custom view 'Test2'",
      link: 'showAsync()',
      sub:null
    }]
  },{

    name: "Sheet Class",
    link:'4',
    sub: [{
      name: "Apply Hierarchical Filter",
      color: "#231F20",
      describe: "I am not implemented because this workbook is not connected to a cube and we only get hierarchical filters from cubes",
      link: 'applyHierarchicalFilterAsync()',
      sub:null
    },{
      name: "Apply Categorical Filter",
      color: "#231F20",
      describe: "Apply a simple filter to the 'Profit by Subcategory' Sheet",
      link: 'applyFilterAsync()',
      sub:null
    },{
      name: "Remove and Add a Categorical Filter",
      color: "#231F20",
      describe: "Remove a value from the filter and add another two. Try this after you apply the simple filter above.",
      link: 'applyFilterMoreAsync()',
      sub:null
    },{
      name: "Apply All to Categorical Filter",
      color: "#231F20",
      describe: "Apply 'All' to Categorical Filter.",
      link: 'applyAll()',
      sub:null
    },{
      name: "Apply Range Filter",
      color: "#231F20",
      describe: "Apply a range filter (min - max) to the 'Sales by Date' sheet",
      link: 'applyRangeFilter()',
      sub:null
    },{
      name: "Apply Relative Date Filter",
      color: "#231F20",
      describe: "Apply a Relative Date filter to 'Shipped by Date' sheet, changing 'Last 4 Years' to 'Last 376 Days'",
      link: 'applyRelativeDateFilterAsync()',
      sub:null
    },{
      name: "Change Size",
      color: "#231F20",
      describe: "Call changeSizeAsync() to change a sheet's (of type 'dashboard') size",
      link: 'changeSizeAsync()',
      sub:null
    },{
      name: "Clear Hierarchical Filter",
      color: "#231F20",
      describe: "I'm not implemented b/c this workbook isn't connected to a cube",
      link: 'clearHierarchicalFilter()',
      sub:null
    },{

      name: "Clear Categorical",
      color: "#231F20",
      describe: "Clearing filter selections is the same as selecting 'All'.",
      link: 'clearCategoricalFilter()',
      sub:null
    },{
      name: "Clear Range Filter",
      color: "#231F20",
      describe: "Clear Range Filter",
      link: 'clearRangeFilter()',
      sub:null
    },{
      name: "Clear Relative Date Filter",
      color: "#231F20",
      describe: "Clear Relative Date Filter",
      link: 'clearRelativeDateFilter',
      sub:null
    },{
      name: "Select Marks Inside Dashboard",
      color: "#231F20",
      describe: "Select some Marks in the scatterplot INSIDE the dashboard",
      link: 'selectMarksInsideDashboard()',
      sub:null
    },{
      name: "Select Marks",
      color: "#231F20",
      describe: "Select some Marks in the scatterplot - navigate to the 'Profit v. Sales' sheet first.",
      link: 'selectMarksAsync',
      sub:null
    },{
      name: "Select More Marks",
      color: "#231F20",
      describe: "You've already selected 'Technology' marks, now add 'Office Supplies' marks, too",
      link: 'selectMoreMarksAsync()',
      sub:null
    },{
      name: "Select Marks using two dimensions",
      color: "#231F20",
      describe: "Clear the previous marks you selected and choose only Technology marks from customers Emily and Deborah",
      link: 'selectMarksTwoDimensionsAsync()',
      sub:null
    },{
      name: "Clear Marks",
      color: "#231F20",
      describe: "Clear the previous marks you selected",
      link: 'clearMarksAsync()',
      sub:null
    },{
      name: "Sheet Property: DataSources",
      color: "#231F20",
      describe: "Get DataSource associated with a worksheet",
      link: 'getDataSourcesAsync()',
      sub:null
    },{
      name: "Sheet Property: Index",
      color: "#231F20",
      describe: "The index of sheet within the workbook (zero-based)",
      link: 'sheet_getIndex()',
      sub:null
    },{
      name: "Sheet Property: IsActive",
      color: "#231F20",
      describe: "Indicates whether a sheet is currectly active",
      link: 'sheet_getIndex()',
      sub:null
    },{
      name: "Sheet Property: IsHidden",
      color: "#231F20",
      describe: "Are any sheets shown in the dashboard hidden in the workbook itself?",
      link: 'sheet_getIndex()',
      sub:null
    },{
      name: "Sheet Property: Name",
      color: "#231F20",
      describe: "Find the current active sheet in the workbook, then display its name",
      link: 'sheet_getIndex()',
      sub:null
    },{
      name: "Sheet Property: Objects",
      color: "#231F20",
      describe: "Use this to retrieve the items found in a sheet of type DASHBOARD. Play with the Dashboard class methods for better examples",
      link: 'sheet_getObjects()',
      sub:null
    },{
      name: "Sheet Property: ParentDashboard",
      color: "#231F20",
      describe: "Identity the parent dashboard of a worksheet nested within another sheet of type 'Dashboard'",
      link: 'getParentDashboard()',
      sub:null
    },{
      name: "Sheet Property: Selected Marks",
      color: "#231F20",
      describe: "Switch to the 'Profit v. Sales' tab, choose *a few* marks, then use this method to see what you selected",
      link: 'getSelectedMarksAsync()',
      sub:null
    },{
      name: "Sheet Property: Sheet Type",
      color: "#231F20",
      describe: "Is the active sheet of type 'Sheet' or 'Dashboard'",
      link: 'getSheetType()',
      sub:null
    },{
      name: "Sheet Property: Sheet Size",
      color: "#231F20",
      describe: "Check the size behavior and min/max size settings of active sheet",
      link: 'getSize()',
      sub:null
    },{
      name: "Sheet Property: Workbook",
      color: "#231F20",
      describe: "What workbook does the current sheet belong to?",
      link: 'sheet_getWorkbook()',
      sub:null
    }]
  },{

    name: "Data Source Class",
    link:'5',
    sub: [{
      name: "Get Data Source",
      color: "#231F20",
      describe: "Get the Data Source associated with a sheet of type Worksheet",
      link: 'getDataSources()',
      sub:null
    },{
      name: "Fetch Fields",
      color: "#231F20",
      describe: "Iterate through the fields in the data source",
      link: 'getFields()',
      sub:null
    },{
      name: "Data Source Property: IsPrimary",
      color: "#231F20",
      describe: "In cases of blending, is this the primary data source?",
      link: 'getIsPrimary()',
      sub:null
    },{
      name: "Date Source Property: Name",
      color: "#231F20",
      describe: "Name of this data source",
      link: 'dataSourceGetName()',
      sub:null
    }]
  },{

    name: "Dashboard Class",
    link:'6',
    sub: [{
      name: "Get Dashboard Objects",
      color: "#231F20",
      describe: "Get the Data Source associated with a sheet of type Worksheet",
      link: 'getObjects()',
      sub:null
    },{
      name: "Get Worksheets",
      color: "#231F20",
      describe: "Retreives an array of Worksheets which live in the dashboard",
      link: 'getWorksheets()',
      sub:null
    }]
  },{


    name: "Story Class",
    link:'7',
    sub: [{      

      name: "activateStoryPointAsync()",
      color: "#231F20",
      describe: "Activates the StoryPoint at the specified index",
      link: 'activateStoryPointAsync',
      sub:null,
    },{

      name: "activateNextStoryPointAsync()",
      color: "#231F20",
      describe: "Activates the next StoryPoint if one exists. Ignored if currently active StoryPoint is also the last one",
      link: 'activateNextStoryPointAsync()',
      sub:null,
    },{

      name: "activatePreviousStoryPointAsync()",
      color: "#231F20",
      describe: "Activates the previous StoryPoint if one exists. Ignored if currently active StoryPoint is also the first one",
      link: 'activatePreviousStoryPointAsync()',
      sub:null,
    },{

      name: "revertStoryPointAsync()",
      color: "#231F20",
      describe: "Reverts the StoryPoint at the specified index",
      link: 'revertStoryPointAsync()',
      sub:null,
    },{

      name: "changeSizeAsync() - Story",
      color: "#231F20",
      describe: "Resizes the current Story",
      link: 'changeStorySizeAsync()',
      sub:null,
    },{

      name: "Story Property: Name",
      color: "#231F20",
      describe: "Use getName() to retreive the name of the Story (sheet)",
      link: 'story_getName()',
      sub:null,
    },{

      name: "Story Property: Index",
      color: "#231F20",
      describe: "The index of Story within the workbook (zero-based)",
      link: 'story_getIndex()',
      sub:null,
    },{

      name: "Story Property: isActive",
      color: "#231F20",
      describe: "Indicates whether a Story is currectly active",
      link: 'story_getIsActive()',
      sub:null,
    },{

      name: "Story Property: isHidden",
      color: "#231F20",
      describe: "Are any sheets shown in the Story hidden in the workbook itself?",
      link: 'story_getIsHidden()',
      sub:null,
    },{

      name: "Story Property: Story Type",
      color: "#231F20",
      describe: "Returns the type of the sheet - should specify 'Story'",
      link: 'story_getType()',
      sub:null,
    },{

      name: "Story Property: Story Size",
      color: "#231F20",
      describe: "Check the size behavior and min/max size settings of active Story",
      link: 'getSize()',
      sub:null,
    },{

      name: "Story Property: Url",
      color: "#231F20",
      describe: "Get the URL of this Story",
      link: 'getURL()',
      sub:null,
    },{

      name: "Story Property: Workbook",
      color: "#231F20",
      describe: "Gets the workbook to which this Story belongs",
      link: 'story_getWorkbook()',
      sub:null,
    },{

      name: "Story Property: StoryPointsInfo",
      color: "#231F20",
      describe: "Returns an array of StoryPointInfo objects, which represent each story point in a single story",
      link: 'getStoryPointsInfo()',
      sub:null,
    },{

      name: "Story Property: ActiveStoryPoint",
      color: "#231F20",
      describe: "Returns an index of the currently active StoryPoint (zero based) in the active Story",
      link: 'getActiveStoryPoint()',
      sub:null,
    }]
  },{

    name: "StoryPoint Class",
    link: '8',
    sub: [{

      name: "StoryPoint Property - Index",
      color: "#231F20",
      describe: "Returns zero-based position of this StoryPoint within the parent Story sheet",
      link: 'storyPoint_getIndexAndCaption()',
      sub:null,
    },{

      name: "StoryPoint Property - Caption",
      color: "#231F20",
      describe: "Returns the text description for this StoryPoint",
      link: 'storyPoint_getIndexAndCaption()',
      sub:null,
    },{

      name: "StoryPoint Property - IsActive",
      color: "#231F20",
      describe: "Indicates whether this is the currently active StoryPoint in the parent Story",
      link: 'storyPoint_getIsActive()',
      sub:null,
    },{

      name: "StoryPoint Property - IsUpdated",
      color: "#231F20",
      describe: "Returns 'false' when StoryPoint has been modified but not yet reverted w/ orange revert symbol. Otherwise, returns 'true'.",
      link: 'storyPoint_getIsUpdated()',
      sub:null,
    },{

      name: "StoryPoint Property - ContainedSheet",
      color: "#231F20",
      describe: "Returns the sheet (Dashboard, worksheet) contained by the StoryPoint. Null if the StoryPoint contains neither",
      link: 'storyPoint_getContainedSheet()',
      sub:null,
    },{

      name: "StoryPoint Property - ParentStory",
      color: "#231F20",
      describe: "Returns the Story object which contains this StoryPoint",
      link: 'storyPoint_getParentStory()',
      sub:null,

    }]
  },{
    name: "StoryPointInfo Class",
    link: '9',
    sub: [{

      name: "StoryPointInfo Property - Index",
      color: "#231F20",
      describe: "Returns zero-based position of this StoryPoint within the parent Story sheet",
      link: 'storyPointInfo_getIndexAndCaption()',
      sub:null,
    },{

      name: "StoryPointInfo Property - Caption",
      color: "#231F20",
      describe: "Returns the text description for this StoryPoint",
      link: 'storyPointInfo_getIndexAndCaption()',
      sub:null,
    },{

      name: "StoryPointInfo Property - IsActive",
      color: "#231F20",
      describe: "Indicates whether this is the currently active StoryPoint in the parent Story",
      link: 'storyPointInfo_getIsActive()',
      sub:null,
    },{

      name: "StoryPointInfo Property - IsUpdated",
      color: "#231F20",
      describe: "Returns 'false' when StoryPoint has been modified but not yet reverted w/ orange revert symbol. Otherwise, returns 'true'.",
      link: 'storyPointInfo_getIsUpdated()',
      sub:null,
    },{

      name: "StoryPointInfo Property - ParentStory",
      color: "#231F20",
      describe: "Returns the Story object which contains this StoryPoint",
      link: 'storyPointInfo_getParentStory()',
      sub:null,

    }]
  },{
    name: "Parameter Class",
    link: '10',
    sub: [{

      name: "Get Parameters",
      color: "#231F20",
      describe: "Get the parameters in this workbook",
      link: 'parameters_getParametersAsync()',
      sub:null,
    },{

      name: "Parameter Property: CurrentValue",
      color: "#231F20",
      describe: "The current value of the 'Top 25 Customers' parameter",
      link: 'parameters_getCurrentValue()',
      sub:null,
    },{

      name: "Parameter Property: DataType",
      color: "#231F20",
      describe: "The data type of the parameter",
      link: 'parameters_getDataType()',
      sub:null,
    },{

      name: "Parameter Property: AllowableValuesType",
      color: "#231F20",
      describe: "The type of values the parameter can accept: ALL, LIST, RANGE",
      link: 'parameters_getAllowableValuesType()',
      sub:null,
    },{

      name: "Parameter Property: AllowableValues",
      color: "#231F20",
      describe: "The set of allowable values contained in a LIST or RANGE driven parameter",
      link: 'parameters_getAllowableValues()',
      sub:null,
    },{

      name: "Parameter Property: MinimumValue",
      color: "#231F20",
      describe: "Returns minimum allowable value on a RANGE parameter ",
      link: 'parameters_getMinMaxValue()',
      sub:null,
    },{

      name: "Parameter Property: MaximumValue",
      color: "#231F20",
      describe: "Returns maximum allowable value on a RANGE parameter",
      link: 'parameters_getMinMaxValue()',
      sub:null,
    },{

      name: "Parameter Property: StepSize",
      color: "#231F20",
      describe: "Returns the step size for RANGE parameters",
      link: 'parameters_getStepSize()',
      sub:null,
    },{

      name: "Parameter Property: DateStepPeriod",
      color: "#231F20",
      describe: "Returns the period (month, year, etc.) that we will step by - for a DATE RANGE parameters",
      link: 'parameters_getDateStepPeriod()',
      sub:null,
    },{

      name: "Examine Parameter #1",
      color: "#231F20",
      describe: "Examines a DATE parameter using the DateType, DateStepPeriod, StepSize and other properties",
      link: 'parametersDate()',
      sub:null,
    },{

      name: "Examine Parameter #2",
      color: "#231F20",
      describe: "Examines a parameter of type string, returns DataType, AllowableValueType, Current,  AllowableValues",
      link: 'parametersString()',
      sub:null,
    },{

      name: "Examine Parameter #3",
      color: "#231F20",
      describe: "Examines a parameter of type Integer, returns DataType, AllowableValueType, Current,  MinimumValue, MaximumValue, AllowableValues",
      link: 'parametersNumeric()',
      sub:null,

    }]
  },{
    name: "Filter Class",
    link: '11',
    sub: [{

      name: "Get Filters",
      color: "#231F20",
      describe: "Get the filters for a specific worksheet - Do this before you use any of the other methods or properties",
      link: 'getFiltersAsyncAgain()',
      sub:null,
    },{

      name: "Filter Property: Applied Values - #1",
      color: "#231F20",
      describe: "What values are selected in the Category filter for sheet 'Shipped by Date'?",
      link: 'filterCategoricalAppliedValues()',
      sub:null,
    },{

      name: "Filter Property: Field - #1",
      color: "#231F20",
      describe: "Gets information about the database field associated with the Category filter in sheet 'Shipped by Date'",
      link: 'filterCategoricalField()',
      sub:null,
    },{

      name: "Filter Property: FieldName - #1",
      color: "#231F20",
      describe: "Returns the field being filtered by the Category filter for sheet 'Shipped by Date'",
      link: 'filterCategoricalFieldName()',
      sub:null,
    },{

      name: "Filter Property: FilterType - #1",
      color: "#231F20",
      describe: "Returns the FilterType of the Category filter for sheet 'Shipped by Date'",
      link: 'filterCategoricalFilterType()',
      sub:null,
    },{

      name: "Filter Property: IsExcludeMode - #1",
      color: "#231F20",
      describe: "Reflects whether Category filter for sheet 'Shipped by Date' is in 'Exclude' mode",
      link: 'filterCategoricalIsExcludeMode()',
      sub:null,
    },{

      name: "Filter Property: Worksheet - #1",
      color: "#231F20",
      describe: "Returns the worksheet to which the Category filter is bound",
      link: 'filterCategoricalWorksheet()',
      sub:null,
    },{


      name: "Filter Property: DomainMinValue - #2",
      color: "#231F20",
      describe: "Returns the minimum allowable value for the Quantitative Filter 'Sales'",
      link: 'filterQuantitativeDomainMinValue()',
      sub:null,
    },{


      name: "Filter Property: DomainMaxValue - #2",
      color: "#231F20",
      describe: "Returns the maxmimum allowable value for the Quantitative Filter 'Sales'",
      link: 'filterQuantitativeDomainMaxValue()',
      sub:null,
    },{


      name: "Filter Property: MinValue - #2",
      color: "#231F20",
      describe: "Returns the current 'low' value for the Quantitative Filter 'Sales'",
      link: 'filterQuantitativeMinValue()',
      sub:null,
    },{


      name: "Filter Property: MaxValue - #2",
      color: "#231F20",
      describe: "Returns the current 'high' value for the Quantitative Filter 'Sales'",
      link: 'filterQuantitativeMaxValue()',
      sub:null,
    },{


      name: "Filter Property: IncludeNullValues - #2",
      color: "#231F20",
      describe: "Indicates if NULL values are included in the Quantitative Filter 'Sales'",
      link: 'filterQuantitativeIncludeNullValues()',
      sub:null,
    },{

      name: "Filter Property: Period - #3",
      color: "#231F20",
      describe: "Returns the Period (Year, Month, etc.) of the  Relative Date Filter 'Ship Date'",
      link: 'filterRelativeDatePeriod()',
      sub:null,
    },{

      name: "Filter Property: Range - #3",
      color: "#231F20",
      describe: "Returns the range (LAST(N), NEXT(N), CURRENT, TODATE, etc.) of a Relative Date Filter",
      link: 'filterRelativeDateRange()',
      sub:null,
    },{

      name: "Filter Property: RangeN - #3",
      color: "#231F20",
      describe: "Returns the N value from the Range of a Relative Date Filter",
      link: 'filterRelativeDateRangeN()',
      sub:null,
    },{

      name: "Filter Property: AppliedFieldNames - #4",
      color: "#231F20",
      describe: "Returns a collection of field names set on a Hierarchical filter",
      link: 'filterHierarchicalAppliedFieldNames()',
      sub:null,
    }]
  }]
};

//called with every property and it's value
function process(key,value) {
    console.log(key + " : "+value);
}

function traverse(data,func) {
    for (var i in data) {
        func.apply(this,[i,data[i]]);  
        if (data[i] !== null && typeof(data[i])=="object") {
            //going on step down in the object tree!!
            traverse(data[i],func);
        }
    }
}

//that's all... no magic, no bloated framework
traverse(data,process);


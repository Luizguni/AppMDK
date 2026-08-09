/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./build.definitions/sampleapp/i18n/i18n.properties"
/*!**********************************************************!*\
  !*** ./build.definitions/sampleapp/i18n/i18n.properties ***!
  \**********************************************************/
(module) {

module.exports = "PRODUCT_NAME=PRODUCT_NAME\nPRODUCT_CATEGORY=PRODUCT_CATEGORY\nPRODUCT_SHORT_DESCRIPTION=PRODUCT_SHORT_DESCRIPTION\nPRODUCT_LONG_DESCRIPTION=PRODUCT_LONG_DESCRIPTION\nPRODUCT_PRICE=PRODUCT_PRICE\nPRODUCT_WEIGHT=PRODUCT_WEIGHT\nPRODUCT_HEIGHT=PRODUCT_HEIGHT\nPRODUCT_DEPTH=PRODUCT_DEPTH\nPRODUCT_WIDTH=PRODUCT_WIDTH\nPRODUCT_TYPE=PRODUCT_TYPE\nPRODUCT_TYPES=PRODUCT_TYPES\nPRODUCT_PRODUCT_ID=PRODUCT_PRODUCT_ID\nPRODUCT_UNIT=PRODUCT_UNIT\nPRODUCT_WEIGHT_UNIT=PRODUCT_WEIGHT_UNIT\nPRODUCT_QUANTITY_UNIT=PRODUCT_QUANTITY_UNIT\nPRODUCT_CATEGORY_NAME=PRODUCT_CATEGORY_NAME\nPRODUCT_CURENCY_CODE=PRODUCT_CURENCY_CODE\nPRODUCT_PICTURE_URL=PRODUCT_PICTURE_URL\nPRODUCT_SUPPLIER_ID=PRODUCT_SUPPLIER_ID\nPRODUCT_UPDATE_TIMESTAMP=PRODUCT_UPDATE_TIMESTAMP\nAction_OK=OK\nAction_Cancel=Cancel\nAction_Yes=Yes\nAction_No=No\nAction_Now=Now\nAction_Later=Later\nAction_Generic_Message=Message\nAction_Confirmation_Title=Confirmation\nAction_Delete_Confirm_Message=Delete current entity?\nAction_Entity_Created=Entity created\nAction_Entity_Updated=Entity updated\nAction_Entity_Deleted=Entity deleted\nAction_Stream_Uploaded=Stream uploaded\nAction_Create_Failure=Create entity failure\nAction_Update_Failure=Update entity failure\nAction_Delete_Failure=Delete entity failure\nAction_UploadStream_Failure=Upload stream failure\nAction_RequiredFields_Failure=Please fill in all required fields\nAction_Draft_Edit=Draft Edit\nAction_Draft_Saved=Draft Saved\nAction_Draft_Discarded=Draft Discarded\nAction_Init_Activity=Downloading...\nAction_Init_Success=Application services initialized\nAction_Init_Failure=Failed to initialize application data service\nAction_Sync_Started=Upload in progress...\nAction_Sync_Completed=Sync completed\nAction_Sync_Failure=Sync offline data service failure\nAction_Download_Started=Download in progress...\nAction_Download_Successful=Download Successful\nAction_Close_Success=Data service closed successfully\nAction_Close_Failure=Failure closing data service\nAction_ErrorArchive_Upload_Failed=Upload failed!\nAction_ErrorArchive_View_Errors=View Errors\nAction_Log_Upload_Activity=Uploading...\nAction_Log_Upload_Started=Uploading Log Files...\nAction_Log_Upload_Completed=Logs Uploaded\nAction_Log_Uploaded=Log File Uploaded\nAction_Log_Upload_Failed_Title=Log Upload Failed\nAction_Log_Upload_Failed_Message=Uploading log file failed with error\nAction_App_Update_Checking=Checking for Updates...\nAction_App_Update_Complete=Update application complete\nAction_App_Update_Failed=Failed to update application\nAction_App_Update_Available_Title=New Version Available!\nAction_App_Update_Available_Message=A new version of the application is now ready to apply. Do you want to update to this version?\nAction_Reset_Title=Reset\nAction_Reset_Message=This action will remove all data and return to the Welcome screen. Any local data will be lost. Are you sure you want to continue?\nAction_Menu_Sync_Changes=Sync Changes\nAction_Menu_Support=Support\nAction_Menu_Check_Updates=Check for Updates\nAction_Menu_About=About\nAction_Menu_Reset=Reset\nAction_Menu_Logout=Logout\n"

/***/ },

/***/ "./build.definitions/sampleapp/Rules/Application/AppUpdateFailure.js"
/*!***************************************************************************!*\
  !*** ./build.definitions/sampleapp/Rules/Application/AppUpdateFailure.js ***!
  \***************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AppUpdateFailure)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function AppUpdateFailure(clientAPI) {
  let result = clientAPI.actionResults.AppUpdate.error.toString();
  var message;
  console.log(result);
  if (result.startsWith('Error: Uncaught app extraction failure:')) {
    result = 'Error: Uncaught app extraction failure:';
  }
  if (result.startsWith('Error: LCMS GET Version Response Error Response Status: 404 | Body: 404 Not Found: Requested route')) {
    result = 'Application instance is not up or running';
  }
  if (result.startsWith('Error: LCMS GET Version Response Error Response Status: 404 | Body')) {
    result = 'Service instance not found.';
  }
  switch (result) {
    case 'Service instance not found.':
      message = 'Mobile App Update feature is not assigned or not running for your application. Please add the Mobile App Update feature, deploy your application, and try again.';
      break;
    case 'Error: LCMS GET Version Response Error Response Status: 404 | Body: Failed to find a matched endpoint':
      message = 'Mobile App Update feature is not assigned to your application. Please add the Mobile App Update feature, deploy your application, and try again.';
      break;
    case 'Error: LCMS GET Version Response failed: Error: Optional(OAuth2Error.tokenRejected: The newly acquired or refreshed token got rejected.)':
      message = 'The Mobile App Update feature is not assigned to your application or there is no Application metadata deployed. Please check your application in Mobile Services and try again.';
      break;
    case 'Error: Uncaught app extraction failure:':
      message = 'Error extracting metadata. Please redeploy and try again.';
      break;
    case 'Application instance is not up or running':
      message = 'Communication failure. Verify that the BindMobileApplicationRoutesToME Application route is running in your BTP space cockpit.';
      break;
    default:
      message = result;
      break;
  }
  return clientAPI.getPageProxy().executeAction({
    "Name": "/sampleapp/Actions/Application/AppUpdateFailureMessage.action",
    "Properties": {
      "Duration": 0,
      "Message": message
    }
  });
}

/***/ },

/***/ "./build.definitions/sampleapp/Rules/Application/AppUpdateSuccess.js"
/*!***************************************************************************!*\
  !*** ./build.definitions/sampleapp/Rules/Application/AppUpdateSuccess.js ***!
  \***************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AppUpdateSuccess)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function sleep(ms) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve();
    }, ms);
  });
}
function AppUpdateSuccess(clientAPI) {
  var message;
  // Force a small pause to let the progress banner show in case there is no new version available
  return sleep(500).then(function () {
    let result = clientAPI.actionResults.AppUpdate.data;
    console.log(result);
    let versionNum = result.split(': ')[1];
    if (result.startsWith('Current version is already up to date')) {
      return clientAPI.getPageProxy().executeAction({
        "Name": "/sampleapp/Actions/Application/AppUpdateSuccessMessage.action",
        "Properties": {
          "Message": `You are already using the latest version: ${versionNum}`,
          "NumberOfLines": 2
        }
      });
    } else if (result === 'AppUpdate feature is not enabled or no new revision found.') {
      message = 'No Application metadata found. Please deploy your application and try again.';
      return clientAPI.getPageProxy().executeAction({
        "Name": "/sampleapp/Actions/Application/AppUpdateSuccessMessage.action",
        "Properties": {
          "Duration": 5,
          "Message": message,
          "NumberOfLines": 2
        }
      });
    }
  });
}

/***/ },

/***/ "./build.definitions/sampleapp/Rules/Application/ClientIsMultiUserMode.js"
/*!********************************************************************************!*\
  !*** ./build.definitions/sampleapp/Rules/Application/ClientIsMultiUserMode.js ***!
  \********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ClientIsMultiUserMode)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function ClientIsMultiUserMode(clientAPI) {
  return clientAPI.isAppInMultiUserMode();
}

/***/ },

/***/ "./build.definitions/sampleapp/Rules/Application/GetClientSupportVersions.js"
/*!***********************************************************************************!*\
  !*** ./build.definitions/sampleapp/Rules/Application/GetClientSupportVersions.js ***!
  \***********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GetClientSupportVersions)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function GetClientSupportVersions(clientAPI) {
  let versionInfo = clientAPI.getVersionInfo();
  let versionStr = '';
  Object.keys(versionInfo).forEach(function (key, index) {
    // key: the name of the object key
    // index: the ordinal position of the key within the object
    //console.log(`Key: ${key}   Index: ${index}`);
    if (key != 'Application Version') {
      versionStr += `${key}: ${versionInfo[key]}\n`;
    }
  });
  return versionStr;
}

/***/ },

/***/ "./build.definitions/sampleapp/Rules/Application/GetClientVersion.js"
/*!***************************************************************************!*\
  !*** ./build.definitions/sampleapp/Rules/Application/GetClientVersion.js ***!
  \***************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GetClientVersion)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function GetClientVersion(clientAPI) {
  let versionInfo = clientAPI.getVersionInfo();
  if (versionInfo.hasOwnProperty('Application Version')) {
    return versionInfo['Application Version'];
  }
}

/***/ },

/***/ "./build.definitions/sampleapp/Rules/Application/OnWillUpdate.js"
/*!***********************************************************************!*\
  !*** ./build.definitions/sampleapp/Rules/Application/OnWillUpdate.js ***!
  \***********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ OnWillUpdate)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function OnWillUpdate(clientAPI) {
  return clientAPI.executeAction('/sampleapp/Actions/Application/OnWillUpdate.action').then(result => {
    if (result.data) {
      return clientAPI.executeAction('/sampleapp/Actions/com_sap_edm_sampleservice_v4/Service/CloseOffline.action').then(success => Promise.resolve(success), failure => Promise.reject('Offline Odata Close Failed ' + failure));
    } else {
      return Promise.reject('User Deferred');
    }
  });
}

/***/ },

/***/ "./build.definitions/sampleapp/Rules/Application/ResetAppSettingsAndLogout.js"
/*!************************************************************************************!*\
  !*** ./build.definitions/sampleapp/Rules/Application/ResetAppSettingsAndLogout.js ***!
  \************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ResetAppSettingsAndLogout)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function ResetAppSettingsAndLogout(clientAPI) {
  let logger = clientAPI.getLogger();
  let platform = clientAPI.nativescript.platformModule;
  let appSettings = clientAPI.nativescript.appSettingsModule;
  var appId;
  if (platform && (platform.isIOS || platform.isAndroid)) {
    appId = clientAPI.evaluateTargetPath('#Application/#AppData/MobileServiceAppId');
  } else {
    appId = 'WindowsClient';
  }
  try {
    // Remove any other app specific settings
    appSettings.getAllKeys().forEach(key => {
      if (key.substring(0, appId.length) === appId) {
        appSettings.remove(key);
      }
    });
  } catch (err) {
    logger.log(`ERROR: AppSettings cleanup failure - ${err}`, 'ERROR');
  } finally {
    // Logout 
    return clientAPI.getPageProxy().executeAction('/sampleapp/Actions/Application/Reset.action');
  }
}

/***/ },

/***/ "./build.definitions/sampleapp/Rules/Logging/LogLevels.js"
/*!****************************************************************!*\
  !*** ./build.definitions/sampleapp/Rules/Logging/LogLevels.js ***!
  \****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LogLevels)
/* harmony export */ });
function LogLevels(clientAPI) {
  var levels = [];
  levels.push({
    'DisplayValue': 'Error',
    'ReturnValue': 'Error'
  });
  levels.push({
    'DisplayValue': 'Warning',
    'ReturnValue': 'Warn'
  });
  levels.push({
    'DisplayValue': 'Info',
    'ReturnValue': 'Info'
  });
  levels.push({
    'DisplayValue': 'Debug',
    'ReturnValue': 'Debug'
  });
  levels.push({
    'DisplayValue': 'Trace',
    'ReturnValue': 'Trace'
  });
  return levels;
}

/***/ },

/***/ "./build.definitions/sampleapp/Rules/Logging/SetTraceCategories.js"
/*!*************************************************************************!*\
  !*** ./build.definitions/sampleapp/Rules/Logging/SetTraceCategories.js ***!
  \*************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SetTraceCategories)
/* harmony export */ });
function SetTraceCategories(clientAPI) {
  var logger = clientAPI.getLogger();
  const sectionedTable = clientAPI.getPageProxy().getControl('SectionedTable');
  const fcsection = sectionedTable.getSection('FormCellSection0');
  const traceCategory = fcsection.getControl('TracingCategoriesListPicker');
  const odataTrace = fcsection.getControl('odataTrace');
  try {
    if (traceCategory.getValue()) {
      var values = traceCategory.getValue();
      var categories = [];
      if (values && values.length) {
        categories = values.map(value => {
          return 'mdk.trace.' + value.ReturnValue;
        });
      }
      clientAPI.setDebugSettings(odataTrace.getValue(), true, categories);
    }
  } catch (exception) {
    logger.log(String(exception), 'Error');
    return undefined;
  }
}

/***/ },

/***/ "./build.definitions/sampleapp/Rules/Logging/SetUserLogLevel.js"
/*!**********************************************************************!*\
  !*** ./build.definitions/sampleapp/Rules/Logging/SetUserLogLevel.js ***!
  \**********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SetUserLogLevel)
/* harmony export */ });
function SetUserLogLevel(clientAPI) {
  var logger;
  try {
    if (clientAPI.getValue() && clientAPI.getValue()[0]) {
      logger = clientAPI.getLogger();
      var listPickerValue = clientAPI.getValue()[0].ReturnValue;
      if (listPickerValue) {
        switch (listPickerValue) {
          case 'Debug':
            logger.setLevel('Debug');
            ShowTraceOptions(clientAPI, false);
            break;
          case 'Error':
            logger.setLevel('Error');
            ShowTraceOptions(clientAPI, false);
            break;
          case 'Warn':
            logger.setLevel('Warn');
            ShowTraceOptions(clientAPI, false);
            break;
          case 'Info':
            logger.setLevel('Info');
            ShowTraceOptions(clientAPI, false);
            break;
          case 'Trace':
            logger.setLevel('Trace');
            ShowTraceOptions(clientAPI, true);
            break;
          default:
            // eslint-disable-next-line no-console
            console.log(`unrecognized key ${listPickerValue}`);
        }
        return listPickerValue;
      }
    }
  } catch (exception) {
    if (logger) {
      logger.log(String(exception), 'Error');
    } else {
      // eslint-disable-next-line no-console
      console.log('Error: ' + String(exception));
    }
    return undefined;
  }
}
function ShowTraceOptions(clientAPI, tracingEnabled) {
  let categories = clientAPI.getPageProxy().getControl('SectionedTable').getControl('TracingCategoriesListPicker');
  let odataTrace = clientAPI.getPageProxy().getControl('SectionedTable').getControl('odataTrace');
  categories.setVisible(tracingEnabled);
  odataTrace.setVisible(tracingEnabled);
}

/***/ },

/***/ "./build.definitions/sampleapp/Rules/Logging/ToggleLogging.js"
/*!********************************************************************!*\
  !*** ./build.definitions/sampleapp/Rules/Logging/ToggleLogging.js ***!
  \********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ToggleLogging)
/* harmony export */ });
function ToggleLogging(clientAPI) {
  var logger;
  try {
    logger = clientAPI.getLogger();
    const sectionedTable = clientAPI.getPageProxy().getControl('SectionedTable');
    const fcsection = sectionedTable.getSection('FormCellSection0');
    const enableLogSwitch = fcsection.getControl('EnableLogSwitch');
    const logLevelListPicker = fcsection.getControl('LogLevelListPicker');
    let switchValue = enableLogSwitch.getValue();
    if (switchValue) {
      logger.on();
      logLevelListPicker.setVisible(true);
      logLevelListPicker.setEditable(true);
      logLevelListPicker.redraw();
    } else {
      logger.off();
      logLevelListPicker.setEditable(false);
      logLevelListPicker.setVisible(false);
      logLevelListPicker.redraw();
    }
    return switchValue;
  } catch (exception) {
    if (logger) {
      logger.log(String(exception), 'Error');
    } else {
      // eslint-disable-next-line no-console
      console.log('Error: ' + String(exception));
    }
    return undefined;
  }
}

/***/ },

/***/ "./build.definitions/sampleapp/Rules/Logging/TraceCategories.js"
/*!**********************************************************************!*\
  !*** ./build.definitions/sampleapp/Rules/Logging/TraceCategories.js ***!
  \**********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TraceCategories)
/* harmony export */ });
function TraceCategories(clientAPI) {
  var categories = ['action', 'api', 'app', 'binding', 'branding', 'core', 'i18n', 'lcms', 'logging', 'odata', 'onboarding', 'profiling', 'push', 'restservice', 'settings', 'targetpath', 'ui'];
  var values = [];
  categories.forEach(category => {
    values.push({
      'DisplayValue': category,
      'ReturnValue': category
    });
  });
  return values;
}

/***/ },

/***/ "./build.definitions/sampleapp/Rules/Logging/UserLogSetting.js"
/*!*********************************************************************!*\
  !*** ./build.definitions/sampleapp/Rules/Logging/UserLogSetting.js ***!
  \*********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UserLogSetting)
/* harmony export */ });
function UserLogSetting(clientAPI) {
  try {
    var logger = clientAPI.getLogger();
    const sectionedTable = clientAPI.getControl('SectionedTable');
    const fcsection = sectionedTable.getSection('FormCellSection0');
    const enableLogSwitch = fcsection.getControl('EnableLogSwitch');
    const logLevelListPicker = fcsection.getControl('LogLevelListPicker');
    const traceCategory = fcsection.getControl('TracingCategoriesListPicker');
    const odataTrace = fcsection.getControl('odataTrace');

    //Persist the user logging preferences
    if (logger) {
      console.log("in logger state");
      if (logger.isTurnedOn()) {
        if (enableLogSwitch) {
          enableLogSwitch.setValue(true);
        }
        if (logLevelListPicker) {
          logLevelListPicker.setEditable(true);
        }
      } else {
        if (enableLogSwitch) {
          enableLogSwitch.setValue(false);
        }
        if (logLevelListPicker) {
          logLevelListPicker.setEditable(false);
        }
      }
      var logLevel = logger.getLevel();
      if (logLevel) {
        if (logLevelListPicker) {
          logLevelListPicker.setValue([logLevel]);
        }
      }
      if (logLevel === 'Trace') {
        traceCategory.setVisible(true);
        odataTrace.setVisible(true);
      }

      //Upon selecting a value in the List picker and clicking the back button 
      //will enable the onload page rule. This will set the selected value
      //in the control
      if (logLevelListPicker.getValue()[0]) {
        var returnValue = logLevelListPicker.getValue()[0].ReturnValue;
        if (returnValue) {
          logLevelListPicker.setValue([returnValue]);
          logger.setLevel(returnValue);
        }
      }
    }
  } catch (exception) {
    // eslint-disable-next-line no-console
    console.log(String(exception), 'Error User Logger could not be set');
  }
}

/***/ },

/***/ "./build.definitions/sampleapp/Rules/Service/Initialize.js"
/*!*****************************************************************!*\
  !*** ./build.definitions/sampleapp/Rules/Service/Initialize.js ***!
  \*****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Initialize)
/* harmony export */ });
function Initialize(context) {
  // Perform pre data initialization task

  // Initialize all your Data sources
  let _com_sap_edm_sampleservice_v4 = context.executeAction('/sampleapp/Actions/com_sap_edm_sampleservice_v4/Service/InitializeOffline.action');

  //You can add more service initialize actions here

  // The Initialize<Online|Offline>.action wires its own OnSuccess (success
  // toast) and OnFailure (failure banner) handlers. We propagate the
  // rejection so the caller of Initialize() — typically the Application's
  // OnLaunch chain — can react to a failed initialization rather than
  // proceeding as if everything were fine. Older revisions of this
  // template returned `false` from the catch, which silently swallowed
  // initialization errors (MDK-18173 review section 1.2).
  return Promise.all([_com_sap_edm_sampleservice_v4]);
}

/***/ },

/***/ "./build.definitions/sampleapp/Rules/com_sap_edm_sampleservice_v4/ErrorArchive_CheckForSyncError.js"
/*!**********************************************************************************************************!*\
  !*** ./build.definitions/sampleapp/Rules/com_sap_edm_sampleservice_v4/ErrorArchive_CheckForSyncError.js ***!
  \**********************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CheckForSyncError)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} context
 */
function CheckForSyncError(context) {
  return context.count('/sampleapp/Services/com_sap_edm_sampleservice_v4.service', 'ErrorArchive', '').then(errorCount => {
    if (errorCount > 0) {
      return context.getPageProxy().executeAction('/sampleapp/Actions/ErrorArchive/ErrorArchive_SyncFailure.action').then(function () {
        return Promise.reject(false);
      });
    }
    return undefined;
  });
}

/***/ },

/***/ "./build.definitions/sampleapp/Styles/Styles.css"
/*!*******************************************************!*\
  !*** ./build.definitions/sampleapp/Styles/Styles.css ***!
  \*******************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../home/user/.vscode/data/User/globalStorage/sapse.mdk-editor/tools/node_modules/css-loader/dist/runtime/noSourceMaps.js */ "../../../home/user/.vscode/data/User/globalStorage/sapse.mdk-editor/tools/node_modules/css-loader/dist/runtime/noSourceMaps.js");
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../home/user/.vscode/data/User/globalStorage/sapse.mdk-editor/tools/node_modules/css-loader/dist/runtime/api.js */ "../../../home/user/.vscode/data/User/globalStorage/sapse.mdk-editor/tools/node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* The LESS stylesheet provides the ability to define styling styles that can be used to style the UI in the MDK app.

Examples:

@mdkYellow1: #ffbb33;
@mdkRed1: #ff0000;

//// By-Type style: All Pages in the application will now have a yellow background
Page

{ background-color: @mdkYellow1; }
//// By-Name style: All Buttons with _Name == "BlueButton" will now have this style
#BlueButton

{ color: @mdkYellow1; background-color: #0000FF; }
//// By-Class style: These style classes can be referenced from rules and set using ClientAPI setStyle function

.MyButton

{ color: @mdkYellow1; background-color: @mdkRed1; }
*/
`, ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ },

/***/ "./build.definitions/sampleapp/Styles/Styles.less"
/*!********************************************************!*\
  !*** ./build.definitions/sampleapp/Styles/Styles.less ***!
  \********************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../home/user/.vscode/data/User/globalStorage/sapse.mdk-editor/tools/node_modules/css-loader/dist/runtime/noSourceMaps.js */ "../../../home/user/.vscode/data/User/globalStorage/sapse.mdk-editor/tools/node_modules/css-loader/dist/runtime/noSourceMaps.js");
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../home/user/.vscode/data/User/globalStorage/sapse.mdk-editor/tools/node_modules/css-loader/dist/runtime/api.js */ "../../../home/user/.vscode/data/User/globalStorage/sapse.mdk-editor/tools/node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* The LESS stylesheet provides the ability to define styling styles that can be used to style the UI in the MDK app.

Examples:

@mdkYellow1: #ffbb33;
@mdkRed1: #ff0000;

//// By-Type style: All Pages in the application will now have a yellow background
Page

{ background-color: @mdkYellow1; }
//// By-Name style: All Buttons with _Name == "BlueButton" will now have this style
#BlueButton

{ color: @mdkYellow1; background-color: #0000FF; }
//// By-Class style: These style classes can be referenced from rules and set using ClientAPI setStyle function

.MyButton

{ color: @mdkYellow1; background-color: @mdkRed1; }
*/`, ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ },

/***/ "./build.definitions/sampleapp/Styles/Styles.light.css"
/*!*************************************************************!*\
  !*** ./build.definitions/sampleapp/Styles/Styles.light.css ***!
  \*************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../home/user/.vscode/data/User/globalStorage/sapse.mdk-editor/tools/node_modules/css-loader/dist/runtime/noSourceMaps.js */ "../../../home/user/.vscode/data/User/globalStorage/sapse.mdk-editor/tools/node_modules/css-loader/dist/runtime/noSourceMaps.js");
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../home/user/.vscode/data/User/globalStorage/sapse.mdk-editor/tools/node_modules/css-loader/dist/runtime/api.js */ "../../../home/user/.vscode/data/User/globalStorage/sapse.mdk-editor/tools/node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ``, ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ },

/***/ "./build.definitions/sampleapp/Styles/Styles.light.nss"
/*!*************************************************************!*\
  !*** ./build.definitions/sampleapp/Styles/Styles.light.nss ***!
  \*************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../home/user/.vscode/data/User/globalStorage/sapse.mdk-editor/tools/node_modules/css-loader/dist/runtime/noSourceMaps.js */ "../../../home/user/.vscode/data/User/globalStorage/sapse.mdk-editor/tools/node_modules/css-loader/dist/runtime/noSourceMaps.js");
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../home/user/.vscode/data/User/globalStorage/sapse.mdk-editor/tools/node_modules/css-loader/dist/runtime/api.js */ "../../../home/user/.vscode/data/User/globalStorage/sapse.mdk-editor/tools/node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ``, ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ },

/***/ "../../../home/user/.vscode/data/User/globalStorage/sapse.mdk-editor/tools/node_modules/css-loader/dist/runtime/api.js"
/*!*****************************************************************************************************************************!*\
  !*** ../../../home/user/.vscode/data/User/globalStorage/sapse.mdk-editor/tools/node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************************************************************************************/
(module) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ },

/***/ "../../../home/user/.vscode/data/User/globalStorage/sapse.mdk-editor/tools/node_modules/css-loader/dist/runtime/noSourceMaps.js"
/*!**************************************************************************************************************************************!*\
  !*** ../../../home/user/.vscode/data/User/globalStorage/sapse.mdk-editor/tools/node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************************************************************************************/
(module) {

"use strict";


module.exports = function (i) {
  return i[1];
};

/***/ },

/***/ "./build.definitions/sampleapp/Pages/Application/About.page"
/*!******************************************************************!*\
  !*** ./build.definitions/sampleapp/Pages/Application/About.page ***!
  \******************************************************************/
(module) {

module.exports = {"Controls":[{"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"KeyAndValues":[{"_Name":"KeyValue0","KeyName":"User ID","Value":"#Application/#AppData/UserId","Visible":true,"_Type":"KeyValue.Type.Item"},{"Value":"#Application/#AppData/DeviceId","_Name":"KeyValue1","KeyName":"Device ID","Visible":true,"_Type":"KeyValue.Type.Item"},{"Value":"/sampleapp/Globals/Application/ApplicationName.global","_Name":"KeyValue2","KeyName":"Application","Visible":true,"_Type":"KeyValue.Type.Item"},{"Value":"/sampleapp/Globals/Application/AppDefinition_Version.global","_Name":"KeyValue3","KeyName":"Application Metadata Version","Visible":true,"_Type":"KeyValue.Type.Item"}],"MaxItemCount":1,"_Type":"Section.Type.KeyValue","_Name":"SectionKeyValue0","Visible":true,"EmptySection":{"FooterVisible":false},"Layout":{"NumberOfColumns":1}},{"KeyAndValues":[{"Value":"/sampleapp/Rules/Application/GetClientVersion.js","_Name":"KeyValue4","KeyName":"Client Version","Visible":"$(PLT,true,true,false)","_Type":"KeyValue.Type.Item"},{"Value":"/sampleapp/Rules/Application/GetClientSupportVersions.js","_Name":"KeyValue5","KeyName":"Client Support Versions","Visible":true,"_Type":"KeyValue.Type.Item"}],"MaxItemCount":1,"_Type":"Section.Type.KeyValue","_Name":"SectionKeyValue1","Visible":true,"EmptySection":{"FooterVisible":false},"Layout":{"NumberOfColumns":1}}]}],"_Type":"Page","_Name":"About","ActionBar":{"Items":[{"_Name":"ActionBarItem0","Caption":"Done","SystemItem":"Done","Position":"Right","IsIconCircular":false,"Visible":true,"OnPress":"/sampleapp/Actions/CloseModalPage_Complete.action","_Type":"Control.Type.ActionBarItem"}],"_Name":"ActionBar1","Caption":"About","PreferredCaptionSize":"Large","_Type":"Control.Type.ActionBar"}}

/***/ },

/***/ "./build.definitions/sampleapp/Pages/Application/Support.page"
/*!********************************************************************!*\
  !*** ./build.definitions/sampleapp/Pages/Application/Support.page ***!
  \********************************************************************/
(module) {

module.exports = {"Controls":[{"FilterFeedbackBar":{"ShowAllFilters":true,"_Type":"Control.Type.FilterFeedbackBar"},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"_Type":"Section.Type.ContactCell","_Name":"SectionContactCellTable1","EmptySection":{"FooterVisible":false},"ContactCells":[{"ContactCell":{"_Name":"ContactCellItem0","Headline":"Contact Support","ActivityItems":[{"ActivityType":"Phone","ActivityValue":"/sampleapp/Globals/Application/SupportPhone.global"},{"ActivityType":"Email","ActivityValue":"/sampleapp/Globals/Application/SupportEmail.global"},{"ActivityType":"Message","ActivityValue":"/sampleapp/Globals/Application/SupportPhone.global"}]}}]},{"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":false,"FooterSeparator":true,"ControlSeparator":true},"_Type":"Section.Type.SimplePropertyCollection","_Name":"SectionSimplePropertyCollection0","Visible":"$(PLT,true,true,false)","EmptySection":{"FooterVisible":false},"SimplePropertyCells":[{"SimplePropertyCell":{"_Name":"SectionSimplePropertyCell0","KeyName":"Activity Log","AccessoryType":"DisclosureIndicator","Visible":"$(PLT,true,true,false)","OnPress":"/sampleapp/Actions/Application/NavToActivityLog.action","_Type":"SimplePropertyCollection.Type.Cell"}}],"Layout":{"NumberOfColumns":1,"MinimumInteritemSpacing":66}}]}],"_Type":"Page","_Name":"Settings","ActionBar":{"Items":[{"_Name":"ActionBarItem0","Caption":"Done","SystemItem":"Done","Position":"Right","IsIconCircular":false,"Visible":true,"OnPress":"/sampleapp/Actions/CloseModalPage_Complete.action","_Type":"Control.Type.ActionBarItem"}],"_Name":"ActionBar1","Caption":"Settings","PreferredCaptionSize":"Small","_Type":"Control.Type.ActionBar"}}

/***/ },

/***/ "./build.definitions/sampleapp/Pages/Application/UserActivityLog.page"
/*!****************************************************************************!*\
  !*** ./build.definitions/sampleapp/Pages/Application/UserActivityLog.page ***!
  \****************************************************************************/
(module) {

module.exports = {"Controls":[{"FilterFeedbackBar":{"ShowAllFilters":true,"_Type":"Control.Type.FilterFeedbackBar"},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable","Sections":[{"Controls":[{"Value":false,"_Type":"Control.Type.FormCell.Switch","_Name":"EnableLogSwitch","IsVisible":true,"Separator":true,"Caption":"Enable Logging","OnValueChange":"/sampleapp/Rules/Logging/ToggleLogging.js","IsEditable":true},{"IsSearchEnabled":false,"_Type":"Control.Type.FormCell.ListPicker","_Name":"LogLevelListPicker","IsVisible":true,"Separator":true,"AllowMultipleSelection":false,"AllowEmptySelection":false,"Caption":"Log Level","OnValueChange":"/sampleapp/Rules/Logging/SetUserLogLevel.js","IsSelectedSectionEnabled":false,"IsPickerDismissedOnSelection":true,"AllowDefaultValueIfOneItem":false,"IsEditable":false,"PickerItems":"/sampleapp/Rules/Logging/LogLevels.js"},{"_Type":"Control.Type.FormCell.ListPicker","_Name":"TracingCategoriesListPicker","IsVisible":false,"Separator":true,"AllowMultipleSelection":true,"AllowEmptySelection":true,"Caption":"Tracing Categories","PickerPrompt":"Select Categories for Tracing","OnValueChange":"/sampleapp/Rules/Logging/SetTraceCategories.js","IsSelectedSectionEnabled":true,"IsPickerDismissedOnSelection":false,"IsSearchCancelledAfterSelection":false,"AllowDefaultValueIfOneItem":false,"IsEditable":true,"PickerItems":"/sampleapp/Rules/Logging/TraceCategories.js"},{"Value":false,"_Type":"Control.Type.FormCell.Switch","_Name":"odataTrace","IsVisible":false,"Separator":true,"Caption":"OData Tracing","OnValueChange":"/sampleapp/Rules/Logging/SetTraceCategories.js","IsEditable":true}],"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"Visible":true,"EmptySection":{"FooterVisible":false},"_Type":"Section.Type.FormCell","_Name":"FormCellSection0"},{"Controls":[{"_Type":"Control.Type.FormCell.Button","_Name":"Send","IsVisible":true,"Separator":true,"Title":"Send Activity Log","Alignment":"Center","ButtonType":"Text","Semantic":"Tint","ImagePosition":"Leading","Enabled":true,"OnPress":"/sampleapp/Actions/Logging/UploadLogProgress.action"}],"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"Visible":true,"EmptySection":{"FooterVisible":false},"_Type":"Section.Type.FormCell","_Name":"FormCellSection1"}]}],"_Type":"Page","_Name":"UserActivityLog","ActionBar":{"Caption":"Activity Log","PreferredCaptionSize":"Small","_Type":"Control.Type.ActionBar"},"OnLoaded":"/sampleapp/Rules/Logging/UserLogSetting.js"}

/***/ },

/***/ "./build.definitions/sampleapp/Pages/Customers_Detail.page"
/*!*****************************************************************!*\
  !*** ./build.definitions/sampleapp/Pages/Customers_Detail.page ***!
  \*****************************************************************/
(module) {

module.exports = {"Controls":[{"FilterFeedbackBar":{"ShowAllFilters":false,"_Type":"Control.Type.FilterFeedbackBar"},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"ObjectHeader":{"Subhead":"{FirstName}","Footnote":"{EmailAddress}","Description":"{CustomerID}","StatusText":"{PhoneNumber}","DetailImage":"sap-icon://customer","DetailImageIsCircular":false,"BodyText":"{DateOfBirth}","HeadlineText":"{LastName}","StatusPosition":"Stacked","StatusImagePosition":"Leading","SubstatusImagePosition":"Leading"},"_Type":"Section.Type.ObjectHeader","_Name":"SectionObjectHeader0","Visible":true},{"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"KeyAndValues":[{"Value":"{HouseNumber} {Street}","_Type":"KeyValue.Type.Item","_Name":"KeyValue0","KeyName":"Address","Visible":true},{"Value":"{City}","_Type":"KeyValue.Type.Item","_Name":"KeyValue1","KeyName":"City","Visible":true},{"Value":"{PostalCode}","_Type":"KeyValue.Type.Item","_Name":"KeyValue2","KeyName":"Postal Code","Visible":true},{"Value":"{Country}","_Type":"KeyValue.Type.Item","_Name":"KeyValue3","KeyName":"Country","Visible":true}],"MaxItemCount":1,"_Type":"Section.Type.KeyValue","_Name":"SectionKeyValue0","Visible":true,"EmptySection":{"FooterVisible":false},"Layout":{"NumberOfColumns":2}}]}],"DesignTimeTarget":{"Service":"/sampleapp/Services/com_sap_edm_sampleservice_v4.service","EntitySet":"Customers"},"_Type":"Page","_Name":"Customers_Detail","ActionBar":{"Items":[{"_Type":"Control.Type.ActionBarItem","_Name":"ActionBarItem0","Caption":"Edit","Width":18,"Position":"Right","IsIconCircular":false,"Visible":true,"OnPress":"/sampleapp/Actions/NavToCustomers_Edit.action"}],"_Name":"ActionBar1","_Type":"Control.Type.ActionBar"}}

/***/ },

/***/ "./build.definitions/sampleapp/Pages/Customers_Edit.page"
/*!***************************************************************!*\
  !*** ./build.definitions/sampleapp/Pages/Customers_Edit.page ***!
  \***************************************************************/
(module) {

module.exports = {"Controls":[{"FilterFeedbackBar":{"ShowAllFilters":false,"_Type":"Control.Type.FilterFeedbackBar"},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"Visible":true,"EmptySection":{"FooterVisible":false},"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Controls":[{"_Type":"Control.Type.FormCell.SimpleProperty","_Name":"FCFirstName","RequiredIndicator":false,"IsVisible":true,"Separator":true,"Caption":"First Name","PlaceHolder":"{FirstName}","Enabled":true,"IsEditable":true},{"_Type":"Control.Type.FormCell.SimpleProperty","_Name":"FCLastName","RequiredIndicator":false,"IsVisible":true,"Separator":true,"Caption":"Last Name","PlaceHolder":"{LastName}","Enabled":true,"IsEditable":true},{"Value":"{PhoneNumber}","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"FCPhone","RequiredIndicator":false,"IsVisible":true,"Separator":true,"Caption":"Phone","PlaceHolder":"{PhoneNumber}","KeyboardType":"Phone","Enabled":true,"IsEditable":true},{"_Type":"Control.Type.FormCell.SimpleProperty","_Name":"FCEmail","RequiredIndicator":false,"IsVisible":true,"Separator":true,"Caption":"Email","PlaceHolder":"EmailAddress","KeyboardType":"Email","Enabled":true,"IsEditable":true}],"Layout":{"NumberOfColumns":1}}]}],"_Type":"Page","_Name":"Customers_Edit","ActionBar":{"Items":[{"_Type":"Control.Type.ActionBarItem","_Name":"ActionBarItem0","Caption":"Item","SystemItem":"Cancel","Width":18,"Position":"Left","IsIconCircular":false,"Visible":true,"OnPress":"/sampleapp/Actions/CloseModalPage_Cancel.action"},{"_Type":"Control.Type.ActionBarItem","_Name":"ActionBarItem1","Caption":"Item","SystemItem":"Save","Width":18,"Position":"Right","IsIconCircular":false,"Visible":true,"OnPress":"/sampleapp/Actions/Customers_UpdateEntity.action"}],"_Name":"ActionBar0","_Type":"Control.Type.ActionBar","Caption":"Update Customer"}}

/***/ },

/***/ "./build.definitions/sampleapp/Pages/Customers_List.page"
/*!***************************************************************!*\
  !*** ./build.definitions/sampleapp/Pages/Customers_List.page ***!
  \***************************************************************/
(module) {

module.exports = {"Controls":[{"Section":{"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"_Type":"Section.Type.ContactCell","Target":{"Service":"/sampleapp/Services/com_sap_edm_sampleservice_v4.service","EntitySet":"Customers"},"_Name":"SectionContactCell0","Visible":true,"EmptySection":{"FooterVisible":false},"ContactCell":{"Visible":true,"DetailImage":"res://contact.png","BadgeImage":"res://contact.png","Headline":"{LastName}","Subheadline":"{FirstName}","Description":"{City}","OnPress":"/sampleapp/Actions/NavToCustomers_Detail.action","ActivityItems":[{"_Name":"SectionContactCell0ActivityItems1","ActivityType":"Phone","ActivityValue":"{PhoneNumber}"},{"_Name":"SectionContactCell0ActivityItems0","ActivityType":"Email","ActivityValue":"{EmailAddress}"}],"ContextMenu":{"PerformFirstActionWithFullSwipe":true}},"DataPaging":{"ShowLoadingIndicator":false,"PageSize":50},"DetailImageIsCircular":true,"UseHeadlineForDetailImage":false,"Search":{"Enabled":true,"BarcodeScanner":true}},"FilterFeedbackBar":{"ShowAllFilters":false,"_Type":"Control.Type.FilterFeedbackBar"},"_Type":"Control.Type.SectionedTable","Target":{"Service":"/sampleapp/Services/com_sap_edm_sampleservice_v4.service","EntitySet":"Customers"},"_Name":"SectionedTable0"}],"_Type":"Page","_Name":"Customers_List","ActionBar":{"Items":[],"_Name":"ActionBar5","_Type":"Control.Type.ActionBar","Caption":"Customers"}}

/***/ },

/***/ "./build.definitions/sampleapp/Pages/ErrorArchive/ErrorArchive_Detail.page"
/*!*********************************************************************************!*\
  !*** ./build.definitions/sampleapp/Pages/ErrorArchive/ErrorArchive_Detail.page ***!
  \*********************************************************************************/
(module) {

module.exports = {"Controls":[{"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable","Sections":[{"KeyAndValues":[{"Value":"{Message}","_Name":"KeyValue0","KeyName":"Error","Visible":true,"_Type":"KeyValue.Type.Item"},{"Value":"{RequestBody}","_Name":"KeyValue1","KeyName":"Request Body","Visible":true,"_Type":"KeyValue.Type.Item"},{"Value":"{RequestURL}","_Name":"KeyValue2","KeyName":"Request URL","Visible":true,"_Type":"KeyValue.Type.Item"},{"Value":"{HTTPStatusCode}","_Name":"KeyValue3","KeyName":"HTTP Status Code","Visible":true,"_Type":"KeyValue.Type.Item"},{"Value":"{RequestMethod}","_Name":"KeyValue4","KeyName":"Request Method","Visible":true,"_Type":"KeyValue.Type.Item"}],"MaxItemCount":1,"_Type":"Section.Type.KeyValue","_Name":"SectionKeyValue0","Visible":true,"EmptySection":{"FooterVisible":false},"Layout":{"NumberOfColumns":1}}]}],"_Type":"Page","_Name":"ErrorArchive_Detail","ActionBar":{"Caption":"Details","PreferredCaptionSize":"Large","_Type":"Control.Type.ActionBar"}}

/***/ },

/***/ "./build.definitions/sampleapp/Pages/ErrorArchive/ErrorArchive_List.page"
/*!*******************************************************************************!*\
  !*** ./build.definitions/sampleapp/Pages/ErrorArchive/ErrorArchive_List.page ***!
  \*******************************************************************************/
(module) {

module.exports = {"Controls":[{"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"_Type":"Section.Type.ObjectTable","Target":{"Service":"/sampleapp/Services/com_sap_edm_sampleservice_v4.service","EntitySet":"ErrorArchive"},"_Name":"SectionObjectTable0","Visible":true,"EmptySection":{"FooterVisible":false,"Caption":"No record found!"},"ObjectCell":{"ContextMenu":{"Items":[],"PerformFirstActionWithFullSwipe":true,"_Type":"ObjectCell.Type.ContextMenu"},"Title":"{HTTPStatusCode}","Subhead":"{RequestURL}","Footnote":"{Message}","StatusText":"{RequestMethod}","AvatarStack":{"ImageIsCircular":false},"PreserveIconStackSpacing":false,"AccessoryType":"None","OnPress":"/sampleapp/Actions/ErrorArchive/NavToErrorArchive_Detail.action","Selected":false,"_Type":"ObjectTable.Type.ObjectCell"},"DataPaging":{"ShowLoadingIndicator":false,"PageSize":50},"HighlightSelectedItem":false,"Selection":{"ExitOnLastDeselect":true,"LongPressToEnable":"None","Mode":"None"}}]}],"_Type":"Page","_Name":"ErrorArchive_List","ActionBar":{"Caption":"Error List","PreferredCaptionSize":"Large","_Type":"Control.Type.ActionBar"}}

/***/ },

/***/ "./build.definitions/sampleapp/Pages/Main.page"
/*!*****************************************************!*\
  !*** ./build.definitions/sampleapp/Pages/Main.page ***!
  \*****************************************************/
(module) {

module.exports = {"Controls":[{"FilterFeedbackBar":{"ShowAllFilters":false,"_Type":"Control.Type.FilterFeedbackBar"},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"Layout":{"LayoutType":"Vertical","HorizontalAlignment":"Leading"},"_Type":"Section.Type.ButtonTable","_Name":"SectionButtonTable1","Visible":true,"EmptySection":{"FooterVisible":false},"Buttons":[{"_Type":"ButtonTable.Type.Button","_Name":"ButtonTableTypeButton0","Title":"Customers","Alignment":"Center","ButtonType":"Text","Semantic":"Tint","Image":"sap-icon://customer","ImagePosition":"Leading","FullWidth":false,"Visible":true,"Enabled":true,"OnPress":"/sampleapp/Actions/NavToCustomers_List.action"}]}]}],"_Type":"Page","_Name":"Main","ActionBar":{"Items":[{"_Type":"Control.Type.ActionBarItem","_Name":"ActionBarItem0","Caption":"User Menu","Width":18,"Icon":"sap-icon://customer","Position":"Right","IsIconCircular":false,"Visible":true,"OnPress":"/sampleapp/Actions/Application/UserMenuPopover.action"}],"_Name":"ActionBar1","_Type":"Control.Type.ActionBar","Caption":"Main","PreferredCaptionSize":"Large"}}

/***/ },

/***/ "./build.definitions/Application.app"
/*!*******************************************!*\
  !*** ./build.definitions/Application.app ***!
  \*******************************************/
(module) {

module.exports = {"_Name":"sampleapp","Version":"/sampleapp/Globals/Application/AppDefinition_Version.global","MainPage":"/sampleapp/Pages/Main.page","OnLaunch":"/sampleapp/Rules/Service/Initialize.js","OnWillUpdate":"/sampleapp/Rules/Application/OnWillUpdate.js","OnDidUpdate":"/sampleapp/Rules/Service/Initialize.js","Styles":"/sampleapp/Styles/Styles.css","Localization":"/sampleapp/i18n/i18n.properties","_SchemaVersion":"26.6","StyleSheets":{"Styles":{"css":"/sampleapp/Styles/Styles.light.css","ios":"/sampleapp/Styles/Styles.light.nss","android":"/sampleapp/Styles/Styles.light.json"}},"SDKStyles":{"ios":"/sampleapp/Styles/Styles.light.nss","android":"/sampleapp/Styles/Styles.light.json"}}

/***/ },

/***/ "./build.definitions/sampleapp/Actions/Application/AppUpdate.action"
/*!**************************************************************************!*\
  !*** ./build.definitions/sampleapp/Actions/Application/AppUpdate.action ***!
  \**************************************************************************/
(module) {

module.exports = {"_Type":"Action.Type.ApplicationUpdate","ActionResult":{"_Name":"AppUpdate"},"OnFailure":"/sampleapp/Rules/Application/AppUpdateFailure.js","OnSuccess":"/sampleapp/Rules/Application/AppUpdateSuccess.js"}

/***/ },

/***/ "./build.definitions/sampleapp/Actions/Application/AppUpdateFailureMessage.action"
/*!****************************************************************************************!*\
  !*** ./build.definitions/sampleapp/Actions/Application/AppUpdateFailureMessage.action ***!
  \****************************************************************************************/
(module) {

module.exports = {"Message":"$(L,Action_App_Update_Failed) - {#ActionResults:AppUpdate/error}","Duration":7,"Animated":true,"_Type":"Action.Type.BannerMessage"}

/***/ },

/***/ "./build.definitions/sampleapp/Actions/Application/AppUpdateProgressBanner.action"
/*!****************************************************************************************!*\
  !*** ./build.definitions/sampleapp/Actions/Application/AppUpdateProgressBanner.action ***!
  \****************************************************************************************/
(module) {

module.exports = {"Animated":true,"CompletionTimeout":3,"Message":"$(L,Action_App_Update_Checking)","OnSuccess":"/sampleapp/Actions/Application/AppUpdate.action","_Type":"Action.Type.ProgressBanner"}

/***/ },

/***/ "./build.definitions/sampleapp/Actions/Application/AppUpdateSuccessMessage.action"
/*!****************************************************************************************!*\
  !*** ./build.definitions/sampleapp/Actions/Application/AppUpdateSuccessMessage.action ***!
  \****************************************************************************************/
(module) {

module.exports = {"Animated":true,"Duration":2,"Message":"$(L,Action_App_Update_Complete)","_Type":"Action.Type.ToastMessage"}

/***/ },

/***/ "./build.definitions/sampleapp/Actions/Application/Logout.action"
/*!***********************************************************************!*\
  !*** ./build.definitions/sampleapp/Actions/Application/Logout.action ***!
  \***********************************************************************/
(module) {

module.exports = {"_Type":"Action.Type.Logout","SkipReset":true}

/***/ },

/***/ "./build.definitions/sampleapp/Actions/Application/NavToAbout.action"
/*!***************************************************************************!*\
  !*** ./build.definitions/sampleapp/Actions/Application/NavToAbout.action ***!
  \***************************************************************************/
(module) {

module.exports = {"ModalPage":true,"PageToOpen":"/sampleapp/Pages/Application/About.page","_Type":"Action.Type.Navigation"}

/***/ },

/***/ "./build.definitions/sampleapp/Actions/Application/NavToActivityLog.action"
/*!*********************************************************************************!*\
  !*** ./build.definitions/sampleapp/Actions/Application/NavToActivityLog.action ***!
  \*********************************************************************************/
(module) {

module.exports = {"ModalPage":true,"PageToOpen":"/sampleapp/Pages/Application/UserActivityLog.page","_Type":"Action.Type.Navigation"}

/***/ },

/***/ "./build.definitions/sampleapp/Actions/Application/NavToSupport.action"
/*!*****************************************************************************!*\
  !*** ./build.definitions/sampleapp/Actions/Application/NavToSupport.action ***!
  \*****************************************************************************/
(module) {

module.exports = {"ModalPage":true,"NavigationType":"Cross","PageToOpen":"/sampleapp/Pages/Application/Support.page","_Type":"Action.Type.Navigation"}

/***/ },

/***/ "./build.definitions/sampleapp/Actions/Application/OnWillUpdate.action"
/*!*****************************************************************************!*\
  !*** ./build.definitions/sampleapp/Actions/Application/OnWillUpdate.action ***!
  \*****************************************************************************/
(module) {

module.exports = {"_Type":"Action.Type.Message","Message":"$(L,Action_App_Update_Available_Message)","Title":"$(L,Action_App_Update_Available_Title)","OKCaption":"$(L,Action_Now)","CancelCaption":"$(L,Action_Later)","ActionResult":{"_Name":"OnWillUpdate"}}

/***/ },

/***/ "./build.definitions/sampleapp/Actions/Application/Reset.action"
/*!**********************************************************************!*\
  !*** ./build.definitions/sampleapp/Actions/Application/Reset.action ***!
  \**********************************************************************/
(module) {

module.exports = {"_Type":"Action.Type.Logout","SkipReset":false}

/***/ },

/***/ "./build.definitions/sampleapp/Actions/Application/ResetMessage.action"
/*!*****************************************************************************!*\
  !*** ./build.definitions/sampleapp/Actions/Application/ResetMessage.action ***!
  \*****************************************************************************/
(module) {

module.exports = {"_Type":"Action.Type.Message","Message":"$(L,Action_Reset_Message)","Title":"$(L,Action_Reset_Title)","OKCaption":"$(L,Action_Yes)","OnOK":"/sampleapp/Rules/Application/ResetAppSettingsAndLogout.js","CancelCaption":"$(L,Action_No)"}

/***/ },

/***/ "./build.definitions/sampleapp/Actions/Application/UserMenuPopover.action"
/*!********************************************************************************!*\
  !*** ./build.definitions/sampleapp/Actions/Application/UserMenuPopover.action ***!
  \********************************************************************************/
(module) {

module.exports = {"PopoverItems":[{"Enabled":true,"Icon":"sap-icon://synchronize","OnPress":"/sampleapp/Actions/com_sap_edm_sampleservice_v4/Service/SyncStartedMessage.action","Title":"$(L,Action_Menu_Sync_Changes)","Visible":"$(PLT,true,true,false)"},{"Enabled":true,"Icon":"sap-icon://headset","OnPress":"/sampleapp/Actions/Application/NavToSupport.action","Title":"$(L,Action_Menu_Support)","Visible":true},{"Enabled":true,"Icon":"sap-icon://refresh","OnPress":"/sampleapp/Actions/Application/AppUpdateProgressBanner.action","Title":"$(L,Action_Menu_Check_Updates)","Visible":"$(PLT,true,true,false)"},{"Enabled":true,"Icon":"sap-icon://hint","OnPress":"/sampleapp/Actions/Application/NavToAbout.action","Title":"$(L,Action_Menu_About)","Visible":true},{"Enabled":true,"Icon":"sap-icon://reset","OnPress":"/sampleapp/Actions/Application/ResetMessage.action","Title":"$(L,Action_Menu_Reset)","Visible":true},{"Enabled":true,"Icon":"sap-icon://log","OnPress":"/sampleapp/Actions/Application/Logout.action","Title":"$(L,Action_Menu_Logout)","Visible":"/sampleapp/Rules/Application/ClientIsMultiUserMode.js"}],"_Type":"Action.Type.PopoverMenu"}

/***/ },

/***/ "./build.definitions/sampleapp/Actions/CloseModalPage_Cancel.action"
/*!**************************************************************************!*\
  !*** ./build.definitions/sampleapp/Actions/CloseModalPage_Cancel.action ***!
  \**************************************************************************/
(module) {

module.exports = {"DismissModal":"Action.Type.ClosePage.Canceled","CancelPendingActions":true,"_Type":"Action.Type.ClosePage"}

/***/ },

/***/ "./build.definitions/sampleapp/Actions/CloseModalPage_Complete.action"
/*!****************************************************************************!*\
  !*** ./build.definitions/sampleapp/Actions/CloseModalPage_Complete.action ***!
  \****************************************************************************/
(module) {

module.exports = {"DismissModal":"Action.Type.ClosePage.Completed","CancelPendingActions":false,"_Type":"Action.Type.ClosePage"}

/***/ },

/***/ "./build.definitions/sampleapp/Actions/ClosePage.action"
/*!**************************************************************!*\
  !*** ./build.definitions/sampleapp/Actions/ClosePage.action ***!
  \**************************************************************/
(module) {

module.exports = {"_Type":"Action.Type.ClosePage"}

/***/ },

/***/ "./build.definitions/sampleapp/Actions/Customers_UpdateEntity.action"
/*!***************************************************************************!*\
  !*** ./build.definitions/sampleapp/Actions/Customers_UpdateEntity.action ***!
  \***************************************************************************/
(module) {

module.exports = {"_Type":"Action.Type.ODataService.UpdateEntity","ActionResult":{"_Name":"Customers_UpdateEntity"},"OnFailure":"/sampleapp/Actions/UpdateCustomerEntityFailureMessage.action","OnSuccess":"/sampleapp/Actions/CloseModalPage_Complete.action","Target":{"Service":"/sampleapp/Services/com_sap_edm_sampleservice_v4.service","EntitySet":"Customers","ReadLink":"{@odata.readLink}"},"Properties":{"City":"","EmailAddress":"#Control:FCEmail/#Value","FirstName":"#Control:FCFirstName/#Value","LastName":"#Control:FCLastName/#Value","PhoneNumber":"#Control:FCPhone/#Value"}}

/***/ },

/***/ "./build.definitions/sampleapp/Actions/ErrorArchive/ErrorArchive_SyncFailure.action"
/*!******************************************************************************************!*\
  !*** ./build.definitions/sampleapp/Actions/ErrorArchive/ErrorArchive_SyncFailure.action ***!
  \******************************************************************************************/
(module) {

module.exports = {"_Type":"Action.Type.BannerMessage","Message":"$(L,Action_ErrorArchive_Upload_Failed)","Duration":0,"Animated":false,"OnActionLabelPress":"/sampleapp/Actions/ErrorArchive/NavToErrorArchive_List.action","ActionLabel":"$(L,Action_ErrorArchive_View_Errors)"}

/***/ },

/***/ "./build.definitions/sampleapp/Actions/ErrorArchive/NavToErrorArchive_Detail.action"
/*!******************************************************************************************!*\
  !*** ./build.definitions/sampleapp/Actions/ErrorArchive/NavToErrorArchive_Detail.action ***!
  \******************************************************************************************/
(module) {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/sampleapp/Pages/ErrorArchive/ErrorArchive_Detail.page","NavigationType":"Inner"}

/***/ },

/***/ "./build.definitions/sampleapp/Actions/ErrorArchive/NavToErrorArchive_List.action"
/*!****************************************************************************************!*\
  !*** ./build.definitions/sampleapp/Actions/ErrorArchive/NavToErrorArchive_List.action ***!
  \****************************************************************************************/
(module) {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/sampleapp/Pages/ErrorArchive/ErrorArchive_List.page","NavigationType":"Inner"}

/***/ },

/***/ "./build.definitions/sampleapp/Actions/GenericBannerMessage.action"
/*!*************************************************************************!*\
  !*** ./build.definitions/sampleapp/Actions/GenericBannerMessage.action ***!
  \*************************************************************************/
(module) {

module.exports = {"_Type":"Action.Type.BannerMessage","ActionResult":{"_Name":"GenericBannerMessage"},"Message":"$(L,Action_Generic_Message)"}

/***/ },

/***/ "./build.definitions/sampleapp/Actions/GenericMessageBox.action"
/*!**********************************************************************!*\
  !*** ./build.definitions/sampleapp/Actions/GenericMessageBox.action ***!
  \**********************************************************************/
(module) {

module.exports = {"_Type":"Action.Type.Message","ActionResult":{"_Name":"GenericMessageBox"},"Message":"$(L,Action_Generic_Message)","OKCaption":"$(L,Action_OK)"}

/***/ },

/***/ "./build.definitions/sampleapp/Actions/GenericNavigation.action"
/*!**********************************************************************!*\
  !*** ./build.definitions/sampleapp/Actions/GenericNavigation.action ***!
  \**********************************************************************/
(module) {

module.exports = {"_Type":"Action.Type.Navigation","ActionResult":{"_Name":"GenericNavigation"},"PageToOpen":"/sampleapp/Pages/Main.page"}

/***/ },

/***/ "./build.definitions/sampleapp/Actions/GenericToastMessage.action"
/*!************************************************************************!*\
  !*** ./build.definitions/sampleapp/Actions/GenericToastMessage.action ***!
  \************************************************************************/
(module) {

module.exports = {"_Type":"Action.Type.ToastMessage","ActionResult":{"_Name":"GenericToastMessage"},"Message":"$(L,Action_Generic_Message)"}

/***/ },

/***/ "./build.definitions/sampleapp/Actions/Logging/LogUploadFailure.action"
/*!*****************************************************************************!*\
  !*** ./build.definitions/sampleapp/Actions/Logging/LogUploadFailure.action ***!
  \*****************************************************************************/
(module) {

module.exports = {"Message":"$(L,Action_Log_Upload_Failed_Message): {#ActionResults:UploadLog/error}","OKCaption":"$(L,Action_OK)","Title":"$(L,Action_Log_Upload_Failed_Title)","_Type":"Action.Type.Message"}

/***/ },

/***/ "./build.definitions/sampleapp/Actions/Logging/LogUploadSuccessful.action"
/*!********************************************************************************!*\
  !*** ./build.definitions/sampleapp/Actions/Logging/LogUploadSuccessful.action ***!
  \********************************************************************************/
(module) {

module.exports = {"Animated":true,"Duration":3,"IsIconHidden":false,"MaxNumberOfLines":1,"Message":"$(L,Action_Log_Uploaded)","_Type":"Action.Type.ToastMessage"}

/***/ },

/***/ "./build.definitions/sampleapp/Actions/Logging/UploadLog.action"
/*!**********************************************************************!*\
  !*** ./build.definitions/sampleapp/Actions/Logging/UploadLog.action ***!
  \**********************************************************************/
(module) {

module.exports = {"ActionResult":{"_Name":"UploadLog"},"ActivityIndicatorText":"$(L,Action_Log_Upload_Activity)","OnFailure":"/sampleapp/Actions/Logging/LogUploadFailure.action","OnSuccess":"/sampleapp/Actions/Logging/LogUploadSuccessful.action","ShowActivityIndicator":false,"_Type":"Action.Type.Logger.Upload"}

/***/ },

/***/ "./build.definitions/sampleapp/Actions/Logging/UploadLogProgress.action"
/*!******************************************************************************!*\
  !*** ./build.definitions/sampleapp/Actions/Logging/UploadLogProgress.action ***!
  \******************************************************************************/
(module) {

module.exports = {"Animated":true,"CompletionMessage":"$(L,Action_Log_Upload_Completed)","CompletionTimeout":2,"Message":"$(L,Action_Log_Upload_Started)","OnSuccess":"/sampleapp/Actions/Logging/UploadLog.action","_Type":"Action.Type.ProgressBanner"}

/***/ },

/***/ "./build.definitions/sampleapp/Actions/NavToCustomers_Detail.action"
/*!**************************************************************************!*\
  !*** ./build.definitions/sampleapp/Actions/NavToCustomers_Detail.action ***!
  \**************************************************************************/
(module) {

module.exports = {"_Type":"Action.Type.Navigation","ActionResult":{"_Name":"NavToCustomers_Detail"},"PageToOpen":"/sampleapp/Pages/Customers_Detail.page"}

/***/ },

/***/ "./build.definitions/sampleapp/Actions/NavToCustomers_Edit.action"
/*!************************************************************************!*\
  !*** ./build.definitions/sampleapp/Actions/NavToCustomers_Edit.action ***!
  \************************************************************************/
(module) {

module.exports = {"_Type":"Action.Type.Navigation","ActionResult":{"_Name":"NavToCustomers_Edit"},"PageToOpen":"/sampleapp/Pages/Customers_Edit.page","ModalPage":true}

/***/ },

/***/ "./build.definitions/sampleapp/Actions/NavToCustomers_List.action"
/*!************************************************************************!*\
  !*** ./build.definitions/sampleapp/Actions/NavToCustomers_List.action ***!
  \************************************************************************/
(module) {

module.exports = {"_Type":"Action.Type.Navigation","ActionResult":{"_Name":"NavToCustomers_List"},"PageToOpen":"/sampleapp/Pages/Customers_List.page"}

/***/ },

/***/ "./build.definitions/sampleapp/Actions/UpdateCustomerEntityFailureMessage.action"
/*!***************************************************************************************!*\
  !*** ./build.definitions/sampleapp/Actions/UpdateCustomerEntityFailureMessage.action ***!
  \***************************************************************************************/
(module) {

module.exports = {"_Type":"Action.Type.Message","ActionResult":{"_Name":"UpdateCustomerEntityFailureMessage"},"Message":"Failed to Save Customer Updates - {#ActionResults:Customers_UpdateEntity/error}","Title":"Update Customer","OKCaption":"OK"}

/***/ },

/***/ "./build.definitions/sampleapp/Actions/com_sap_edm_sampleservice_v4/Service/CloseOffline.action"
/*!******************************************************************************************************!*\
  !*** ./build.definitions/sampleapp/Actions/com_sap_edm_sampleservice_v4/Service/CloseOffline.action ***!
  \******************************************************************************************************/
(module) {

module.exports = {"_Type":"Action.Type.OfflineOData.Close","Service":"/sampleapp/Services/com_sap_edm_sampleservice_v4.service","Force":true,"ActionResult":{"_Name":"close"},"OnSuccess":"/sampleapp/Actions/com_sap_edm_sampleservice_v4/Service/CloseOfflineSuccessMessage.action","OnFailure":"/sampleapp/Actions/com_sap_edm_sampleservice_v4/Service/CloseOfflineFailureMessage.action"}

/***/ },

/***/ "./build.definitions/sampleapp/Actions/com_sap_edm_sampleservice_v4/Service/CloseOfflineFailureMessage.action"
/*!********************************************************************************************************************!*\
  !*** ./build.definitions/sampleapp/Actions/com_sap_edm_sampleservice_v4/Service/CloseOfflineFailureMessage.action ***!
  \********************************************************************************************************************/
(module) {

module.exports = {"Message":"$(L,Action_Close_Failure) - {#ActionResults:close/error}","NumberOfLines":1,"Duration":3,"Animated":true,"IsIconHidden":true,"_Type":"Action.Type.ToastMessage"}

/***/ },

/***/ "./build.definitions/sampleapp/Actions/com_sap_edm_sampleservice_v4/Service/CloseOfflineSuccessMessage.action"
/*!********************************************************************************************************************!*\
  !*** ./build.definitions/sampleapp/Actions/com_sap_edm_sampleservice_v4/Service/CloseOfflineSuccessMessage.action ***!
  \********************************************************************************************************************/
(module) {

module.exports = {"Message":"$(L,Action_Close_Success)","NumberOfLines":1,"Duration":3,"Animated":true,"IsIconHidden":true,"_Type":"Action.Type.ToastMessage"}

/***/ },

/***/ "./build.definitions/sampleapp/Actions/com_sap_edm_sampleservice_v4/Service/DownloadOffline.action"
/*!*********************************************************************************************************!*\
  !*** ./build.definitions/sampleapp/Actions/com_sap_edm_sampleservice_v4/Service/DownloadOffline.action ***!
  \*********************************************************************************************************/
(module) {

module.exports = {"Service":"/sampleapp/Services/com_sap_edm_sampleservice_v4.service","DefiningRequests":[{"Name":"Customers","Query":"Customers"},{"Name":"Products","Query":"Products"},{"Name":"SalesOrderHeaders","Query":"SalesOrderHeaders"},{"Name":"SalesOrderItems","Query":"SalesOrderItems"}],"_Type":"Action.Type.OfflineOData.Download","ActionResult":{"_Name":"sync"},"OnFailure":"/sampleapp/Actions/com_sap_edm_sampleservice_v4/Service/SyncFailureMessage.action","OnSuccess":"/sampleapp/Rules/com_sap_edm_sampleservice_v4/ErrorArchive_CheckForSyncError.js"}

/***/ },

/***/ "./build.definitions/sampleapp/Actions/com_sap_edm_sampleservice_v4/Service/DownloadStartedMessage.action"
/*!****************************************************************************************************************!*\
  !*** ./build.definitions/sampleapp/Actions/com_sap_edm_sampleservice_v4/Service/DownloadStartedMessage.action ***!
  \****************************************************************************************************************/
(module) {

module.exports = {"Message":"$(L,Action_Download_Started)","CompletionMessage":"$(L,Action_Download_Successful)","CompletionTimeout":7,"OnSuccess":"/sampleapp/Actions/com_sap_edm_sampleservice_v4/Service/DownloadOffline.action","_Type":"Action.Type.ProgressBanner"}

/***/ },

/***/ "./build.definitions/sampleapp/Actions/com_sap_edm_sampleservice_v4/Service/InitializeOffline.action"
/*!***********************************************************************************************************!*\
  !*** ./build.definitions/sampleapp/Actions/com_sap_edm_sampleservice_v4/Service/InitializeOffline.action ***!
  \***********************************************************************************************************/
(module) {

module.exports = {"Service":"/sampleapp/Services/com_sap_edm_sampleservice_v4.service","DefiningRequests":[{"Name":"Customers","Query":"Customers"},{"Name":"Products","Query":"Products"},{"Name":"SalesOrderHeaders","Query":"SalesOrderHeaders"},{"Name":"SalesOrderItems","Query":"SalesOrderItems"}],"_Type":"Action.Type.ODataService.Initialize","ShowActivityIndicator":true,"ActivityIndicatorText":"$(L,Action_Init_Activity)","ActionResult":{"_Name":"init"},"OnFailure":"/sampleapp/Actions/com_sap_edm_sampleservice_v4/Service/InitializeOfflineFailureMessage.action","OnSuccess":"/sampleapp/Actions/com_sap_edm_sampleservice_v4/Service/InitializeOfflineSuccessMessage.action"}

/***/ },

/***/ "./build.definitions/sampleapp/Actions/com_sap_edm_sampleservice_v4/Service/InitializeOfflineFailureMessage.action"
/*!*************************************************************************************************************************!*\
  !*** ./build.definitions/sampleapp/Actions/com_sap_edm_sampleservice_v4/Service/InitializeOfflineFailureMessage.action ***!
  \*************************************************************************************************************************/
(module) {

module.exports = {"Message":"$(L,Action_Init_Failure) - {#ActionResults:init/error}","Duration":7,"Animated":true,"_Type":"Action.Type.BannerMessage"}

/***/ },

/***/ "./build.definitions/sampleapp/Actions/com_sap_edm_sampleservice_v4/Service/InitializeOfflineSuccessMessage.action"
/*!*************************************************************************************************************************!*\
  !*** ./build.definitions/sampleapp/Actions/com_sap_edm_sampleservice_v4/Service/InitializeOfflineSuccessMessage.action ***!
  \*************************************************************************************************************************/
(module) {

module.exports = {"_Type":"Action.Type.ToastMessage","Message":"$(L,Action_Init_Success)","Animated":true,"Duration":3,"IsIconHidden":true,"NumberOfLines":1}

/***/ },

/***/ "./build.definitions/sampleapp/Actions/com_sap_edm_sampleservice_v4/Service/SyncFailureMessage.action"
/*!************************************************************************************************************!*\
  !*** ./build.definitions/sampleapp/Actions/com_sap_edm_sampleservice_v4/Service/SyncFailureMessage.action ***!
  \************************************************************************************************************/
(module) {

module.exports = {"Message":"$(L,Action_Sync_Failure) - {#ActionResults:sync/error}","Duration":7,"Animated":true,"_Type":"Action.Type.BannerMessage"}

/***/ },

/***/ "./build.definitions/sampleapp/Actions/com_sap_edm_sampleservice_v4/Service/SyncStartedMessage.action"
/*!************************************************************************************************************!*\
  !*** ./build.definitions/sampleapp/Actions/com_sap_edm_sampleservice_v4/Service/SyncStartedMessage.action ***!
  \************************************************************************************************************/
(module) {

module.exports = {"Message":"$(L,Action_Sync_Started)","CompletionMessage":"$(L,Action_Sync_Completed)","CompletionTimeout":7,"OnSuccess":"/sampleapp/Actions/com_sap_edm_sampleservice_v4/Service/UploadOffline.action","OnFailure":"/sampleapp/Actions/com_sap_edm_sampleservice_v4/Service/SyncFailureMessage.action","_Type":"Action.Type.ProgressBanner"}

/***/ },

/***/ "./build.definitions/sampleapp/Actions/com_sap_edm_sampleservice_v4/Service/UploadOffline.action"
/*!*******************************************************************************************************!*\
  !*** ./build.definitions/sampleapp/Actions/com_sap_edm_sampleservice_v4/Service/UploadOffline.action ***!
  \*******************************************************************************************************/
(module) {

module.exports = {"Service":"/sampleapp/Services/com_sap_edm_sampleservice_v4.service","_Type":"Action.Type.OfflineOData.Upload","ActionResult":{"_Name":"sync"},"OnSuccess":"/sampleapp/Actions/com_sap_edm_sampleservice_v4/Service/DownloadStartedMessage.action","OnFailure":"/sampleapp/Actions/com_sap_edm_sampleservice_v4/Service/SyncFailureMessage.action"}

/***/ },

/***/ "./build.definitions/sampleapp/Globals/Application/AppDefinition_Version.global"
/*!**************************************************************************************!*\
  !*** ./build.definitions/sampleapp/Globals/Application/AppDefinition_Version.global ***!
  \**************************************************************************************/
(module) {

module.exports = {"Value":"1.0.0","_Type":"String"}

/***/ },

/***/ "./build.definitions/sampleapp/Globals/Application/ApplicationName.global"
/*!********************************************************************************!*\
  !*** ./build.definitions/sampleapp/Globals/Application/ApplicationName.global ***!
  \********************************************************************************/
(module) {

module.exports = {"Value":"MDK App","_Type":"String"}

/***/ },

/***/ "./build.definitions/sampleapp/Globals/Application/SupportEmail.global"
/*!*****************************************************************************!*\
  !*** ./build.definitions/sampleapp/Globals/Application/SupportEmail.global ***!
  \*****************************************************************************/
(module) {

module.exports = {"Value":"support@mycompany.com","_Type":"String"}

/***/ },

/***/ "./build.definitions/sampleapp/Globals/Application/SupportPhone.global"
/*!*****************************************************************************!*\
  !*** ./build.definitions/sampleapp/Globals/Application/SupportPhone.global ***!
  \*****************************************************************************/
(module) {

module.exports = {"Value":"1-800-677-7271","_Type":"String"}

/***/ },

/***/ "./build.definitions/sampleapp/Services/com_sap_edm_sampleservice_v4.service"
/*!***********************************************************************************!*\
  !*** ./build.definitions/sampleapp/Services/com_sap_edm_sampleservice_v4.service ***!
  \***********************************************************************************/
(module) {

module.exports = {"DestinationName":"com.sap.edm.sampleservice.v4","OfflineEnabled":true,"LanguageURLParam":"","OnlineOptions":{},"OfflineOptions":{"StoreParameters":{}},"PathSuffix":"","SourceType":"Mobile","ServiceUrl":""}

/***/ },

/***/ "./build.definitions/application-index.js"
/*!************************************************!*\
  !*** ./build.definitions/application-index.js ***!
  \************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

let application_app = __webpack_require__(/*! ./Application.app */ "./build.definitions/Application.app")
let sampleapp_actions_application_appupdate_action = __webpack_require__(/*! ./sampleapp/Actions/Application/AppUpdate.action */ "./build.definitions/sampleapp/Actions/Application/AppUpdate.action")
let sampleapp_actions_application_appupdatefailuremessage_action = __webpack_require__(/*! ./sampleapp/Actions/Application/AppUpdateFailureMessage.action */ "./build.definitions/sampleapp/Actions/Application/AppUpdateFailureMessage.action")
let sampleapp_actions_application_appupdateprogressbanner_action = __webpack_require__(/*! ./sampleapp/Actions/Application/AppUpdateProgressBanner.action */ "./build.definitions/sampleapp/Actions/Application/AppUpdateProgressBanner.action")
let sampleapp_actions_application_appupdatesuccessmessage_action = __webpack_require__(/*! ./sampleapp/Actions/Application/AppUpdateSuccessMessage.action */ "./build.definitions/sampleapp/Actions/Application/AppUpdateSuccessMessage.action")
let sampleapp_actions_application_logout_action = __webpack_require__(/*! ./sampleapp/Actions/Application/Logout.action */ "./build.definitions/sampleapp/Actions/Application/Logout.action")
let sampleapp_actions_application_navtoabout_action = __webpack_require__(/*! ./sampleapp/Actions/Application/NavToAbout.action */ "./build.definitions/sampleapp/Actions/Application/NavToAbout.action")
let sampleapp_actions_application_navtoactivitylog_action = __webpack_require__(/*! ./sampleapp/Actions/Application/NavToActivityLog.action */ "./build.definitions/sampleapp/Actions/Application/NavToActivityLog.action")
let sampleapp_actions_application_navtosupport_action = __webpack_require__(/*! ./sampleapp/Actions/Application/NavToSupport.action */ "./build.definitions/sampleapp/Actions/Application/NavToSupport.action")
let sampleapp_actions_application_onwillupdate_action = __webpack_require__(/*! ./sampleapp/Actions/Application/OnWillUpdate.action */ "./build.definitions/sampleapp/Actions/Application/OnWillUpdate.action")
let sampleapp_actions_application_reset_action = __webpack_require__(/*! ./sampleapp/Actions/Application/Reset.action */ "./build.definitions/sampleapp/Actions/Application/Reset.action")
let sampleapp_actions_application_resetmessage_action = __webpack_require__(/*! ./sampleapp/Actions/Application/ResetMessage.action */ "./build.definitions/sampleapp/Actions/Application/ResetMessage.action")
let sampleapp_actions_application_usermenupopover_action = __webpack_require__(/*! ./sampleapp/Actions/Application/UserMenuPopover.action */ "./build.definitions/sampleapp/Actions/Application/UserMenuPopover.action")
let sampleapp_actions_closemodalpage_cancel_action = __webpack_require__(/*! ./sampleapp/Actions/CloseModalPage_Cancel.action */ "./build.definitions/sampleapp/Actions/CloseModalPage_Cancel.action")
let sampleapp_actions_closemodalpage_complete_action = __webpack_require__(/*! ./sampleapp/Actions/CloseModalPage_Complete.action */ "./build.definitions/sampleapp/Actions/CloseModalPage_Complete.action")
let sampleapp_actions_closepage_action = __webpack_require__(/*! ./sampleapp/Actions/ClosePage.action */ "./build.definitions/sampleapp/Actions/ClosePage.action")
let sampleapp_actions_com_sap_edm_sampleservice_v4_service_closeoffline_action = __webpack_require__(/*! ./sampleapp/Actions/com_sap_edm_sampleservice_v4/Service/CloseOffline.action */ "./build.definitions/sampleapp/Actions/com_sap_edm_sampleservice_v4/Service/CloseOffline.action")
let sampleapp_actions_com_sap_edm_sampleservice_v4_service_closeofflinefailuremessage_action = __webpack_require__(/*! ./sampleapp/Actions/com_sap_edm_sampleservice_v4/Service/CloseOfflineFailureMessage.action */ "./build.definitions/sampleapp/Actions/com_sap_edm_sampleservice_v4/Service/CloseOfflineFailureMessage.action")
let sampleapp_actions_com_sap_edm_sampleservice_v4_service_closeofflinesuccessmessage_action = __webpack_require__(/*! ./sampleapp/Actions/com_sap_edm_sampleservice_v4/Service/CloseOfflineSuccessMessage.action */ "./build.definitions/sampleapp/Actions/com_sap_edm_sampleservice_v4/Service/CloseOfflineSuccessMessage.action")
let sampleapp_actions_com_sap_edm_sampleservice_v4_service_downloadoffline_action = __webpack_require__(/*! ./sampleapp/Actions/com_sap_edm_sampleservice_v4/Service/DownloadOffline.action */ "./build.definitions/sampleapp/Actions/com_sap_edm_sampleservice_v4/Service/DownloadOffline.action")
let sampleapp_actions_com_sap_edm_sampleservice_v4_service_downloadstartedmessage_action = __webpack_require__(/*! ./sampleapp/Actions/com_sap_edm_sampleservice_v4/Service/DownloadStartedMessage.action */ "./build.definitions/sampleapp/Actions/com_sap_edm_sampleservice_v4/Service/DownloadStartedMessage.action")
let sampleapp_actions_com_sap_edm_sampleservice_v4_service_initializeoffline_action = __webpack_require__(/*! ./sampleapp/Actions/com_sap_edm_sampleservice_v4/Service/InitializeOffline.action */ "./build.definitions/sampleapp/Actions/com_sap_edm_sampleservice_v4/Service/InitializeOffline.action")
let sampleapp_actions_com_sap_edm_sampleservice_v4_service_initializeofflinefailuremessage_action = __webpack_require__(/*! ./sampleapp/Actions/com_sap_edm_sampleservice_v4/Service/InitializeOfflineFailureMessage.action */ "./build.definitions/sampleapp/Actions/com_sap_edm_sampleservice_v4/Service/InitializeOfflineFailureMessage.action")
let sampleapp_actions_com_sap_edm_sampleservice_v4_service_initializeofflinesuccessmessage_action = __webpack_require__(/*! ./sampleapp/Actions/com_sap_edm_sampleservice_v4/Service/InitializeOfflineSuccessMessage.action */ "./build.definitions/sampleapp/Actions/com_sap_edm_sampleservice_v4/Service/InitializeOfflineSuccessMessage.action")
let sampleapp_actions_com_sap_edm_sampleservice_v4_service_syncfailuremessage_action = __webpack_require__(/*! ./sampleapp/Actions/com_sap_edm_sampleservice_v4/Service/SyncFailureMessage.action */ "./build.definitions/sampleapp/Actions/com_sap_edm_sampleservice_v4/Service/SyncFailureMessage.action")
let sampleapp_actions_com_sap_edm_sampleservice_v4_service_syncstartedmessage_action = __webpack_require__(/*! ./sampleapp/Actions/com_sap_edm_sampleservice_v4/Service/SyncStartedMessage.action */ "./build.definitions/sampleapp/Actions/com_sap_edm_sampleservice_v4/Service/SyncStartedMessage.action")
let sampleapp_actions_com_sap_edm_sampleservice_v4_service_uploadoffline_action = __webpack_require__(/*! ./sampleapp/Actions/com_sap_edm_sampleservice_v4/Service/UploadOffline.action */ "./build.definitions/sampleapp/Actions/com_sap_edm_sampleservice_v4/Service/UploadOffline.action")
let sampleapp_actions_customers_updateentity_action = __webpack_require__(/*! ./sampleapp/Actions/Customers_UpdateEntity.action */ "./build.definitions/sampleapp/Actions/Customers_UpdateEntity.action")
let sampleapp_actions_errorarchive_errorarchive_syncfailure_action = __webpack_require__(/*! ./sampleapp/Actions/ErrorArchive/ErrorArchive_SyncFailure.action */ "./build.definitions/sampleapp/Actions/ErrorArchive/ErrorArchive_SyncFailure.action")
let sampleapp_actions_errorarchive_navtoerrorarchive_detail_action = __webpack_require__(/*! ./sampleapp/Actions/ErrorArchive/NavToErrorArchive_Detail.action */ "./build.definitions/sampleapp/Actions/ErrorArchive/NavToErrorArchive_Detail.action")
let sampleapp_actions_errorarchive_navtoerrorarchive_list_action = __webpack_require__(/*! ./sampleapp/Actions/ErrorArchive/NavToErrorArchive_List.action */ "./build.definitions/sampleapp/Actions/ErrorArchive/NavToErrorArchive_List.action")
let sampleapp_actions_genericbannermessage_action = __webpack_require__(/*! ./sampleapp/Actions/GenericBannerMessage.action */ "./build.definitions/sampleapp/Actions/GenericBannerMessage.action")
let sampleapp_actions_genericmessagebox_action = __webpack_require__(/*! ./sampleapp/Actions/GenericMessageBox.action */ "./build.definitions/sampleapp/Actions/GenericMessageBox.action")
let sampleapp_actions_genericnavigation_action = __webpack_require__(/*! ./sampleapp/Actions/GenericNavigation.action */ "./build.definitions/sampleapp/Actions/GenericNavigation.action")
let sampleapp_actions_generictoastmessage_action = __webpack_require__(/*! ./sampleapp/Actions/GenericToastMessage.action */ "./build.definitions/sampleapp/Actions/GenericToastMessage.action")
let sampleapp_actions_logging_loguploadfailure_action = __webpack_require__(/*! ./sampleapp/Actions/Logging/LogUploadFailure.action */ "./build.definitions/sampleapp/Actions/Logging/LogUploadFailure.action")
let sampleapp_actions_logging_loguploadsuccessful_action = __webpack_require__(/*! ./sampleapp/Actions/Logging/LogUploadSuccessful.action */ "./build.definitions/sampleapp/Actions/Logging/LogUploadSuccessful.action")
let sampleapp_actions_logging_uploadlog_action = __webpack_require__(/*! ./sampleapp/Actions/Logging/UploadLog.action */ "./build.definitions/sampleapp/Actions/Logging/UploadLog.action")
let sampleapp_actions_logging_uploadlogprogress_action = __webpack_require__(/*! ./sampleapp/Actions/Logging/UploadLogProgress.action */ "./build.definitions/sampleapp/Actions/Logging/UploadLogProgress.action")
let sampleapp_actions_navtocustomers_detail_action = __webpack_require__(/*! ./sampleapp/Actions/NavToCustomers_Detail.action */ "./build.definitions/sampleapp/Actions/NavToCustomers_Detail.action")
let sampleapp_actions_navtocustomers_edit_action = __webpack_require__(/*! ./sampleapp/Actions/NavToCustomers_Edit.action */ "./build.definitions/sampleapp/Actions/NavToCustomers_Edit.action")
let sampleapp_actions_navtocustomers_list_action = __webpack_require__(/*! ./sampleapp/Actions/NavToCustomers_List.action */ "./build.definitions/sampleapp/Actions/NavToCustomers_List.action")
let sampleapp_actions_updatecustomerentityfailuremessage_action = __webpack_require__(/*! ./sampleapp/Actions/UpdateCustomerEntityFailureMessage.action */ "./build.definitions/sampleapp/Actions/UpdateCustomerEntityFailureMessage.action")
let sampleapp_globals_application_appdefinition_version_global = __webpack_require__(/*! ./sampleapp/Globals/Application/AppDefinition_Version.global */ "./build.definitions/sampleapp/Globals/Application/AppDefinition_Version.global")
let sampleapp_globals_application_applicationname_global = __webpack_require__(/*! ./sampleapp/Globals/Application/ApplicationName.global */ "./build.definitions/sampleapp/Globals/Application/ApplicationName.global")
let sampleapp_globals_application_supportemail_global = __webpack_require__(/*! ./sampleapp/Globals/Application/SupportEmail.global */ "./build.definitions/sampleapp/Globals/Application/SupportEmail.global")
let sampleapp_globals_application_supportphone_global = __webpack_require__(/*! ./sampleapp/Globals/Application/SupportPhone.global */ "./build.definitions/sampleapp/Globals/Application/SupportPhone.global")
let sampleapp_i18n_i18n_properties = __webpack_require__(/*! ./sampleapp/i18n/i18n.properties */ "./build.definitions/sampleapp/i18n/i18n.properties")
let sampleapp_jsconfig_json = __webpack_require__(/*! ./sampleapp/jsconfig.json */ "./build.definitions/sampleapp/jsconfig.json")
let sampleapp_package__lock_json = __webpack_require__(/*! ./sampleapp/package-lock.json */ "./build.definitions/sampleapp/package-lock.json")
let sampleapp_pages_application_about_page = __webpack_require__(/*! ./sampleapp/Pages/Application/About.page */ "./build.definitions/sampleapp/Pages/Application/About.page")
let sampleapp_pages_application_support_page = __webpack_require__(/*! ./sampleapp/Pages/Application/Support.page */ "./build.definitions/sampleapp/Pages/Application/Support.page")
let sampleapp_pages_application_useractivitylog_page = __webpack_require__(/*! ./sampleapp/Pages/Application/UserActivityLog.page */ "./build.definitions/sampleapp/Pages/Application/UserActivityLog.page")
let sampleapp_pages_customers_detail_page = __webpack_require__(/*! ./sampleapp/Pages/Customers_Detail.page */ "./build.definitions/sampleapp/Pages/Customers_Detail.page")
let sampleapp_pages_customers_edit_page = __webpack_require__(/*! ./sampleapp/Pages/Customers_Edit.page */ "./build.definitions/sampleapp/Pages/Customers_Edit.page")
let sampleapp_pages_customers_list_page = __webpack_require__(/*! ./sampleapp/Pages/Customers_List.page */ "./build.definitions/sampleapp/Pages/Customers_List.page")
let sampleapp_pages_errorarchive_errorarchive_detail_page = __webpack_require__(/*! ./sampleapp/Pages/ErrorArchive/ErrorArchive_Detail.page */ "./build.definitions/sampleapp/Pages/ErrorArchive/ErrorArchive_Detail.page")
let sampleapp_pages_errorarchive_errorarchive_list_page = __webpack_require__(/*! ./sampleapp/Pages/ErrorArchive/ErrorArchive_List.page */ "./build.definitions/sampleapp/Pages/ErrorArchive/ErrorArchive_List.page")
let sampleapp_pages_main_page = __webpack_require__(/*! ./sampleapp/Pages/Main.page */ "./build.definitions/sampleapp/Pages/Main.page")
let sampleapp_rules_application_appupdatefailure_js = __webpack_require__(/*! ./sampleapp/Rules/Application/AppUpdateFailure.js */ "./build.definitions/sampleapp/Rules/Application/AppUpdateFailure.js")
let sampleapp_rules_application_appupdatesuccess_js = __webpack_require__(/*! ./sampleapp/Rules/Application/AppUpdateSuccess.js */ "./build.definitions/sampleapp/Rules/Application/AppUpdateSuccess.js")
let sampleapp_rules_application_clientismultiusermode_js = __webpack_require__(/*! ./sampleapp/Rules/Application/ClientIsMultiUserMode.js */ "./build.definitions/sampleapp/Rules/Application/ClientIsMultiUserMode.js")
let sampleapp_rules_application_getclientsupportversions_js = __webpack_require__(/*! ./sampleapp/Rules/Application/GetClientSupportVersions.js */ "./build.definitions/sampleapp/Rules/Application/GetClientSupportVersions.js")
let sampleapp_rules_application_getclientversion_js = __webpack_require__(/*! ./sampleapp/Rules/Application/GetClientVersion.js */ "./build.definitions/sampleapp/Rules/Application/GetClientVersion.js")
let sampleapp_rules_application_onwillupdate_js = __webpack_require__(/*! ./sampleapp/Rules/Application/OnWillUpdate.js */ "./build.definitions/sampleapp/Rules/Application/OnWillUpdate.js")
let sampleapp_rules_application_resetappsettingsandlogout_js = __webpack_require__(/*! ./sampleapp/Rules/Application/ResetAppSettingsAndLogout.js */ "./build.definitions/sampleapp/Rules/Application/ResetAppSettingsAndLogout.js")
let sampleapp_rules_com_sap_edm_sampleservice_v4_errorarchive_checkforsyncerror_js = __webpack_require__(/*! ./sampleapp/Rules/com_sap_edm_sampleservice_v4/ErrorArchive_CheckForSyncError.js */ "./build.definitions/sampleapp/Rules/com_sap_edm_sampleservice_v4/ErrorArchive_CheckForSyncError.js")
let sampleapp_rules_logging_loglevels_js = __webpack_require__(/*! ./sampleapp/Rules/Logging/LogLevels.js */ "./build.definitions/sampleapp/Rules/Logging/LogLevels.js")
let sampleapp_rules_logging_settracecategories_js = __webpack_require__(/*! ./sampleapp/Rules/Logging/SetTraceCategories.js */ "./build.definitions/sampleapp/Rules/Logging/SetTraceCategories.js")
let sampleapp_rules_logging_setuserloglevel_js = __webpack_require__(/*! ./sampleapp/Rules/Logging/SetUserLogLevel.js */ "./build.definitions/sampleapp/Rules/Logging/SetUserLogLevel.js")
let sampleapp_rules_logging_togglelogging_js = __webpack_require__(/*! ./sampleapp/Rules/Logging/ToggleLogging.js */ "./build.definitions/sampleapp/Rules/Logging/ToggleLogging.js")
let sampleapp_rules_logging_tracecategories_js = __webpack_require__(/*! ./sampleapp/Rules/Logging/TraceCategories.js */ "./build.definitions/sampleapp/Rules/Logging/TraceCategories.js")
let sampleapp_rules_logging_userlogsetting_js = __webpack_require__(/*! ./sampleapp/Rules/Logging/UserLogSetting.js */ "./build.definitions/sampleapp/Rules/Logging/UserLogSetting.js")
let sampleapp_rules_service_initialize_js = __webpack_require__(/*! ./sampleapp/Rules/Service/Initialize.js */ "./build.definitions/sampleapp/Rules/Service/Initialize.js")
let sampleapp_services_com_sap_edm_sampleservice_v4_service = __webpack_require__(/*! ./sampleapp/Services/com_sap_edm_sampleservice_v4.service */ "./build.definitions/sampleapp/Services/com_sap_edm_sampleservice_v4.service")
let sampleapp_styles_styles_css = __webpack_require__(/*! ./sampleapp/Styles/Styles.css */ "./build.definitions/sampleapp/Styles/Styles.css")
let sampleapp_styles_styles_less = __webpack_require__(/*! ./sampleapp/Styles/Styles.less */ "./build.definitions/sampleapp/Styles/Styles.less")
let sampleapp_styles_styles_light_css = __webpack_require__(/*! ./sampleapp/Styles/Styles.light.css */ "./build.definitions/sampleapp/Styles/Styles.light.css")
let sampleapp_styles_styles_light_json = __webpack_require__(/*! ./sampleapp/Styles/Styles.light.json */ "./build.definitions/sampleapp/Styles/Styles.light.json")
let sampleapp_styles_styles_light_nss = __webpack_require__(/*! ./sampleapp/Styles/Styles.light.nss */ "./build.definitions/sampleapp/Styles/Styles.light.nss")
let tsconfig_json = __webpack_require__(/*! ./tsconfig.json */ "./build.definitions/tsconfig.json")
let version_mdkbundlerversion = __webpack_require__(/*! ./version.mdkbundlerversion */ "./build.definitions/version.mdkbundlerversion")

module.exports = {
	application_app : application_app,
	sampleapp_actions_application_appupdate_action : sampleapp_actions_application_appupdate_action,
	sampleapp_actions_application_appupdatefailuremessage_action : sampleapp_actions_application_appupdatefailuremessage_action,
	sampleapp_actions_application_appupdateprogressbanner_action : sampleapp_actions_application_appupdateprogressbanner_action,
	sampleapp_actions_application_appupdatesuccessmessage_action : sampleapp_actions_application_appupdatesuccessmessage_action,
	sampleapp_actions_application_logout_action : sampleapp_actions_application_logout_action,
	sampleapp_actions_application_navtoabout_action : sampleapp_actions_application_navtoabout_action,
	sampleapp_actions_application_navtoactivitylog_action : sampleapp_actions_application_navtoactivitylog_action,
	sampleapp_actions_application_navtosupport_action : sampleapp_actions_application_navtosupport_action,
	sampleapp_actions_application_onwillupdate_action : sampleapp_actions_application_onwillupdate_action,
	sampleapp_actions_application_reset_action : sampleapp_actions_application_reset_action,
	sampleapp_actions_application_resetmessage_action : sampleapp_actions_application_resetmessage_action,
	sampleapp_actions_application_usermenupopover_action : sampleapp_actions_application_usermenupopover_action,
	sampleapp_actions_closemodalpage_cancel_action : sampleapp_actions_closemodalpage_cancel_action,
	sampleapp_actions_closemodalpage_complete_action : sampleapp_actions_closemodalpage_complete_action,
	sampleapp_actions_closepage_action : sampleapp_actions_closepage_action,
	sampleapp_actions_com_sap_edm_sampleservice_v4_service_closeoffline_action : sampleapp_actions_com_sap_edm_sampleservice_v4_service_closeoffline_action,
	sampleapp_actions_com_sap_edm_sampleservice_v4_service_closeofflinefailuremessage_action : sampleapp_actions_com_sap_edm_sampleservice_v4_service_closeofflinefailuremessage_action,
	sampleapp_actions_com_sap_edm_sampleservice_v4_service_closeofflinesuccessmessage_action : sampleapp_actions_com_sap_edm_sampleservice_v4_service_closeofflinesuccessmessage_action,
	sampleapp_actions_com_sap_edm_sampleservice_v4_service_downloadoffline_action : sampleapp_actions_com_sap_edm_sampleservice_v4_service_downloadoffline_action,
	sampleapp_actions_com_sap_edm_sampleservice_v4_service_downloadstartedmessage_action : sampleapp_actions_com_sap_edm_sampleservice_v4_service_downloadstartedmessage_action,
	sampleapp_actions_com_sap_edm_sampleservice_v4_service_initializeoffline_action : sampleapp_actions_com_sap_edm_sampleservice_v4_service_initializeoffline_action,
	sampleapp_actions_com_sap_edm_sampleservice_v4_service_initializeofflinefailuremessage_action : sampleapp_actions_com_sap_edm_sampleservice_v4_service_initializeofflinefailuremessage_action,
	sampleapp_actions_com_sap_edm_sampleservice_v4_service_initializeofflinesuccessmessage_action : sampleapp_actions_com_sap_edm_sampleservice_v4_service_initializeofflinesuccessmessage_action,
	sampleapp_actions_com_sap_edm_sampleservice_v4_service_syncfailuremessage_action : sampleapp_actions_com_sap_edm_sampleservice_v4_service_syncfailuremessage_action,
	sampleapp_actions_com_sap_edm_sampleservice_v4_service_syncstartedmessage_action : sampleapp_actions_com_sap_edm_sampleservice_v4_service_syncstartedmessage_action,
	sampleapp_actions_com_sap_edm_sampleservice_v4_service_uploadoffline_action : sampleapp_actions_com_sap_edm_sampleservice_v4_service_uploadoffline_action,
	sampleapp_actions_customers_updateentity_action : sampleapp_actions_customers_updateentity_action,
	sampleapp_actions_errorarchive_errorarchive_syncfailure_action : sampleapp_actions_errorarchive_errorarchive_syncfailure_action,
	sampleapp_actions_errorarchive_navtoerrorarchive_detail_action : sampleapp_actions_errorarchive_navtoerrorarchive_detail_action,
	sampleapp_actions_errorarchive_navtoerrorarchive_list_action : sampleapp_actions_errorarchive_navtoerrorarchive_list_action,
	sampleapp_actions_genericbannermessage_action : sampleapp_actions_genericbannermessage_action,
	sampleapp_actions_genericmessagebox_action : sampleapp_actions_genericmessagebox_action,
	sampleapp_actions_genericnavigation_action : sampleapp_actions_genericnavigation_action,
	sampleapp_actions_generictoastmessage_action : sampleapp_actions_generictoastmessage_action,
	sampleapp_actions_logging_loguploadfailure_action : sampleapp_actions_logging_loguploadfailure_action,
	sampleapp_actions_logging_loguploadsuccessful_action : sampleapp_actions_logging_loguploadsuccessful_action,
	sampleapp_actions_logging_uploadlog_action : sampleapp_actions_logging_uploadlog_action,
	sampleapp_actions_logging_uploadlogprogress_action : sampleapp_actions_logging_uploadlogprogress_action,
	sampleapp_actions_navtocustomers_detail_action : sampleapp_actions_navtocustomers_detail_action,
	sampleapp_actions_navtocustomers_edit_action : sampleapp_actions_navtocustomers_edit_action,
	sampleapp_actions_navtocustomers_list_action : sampleapp_actions_navtocustomers_list_action,
	sampleapp_actions_updatecustomerentityfailuremessage_action : sampleapp_actions_updatecustomerentityfailuremessage_action,
	sampleapp_globals_application_appdefinition_version_global : sampleapp_globals_application_appdefinition_version_global,
	sampleapp_globals_application_applicationname_global : sampleapp_globals_application_applicationname_global,
	sampleapp_globals_application_supportemail_global : sampleapp_globals_application_supportemail_global,
	sampleapp_globals_application_supportphone_global : sampleapp_globals_application_supportphone_global,
	sampleapp_i18n_i18n_properties : sampleapp_i18n_i18n_properties,
	sampleapp_jsconfig_json : sampleapp_jsconfig_json,
	sampleapp_package__lock_json : sampleapp_package__lock_json,
	sampleapp_pages_application_about_page : sampleapp_pages_application_about_page,
	sampleapp_pages_application_support_page : sampleapp_pages_application_support_page,
	sampleapp_pages_application_useractivitylog_page : sampleapp_pages_application_useractivitylog_page,
	sampleapp_pages_customers_detail_page : sampleapp_pages_customers_detail_page,
	sampleapp_pages_customers_edit_page : sampleapp_pages_customers_edit_page,
	sampleapp_pages_customers_list_page : sampleapp_pages_customers_list_page,
	sampleapp_pages_errorarchive_errorarchive_detail_page : sampleapp_pages_errorarchive_errorarchive_detail_page,
	sampleapp_pages_errorarchive_errorarchive_list_page : sampleapp_pages_errorarchive_errorarchive_list_page,
	sampleapp_pages_main_page : sampleapp_pages_main_page,
	sampleapp_rules_application_appupdatefailure_js : sampleapp_rules_application_appupdatefailure_js,
	sampleapp_rules_application_appupdatesuccess_js : sampleapp_rules_application_appupdatesuccess_js,
	sampleapp_rules_application_clientismultiusermode_js : sampleapp_rules_application_clientismultiusermode_js,
	sampleapp_rules_application_getclientsupportversions_js : sampleapp_rules_application_getclientsupportversions_js,
	sampleapp_rules_application_getclientversion_js : sampleapp_rules_application_getclientversion_js,
	sampleapp_rules_application_onwillupdate_js : sampleapp_rules_application_onwillupdate_js,
	sampleapp_rules_application_resetappsettingsandlogout_js : sampleapp_rules_application_resetappsettingsandlogout_js,
	sampleapp_rules_com_sap_edm_sampleservice_v4_errorarchive_checkforsyncerror_js : sampleapp_rules_com_sap_edm_sampleservice_v4_errorarchive_checkforsyncerror_js,
	sampleapp_rules_logging_loglevels_js : sampleapp_rules_logging_loglevels_js,
	sampleapp_rules_logging_settracecategories_js : sampleapp_rules_logging_settracecategories_js,
	sampleapp_rules_logging_setuserloglevel_js : sampleapp_rules_logging_setuserloglevel_js,
	sampleapp_rules_logging_togglelogging_js : sampleapp_rules_logging_togglelogging_js,
	sampleapp_rules_logging_tracecategories_js : sampleapp_rules_logging_tracecategories_js,
	sampleapp_rules_logging_userlogsetting_js : sampleapp_rules_logging_userlogsetting_js,
	sampleapp_rules_service_initialize_js : sampleapp_rules_service_initialize_js,
	sampleapp_services_com_sap_edm_sampleservice_v4_service : sampleapp_services_com_sap_edm_sampleservice_v4_service,
	sampleapp_styles_styles_css : sampleapp_styles_styles_css,
	sampleapp_styles_styles_less : sampleapp_styles_styles_less,
	sampleapp_styles_styles_light_css : sampleapp_styles_styles_light_css,
	sampleapp_styles_styles_light_json : sampleapp_styles_styles_light_json,
	sampleapp_styles_styles_light_nss : sampleapp_styles_styles_light_nss,
	tsconfig_json : tsconfig_json,
	version_mdkbundlerversion : version_mdkbundlerversion
}

/***/ },

/***/ "./build.definitions/version.mdkbundlerversion"
/*!*****************************************************!*\
  !*** ./build.definitions/version.mdkbundlerversion ***!
  \*****************************************************/
(module) {

"use strict";
module.exports = "1.1\n";

/***/ },

/***/ "webpack/container/entry/bundle.js"
/*!***********************!*\
  !*** container entry ***!
  \***********************/
(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
const moduleMap = {
	".": () => {
		return Promise.resolve().then(() => (() => ((__webpack_require__(/*! ./build.definitions/application-index.js */ "./build.definitions/application-index.js")))));
	}
};
const get = (module, getScope) => {
	__webpack_require__.R = getScope;
	getScope = (
		__webpack_require__.o(moduleMap, module)
			? moduleMap[module]()
			: Promise.resolve().then(() => {
				throw new Error('Module "' + module + '" does not exist in container.');
			})
	);
	__webpack_require__.R = undefined;
	return getScope;
};
const init = (shareScope, initScope) => {
	if (!__webpack_require__.S) return;
	const name = "default"
	const oldScope = __webpack_require__.S[name];
	if(oldScope && oldScope !== shareScope) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
	__webpack_require__.S[name] = shareScope;
	return __webpack_require__.I(name, initScope);
};

// This exports getters to disallow modifications
__webpack_require__.d(exports, {
	get: () => (get),
	init: () => (init)
});

/***/ },

/***/ "./build.definitions/sampleapp/Styles/Styles.light.json"
/*!**************************************************************!*\
  !*** ./build.definitions/sampleapp/Styles/Styles.light.json ***!
  \**************************************************************/
(module) {

"use strict";
module.exports = {};

/***/ },

/***/ "./build.definitions/sampleapp/jsconfig.json"
/*!***************************************************!*\
  !*** ./build.definitions/sampleapp/jsconfig.json ***!
  \***************************************************/
(module) {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"include":["Rules/**/*",".typings/**/*"]}');

/***/ },

/***/ "./build.definitions/sampleapp/package-lock.json"
/*!*******************************************************!*\
  !*** ./build.definitions/sampleapp/package-lock.json ***!
  \*******************************************************/
(module) {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"name":"sampleapp","lockfileVersion":3,"requires":true,"packages":{}}');

/***/ },

/***/ "./build.definitions/tsconfig.json"
/*!*****************************************!*\
  !*** ./build.definitions/tsconfig.json ***!
  \*****************************************/
(module) {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"compilerOptions":{"module":"esnext","target":"es2019","moduleResolution":"node","lib":["esnext","dom"],"experimentalDecorators":true,"emitDecoratorMetadata":true,"removeComments":true,"inlineSourceMap":true,"noEmitOnError":false,"noEmitHelpers":true,"baseUrl":"."},"exclude":["node_modules"]}');

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			const e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter/value functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			if(Array.isArray(definition)) {
/******/ 				var i = 0;
/******/ 				while(i < definition.length) {
/******/ 					var key = definition[i++];
/******/ 					var binding = definition[i++];
/******/ 					if(!__webpack_require__.o(exports, key)) {
/******/ 						if(binding === 0) {
/******/ 							Object.defineProperty(exports, key, { enumerable: true, value: definition[i++] });
/******/ 						} else {
/******/ 							Object.defineProperty(exports, key, { enumerable: true, get: binding });
/******/ 						}
/******/ 					} else if(binding === 0) { i++; }
/******/ 				}
/******/ 			} else {
/******/ 				for(var key in definition) {
/******/ 					if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 						Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/sharing */
/******/ 	(() => {
/******/ 		__webpack_require__.S = {};
/******/ 		const initPromises = {};
/******/ 		const initTokens = {};
/******/ 		__webpack_require__.I = (name, initScope) => {
/******/ 			if(!initScope) initScope = [];
/******/ 			// handling circular init calls
/******/ 			let initToken = initTokens[name];
/******/ 			if(!initToken) initToken = initTokens[name] = {};
/******/ 			if(initScope.indexOf(initToken) >= 0) return;
/******/ 			initScope.push(initToken);
/******/ 			// only runs once
/******/ 			if(initPromises[name]) return initPromises[name];
/******/ 			// creates a new share scope if needed
/******/ 			if(!__webpack_require__.o(__webpack_require__.S, name)) __webpack_require__.S[name] = {};
/******/ 			// runs all init snippets from all modules reachable
/******/ 			const scope = __webpack_require__.S[name];
/******/ 			const warn = (msg) => {
/******/ 				if (typeof console !== "undefined" && console.warn) console.warn(msg);
/******/ 			};
/******/ 			const uniqueName = undefined;
/******/ 			const register = (name, version, factory, eager) => {
/******/ 				const versions = scope[name] = scope[name] || {};
/******/ 				const activeVersion = versions[version];
/******/ 				if(!activeVersion || (!activeVersion.loaded && (!eager != !activeVersion.eager ? eager : uniqueName > activeVersion.from))) versions[version] = { get: factory, from: uniqueName, eager: !!eager };
/******/ 			};
/******/ 			const initExternal = (id) => {
/******/ 				const handleError = (err) => (warn("Initialization of sharing external failed: " + err));
/******/ 				try {
/******/ 					const module = __webpack_require__(id);
/******/ 					if(!module) return;
/******/ 					const initFn = (module) => (module && module.init && module.init(__webpack_require__.S[name], initScope))
/******/ 					if(module.then) return promises.push(module.then(initFn, handleError));
/******/ 					const initResult = initFn(module);
/******/ 					if(initResult?.then) return promises.push(initResult['catch'](handleError));
/******/ 				} catch(err) { handleError(err); }
/******/ 			}
/******/ 			const promises = [];
/******/ 			switch(name) {
/******/ 			}
/******/ 			if(!promises.length) return initPromises[name] = 1;
/******/ 			return initPromises[name] = Promise.all(promises).then(() => (initPromises[name] = 1));
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	let __webpack_exports__ = __webpack_require__("webpack/container/entry/bundle.js");
/******/ 	const __webpack_export_target__ = exports;
/******/ 	for(var __webpack_i__ in __webpack_exports__) __webpack_export_target__[__webpack_i__] = __webpack_exports__[__webpack_i__];
/******/ 	if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ 	
/******/ })()
;
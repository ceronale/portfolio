"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/projects",{

/***/ "./data/data.jsx":
/*!***********************!*\
  !*** ./data/data.jsx ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"homeData\": function() { return /* binding */ homeData; },\n/* harmony export */   \"aboutData\": function() { return /* binding */ aboutData; },\n/* harmony export */   \"contactData\": function() { return /* binding */ contactData; },\n/* harmony export */   \"gitData\": function() { return /* binding */ gitData; },\n/* harmony export */   \"webSitesProjectsData\": function() { return /* binding */ webSitesProjectsData; },\n/* harmony export */   \"appsProjectsData\": function() { return /* binding */ appsProjectsData; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nvar homeData = {\n    bigTitleUp: \"Hello\",\n    bigTitleDown: \"World\",\n    name: \"Alexander Cer\\xf3n\",\n    profession: \"SOFTWARE DEVELOPER\",\n    leftButton: \"Some work\",\n    rightButton: \"Contact me\"\n};\nvar aboutData = {\n    description: \"Well, my name is Alexander I am a proactive Software engineer based in Chile graduated with honours from the University Bernardo O'higgins I'm always looking for professional growth, and the most important about me is that I like to buid stuff;\"\n};\nvar contactData = [\n    {\n        social: 'website',\n        link: 'ceronale.com',\n        href: 'https://ceronale.com'\n    },\n    {\n        social: 'email',\n        link: 'alexander.ceron16@gmail.com',\n        href: 'mailto:alexander.ceron16@gmail.com'\n    },\n    {\n        social: 'github',\n        link: 'ceronale',\n        href: 'https://github.com/ceronale'\n    },\n    {\n        social: 'linkedin',\n        link: 'Alexander Ceron',\n        href: 'https://www.linkedin.com/in/alexander-ceron-165b85110/'\n    }, \n];\nvar gitData = {\n    user: \"ceronale\",\n    token: \"ceronale\"\n};\nvar webSitesProjectsData = [];\nvar appsProjectsData = [\n    {\n        \"id\": 1,\n        \"name\": \"Just a dashboard\",\n        \"image\": \"https://imgur.com/Rd3mqD3.png\",\n        \"description\": \"Just a simple dashboard with some nice features\",\n        \"tags\": [\n            \"react\",\n            \"tailwind\"\n        ],\n        \"source_code\": \"https://github.com/ceronale/dashboard-react-01\"\n    },\n    {\n        \"id\": 2,\n        \"name\": \"UBO / OIES\",\n        \"image\": \"https://imgur.com/kIr8o4w.png\",\n        \"description\": \"A website for the Bernardo O'Higgins University \",\n        \"tags\": [\n            \"wordpress\",\n            \"elementor\"\n        ],\n        \"demo\": \"http://www.ubo.cl/sustentabilidad/\"\n    },\n    {\n        \"id\": 3,\n        \"name\": \"Apprazi\",\n        \"image\": \"https://imgur.com/afSg8Bi.png\",\n        \"description\": \"A website for an app made by and for photographers\",\n        \"tags\": [\n            \"wordpress\",\n            \"elementor\"\n        ],\n        \"demo\": \"https://apprazi.com/\"\n    },\n    {\n        \"id\": 4,\n        \"name\": \"Plastica Working\",\n        \"image\": \"https://imgur.com/MIEve46.png\",\n        \"description\": \"A website for a  plastic consulting company\",\n        \"tags\": [\n            \"wordpress\",\n            \"elementor\"\n        ],\n        \"demo\": \"https://plasticaworking.cl//\"\n    },\n    {\n        \"id\": 5,\n        \"name\": \"4 Ideas\",\n        \"image\": \"https://imgur.com/lvlOpiY.png\",\n        \"description\": \"E-commerce website for a local market\",\n        \"tags\": [\n            \"wordpress\",\n            \"elementor\"\n        ],\n        \"demo\": \"https://bazar4ideas.cl/\"\n    }\n];\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZGF0YS5qc3g/ZDI3NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5cblxuXG5leHBvcnQgY29uc3QgaG9tZURhdGEgPSB7XG4gIGJpZ1RpdGxlVXA6IFwiSGVsbG9cIixcbiAgYmlnVGl0bGVEb3duOiBcIldvcmxkXCIsXG4gIG5hbWU6IFwiQWxleGFuZGVyIENlcsOzblwiLFxuICBwcm9mZXNzaW9uOiBcIlNPRlRXQVJFIERFVkVMT1BFUlwiLFxuICBsZWZ0QnV0dG9uOiBcIlNvbWUgd29ya1wiLFxuICByaWdodEJ1dHRvbjpcIkNvbnRhY3QgbWVcIlxufTtcblxuZXhwb3J0IGNvbnN0IGFib3V0RGF0YSA9IHtcbiAgZGVzY3JpcHRpb246XCJXZWxsLCBteSBuYW1lIGlzIEFsZXhhbmRlciBJIGFtIGEgcHJvYWN0aXZlIFNvZnR3YXJlIGVuZ2luZWVyIGJhc2VkIGluIENoaWxlIGdyYWR1YXRlZCB3aXRoIGhvbm91cnMgZnJvbSB0aGUgVW5pdmVyc2l0eSBCZXJuYXJkbyBPJ2hpZ2dpbnMgSSdtIGFsd2F5cyBsb29raW5nIGZvciBwcm9mZXNzaW9uYWwgZ3Jvd3RoLCBhbmQgdGhlIG1vc3QgaW1wb3J0YW50IGFib3V0IG1lIGlzIHRoYXQgSSBsaWtlIHRvIGJ1aWQgc3R1ZmY7XCJcbn07XG5cbmV4cG9ydCBjb25zdCBjb250YWN0RGF0YSA9IFtcbiAge1xuICAgIHNvY2lhbDogJ3dlYnNpdGUnLFxuICAgIGxpbms6ICdjZXJvbmFsZS5jb20nLFxuICAgIGhyZWY6ICdodHRwczovL2Nlcm9uYWxlLmNvbScsXG4gIH0sXG4gIHtcbiAgICBzb2NpYWw6ICdlbWFpbCcsXG4gICAgbGluazogJ2FsZXhhbmRlci5jZXJvbjE2QGdtYWlsLmNvbScsXG4gICAgaHJlZjogJ21haWx0bzphbGV4YW5kZXIuY2Vyb24xNkBnbWFpbC5jb20nLFxuICB9LFxuICB7XG4gICAgc29jaWFsOiAnZ2l0aHViJyxcbiAgICBsaW5rOiAnY2Vyb25hbGUnLFxuICAgIGhyZWY6ICdodHRwczovL2dpdGh1Yi5jb20vY2Vyb25hbGUnLFxuICB9LFxuICB7XG4gICAgc29jaWFsOiAnbGlua2VkaW4nLFxuICAgIGxpbms6ICdBbGV4YW5kZXIgQ2Vyb24nLFxuICAgIGhyZWY6ICdodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vYWxleGFuZGVyLWNlcm9uLTE2NWI4NTExMC8nLFxuICB9LFxuICBcbl07XG5cbmV4cG9ydCBjb25zdCBnaXREYXRhID0ge1xuICB1c2VyOiBcImNlcm9uYWxlXCIsXG4gIHRva2VuOlwiY2Vyb25hbGVcIlxufTtcblxuXG5leHBvcnQgY29uc3Qgd2ViU2l0ZXNQcm9qZWN0c0RhdGEgPSBbXG5cbl1cblxuZXhwb3J0IGNvbnN0IGFwcHNQcm9qZWN0c0RhdGEgPSBbXG4gIHtcbiAgICBcImlkXCI6IDEsXG4gICAgXCJuYW1lXCI6IFwiSnVzdCBhIGRhc2hib2FyZFwiLFxuICAgIFwiaW1hZ2VcIjogXCJodHRwczovL2ltZ3VyLmNvbS9SZDNtcUQzLnBuZ1wiLFxuICAgIFwiZGVzY3JpcHRpb25cIjogXCJKdXN0IGEgc2ltcGxlIGRhc2hib2FyZCB3aXRoIHNvbWUgbmljZSBmZWF0dXJlc1wiLFxuICAgIFwidGFnc1wiOiBbXCJyZWFjdFwiLCBcInRhaWx3aW5kXCJdLFxuICAgIFwic291cmNlX2NvZGVcIjogXCJodHRwczovL2dpdGh1Yi5jb20vY2Vyb25hbGUvZGFzaGJvYXJkLXJlYWN0LTAxXCIsXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDIsXG4gICAgXCJuYW1lXCI6IFwiVUJPIC8gT0lFU1wiLFxuICAgIFwiaW1hZ2VcIjogXCJodHRwczovL2ltZ3VyLmNvbS9rSXI4bzR3LnBuZ1wiLFxuICAgIFwiZGVzY3JpcHRpb25cIjogXCJBIHdlYnNpdGUgZm9yIHRoZSBCZXJuYXJkbyBPJ0hpZ2dpbnMgVW5pdmVyc2l0eSBcIixcbiAgICBcInRhZ3NcIjogW1wid29yZHByZXNzXCIsIFwiZWxlbWVudG9yXCJdLFxuICAgIFwiZGVtb1wiOiBcImh0dHA6Ly93d3cudWJvLmNsL3N1c3RlbnRhYmlsaWRhZC9cIlxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAzLFxuICAgIFwibmFtZVwiOiBcIkFwcHJhemlcIixcbiAgICBcImltYWdlXCI6IFwiaHR0cHM6Ly9pbWd1ci5jb20vYWZTZzhCaS5wbmdcIixcbiAgICBcImRlc2NyaXB0aW9uXCI6IFwiQSB3ZWJzaXRlIGZvciBhbiBhcHAgbWFkZSBieSBhbmQgZm9yIHBob3RvZ3JhcGhlcnNcIixcbiAgICBcInRhZ3NcIjogW1wid29yZHByZXNzXCIsIFwiZWxlbWVudG9yXCJdLFxuICAgIFwiZGVtb1wiOiBcImh0dHBzOi8vYXBwcmF6aS5jb20vXCJcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogNCxcbiAgICBcIm5hbWVcIjogXCJQbGFzdGljYSBXb3JraW5nXCIsXG4gICAgXCJpbWFnZVwiOiBcImh0dHBzOi8vaW1ndXIuY29tL01JRXZlNDYucG5nXCIsXG4gICAgXCJkZXNjcmlwdGlvblwiOiBcIkEgd2Vic2l0ZSBmb3IgYSAgcGxhc3RpYyBjb25zdWx0aW5nIGNvbXBhbnlcIixcbiAgICBcInRhZ3NcIjogW1wid29yZHByZXNzXCIsIFwiZWxlbWVudG9yXCJdLFxuICAgIFwiZGVtb1wiOiBcImh0dHBzOi8vcGxhc3RpY2F3b3JraW5nLmNsLy9cIlxuICB9LFxuICB7XG4gICAgXCJpZFwiOiA1LFxuICAgIFwibmFtZVwiOiBcIjQgSWRlYXNcIixcbiAgICBcImltYWdlXCI6IFwiaHR0cHM6Ly9pbWd1ci5jb20vbHZsT3BpWS5wbmdcIixcbiAgICBcImRlc2NyaXB0aW9uXCI6IFwiRS1jb21tZXJjZSB3ZWJzaXRlIGZvciBhIGxvY2FsIG1hcmtldFwiLFxuICAgIFwidGFnc1wiOiBbXCJ3b3JkcHJlc3NcIiwgXCJlbGVtZW50b3JcIl0sXG4gICAgXCJkZW1vXCI6IFwiaHR0cHM6Ly9iYXphcjRpZGVhcy5jbC9cIlxuICB9XG5dXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbiJdLCJuYW1lcyI6WyJSZWFjdCIsImhvbWVEYXRhIiwiYmlnVGl0bGVVcCIsImJpZ1RpdGxlRG93biIsIm5hbWUiLCJwcm9mZXNzaW9uIiwibGVmdEJ1dHRvbiIsInJpZ2h0QnV0dG9uIiwiYWJvdXREYXRhIiwiZGVzY3JpcHRpb24iLCJjb250YWN0RGF0YSIsInNvY2lhbCIsImxpbmsiLCJocmVmIiwiZ2l0RGF0YSIsInVzZXIiLCJ0b2tlbiIsIndlYlNpdGVzUHJvamVjdHNEYXRhIiwiYXBwc1Byb2plY3RzRGF0YSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./data/data.jsx\n");

/***/ })

});
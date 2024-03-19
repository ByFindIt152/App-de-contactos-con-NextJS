exports.id = 843;
exports.ids = [843];
exports.modules = {

/***/ 512:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 1232, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 831, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 2987, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 6926, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 4282, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 6505, 23))

/***/ }),

/***/ 4430:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 1922))

/***/ }),

/***/ 1922:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout),
  metadata: () => (/* binding */ metadata)
});

// EXTERNAL MODULE: external "next/dist/compiled/react-experimental/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6931);
// EXTERNAL MODULE: ./node_modules/next/font/google/target.css?{"path":"src\\app\\layout.jsx","import":"Inter","arguments":[{"subsets":["latin"]}],"variableName":"inter"}
var target_path_src_app_layout_jsx_import_Inter_arguments_subsets_latin_variableName_inter_ = __webpack_require__(3718);
var target_path_src_app_layout_jsx_import_Inter_arguments_subsets_latin_variableName_inter_default = /*#__PURE__*/__webpack_require__.n(target_path_src_app_layout_jsx_import_Inter_arguments_subsets_latin_variableName_inter_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1440);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/Navigation.jsx


function Navigation() {
    return /*#__PURE__*/ jsx_runtime_.jsx("nav", {
        className: "navbar navbar-expand-lg navbar-dark bg-dark",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container-fluid",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                    className: "navbar-brand",
                    href: "/",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                            className: "fa-solid fa-phone p-3"
                        }),
                        "Contactos"
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                    className: "navbar-toggler",
                    type: "button",
                    "data-bs-toggle": "collapse",
                    "data-bs-target": "#navbarNav",
                    "aria-controls": "navbarNav",
                    "aria-expanded": "false",
                    "aria-label": "Toggle navigation",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "navbar-toggler-icon"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "collapse navbar-collapse",
                    id: "navbarNav",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                        className: "navbar-nav ms-auto",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: "nav-item",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                className: "nav-link",
                                href: "/about",
                                children: "Sobre Mi"
                            })
                        })
                    })
                })
            ]
        })
    });
}

// EXTERNAL MODULE: ./src/app/globals.css
var globals = __webpack_require__(3824);
// EXTERNAL MODULE: ./node_modules/next-reveal/dist/cjs/index.js
var cjs = __webpack_require__(7841);
;// CONCATENATED MODULE: ./src/app/layout.jsx
/* __next_internal_client_entry_do_not_use__ metadata,default auto */ 




const metadata = {
    title: "Contactos",
    description: "Crea, Modifica y Actualiza tus contactos en la web"
};
function RootLayout({ children }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("html", {
        lang: "en",
        className: "sr",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("head", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        href: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css",
                        rel: "stylesheet",
                        integrity: "sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9",
                        crossOrigin: "anonymous"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css",
                        rel: "stylesheet",
                        integrity: "sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==",
                        crossOrigin: "anonymous",
                        referrerPolicy: "no-referrer"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("body", {
                className: (target_path_src_app_layout_jsx_import_Inter_arguments_subsets_latin_variableName_inter_default()).className,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(cjs/* RevealWrapper */.Lz, {
                        className: "load-hidden",
                        scale: 2,
                        origin: "top",
                        delay: 100,
                        duration: 100,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(Navigation, {})
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "p-4",
                        children: children
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("script", {
                        src: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js",
                        integrity: "sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm",
                        crossOrigin: "anonymous"
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 5004:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $$typeof: () => (/* binding */ $$typeof),
/* harmony export */   __esModule: () => (/* binding */ __esModule),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   metadata: () => (/* binding */ e0)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1363);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`C:\Users\Acer\Desktop\Jorge\proyectos\Desarrollo WEb\SistemaDeContactos\contacto\src\app\layout.jsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;

const e0 = proxy["metadata"];


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ }),

/***/ 3881:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85);
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__);
  

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((props) => {
    const imageData = {"type":"image/x-icon","sizes":"16x16"}
    const imageUrl = (0,next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__.fillMetadataSegment)(".", props.params, "favicon.ico")

    return [{
      ...imageData,
      url: imageUrl + "",
    }]
  });

/***/ }),

/***/ 3824:
/***/ (() => {



/***/ })

};
;
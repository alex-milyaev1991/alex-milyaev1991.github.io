function o(i){var e=i.width,t=i.height;if(e<0)throw new Error("Negative width is not allowed for Size");if(t<0)throw new Error("Negative height is not allowed for Size");return{width:e,height:t}}function u(i,e){return i.width===e.width&&i.height===e.height}var d=function(){function i(e){var t=this;this._resolutionListener=function(){return t._onResolutionChanged()},this._resolutionMediaQueryList=null,this._observers=[],this._window=e,this._installResolutionListener()}return i.prototype.dispose=function(){this._uninstallResolutionListener(),this._window=null},Object.defineProperty(i.prototype,"value",{get:function(){return this._window.devicePixelRatio},enumerable:!1,configurable:!0}),i.prototype.subscribe=function(e){var t=this,n={next:e};return this._observers.push(n),{unsubscribe:function(){t._observers=t._observers.filter(function(s){return s!==n})}}},i.prototype._installResolutionListener=function(){if(this._resolutionMediaQueryList!==null)throw new Error("Resolution listener is already installed");var e=this._window.devicePixelRatio;this._resolutionMediaQueryList=this._window.matchMedia("all and (resolution: ".concat(e,"dppx)")),this._resolutionMediaQueryList.addListener(this._resolutionListener)},i.prototype._uninstallResolutionListener=function(){this._resolutionMediaQueryList!==null&&(this._resolutionMediaQueryList.removeListener(this._resolutionListener),this._resolutionMediaQueryList=null)},i.prototype._reinstallResolutionListener=function(){this._uninstallResolutionListener(),this._installResolutionListener()},i.prototype._onResolutionChanged=function(){var e=this;this._observers.forEach(function(t){return t.next(e._window.devicePixelRatio)}),this._reinstallResolutionListener()},i}(),p=function(){function i(e,t,n){var s;this._canvasElement=null,this._bitmapSizeChangedListeners=[],this._suggestedBitmapSize=null,this._suggestedBitmapSizeChangedListeners=[],this._devicePixelRatioObservable=null,this._canvasElementResizeObserver=null,this._canvasElement=e,this._canvasElementClientSize=o({width:this._canvasElement.clientWidth,height:this._canvasElement.clientHeight}),this._transformBitmapSize=t??function(r){return r},this._allowResizeObserver=(s=n==null?void 0:n.allowResizeObserver)===null||s===void 0||s,this._chooseAndInitObserver()}return i.prototype.dispose=function(){var e,t;if(this._canvasElement===null)throw new Error("Object is disposed");(e=this._canvasElementResizeObserver)===null||e===void 0||e.disconnect(),this._canvasElementResizeObserver=null,(t=this._devicePixelRatioObservable)===null||t===void 0||t.dispose(),this._devicePixelRatioObservable=null,this._suggestedBitmapSizeChangedListeners.length=0,this._bitmapSizeChangedListeners.length=0,this._canvasElement=null},Object.defineProperty(i.prototype,"canvasElement",{get:function(){if(this._canvasElement===null)throw new Error("Object is disposed");return this._canvasElement},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"canvasElementClientSize",{get:function(){return this._canvasElementClientSize},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"bitmapSize",{get:function(){return o({width:this.canvasElement.width,height:this.canvasElement.height})},enumerable:!1,configurable:!0}),i.prototype.resizeCanvasElement=function(e){this._canvasElementClientSize=o(e),this.canvasElement.style.width="".concat(this._canvasElementClientSize.width,"px"),this.canvasElement.style.height="".concat(this._canvasElementClientSize.height,"px"),this._invalidateBitmapSize()},i.prototype.subscribeBitmapSizeChanged=function(e){this._bitmapSizeChangedListeners.push(e)},i.prototype.unsubscribeBitmapSizeChanged=function(e){this._bitmapSizeChangedListeners=this._bitmapSizeChangedListeners.filter(function(t){return t!==e})},Object.defineProperty(i.prototype,"suggestedBitmapSize",{get:function(){return this._suggestedBitmapSize},enumerable:!1,configurable:!0}),i.prototype.subscribeSuggestedBitmapSizeChanged=function(e){this._suggestedBitmapSizeChangedListeners.push(e)},i.prototype.unsubscribeSuggestedBitmapSizeChanged=function(e){this._suggestedBitmapSizeChangedListeners=this._suggestedBitmapSizeChangedListeners.filter(function(t){return t!==e})},i.prototype.applySuggestedBitmapSize=function(){if(this._suggestedBitmapSize!==null){var e=this._suggestedBitmapSize;this._suggestedBitmapSize=null,this._resizeBitmap(e),this._emitSuggestedBitmapSizeChanged(e,this._suggestedBitmapSize)}},i.prototype._resizeBitmap=function(e){var t=this.bitmapSize;u(t,e)||(this.canvasElement.width=e.width,this.canvasElement.height=e.height,this._emitBitmapSizeChanged(t,e))},i.prototype._emitBitmapSizeChanged=function(e,t){var n=this;this._bitmapSizeChangedListeners.forEach(function(s){return s.call(n,e,t)})},i.prototype._suggestNewBitmapSize=function(e){var t=this._suggestedBitmapSize,n=o(this._transformBitmapSize(e,this._canvasElementClientSize)),s=u(this.bitmapSize,n)?null:n;t===null&&s===null||t!==null&&s!==null&&u(t,s)||(this._suggestedBitmapSize=s,this._emitSuggestedBitmapSizeChanged(t,s))},i.prototype._emitSuggestedBitmapSizeChanged=function(e,t){var n=this;this._suggestedBitmapSizeChangedListeners.forEach(function(s){return s.call(n,e,t)})},i.prototype._chooseAndInitObserver=function(){var e=this;this._allowResizeObserver?new Promise(function(t){var n=new ResizeObserver(function(s){t(s.every(function(r){return"devicePixelContentBoxSize"in r})),n.disconnect()});n.observe(document.body,{box:"device-pixel-content-box"})}).catch(function(){return!1}).then(function(t){return t?e._initResizeObserver():e._initDevicePixelRatioObservable()}):this._initDevicePixelRatioObservable()},i.prototype._initDevicePixelRatioObservable=function(){var e=this;if(this._canvasElement!==null){var t=c(this._canvasElement);if(t===null)throw new Error("No window is associated with the canvas");this._devicePixelRatioObservable=function(n){return new d(n)}(t),this._devicePixelRatioObservable.subscribe(function(){return e._invalidateBitmapSize()}),this._invalidateBitmapSize()}},i.prototype._invalidateBitmapSize=function(){var e,t;if(this._canvasElement!==null){var n=c(this._canvasElement);if(n!==null){var s=(t=(e=this._devicePixelRatioObservable)===null||e===void 0?void 0:e.value)!==null&&t!==void 0?t:n.devicePixelRatio,r=this._canvasElement.getClientRects(),h=r[0]!==void 0?function(a,l){return o({width:Math.round(a.left*l+a.width*l)-Math.round(a.left*l),height:Math.round(a.top*l+a.height*l)-Math.round(a.top*l)})}(r[0],s):o({width:this._canvasElementClientSize.width*s,height:this._canvasElementClientSize.height*s});this._suggestNewBitmapSize(h)}}},i.prototype._initResizeObserver=function(){var e=this;this._canvasElement!==null&&(this._canvasElementResizeObserver=new ResizeObserver(function(t){var n=t.find(function(h){return h.target===e._canvasElement});if(n&&n.devicePixelContentBoxSize&&n.devicePixelContentBoxSize[0]){var s=n.devicePixelContentBoxSize[0],r=o({width:s.inlineSize,height:s.blockSize});e._suggestNewBitmapSize(r)}}),this._canvasElementResizeObserver.observe(this._canvasElement,{box:"device-pixel-content-box"}))},i}();function _(i,e){if(e.type==="device-pixel-content-box")return new p(i,e.transform,e.options);throw new Error("Unsupported binding target")}function c(i){return i.ownerDocument.defaultView}var v=function(){function i(e,t,n){if(t.width===0||t.height===0)throw new TypeError("Rendering target could only be created on a media with positive width and height");if(this._mediaSize=t,n.width===0||n.height===0)throw new TypeError("Rendering target could only be created using a bitmap with positive integer width and height");this._bitmapSize=n,this._context=e}return i.prototype.useMediaCoordinateSpace=function(e){try{return this._context.save(),this._context.setTransform(1,0,0,1,0,0),this._context.scale(this._horizontalPixelRatio,this._verticalPixelRatio),e({context:this._context,mediaSize:this._mediaSize})}finally{this._context.restore()}},i.prototype.useBitmapCoordinateSpace=function(e){try{return this._context.save(),this._context.setTransform(1,0,0,1,0,0),e({context:this._context,mediaSize:this._mediaSize,bitmapSize:this._bitmapSize,horizontalPixelRatio:this._horizontalPixelRatio,verticalPixelRatio:this._verticalPixelRatio})}finally{this._context.restore()}},Object.defineProperty(i.prototype,"_horizontalPixelRatio",{get:function(){return this._bitmapSize.width/this._mediaSize.width},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"_verticalPixelRatio",{get:function(){return this._bitmapSize.height/this._mediaSize.height},enumerable:!1,configurable:!0}),i}();function g(i,e){var t=i.canvasElementClientSize;if(t.width===0||t.height===0)return null;var n=i.bitmapSize;if(n.width===0||n.height===0)return null;var s=i.canvasElement.getContext("2d",e);return s===null?null:new v(s,t,n)}export{_ as b,u as e,o as s,g as t};
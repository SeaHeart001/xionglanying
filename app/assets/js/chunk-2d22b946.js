(window["webpackJsonp_myapp"]=window["webpackJsonp_myapp"]||[]).push([["chunk-2d22b946"],{f028:function(o,n,t){"use strict";t.r(n);var e=function(){var o=this,n=o.$createElement,t=o._self._c||n;return t("quill-editor",{ref:"myQuillEditor",staticClass:"xxxxxx",attrs:{options:o.editorOption},on:{blur:function(n){return o.onEditorBlur(n)},focus:function(n){return o.onEditorFocus(n)},ready:function(n){return o.onEditorReady(n)}},model:{value:o.content,callback:function(n){o.content=n},expression:"content"}})},i=[],r={name:"systemManage",data:function(){return{content:"<h2>I am Example</h2>",editorOption:{}}},methods:{onEditorBlur:function(o){console.log("editor blur!",o)},onEditorFocus:function(o){console.log("editor focus!",o)},onEditorReady:function(o){console.log("editor ready!",o)}},computed:{editor:function(){return this.$refs.myQuillEditor.quill}},mounted:function(){console.log("this is current quill instance object",this.editor)}},u=r,c=t("2877"),l=Object(c["a"])(u,e,i,!1,null,null,null);n["default"]=l.exports}}]);
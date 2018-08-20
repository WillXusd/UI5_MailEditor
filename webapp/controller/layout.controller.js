sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function(Controller, JSONModel) {
	"use strict";

	return Controller.extend("UI5_MailEditor.controller.layout", {
		onInit: function() {
			this.oRouter = sap.ui.core.UIComponent.getRouterFor(this);
		},
		navigate: function() {
			this.oRouter.navTo("Editor");
		},
		onClear: function(oEvent) {
			this.getView().byId("rbtgCountry").setSelectedIndex(-1);
			this.getView().byId("rbtgBeerInvoice").setSelectedIndex(-1);
			this.getView().byId("rbgtAttachments2").setSelectedIndex(-1);
			this.getView().byId("rbtgDebitCredit").setSelectedIndex(-1);
			this.getView().byId("rbgtCountryCode").setSelectedIndex(-1);
			this.getView().byId("rbgtInvoiceCreditNote").setSelectedIndex(-1);
			this.getView().byId("rbgtLanguage").setSelectedIndex(-1);
			this.getView().byId("rbgtDELanguage").setSelectedIndex(-1);
			this.getView().byId("rbgtAttachments").setSelectedIndex(-1);
			this._setEmptyLayoutModel();

			var oEves = oEvent.getParameters();
	
		},
		_setEmptyLayoutModel: function() {
			var layout = new JSONModel({
				land: ""
			});
			var layoutObject = {
				land1: "",
				spras: "",
				layout: "",
				layoutSD: "",
				bukrs: "",
				priority: "",
				mailfrom: "",
				notification_to: "",
				reply_to: "",
				cc: "",
				bcc: "",
				subject: "",
				add_attach: "",
				body: "",
				addattachname: "",
				attachments: ""
			};
			// var oModel = this.getView().byId("rbtgCountry");

		}

	});

});
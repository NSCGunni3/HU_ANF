sap.ui.define([
	"sap/ui/base/Object"
	], function(UI5Object) {
	"use strict";
	return UI5Object.extend("sap.ui.zewm.HU_ANF.controller.ChangeLgnum", {
		constructor: function(oView) {
			this._oView = oView;
		},

		open : function() {
			var oView = this._oView;
			var oDialog = oView.byId("changeLgnum");

			// create dialog lazily
			if (!oDialog) {
				var oFragmentController = {
					onCloseDialog: function() {
						oDialog.close();
					},
					onSubmitLgnum: function() {
						sap.m.MessageToast.show("{i18n>lgnumChanged}");
						oDialog.close();
					}
				};
				// create dialog via fragment factory
				oDialog = sap.ui.xmlfragment(oView.getId(), "sap.ui.zewm.HU_ANF.view.ChangeLgnum", oFragmentController);
				// connect dialog to the root view of this component (models, lifecycle)
				oView.addDependent(oDialog);
			}
			oDialog.open();
		}
	});
});
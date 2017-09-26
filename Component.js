sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"sap/ui/zewm/HU_ANF/model/models",
	"sap/ui/zewm/HU_ANF/controller/ChangeLgnum"
], function(UIComponent, Device, models, ChangeLgnum) {
	"use strict";

	return UIComponent.extend("sap.ui.zewm.HU_ANF.Component", {

		metadata: {
			manifest: "json"
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function() {
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);

			// set the device model
			this.setModel(models.createDeviceModel(), "device");
			
			this._changeLgnum = new ChangeLgnum(this.getRootControl());
		},
		changeLgnum : function () {
			this._changeLgnum.open();
		}
	});
});
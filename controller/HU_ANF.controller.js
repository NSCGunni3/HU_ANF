sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function(Controller, JSONModel, formatter, Filter, FilterOperator) {
	"use strict";

	return Controller.extend("sap.ui.zewm.HU_ANF.controller.HU_ANF", {
		onInit: function() {
			var oModel = new sap.ui.model.json.JSONModel({
				lgnum: "M840",
				huId: "",
				fauf: "",
				rfid: "",
				nlpla: ""
			});
			this.getView().setModel(oModel);
			this._oPopover = new sap.m.Popover("showLogPopover", {
				placement:"Bottom",
				title:"Hier kommt das Log"
			});
		},
		
		onSearch: function() {
			var oModel = this.getView().getModel();
			var huList = this.getView().getModel("handlingUnit").getProperty("/HandlingUnits");
			var i, gefunden = false;
			
			
			
			if (oModel.getProperty("/huId") !== "" && !gefunden) {
				for (i = 0; i < huList.length; i++) {
					if (huList[0].huId.toString() === oModel.getProperty("/huId").toString()) {
						this.getView().setModel(new sap.ui.model.json.JSONModel(huList[i]), "selHu");
						this.getView().byId("callView").setVisible(true);
						gefunden = true;
					}
				}
			} else if (oModel.getProperty("/fauf") !== "" && !gefunden) {
				for (i = 0; i < huList.length; i++) {
					if (huList[i].fauf.toString() === oModel.getProperty("/fauf").toString()) {
						this.getView().setModel(new sap.ui.model.json.JSONModel(huList[i]), "selHu");
						this.getView().byId("callView").setVisible(true);
						gefunden = true;
					}
				}
			} else if (oModel.getProperty("/rfid") !== "" && !gefunden) {
				for (i = 0; i < huList.length; i++) {
					if (huList[i].rfid.toString() === oModel.getProperty("/rfid").toString()) {
						this.getView().setModel(new sap.ui.model.json.JSONModel(huList[i]), "selHu");
						this.getView().byId("callView").setVisible(true);
						gefunden = true;
					}
				}
			} else {
				sap.m.MessageToast.show("bitte Daten eingeben");
				gefunden = true;
			}
			if (!gefunden) {
				sap.m.MessageToast.show("HU nicht gefunden");
			}
			
		},

		onChangeLgnum: function() {
			this.getOwnerComponent().changeLgnum();
		},
		
		onShowLog : function(oEvent) {
            this._oPopover.openBy(oEvent.getSource());
		}
	});
});
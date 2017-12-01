(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['printer'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return " "
    + ((stack1 = container.invokePartial(partials.code,depth0,{"name":"code","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + " ";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return " "
    + ((stack1 = container.invokePartial(partials.color,depth0,{"name":"color","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + " ";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1;

  return " "
    + ((stack1 = container.invokePartial(partials.quantity,depth0,{"name":"quantity","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + " ";
},"7":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "            <div class=\"Last-Updated\" data-type="
    + alias4(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"type","hash":{},"data":data}) : helper)))
    + " data-color="
    + alias4(((helper = (helper = helpers.color || (depth0 != null ? depth0.color : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"color","hash":{},"data":data}) : helper)))
    + " data-code="
    + alias4(((helper = (helper = helpers.code || (depth0 != null ? depth0.code : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"code","hash":{},"data":data}) : helper)))
    + ">\n                "
    + alias4(((helper = (helper = helpers.lastUpdated || (depth0 != null ? depth0.lastUpdated : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"lastUpdated","hash":{},"data":data}) : helper)))
    + "\n            </div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

<<<<<<< HEAD
  return "<tbody>\r\n    <tr class=\"table-info\" data-min-alert="
    + alias4(((helper = (helper = helpers.minAlert || (depth0 != null ? depth0.minAlert : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"minAlert","hash":{},"data":data}) : helper)))
    + ">\r\n        <td>"
=======
  return "<tbody>\n    <tr class=\"table-info\" data-min-alert="
    + alias4(((helper = (helper = helpers.minAlert || (depth0 != null ? depth0.minAlert : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"minAlert","hash":{},"data":data}) : helper)))
    + ">\n        <td>"
>>>>>>> 173142060109cccdac73f7dc7790b0ce45362d34
    + alias4(((helper = (helper = helpers.brand || (depth0 != null ? depth0.brand : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"brand","hash":{},"data":data}) : helper)))
    + "</td>\n        <td>"
    + alias4(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"type","hash":{},"data":data}) : helper)))
    + "</td>\n        <td>\n            "
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.codes : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n        </td>\n        <td>\n            "
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.colors : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n        </td>\n        <td>\n            "
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.quantities : depth0),{"name":"each","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n        </td>\n        <td>\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.updated : depth0),{"name":"each","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        </td>\n        <td>\n            <div class=\"notes\">\n                "
    + alias4(((helper = (helper = helpers.notes || (depth0 != null ? depth0.notes : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"notes","hash":{},"data":data}) : helper)))
<<<<<<< HEAD
    + "\r\n            </div>\r\n            <div class=\"edit\">\r\n                <button type=\"button\" class=\"edit-notes-button\">\r\n                    <i class=\"fa fa-plus\"></i>Edit</button>\r\n            </div>\r\n        </td>\r\n        <td>\r\n            <div class=\"printer-name\" data-type="
=======
    + "\n            </div>\n            <div class=\"edit\">\n                <button type=\"button\" class=\"edit-notes-button\">\n                    <i class=\"fa fa-plus\"></i>Edit</button>\n            </div>\n        </td>\n        <td>\n            <div class=\"printer-name\" data-type="
>>>>>>> 173142060109cccdac73f7dc7790b0ce45362d34
    + alias4(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"type","hash":{},"data":data}) : helper)))
    + ">\n                "
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
<<<<<<< HEAD
    + "\r\n            </div>\r\n        </td>\r\n        <td>\r\n            <div class=\"location\" data-type="
=======
    + "\n            </div>\n        </td>\n        <td>\n            <div class=\"location\" data-type="
>>>>>>> 173142060109cccdac73f7dc7790b0ce45362d34
    + alias4(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"type","hash":{},"data":data}) : helper)))
    + ">\n                "
    + alias4(((helper = (helper = helpers.location || (depth0 != null ? depth0.location : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"location","hash":{},"data":data}) : helper)))
<<<<<<< HEAD
    + "\r\n            </div>\r\n        </td>\r\n        <td>\r\n            <div class=\"edit-printer\" data-type="
    + alias4(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"type","hash":{},"data":data}) : helper)))
    + " data-brand="
    + alias4(((helper = (helper = helpers.brand || (depth0 != null ? depth0.brand : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"brand","hash":{},"data":data}) : helper)))
    + ">\r\n                <button type=\"button\" class=\"edit-printer-button\">\r\n                    <i class=\"fa fa-plus\"></i>Edit Printer</button>\r\n            </div>\r\n            <div class=\"remove-printer\" data-type="
    + alias4(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"type","hash":{},"data":data}) : helper)))
    + " data-brand="
    + alias4(((helper = (helper = helpers.brand || (depth0 != null ? depth0.brand : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"brand","hash":{},"data":data}) : helper)))
    + ">\r\n                <button type=\"button\" class=\"remove-item\">\r\n                    <i class=\"fa fa-plus\"></i>Remove Printer</button>\r\n            </div>\r\n        </td>\r\n    </tr>\r\n</tbody>";
=======
    + "\n            </div>\n        </td>\n        <td>\n            <div class=\"edit-printer\" data-type="
    + alias4(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"type","hash":{},"data":data}) : helper)))
    + " data-brand="
    + alias4(((helper = (helper = helpers.brand || (depth0 != null ? depth0.brand : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"brand","hash":{},"data":data}) : helper)))
    + ">\n                <button type=\"button\" class=\"edit-printer-button\">\n                    <i class=\"fa fa-plus\"></i>Edit Printer</button>\n            </div>\n            <div class=\"remove-printer\" data-type="
    + alias4(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"type","hash":{},"data":data}) : helper)))
    + " data-brand="
    + alias4(((helper = (helper = helpers.brand || (depth0 != null ? depth0.brand : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"brand","hash":{},"data":data}) : helper)))
    + ">\n                <button type=\"button\" class=\"remove-item\">\n                    <i class=\"fa fa-plus\"></i>Remove Printer</button>\n            </div>\n        </td>\n    </tr>\n</tbody>";
>>>>>>> 173142060109cccdac73f7dc7790b0ce45362d34
},"usePartial":true,"useData":true});
})();
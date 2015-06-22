/**
 * Created by seven on 15/6/21.
 */
var util = require('./util');
var EventEmitter = require('eventemitter3');

function DomActor(options) {
    if (!(this instanceof DomActor)) return new DomActor(options);
    EventEmitter.call(this);

    var self = this;
    this._conf = util.config

    options = util.extend({
        types: ['img[' + this._conf.kitTag + ']']
    }, options);

    this._options = options;
}

util.inherits(DomActor, EventEmitter);

DomActor.prototype.init = function () {
    var self = this,
        els = document.querySelectorAll(this._options.types.join(',')),
        dlList = [];

    for (var i = 0; i < els.length; ++i) {
        var el = els[i],
            url = el.getAttribute(this._conf.kitTag);

        el.src = url;
    }
};


module.exports = DomActor;
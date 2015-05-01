webvn.module('anim', function () {
    "use strict";

    var exports = {};

    var ease = {};

    ease.linear = function(x, t, b, c, d) {
        t /= d;
        return c*t + b;
    };

    ease.easeInQuad = function (x, t, b, c, d) {
        return c*(t/=d)*t + b;
    };

    ease.easeOutQuad = function (x, t, b, c, d) {
        return -c *(t/=d)*(t-2) + b;
    };

    ease.easeInOutQuad = function (x, t, b, c, d) {
        if ((t/=d/2) < 1) return c/2*t*t + b;
        return -c/2 * ((--t)*(t-2) - 1) + b;
    };

    ease.easeInCubic = function (x, t, b, c, d) {
        return c*(t/=d)*t*t + b;
    };

    ease.easeOutCubic = function (x, t, b, c, d) {
        return c*((t=t/d-1)*t*t + 1) + b;
    };

    ease.easeInOutCubic = function (x, t, b, c, d) {
        if ((t/=d/2) < 1) return c/2*t*t*t + b;
        return c/2*((t-=2)*t*t + 2) + b;
    };

    ease.easeInQuart = function (x, t, b, c, d) {
        return c*(t/=d)*t*t*t + b;
    };

    ease.easeOutQuart = function (x, t, b, c, d) {
        return -c * ((t=t/d-1)*t*t*t - 1) + b;
    };

    ease.easeInOutQuart = function (x, t, b, c, d) {
        if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
        return -c/2 * ((t-=2)*t*t*t - 2) + b;
    };

    ease.easeInQuint = function (x, t, b, c, d) {
        return c*(t/=d)*t*t*t*t + b;
    };

    ease.easeOutQuint = function (x, t, b, c, d) {
        return c*((t=t/d-1)*t*t*t*t + 1) + b;
    };

    ease.easeInOutQuint = function (x, t, b, c, d) {
        if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
        return c/2*((t-=2)*t*t*t*t + 2) + b;
    };

    ease.easeInSine = function (x, t, b, c, d) {
        return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
    };

    ease.easeOutSine = function (x, t, b, c, d) {
        return c * Math.sin(t / d * (Math.PI / 2)) + b;
    };

    ease.easeInOutSine = function (x, t, b, c, d) {
        return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
    };

    ease.easeInExpo = function (x, t, b, c, d) {
        return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
    };

    ease.easeOutExpo = function (x, t, b, c, d) {
        return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
    };

    ease.easeInOutExpo = function (x, t, b, c, d) {
        if (t==0) return b;
        if (t==d) return b+c;
        if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
        return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
    };

    ease.easeInCirc = function (x, t, b, c, d) {
        return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
    };

    ease.easeOutCirc = function (x, t, b, c, d) {
        return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
    };

    ease.easeInOutCirc = function (x, t, b, c, d) {
        if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
        return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
    };

    ease.easeInElastic = function (x, t, b, c, d) {
        var s;
        s=1.70158;var p=0;var a=c;
        if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
        if (a < Math.abs(c)) { a=c; s=p/4; }
        else s = p/(2*Math.PI) * Math.asin (c/a);
        return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
    };

    ease.easeOutElastic = function (x, t, b, c, d) {
        var s;
        s=1.70158;var p=0;var a=c;
        if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
        if (a < Math.abs(c)) { a=c; s=p/4; }
        else s = p/(2*Math.PI) * Math.asin (c/a);
        return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
    };

    ease.easeInOutElastic = function (x, t, b, c, d) {
        var s;
        s=1.70158;var p=0;var a=c;
        if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
        if (a < Math.abs(c)) { a=c; s=p/4; }
        else s = p/(2*Math.PI) * Math.asin (c/a);
        if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
        return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
    };

    ease.easeInBack = function (x, t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        return c*(t/=d)*t*((s+1)*t - s) + b;
    };

    ease.easeOutBack = function (x, t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
    };

    ease.easeInOutBack = function (x, t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
        return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
    };

    ease.easeInBounce = function (x, t, b, c, d) {
        return c - anim.ease.easeOutBounce (x, d-t, 0, c, d) + b;
    };

    ease.easeOutBounce = function (x, t, b, c, d) {
        if ((t/=d) < (1/2.75)) {
            return c*(7.5625*t*t) + b;
        } else if (t < (2/2.75)) {
            return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
        } else if (t < (2.5/2.75)) {
            return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
        } else {
            return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
        }
    };

    ease.easeInOutBounce = function (x, t, b, c, d) {
        if (t < d/2) return anim.ease.easeInBounce (x, t*2, 0, c, d) * .5 + b;
        return anim.ease.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
    };

    exports.ease = ease;

    return exports;
});